/*
  # Fix Storage Policies

  1. Changes
    - Safely manages storage bucket policies
    - Uses DO blocks for safe policy management
  
  2. Security
    - Maintains existing storage access rules
    - Ensures policies exist without duplicates
*/

DO $$
BEGIN
  -- Ensure storage bucket exists
  INSERT INTO storage.buckets (id, name, public)
  VALUES ('blog-images', 'blog-images', true)
  ON CONFLICT (id) DO NOTHING;

  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Allow public read access for blog images" ON storage.objects;
  DROP POLICY IF EXISTS "Allow authenticated users to upload blog images" ON storage.objects;
  DROP POLICY IF EXISTS "Allow users to manage their blog images" ON storage.objects;

  -- Recreate policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow public read access for blog images'
  ) THEN
    CREATE POLICY "Allow public read access for blog images"
      ON storage.objects
      FOR SELECT
      TO public
      USING (bucket_id = 'blog-images');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow authenticated users to upload blog images'
  ) THEN
    CREATE POLICY "Allow authenticated users to upload blog images"
      ON storage.objects
      FOR INSERT
      TO authenticated
      WITH CHECK (bucket_id = 'blog-images');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow users to manage their blog images'
  ) THEN
    CREATE POLICY "Allow users to manage their blog images"
      ON storage.objects
      FOR ALL
      TO authenticated
      USING (bucket_id = 'blog-images');
  END IF;
END $$;