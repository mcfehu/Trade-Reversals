import React, { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { fetchBlogPosts, deleteBlogPost } from '../../../lib/blog';
import { BlogPost } from '../../../types/blog';
import LoadingSpinner from '../../ui/LoadingSpinner';

export default function BlogPostList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = async () => {
    try {
      const data = await fetchBlogPosts();
      setPosts(data);
    } catch (err) {
      console.error('Error loading blog posts:', err);
      setError('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    try {
      await deleteBlogPost(id);
      await loadPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Error deleting post');
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-400">{error}</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
        <p className="text-blue-200">No blog posts yet. Create your first post!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div 
          key={post.id} 
          className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between"
        >
          <div>
            <h3 className="text-white font-medium">{post.title}</h3>
            <p className="text-blue-200 text-sm">
              {format(new Date(post.date), 'MMM d, yyyy')}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {/* Implement edit functionality */}}
              className="p-2 text-blue-300 hover:text-blue-200 transition-colors"
            >
              <Pencil className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              className="p-2 text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}