import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft, Clock, Calendar, Share2, Check, Copy } from 'lucide-react';
import Header from '../components/Header';
import { getBlogPost } from '../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getBlogPost(id);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (!post) return;

    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href
    };

    try {
      if (window.isSecureContext && /mobile|android|iphone/i.test(navigator.userAgent) && navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (clipboardErr) {
        console.error('Error copying to clipboard:', clipboardErr);
      }
    }
  };

  useEffect(() => {
    if (post) {
      // Update page title
      document.title = `${post.title} | Trade Reversals`;
      
      // Update meta tags
      const metaTags = {
        // Open Graph
        'og:title': post.title,
        'og:description': post.excerpt,
        'og:type': 'article',
        'og:image': post.coverImage,
        'og:url': window.location.href,
        
        // Twitter
        'twitter:card': 'summary_large_image',
        'twitter:title': post.title,
        'twitter:description': post.excerpt,
        'twitter:image': post.coverImage,
        
        // Article specific
        'article:published_time': post.date,
        'article:section': post.tags[0] || 'Trading',
        'article:tag': post.tags.join(','),
        
        // Other
        'description': post.excerpt,
        'keywords': post.tags.join(', ') + ', trading psychology, emotional trading, risk management'
      };

      // Update or create meta tags
      Object.entries(metaTags).forEach(([property, content]) => {
        if (content) {
          let meta = document.querySelector(`meta[property="${property}"]`);
          if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('property', property);
            document.head.appendChild(meta);
          }
          meta.setAttribute('content', content);
        }
      });

      // Update canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', window.location.href);

      // Add structured data
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: post.coverImage,
        datePublished: post.date,
        author: {
          '@type': 'Person',
          name: post.author.name
        },
        publisher: {
          '@type': 'Organization',
          name: 'Trade Reversals',
          logo: {
            '@type': 'ImageObject',
            url: 'https://i.imgur.com/vPJZrJ6.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': window.location.href
        }
      };

      let scriptTag = document.querySelector('#structured-data');
      if (scriptTag) {
        scriptTag.remove();
      }
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data';
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }

    // Cleanup function
    return () => {
      document.title = 'Trade Reversals';
      const metaTags = document.querySelectorAll('meta[property^="og:"], meta[property^="twitter:"], meta[property^="article:"]');
      metaTags.forEach(tag => tag.remove());
      const structuredDataScript = document.querySelector('#structured-data');
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-3xl mx-auto px-4">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-blue-300 hover:text-blue-200 mb-8"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Blog
            </button>
            <div className="text-center text-red-400">
              Post not found
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-blue-300 hover:text-blue-200"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Blog
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-300 hover:text-blue-200 rounded-lg transition-colors"
              aria-label="Share post"
            >
              {copied ? (
                <>
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="hidden sm:inline text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  {/mobile|android|iphone/i.test(navigator.userAgent) ? (
                    <Share2 className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                  <span className="hidden sm:inline">
                    {/mobile|android|iphone/i.test(navigator.userAgent) ? 'Share' : 'Copy Link'}
                  </span>
                </>
              )}
            </button>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">{post.title}</h1>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-400" />
              <span className="text-blue-200">
                {format(new Date(post.date), 'MMM d, yyyy')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-400" />
              <span className="text-blue-200">{post.readTime} min read</span>
            </div>
          </div>

          {post.coverImage && (
            <div className="w-full mb-12">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          )}

          <div 
            className="prose prose-xl prose-invert max-w-none mb-12
              [&>p]:text-white [&>p]:text-xl [&>p]:leading-relaxed [&>p]:mb-8
              [&>ul]:text-white [&>ul]:text-xl [&>ul]:leading-relaxed
              [&>h2]:text-4xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-16 [&>h2]:mb-8
              [&>blockquote]:text-2xl [&>blockquote]:text-blue-200 [&>blockquote]:border-blue-500
              [&>img]:w-full [&>img]:aspect-[16/9] [&>img]:object-cover [&>img]:rounded-xl [&>img]:my-12
              [&>.bg-white\/5]:p-8 [&>.bg-white\/5]:rounded-xl [&>.bg-white\/5]:my-12" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-base"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}