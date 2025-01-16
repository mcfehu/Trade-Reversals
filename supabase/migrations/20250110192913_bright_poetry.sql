/*
  # Fix blog system with image support

  1. Changes
    - Drop and recreate blog_posts table with proper constraints
    - Set up blog-images storage bucket
    - Add proper storage policies
  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

-- Drop existing table and related objects
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP FUNCTION IF EXISTS update_updated_at_column CASCADE;

-- Create blog_posts table with explicit foreign key relationship
CREATE TABLE blog_posts (
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
  CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES auth.users (id) ON DELETE CASCADE
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON blog_posts
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to create posts
CREATE POLICY "Allow authenticated users to create posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

-- Allow users to update their own posts
CREATE POLICY "Allow users to update their own posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

-- Allow users to delete their own posts
CREATE POLICY "Allow users to delete their own posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = author_id);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS blog_posts_created_at_idx ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS blog_posts_author_id_idx ON blog_posts(author_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add trigger for updated_at
CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create storage bucket for blog images if it doesn't exist
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