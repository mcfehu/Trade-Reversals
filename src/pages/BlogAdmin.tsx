import React, { useState } from 'react';
import Header from '../components/Header';
import BlogPostEditor from '../components/blog/admin/BlogPostEditor';
import BlogPostList from '../components/blog/admin/BlogPostList';
import { Plus, List } from 'lucide-react';

export default function BlogAdmin() {
  const [view, setView] = useState<'list' | 'new'>('list');

  const handlePostSuccess = () => {
    setView('list');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Blog Management</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setView('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  view === 'list' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/10 text-blue-200 hover:bg-white/20'
                }`}
              >
                <List className="h-5 w-5" />
                View Posts
              </button>
              <button
                onClick={() => setView('new')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  view === 'new'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-blue-200 hover:bg-white/20'
                }`}
              >
                <Plus className="h-5 w-5" />
                New Post
              </button>
            </div>
          </div>
          
          {view === 'list' ? (
            <BlogPostList />
          ) : (
            <BlogPostEditor onSuccess={handlePostSuccess} />
          )}
        </div>
      </div>
    </div>
  );
}