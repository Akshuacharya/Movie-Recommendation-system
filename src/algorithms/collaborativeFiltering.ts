import { Movie, Rating, Recommendation } from '../types';
import { cosineSimilarity, pearsonCorrelation, createUserItemMatrix } from '../utils/similarity';

export class CollaborativeFilteringEngine {
  private ratings: Rating[];
  private movies: Movie[];
  private userIds: number[];
  private movieIds: number[];
  private userItemMatrix: number[][];

  constructor(ratings: Rating[], movies: Movie[]) {
    this.ratings = ratings;
    this.movies = movies;
    this.userIds = [...new Set(ratings.map(r => r.userId))];
    this.movieIds = [...new Set(ratings.map(r => r.movieId))];
    this.userItemMatrix = createUserItemMatrix(ratings, this.userIds, this.movieIds);
  }

  // User-based collaborative filtering
  getUserBasedRecommendations(targetUserId: number, topN: number = 5): Recommendation[] {
    const targetUserIndex = this.userIds.indexOf(targetUserId);
    if (targetUserIndex === -1) {
      return [];
    }

    const targetUserRatings = this.userItemMatrix[targetUserIndex];
    const similarities: { userId: number; similarity: number }[] = [];

    // Calculate similarity with all other users
    for (let i = 0; i < this.userIds.length; i++) {
      if (i !== targetUserIndex) {
        const otherUserRatings = this.userItemMatrix[i];
        const similarity = cosineSimilarity(targetUserRatings, otherUserRatings);
        
        if (similarity > 0) {
          similarities.push({
            userId: this.userIds[i],
            similarity
          });
        }
      }
    }

    // Sort by similarity (descending)
    similarities.sort((a, b) => b.similarity - a.similarity);

    // Get recommendations from similar users
    const recommendations: Map<number, { score: number; count: number }> = new Map();
    const targetUserRatedMovies = new Set(
      this.ratings.filter(r => r.userId === targetUserId).map(r => r.movieId)
    );

    // Consider top 3 most similar users
    const topSimilarUsers = similarities.slice(0, 3);
    
    for (const { userId, similarity } of topSimilarUsers) {
      const userRatings = this.ratings.filter(r => r.userId === userId && r.rating >= 4);
      
      for (const rating of userRatings) {
        if (!targetUserRatedMovies.has(rating.movieId)) {
          const current = recommendations.get(rating.movieId) || { score: 0, count: 0 };
          recommendations.set(rating.movieId, {
            score: current.score + (rating.rating * similarity),
            count: current.count + 1
          });
        }
      }
    }

    // Convert to recommendation format and sort
    const result: Recommendation[] = [];
    for (const [movieId, { score, count }] of recommendations) {
      const movie = this.movies.find(m => m.id === movieId);
      if (movie) {
        result.push({
          movie,
          score: score / count,
          reason: `Recommended by users with similar taste`
        });
      }
    }

    return result
      .sort((a, b) => b.score - a.score)
      .slice(0, topN);
  }

  // Item-based collaborative filtering
  getItemBasedRecommendations(targetUserId: number, topN: number = 5): Recommendation[] {
    const userRatings = this.ratings.filter(r => r.userId === targetUserId);
    if (userRatings.length === 0) {
      return [];
    }

    const recommendations: Map<number, { score: number; count: number }> = new Map();
    const userRatedMovies = new Set(userRatings.map(r => r.movieId));

    // For each movie the user has rated highly (4+)
    const highRatedMovies = userRatings.filter(r => r.rating >= 4);
    
    for (const userRating of highRatedMovies) {
      const similarMovies = this.findSimilarMovies(userRating.movieId, 5);
      
      for (const { movieId, similarity } of similarMovies) {
        if (!userRatedMovies.has(movieId)) {
          const current = recommendations.get(movieId) || { score: 0, count: 0 };
          recommendations.set(movieId, {
            score: current.score + (userRating.rating * similarity),
            count: current.count + 1
          });
        }
      }
    }

    // Convert to recommendation format
    const result: Recommendation[] = [];
    for (const [movieId, { score, count }] of recommendations) {
      const movie = this.movies.find(m => m.id === movieId);
      if (movie) {
        const baseMovie = this.movies.find(m => 
          highRatedMovies.some(r => r.movieId === m.id)
        );
        result.push({
          movie,
          score: score / count,
          reason: `Similar to movies you liked`
        });
      }
    }

    return result
      .sort((a, b) => b.score - a.score)
      .slice(0, topN);
  }

  private findSimilarMovies(targetMovieId: number, topN: number): { movieId: number; similarity: number }[] {
    const targetMovieIndex = this.movieIds.indexOf(targetMovieId);
    if (targetMovieIndex === -1) {
      return [];
    }

    // Get ratings for target movie across all users
    const targetMovieRatings = this.userItemMatrix.map(userRatings => userRatings[targetMovieIndex]);
    const similarities: { movieId: number; similarity: number }[] = [];

    // Calculate similarity with all other movies
    for (let i = 0; i < this.movieIds.length; i++) {
      if (i !== targetMovieIndex) {
        const otherMovieRatings = this.userItemMatrix.map(userRatings => userRatings[i]);
        const similarity = cosineSimilarity(targetMovieRatings, otherMovieRatings);
        
        if (similarity > 0) {
          similarities.push({
            movieId: this.movieIds[i],
            similarity
          });
        }
      }
    }

    return similarities
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topN);
  }

  // Hybrid approach combining both methods
  getHybridRecommendations(targetUserId: number, topN: number = 5): Recommendation[] {
    const userBased = this.getUserBasedRecommendations(targetUserId, topN);
    const itemBased = this.getItemBasedRecommendations(targetUserId, topN);

    // Combine and weight the recommendations
    const combined: Map<number, Recommendation> = new Map();

    // Add user-based recommendations with higher weight
    for (const rec of userBased) {
      combined.set(rec.movie.id, {
        ...rec,
        score: rec.score * 0.6,
        reason: 'Users with similar taste also liked this'
      });
    }

    // Add item-based recommendations
    for (const rec of itemBased) {
      const existing = combined.get(rec.movie.id);
      if (existing) {
        // Boost score if recommended by both methods
        existing.score = existing.score + (rec.score * 0.4);
        existing.reason = 'Recommended by multiple algorithms';
      } else {
        combined.set(rec.movie.id, {
          ...rec,
          score: rec.score * 0.4,
          reason: 'Similar to movies you enjoyed'
        });
      }
    }

    return Array.from(combined.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, topN);
  }
}