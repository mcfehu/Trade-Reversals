import React from 'react';
import { LineChart, Clock, BarChart3, Zap, Shield, Target } from 'lucide-react';
import Section from './layout/Section';

const features = [/* ... existing features array ... */];

export default function Features() {
  return (
    <Section id="features" className="bg-gradient-to-b from-blue-950 to-blue-900">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl font-bold text-white">
          Professional Trading Suite
        </h2>
        <p className="mt-4 text-xl text-blue-200">
          Everything you need to trade with confidence
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-white/10 animate-scale-in`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <feature.icon className="h-12 w-12 text-blue-400 mb-4 animate-float" />
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-blue-200 mb-4">
              {feature.description}
            </p>
            <div className="border-t border-white/10 pt-4">
              <div className="text-2xl font-bold text-blue-400 animate-pulse-slow">
                {feature.stat}
              </div>
              <div className="text-sm text-blue-300">
                {feature.statLabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}