import React from 'react';
import { X } from 'lucide-react';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

export default function PreviewModal({ isOpen, onClose, images }: PreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/80" onClick={onClose} />
      
      {/* Modal content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-blue-950 rounded-xl max-w-4xl w-full mx-auto">
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="text-blue-200 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="p-4 space-y-4">
            {images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Preview page ${index + 1}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}