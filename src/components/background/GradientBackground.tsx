import React from 'react';

export default function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 animate-gradient" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-200" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-400" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-20" />
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/30 to-indigo-900/30" />
    </div>
  );
}