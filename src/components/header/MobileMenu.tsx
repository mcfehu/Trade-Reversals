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
        <div className="fixed inset-0 bg-black/50" onClick={onClose} />
        <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-white">Menu</h2>
            <button
              type="button"
              className="text-blue-200 hover:text-white"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            <Link
              to="/edge"
              className="block text-blue-200 hover:text-white"
              onClick={onClose}
            >
              Our Edge
            </Link>
            <Link
              to="/faq"
              className="block text-blue-200 hover:text-white"
              onClick={onClose}
            >
              How-To
            </Link>
            <Link
              to="/blog"
              className="block text-blue-200 hover:text-white"
              onClick={onClose}
            >
              Blog
            </Link>
            <Link
              to="/stats"
              className="block text-blue-200 hover:text-white"
              onClick={onClose}
            >
              Stats
            </Link>
            <Link
              to="/stories"
              className="block text-blue-200 hover:text-white"
              onClick={onClose}
            >
              Stories
            </Link>
            <Link
              to="/ebook"
              className="block text-blue-200 hover:text-white"
              onClick={onClose}
            >
              Ebook
            </Link>
            {user ? (
              <Link
                to="/dashboard"
                className="block text-blue-200 hover:text-white"
                onClick={onClose}
              >
                Dashboard
              </Link>
            ) : (
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-blue-200 hover:text-white"
              >
                <LogIn className="h-5 w-5" />
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}