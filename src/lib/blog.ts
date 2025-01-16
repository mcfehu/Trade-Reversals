import { supabase } from './supabase';
import { BlogPost } from '../types/blog';

export async function fetchBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      id,
      title,
      excerpt,
      content,
      cover_image,
      tags,
      read_time,
      created_at,
      author:author_id (
        id,
        email
      )
    `)
    .order('created_at', { ascending: false });

  if (error) throw error;

  return data.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: post.cover_image,
    date: post.created_at,
    author: {
      name: post.author.email.split('@')[0], // Fallback to email username
      avatar: `https://api.dicebear.com/7.x/avatars/svg?seed=${post.author.id}` // Generate avatar from user ID
    },
    tags: post.tags,
    readTime: post.read_time
  }));
}

export async function fetchBlogPost(id: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      id,
      title,
      excerpt,
      content,
      cover_image,
      tags,
      read_time,
      created_at,
      author:author_id (
        id,
        email
      )
    `)
    .eq('id', id)
    .single();

  if (error) throw error;
  if (!data) return null;

  return {
    id: data.id,
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    coverImage: data.cover_image,
    date: data.created_at,
    author: {
      name: data.author.email.split('@')[0],
      avatar: `https://api.dicebear.com/7.x/avatars/svg?seed=${data.author.id}`
    },
    tags: data.tags,
    readTime: data.read_time
  };
}

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'date' | 'author'>) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error } = await supabase
    .from('blog_posts')
    .insert([{
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      cover_image: post.coverImage,
      tags: post.tags,
      read_time: post.readTime,
      author_id: user.id
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteBlogPost(id: string) {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);

  if (error) throw error;
}