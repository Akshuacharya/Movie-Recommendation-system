import React from 'react';
import { Recommendation } from '../types';
import { MovieCard } from './MovieCard';
import { Sparkles } from 'lucide-react';

interface RecommendationGridProps {
  recommendations: Recommendation[];
  title: string;
}

export const RecommendationGrid: React.FC<RecommendationGridProps> = ({
  recommendations,
  title
}) => {
  if (recommendations.length === 0) {
    return (
      <div className="bg-netflix-gray rounded-lg p-8 text-center">
        <Sparkles className="w-12 h-12 text-gray-500 mx-auto mb-4" />
        <h3 className="text-white text-xl font-bold mb-2">No Recommendations Yet</h3>
        <p className="text-gray-400">
          Select a user profile to see personalized movie recommendations
        </p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
        <Sparkles className="w-7 h-7 mr-2 text-netflix-red" />
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recommendations.map((recommendation) => (
          <MovieCard
            key={recommendation.movie.id}
            movie={recommendation.movie}
            score={recommendation.score}
            reason={recommendation.reason}
          />
        ))}
      </div>
    </div>
  );
};