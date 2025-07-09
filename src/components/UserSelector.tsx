import React from 'react';
import { User } from 'lucide-react';
import { User as UserType } from '../types';

interface UserSelectorProps {
  users: UserType[];
  selectedUserId: number;
  onUserSelect: (userId: number) => void;
}

export const UserSelector: React.FC<UserSelectorProps> = ({
  users,
  selectedUserId,
  onUserSelect
}) => {
  return (
    <div className="bg-netflix-gray rounded-lg p-6 mb-8">
      <h2 className="text-white text-xl font-bold mb-4 flex items-center">
        <User className="w-6 h-6 mr-2" />
        Select User Profile
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => onUserSelect(user.id)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedUserId === user.id
                ? 'border-netflix-red bg-netflix-red bg-opacity-20'
                : 'border-gray-600 hover:border-gray-400'
            }`}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {user.name.charAt(0)}
                </span>
              </div>
              <p className="text-white font-medium">{user.name}</p>
              <div className="flex flex-wrap justify-center gap-1 mt-2">
                {user.preferences.slice(0, 2).map((pref) => (
                  <span
                    key={pref}
                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                  >
                    {pref}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};