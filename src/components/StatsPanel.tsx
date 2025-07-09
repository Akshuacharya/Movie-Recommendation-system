import React from 'react';
import { BarChart3, Users, Film, Star } from 'lucide-react';
import { Rating, Movie } from '../types';

interface StatsPanelProps {
  ratings: Rating[];
  movies: Movie[];
  selectedUserId: number;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({
  ratings,
  movies,
  selectedUserId
}) => {
  const userRatings = ratings.filter(r => r.userId === selectedUserId);
  const avgRating = userRatings.length > 0 
    ? userRatings.reduce((sum, r) => sum + r.rating, 0) / userRatings.length 
    : 0;
  
  const genreStats = userRatings.reduce((acc, rating) => {
    const movie = movies.find(m => m.id === rating.movieId);
    if (movie) {
      movie.genres.forEach(genre => {
        acc[genre] = (acc[genre] || 0) + 1;
      });
    }
    return acc;
  }, {} as Record<string, number>);

  const topGenres = Object.entries(genreStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);

  const stats = [
    {
      icon: Film,
      label: 'Movies Rated',
      value: userRatings.length,
      color: 'text-blue-400'
    },
    {
      icon: Star,
      label: 'Avg Rating',
      value: avgRating.toFixed(1),
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      label: 'Total Users',
      value: new Set(ratings.map(r => r.userId)).size,
      color: 'text-green-400'
    },
    {
      icon: BarChart3,
      label: 'Total Movies',
      value: movies.length,
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="bg-netflix-gray rounded-lg p-6 mb-8">
      <h2 className="text-white text-xl font-bold mb-4 flex items-center">
        <BarChart3 className="w-6 h-6 mr-2" />
        User Statistics
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="text-center">
              <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {topGenres.length > 0 && (
        <div>
          <h3 className="text-white font-semibold mb-3">Favorite Genres</h3>
          <div className="flex flex-wrap gap-2">
            {topGenres.map(([genre, count]) => (
              <span
                key={genre}
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {genre}
                <span className="ml-2 bg-gray-600 text-white px-2 py-0.5 rounded-full text-xs">
                  {count}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};