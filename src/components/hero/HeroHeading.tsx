import React from 'react';
import { LineChart } from 'lucide-react';

export default function HeroHeading() {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center space-x-2 text-white/80 mb-6">
        <LineChart className="h-5 w-5" />
        <span className="text-sm font-medium">Trade Reversals</span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
        Unlock the Edge You Need to Dominate the Markets
      </h1>
      <p className="text-xl text-blue-100 mb-8">
        Proven Reversal Strategies | Real-Time Signals | Professional Tools
      </p>
    </div>
  );
}