import React from 'react';
import Header from '../components/Header';
import BlogList from '../components/blog/BlogList';
import PageCTA from '../components/ui/PageCTA';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              Trading Insights & Analysis
            </h1>
            <p className="text-xl text-blue-200">
              Expert analysis and trading strategies from professional traders
            </p>
          </div>

          <BlogList posts={blogPosts} />
          
          <PageCTA
            title="Get Premium Access"
            description="Want exclusive trading insights delivered to your inbox?"
            buttonText="Join Premium Signals"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}