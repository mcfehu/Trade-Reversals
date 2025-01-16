import React, { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

interface CountUpValueProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export default function CountUpValue({
  value,
  duration = 2000,
  className,
  prefix = '',
  suffix = ''
}: CountUpValueProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endValue = value;

    const updateValue = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setDisplayValue(Math.floor(endValue * progress));

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  }, [value, duration]);

  return (
    <span className={cn('animate-count-up', className)}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}