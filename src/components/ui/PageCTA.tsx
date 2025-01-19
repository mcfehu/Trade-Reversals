import React from 'react';
import GlowingButton from './GlowingButton';

interface PageCTAProps {
  title: string;
  description: string;
  buttonText: string;
  variant?: 'primary' | 'secondary';
}

export default function PageCTA({ title, description, buttonText, variant = 'primary' }: PageCTAProps) {
  return (
    <div className="text-center mt-16 mb-8 animate-fade-in">
      <p className="text-xl text-blue-200 mb-6">{description}</p>
      <a 
        href="https://t.me/+Lpdf18Y6A3xjYTA8" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <GlowingButton variant={variant} size="large">
          {buttonText}
        </GlowingButton>
      </a>
    </div>
  );
}