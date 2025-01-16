/*
  # Fix blog posts foreign key relationship

  1. Changes
    - Drop and recreate foreign key constraint with correct schema reference
    - Add missing indexes
  2. Security
    - Maintain existing RLS policies
*/

-- Drop existing foreign key if it exists
ALTER TABLE blog_posts 
  DROP CONSTRAINT IF EXISTS fk_author;

-- Add correct foreign key constraint
ALTER TABLE blog_posts
  ADD CONSTRAINT fk_author 
  FOREIGN KEY (author_id) 
  REFERENCES auth.users(id)
  ON DELETE CASCADE;

-- Ensure indexes exist
CREATE INDEX IF NOT EXISTS blog_posts_created_at_idx ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS blog_posts_author_id_idx ON blog_posts(author_id);