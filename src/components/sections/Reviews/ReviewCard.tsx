import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export default function ReviewCard({ name, role, content, rating, avatar }: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full mr-4"
          />
        )}
        <div>
          <div className="font-medium text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
            fill={i < rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}