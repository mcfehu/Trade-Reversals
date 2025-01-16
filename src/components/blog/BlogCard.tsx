import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.id}`}>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:transform hover:scale-105 transition-all duration-300">
        {post.coverImage && (
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-48 object-cover"
            loading="lazy" // Add lazy loading
          />
        )}
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-blue-300 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">
            {post.title}
          </h2>
          <p className="text-blue-200 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}