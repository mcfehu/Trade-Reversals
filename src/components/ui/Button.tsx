import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105',
        'text-white text-shadow shadow-lg',
        {
          'bg-[#00C853] hover:bg-[#00B848] hover:shadow-[0_0_15px_rgba(0,200,83,0.3)]': variant === 'primary',
          'bg-[#FFD700] hover:bg-[#FFC800] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]': variant === 'secondary',
          'px-6 py-2.5': size === 'default',
          'px-8 py-3': size === 'large',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}