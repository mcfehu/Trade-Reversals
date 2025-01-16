import React, { useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { Upload } from 'lucide-react';

export default function BlogPostForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    coverImage: '',
    tags: '',
    readTime: 5
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('blog_posts').insert([{
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()),
        author_id: (await supabase.auth.getUser()).data.user?.id,
        date: new Date().toISOString()
      }]);

      if (error) throw error;
      
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        coverImage: '',
        tags: '',
        readTime: 5
      });

      alert('Blog post created successfully!');
    } catch (error) {
      alert('Error creating blog post');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Excerpt
        </label>
        <textarea
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Content (Markdown supported)
        </label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          rows={10}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Cover Image URL
        </label>
        <input
          type="url"
          value={formData.coverImage}
          onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          placeholder="e.g., Gold, Technical Analysis, Trading"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Read Time (minutes)
        </label>
        <input
          type="number"
          value={formData.readTime}
          onChange={(e) => setFormData({ ...formData, readTime: parseInt(e.target.value) })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          min="1"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Upload className="h-5 w-5" />
        {loading ? 'Publishing...' : 'Publish Post'}
      </button>
    </form>
  );
}