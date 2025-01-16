import React from 'react';
import { cn } from '../../utils/cn';

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
}

export default function GlowingButton({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className,
  ...props 
}: GlowingButtonProps) {
  return (
    <button
      className={cn(
        'relative font-semibold rounded-lg transition-all duration-300 transform hover:scale-105',
        'text-white text-shadow',
        {
          'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500': variant === 'primary',
          'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500': variant === 'secondary',
          'px-6 py-2.5': size === 'default',
          'px-8 py-3': size === 'large',
        },
        'before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r',
        {
          'before:from-blue-600/50 before:to-indigo-600/50': variant === 'primary',
          'before:from-amber-500/50 before:to-amber-600/50': variant === 'secondary',
        },
        'before:animate-pulse-slow before:blur-xl',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}