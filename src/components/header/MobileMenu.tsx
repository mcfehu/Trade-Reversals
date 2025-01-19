import React from 'react';
import { X, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthClick: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { user } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      <div className="fixed inset-0 z-50">
        {/* Dark overlay */}
        <div className="fixed inset-0 bg-black/80" onClick={onClose} />
        
        {/* Menu panel */}
        <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-blue-950 shadow-xl">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold text-white">Menu</h2>
            <button
              type="button"
              className="text-blue-200 hover:text-white"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="p-6 space-y-1">
            <Link
              to="/edge"
              className="block text-lg text-blue-200 hover:text-white py-3 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
              onClick={onClose}
            >
              Our Edge
            </Link>
            <Link
              to="/faq"
              className="block text-lg text-blue-200 hover:text-white py-3 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
              onClick={onClose}
            >
              How-To
            </Link>
            <Link
              to="/blog"
              className="block text-lg text-blue-200 hover:text-white py-3 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
              onClick={onClose}
            >
              Blog
            </Link>
            <Link
              to="/stats"
              className="block text-lg text-blue-200 hover:text-white py-3 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
              onClick={onClose}
            >
              Stats
            </Link>
            <Link
              to="/stories"
              className="block text-lg text-blue-200 hover:text-white py-3 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
              onClick={onClose}
            >
              Stories
            </Link>
            <Link
              to="/ebook"
              className="block text-lg text-blue-200 hover:text-white py-3 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
              onClick={onClose}
            >
              Ebook
            </Link>
            
            <div className="pt-4 mt-4 border-t border-white/10">
              {user ? (
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-lg text-blue-200 hover:text-white py-3 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
                  onClick={onClose}
                >
                  Dashboard
                </Link>
              ) : (
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 text-lg text-blue-200 hover:text-white py-3 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors w-full text-left"
                >
                  <LogIn className="h-5 w-5" />
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}