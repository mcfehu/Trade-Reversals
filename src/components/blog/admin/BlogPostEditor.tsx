import React, { useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import RichTextEditor from './RichTextEditor';
import { createBlogPost } from '../../../lib/blog';

interface BlogPostEditorProps {
  onSuccess?: () => void;
}

export default function BlogPostEditor({ onSuccess }: BlogPostEditorProps) {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    coverImage: '',
    tags: '',
    readTime: 5
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];
    const previewUrl = URL.createObjectURL(file);
    setFormData({ ...formData, coverImage: previewUrl });
    setPreview(previewUrl);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createBlogPost({
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim())
      });
      
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        coverImage: '',
        tags: '',
        readTime: 5
      });
      setPreview(null);

      if (onSuccess) onSuccess();
      alert('Blog post created successfully!');
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert('Error creating blog post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-sm rounded-xl p-6">
      {/* Rest of the component remains the same */}
    </form>
  );
}