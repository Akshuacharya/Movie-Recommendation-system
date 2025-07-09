import React from 'react';
import { Film, Github, Code } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-netflix-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Film className="w-8 h-8 text-netflix-red mr-3" />
            <h1 className="text-white text-2xl font-bold">MovieRec</h1>
            <span className="ml-3 bg-netflix-red text-white px-2 py-1 rounded text-sm font-medium">
              AI Powered
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6 text-gray-300">
              <span className="flex items-center">
                <Code className="w-4 h-4 mr-1" />
                Collaborative Filtering
              </span>
              <span className="flex items-center">
                <Github className="w-4 h-4 mr-1" />
                Machine Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};