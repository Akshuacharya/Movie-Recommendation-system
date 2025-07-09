import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { UserSelector } from './components/UserSelector';
import { AlgorithmSelector, AlgorithmType } from './components/AlgorithmSelector';
import { RecommendationGrid } from './components/RecommendationGrid';
import { StatsPanel } from './components/StatsPanel';
import { CollaborativeFilteringEngine } from './algorithms/collaborativeFiltering';
import { movies, ratings, users } from './data/movies';
import './index.css';

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number>(1);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmType>('hybrid');

  const engine = useMemo(() => {
    return new CollaborativeFilteringEngine(ratings, movies);
  }, []);

  const recommendations = useMemo(() => {
    if (!selectedUserId) return [];

    switch (selectedAlgorithm) {
      case 'user-based':
        return engine.getUserBasedRecommendations(selectedUserId, 8);
      case 'item-based':
        return engine.getItemBasedRecommendations(selectedUserId, 8);
      case 'hybrid':
        return engine.getHybridRecommendations(selectedUserId, 8);
      default:
        return [];
    }
  }, [selectedUserId, selectedAlgorithm, engine]);

  const getAlgorithmTitle = () => {
    const user = users.find(u => u.id === selectedUserId);
    const userName = user ? user.name : 'User';
    
    switch (selectedAlgorithm) {
      case 'user-based':
        return `User-Based Recommendations for ${userName}`;
      case 'item-based':
        return `Item-Based Recommendations for ${userName}`;
      case 'hybrid':
        return `Hybrid Recommendations for ${userName}`;
      default:
        return `Recommendations for ${userName}`;
    }
  };

  return (
    <div className="min-h-screen bg-netflix-black font-netflix">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            AI-Powered Movie Recommendations
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Experience Netflix-style personalized movie recommendations powered by advanced 
            collaborative filtering algorithms. Our system analyzes user preferences and 
            movie similarities to suggest films you'll love.
          </p>
        </div>

        <UserSelector
          users={users}
          selectedUserId={selectedUserId}
          onUserSelect={setSelectedUserId}
        />

        <AlgorithmSelector
          selectedAlgorithm={selectedAlgorithm}
          onAlgorithmSelect={setSelectedAlgorithm}
        />

        <StatsPanel
          ratings={ratings}
          movies={movies}
          selectedUserId={selectedUserId}
        />

        <RecommendationGrid
          recommendations={recommendations}
          title={getAlgorithmTitle()}
        />

        <div className="bg-netflix-gray rounded-lg p-6 mt-8">
          <h2 className="text-white text-xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">User-Based Filtering</h3>
              <p className="text-sm">
                Finds users with similar movie preferences using cosine similarity, 
                then recommends movies that similar users enjoyed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Item-Based Filtering</h3>
              <p className="text-sm">
                Analyzes movie similarities based on user ratings patterns, 
                recommending films similar to ones you've already liked.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Hybrid Approach</h3>
              <p className="text-sm">
                Combines both methods with weighted scoring to provide more 
                accurate and diverse recommendations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;