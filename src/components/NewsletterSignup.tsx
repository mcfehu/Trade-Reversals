import React, { useState } from 'react';
import { Mail, CheckCircle, XCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: 'YOUR_PUBLIC_API_KEY',
          email: email,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! Check your email to confirm.');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-600/20 rounded-lg">
          <Mail className="h-6 w-6 text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">Get Trading Insights</h3>
      </div>
      
      <p className="text-blue-200 mb-6">
        Join our newsletter for exclusive trading insights, market analysis, and early access to new features.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <span>Subscribing...</span>
          ) : (
            <>
              <Mail className="h-5 w-5" />
              Subscribe Now
            </>
          )}
        </button>
      </form>

      {status === 'success' && (
        <div className="mt-4 flex items-center gap-2 text-green-400">
          <CheckCircle className="h-5 w-5" />
          <span>{message}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 flex items-center gap-2 text-red-400">
          <XCircle className="h-5 w-5" />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}