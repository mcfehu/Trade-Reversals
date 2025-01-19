import React from 'react';
import GlowingButton from './ui/GlowingButton';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
      <a 
        href="https://t.me/+Lpdf18Y6A3xjYTA8" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <GlowingButton 
          variant="primary" 
          size="large"
          className="shadow-xl"
        >
          Join Premium Signals
        </GlowingButton>
      </a>
    </div>
  );
}