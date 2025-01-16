-- Drop existing policies if they exist
DO $$
BEGIN
  -- Drop policies in a safe way (only if they exist)
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow public read access for blog images'
  ) THEN
    DROP POLICY "Allow public read access for blog images" ON storage.objects;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow authenticated users to upload blog images'
  ) THEN
    DROP POLICY "Allow authenticated users to upload blog images" ON storage.objects;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow users to manage their blog images'
  ) THEN
    DROP POLICY "Allow users to manage their blog images" ON storage.objects;
  END IF;

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