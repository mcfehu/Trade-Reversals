import React from 'react';
import Header from '../components/Header';
import Section from '../components/layout/Section';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      <Header />
      <Section className="pt-32">
        <div className="max-w-4xl mx-auto text-blue-100 space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Privacy & Cookie Policy</h1>
            <p className="text-xl text-blue-200">
              Your privacy is important to us. This policy explains how we use cookies and protect your personal data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Cookie Policy</h2>
            <p className="mb-4">
              We use cookies to enhance your experience on our website. Cookies are small text files that are stored on your device when you visit our site.
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">Types of Cookies We Use:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential cookies for site functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>Authentication cookies for logged-in users</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Data Collection</h2>
            <p>We collect and process the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (email, username)</li>
              <li>Trading preferences and settings</li>
              <li>Usage data and site analytics</li>
              <li>Communication preferences</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request data deletion</li>
              <li>Withdraw consent for data processing</li>
              <li>Object to data processing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Contact Us</h2>
            <p>
              For any privacy-related questions or concerns, please contact us at{' '}
              <a href="mailto:privacy@tradereversals.com" className="text-blue-400 hover:text-blue-300">
                privacy@tradereversals.com
              </a>
            </p>
          </div>

          <div className="text-sm text-blue-300 pt-8">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </Section>
    </div>
  );
}