import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

export default function FeaturedTestimonial() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16 border border-white/10">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="David Chen"
          className="w-24 h-24 rounded-full border-2 border-blue-400"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <blockquote className="text-xl text-blue-100 mb-4">
            "Trade Reversals completely transformed my approach to trading. Their signals are incredibly accurate, and the risk management guidance helped me achieve consistent profitability for the first time in my trading career."
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-white">David Chen</div>
              <div className="text-blue-300">Professional Trader</div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-green-400">
                <TrendingUp className="h-4 w-4" />
                <span className="font-semibold">+127%</span>
              </div>
              <div className="text-sm text-blue-300">Annual Return</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}