import React from 'react';
import { Star, TrendingUp } from 'lucide-react';
import { Testimonial } from '../../types';

export default function TestimonialCard({ name, role, content, avatar, metrics }: Testimonial) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center gap-4 mb-4">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full border border-blue-400"
          />
        )}
        <div>
          <div className="font-medium text-white">{name}</div>
          <div className="text-sm text-blue-300">{role}</div>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className="h-4 w-4 text-yellow-400" 
            fill="currentColor"
          />
        ))}
      </div>
      
      <p className="text-blue-100 mb-4">{content}</p>
      
      {metrics && (
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="text-sm text-blue-300">{metrics.label}</div>
          <div className="flex items-center gap-1 text-green-400">
            <TrendingUp className="h-4 w-4" />
            <span className="font-medium">{metrics.value}</span>
          </div>
        </div>
      )}
    </div>
  );
}