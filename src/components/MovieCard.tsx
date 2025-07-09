import React from 'react';
import { Star, Calendar } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  score?: number;
  reason?: string;
  onClick?: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, score, reason, onClick }) => {
  return (
    <div 
      className="bg-netflix-gray rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 rounded-full px-2 py-1 flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-white text-sm font-medium">{movie.rating}</span>
        </div>
        {score && (
          <div className="absolute top-2 left-2 bg-netflix-red rounded-full px-2 py-1">
            <span className="text-white text-sm font-bold">{Math.round(score * 20)}% Match</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-1">{movie.title}</h3>
        
        <div className="flex items-center text-gray-400 text-sm mb-2">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{movie.year}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {movie.genres.map((genre) => (
            <span
              key={genre}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
            >
              {genre}
            </span>
          ))}
        </div>
        
        <p className="text-gray-300 text-sm line-clamp-3 mb-3">
          {movie.description}
        </p>
        
        {reason && (
          <div className="bg-gray-800 rounded p-2">
            <p className="text-gray-400 text-xs italic">{reason}</p>
          </div>
        )}
      </div>
    </div>
  );
};