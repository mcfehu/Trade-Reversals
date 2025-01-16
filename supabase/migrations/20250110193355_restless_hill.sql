/*
  # Fix blog posts foreign key relationship

  1. Changes
    - Drop and recreate foreign key constraint with correct schema reference
    - Add missing indexes
    - Preserve existing data
  2. Security
    - Maintain existing RLS policies
*/

DO $$ 
BEGIN
  -- Drop existing foreign key if it exists
  IF EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'blog_posts_author_id_fkey' 
    AND table_name = 'blog_posts'
  ) THEN
    ALTER TABLE blog_posts DROP CONSTRAINT blog_posts_author_id_fkey;
  END IF;

  -- Drop existing fk_author constraint if it exists
  IF EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'fk_author' 
    AND table_name = 'blog_posts'
  ) THEN
    ALTER TABLE blog_posts DROP CONSTRAINT fk_author;
  END IF;

  -- Add correct foreign key constraint with explicit schema reference
  ALTER TABLE blog_posts
    ADD CONSTRAINT blog_posts_author_id_fkey 
    FOREIGN KEY (author_id) 
    REFERENCES auth.users(id)
    ON DELETE CASCADE;

  -- Ensure indexes exist
  CREATE INDEX IF NOT EXISTS blog_posts_created_at_idx ON blog_posts(created_at DESC);
  CREATE INDEX IF NOT EXISTS blog_posts_author_id_idx ON blog_posts(author_id);
END $$;