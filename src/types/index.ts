export interface Movie {
  id: number;
  title: string;
  genres: string[];
  year: number;
  rating: number;
  poster: string;
  description: string;
}

export interface Rating {
  userId: number;
  movieId: number;
  rating: number;
}

export interface User {
  id: number;
  name: string;
  preferences: string[];
}

export interface Recommendation {
  movie: Movie;
  score: number;
  reason: string;
}