/*
  # Blog Snippets Setup

  1. New Tables
    - `blog_snippets`
      - `id` (uuid, primary key)
      - `blog_post_id` (uuid, references blog_posts)
      - `title` (text)
      - `content` (text)
      - `language` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `blog_snippets` table
    - Add policies for public read access
    - Add policies for authenticated users to manage their own snippets
*/

-- Create blog_snippets table
CREATE TABLE blog_snippets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  blog_post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE,
  title text NOT NULL,
  content text NOT NULL,
  language text NOT NULL DEFAULT 'javascript',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_snippets ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
  ON blog_snippets
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to create snippets"
  ON blog_snippets
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM blog_posts
      WHERE id = blog_snippets.blog_post_id
      AND author_id = auth.uid()
    )
  );

CREATE POLICY "Allow users to update their own snippets"
  ON blog_snippets
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM blog_posts
      WHERE id = blog_snippets.blog_post_id
      AND author_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM blog_posts
      WHERE id = blog_snippets.blog_post_id
      AND author_id = auth.uid()
    )
  );

CREATE POLICY "Allow users to delete their own snippets"
  ON blog_snippets
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM blog_posts
      WHERE id = blog_snippets.blog_post_id
      AND author_id = auth.uid()
    )
  );

-- Add indexes
CREATE INDEX blog_snippets_blog_post_id_idx ON blog_snippets(blog_post_id);

-- Add updated_at trigger
CREATE TRIGGER update_blog_snippets_updated_at
    BEFORE UPDATE ON blog_snippets
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();