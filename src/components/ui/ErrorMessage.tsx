import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg">
      <AlertCircle className="h-5 w-5" />
      <span>{message}</span>
    </div>
  );
}