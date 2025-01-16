import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleCookieChoice = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
    setShow(false);
    
    // If cookies are declined, we could add additional logic here
    // to remove any non-essential cookies that might have been set
    if (!accepted) {
      // Example: Remove Google Analytics cookies
      document.cookie.split(';').forEach(cookie => {
        const [name] = cookie.split('=');
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      });
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/10 p-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-blue-200 text-sm">
          We use cookies to enhance your trading experience and analyze site traffic. 
          You can choose to accept or decline cookies.{' '}
          <a href="/privacy" className="text-blue-400 hover:text-blue-300">
            Learn more
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleCookieChoice(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Accept All
          </button>
          <button
            onClick={() => handleCookieChoice(false)}
            className="bg-white/10 text-blue-200 px-6 py-2 rounded-lg hover:bg-white/20 transition-colors text-sm"
          >
            Decline
          </button>
          <button
            onClick={() => setShow(false)}
            className="text-blue-300 hover:text-blue-200"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}