import React from 'react';
import GradientBackground from './background/GradientBackground';
import HeroHeading from './hero/HeroHeading';
import SignalCard from './signals/SignalCard';
import TrustIndicators from './trust/TrustIndicators';
import GlowingButton from './ui/GlowingButton';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      <GradientBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <HeroHeading />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <p className="text-xl text-blue-100">
              Real-time trading signals for gold and Nasdaq futures. Trusted, tested, and designed for serious traders.
            </p>
            <div className="animate-slide-in animation-delay-200">
              <div className="flex items-center gap-4">
                <a 
                  href="https://t.me/+Lpdf18Y6A3xjYTA8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <GlowingButton variant="secondary" size="large">
                    Join Free Channel
                  </GlowingButton>
                </a>
                <span className="text-blue-200">Get started with our public signals</span>
              </div>
            </div>
            <TrustIndicators />
          </div>
          
          <div className="lg:w-1/2 animate-float">
            <SignalCard />
          </div>
        </div>
      </div>
    </div>
  );
}