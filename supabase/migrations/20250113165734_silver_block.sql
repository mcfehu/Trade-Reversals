-- First, ensure we drop any existing policies
DO $$
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Allow public read access for blog images" ON storage.objects;
  DROP POLICY IF EXISTS "Allow authenticated users to upload blog images" ON storage.objects;
  DROP POLICY IF EXISTS "Allow users to manage their blog images" ON storage.objects;

  -- Create new policies with ALTER POLICY if they exist, or CREATE POLICY if they don't
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow public read access for blog images'
  ) THEN
    ALTER POLICY "Allow public read access for blog images" 
    ON storage.objects
    USING (bucket_id = 'blog-images');
  ELSE
    CREATE POLICY "Allow public read access for blog images"
      ON storage.objects
      FOR SELECT
      TO public
      USING (bucket_id = 'blog-images');
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow authenticated users to upload blog images'
  ) THEN
    ALTER POLICY "Allow authenticated users to upload blog images"
    ON storage.objects
    USING (bucket_id = 'blog-images');
  ELSE
    CREATE POLICY "Allow authenticated users to upload blog images"
      ON storage.objects
      FOR INSERT
      TO authenticated
      WITH CHECK (bucket_id = 'blog-images');
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow users to manage their blog images'
  ) THEN
    ALTER POLICY "Allow users to manage their blog images"
    ON storage.objects
    USING (bucket_id = 'blog-images');
  ELSE
    CREATE POLICY "Allow users to manage their blog images"
      ON storage.objects
      FOR ALL
      TO authenticated
      USING (bucket_id = 'blog-images');
  END IF;
END $$;