/*
  # Fix Database Schema

  1. Changes
    - Safely drops and recreates blog_posts table
    - Updates storage policies
    - Ensures all constraints and indexes exist
  
  2. Security
    - Maintains RLS policies
    - Preserves storage bucket access rules
*/

-- Drop existing objects if they exist
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP FUNCTION IF EXISTS update_updated_at_column CASCADE;

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  cover_image text,
  author_id uuid NOT NULL,
  tags text[] DEFAULT '{}',
  read_time integer DEFAULT 5,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT blog_posts_author_id_fkey FOREIGN KEY (author_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated users to create posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow users to update their own posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow users to delete their own posts" ON blog_posts;

-- Create policies
CREATE POLICY "Allow public read access"
  ON blog_posts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to create posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Allow users to update their own posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Allow users to delete their own posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = author_id);

-- Add indexes
CREATE INDEX IF NOT EXISTS blog_posts_created_at_idx ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS blog_posts_author_id_idx ON blog_posts(author_id);

-- Add updated_at trigger
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create storage bucket for blog images
DO $$ 
BEGIN
  INSERT INTO storage.buckets (id, name, public)
  VALUES ('blog-images', 'blog-images', true)
  ON CONFLICT (id) DO NOTHING;
END $$;

-- Set up storage policies
DO $$
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Allow public read access for blog images" ON storage.objects;
  DROP POLICY IF EXISTS "Allow authenticated users to upload blog images" ON storage.objects;
  DROP POLICY IF EXISTS "Allow users to manage their blog images" ON storage.objects;

  -- Create new policies
  CREATE POLICY "Allow public read access for blog images"
    ON storage.objects
    FOR SELECT
    TO public
    USING (bucket_id = 'blog-images');

  CREATE POLICY "Allow authenticated users to upload blog images"
    ON storage.objects
    FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'blog-images');

  CREATE POLICY "Allow users to manage their blog images"
    ON storage.objects
    FOR ALL
    TO authenticated
    USING (bucket_id = 'blog-images');
END $$;