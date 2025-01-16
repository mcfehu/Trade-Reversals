import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-card p-6',
        hover && 'transition-transform duration-200 hover:scale-102',
        className
      )}
    >
      {children}
    </div>
  );
}