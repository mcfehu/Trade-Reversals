import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Navigation() {
  const { user } = useAuth();

  const navigation = [
    { name: 'Our Edge', href: '/edge' },
    { name: 'How-To', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Stats', href: '/stats' },
    { name: 'Stories', href: '/stories' },
    { name: 'Ebook', href: '/ebook' },
    ...(user ? [{ name: 'Dashboard', href: '/dashboard' }] : [])
  ];

  return (
    <div className="flex space-x-6">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="text-blue-200 hover:text-white transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}