import React from 'react';
import { Brain, Users, Film, Zap } from 'lucide-react';

export type AlgorithmType = 'user-based' | 'item-based' | 'hybrid';

interface AlgorithmSelectorProps {
  selectedAlgorithm: AlgorithmType;
  onAlgorithmSelect: (algorithm: AlgorithmType) => void;
}

export const AlgorithmSelector: React.FC<AlgorithmSelectorProps> = ({
  selectedAlgorithm,
  onAlgorithmSelect
}) => {
  const algorithms = [
    {
      id: 'user-based' as AlgorithmType,
      name: 'User-Based',
      icon: Users,
      description: 'Find users with similar taste and recommend their favorites',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'item-based' as AlgorithmType,
      name: 'Item-Based',
      icon: Film,
      description: 'Recommend movies similar to ones you already liked',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'hybrid' as AlgorithmType,
      name: 'Hybrid',
      icon: Zap,
      description: 'Combines both approaches for better recommendations',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="bg-netflix-gray rounded-lg p-6 mb-8">
      <h2 className="text-white text-xl font-bold mb-4 flex items-center">
        <Brain className="w-6 h-6 mr-2" />
        Recommendation Algorithm
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {algorithms.map((algorithm) => {
          const Icon = algorithm.icon;
          return (
            <button
              key={algorithm.id}
              onClick={() => onAlgorithmSelect(algorithm.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedAlgorithm === algorithm.id
                  ? 'border-netflix-red bg-netflix-red bg-opacity-20'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${algorithm.color} rounded-lg flex items-center justify-center mr-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold">{algorithm.name}</h3>
              </div>
              <p className="text-gray-400 text-sm">{algorithm.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};