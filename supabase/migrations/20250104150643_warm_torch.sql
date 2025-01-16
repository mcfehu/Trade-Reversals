/*
  # Update blog posts schema and policies

  1. Changes
    - Safely check for table existence
    - Add policies if they don't exist
  
  2. Security
    - Enable RLS
    - Add policies for CRUD operations
*/

-- Check if policies exist and create them if they don't
DO $$ 
BEGIN
    -- Enable RLS if not already enabled
    IF NOT EXISTS (
        SELECT 1 
        FROM pg_tables 
        WHERE schemaname = 'public' 
        AND tablename = 'blog_posts' 
        AND rowsecurity = true
    ) THEN
        ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
    END IF;

    -- Create policies if they don't exist
    IF NOT EXISTS (
        SELECT 1 
        FROM pg_policies 
        WHERE schemaname = 'public' 
        AND tablename = 'blog_posts' 
        AND policyname = 'Allow public read access'
    ) THEN
        CREATE POLICY "Allow public read access"
            ON blog_posts
            FOR SELECT
            TO public
            USING (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 
        FROM pg_policies 
        WHERE schemaname = 'public' 
        AND tablename = 'blog_posts' 
        AND policyname = 'Allow authenticated users to create posts'
    ) THEN
        CREATE POLICY "Allow authenticated users to create posts"
            ON blog_posts
            FOR INSERT
            TO authenticated
            WITH CHECK (auth.uid() = author_id);
    END IF;

    IF NOT EXISTS (
        SELECT 1 
        FROM pg_policies 
        WHERE schemaname = 'public' 
        AND tablename = 'blog_posts' 
        AND policyname = 'Allow users to update their own posts'
    ) THEN
        CREATE POLICY "Allow users to update their own posts"
            ON blog_posts
            FOR UPDATE
            TO authenticated
            USING (auth.uid() = author_id)
            WITH CHECK (auth.uid() = author_id);
    END IF;

    IF NOT EXISTS (
        SELECT 1 
        FROM pg_policies 
        WHERE schemaname = 'public' 
        AND tablename = 'blog_posts' 
        AND policyname = 'Allow users to delete their own posts'
    ) THEN
        CREATE POLICY "Allow users to delete their own posts"
            ON blog_posts
            FOR DELETE
            TO authenticated
            USING (auth.uid() = author_id);
    END IF;
END $$;