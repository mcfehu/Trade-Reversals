import React from 'react';
import { TrendingUp, Award } from 'lucide-react';

interface StoryCardProps {
  name: string;
  achievement: string;
  story: string;
  stats: {
    monthlyReturn: string;
    consistency: string;
  };
  image: string;
}

export default function StoryCard({ name, achievement, story, stats, image }: StoryCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:transform hover:scale-105 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full border-2 border-blue-400"
        />
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
          <p className="text-blue-300 flex items-center">
            <Award className="h-4 w-4 mr-1" />
            {achievement}
          </p>
        </div>
      </div>
      
      <p className="mt-4 text-blue-100">{story}</p>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white/5 rounded-lg p-3">
          <div className="flex items-center text-blue-300 text-sm mb-1">
            <TrendingUp className="h-4 w-4 mr-1" />
            Monthly Return
          </div>
          <div className="text-2xl font-bold text-blue-400">{stats.monthlyReturn}</div>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <div className="flex items-center text-blue-300 text-sm mb-1">
            <Award className="h-4 w-4 mr-1" />
            Consistency
          </div>
          <div className="text-2xl font-bold text-blue-400">{stats.consistency}</div>
        </div>
      </div>
    </div>
  );
}