DO $$
DECLARE
  policy_exists boolean;
BEGIN
  -- Only try to create policies if they don't already exist
  SELECT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow public read access for blog images'
  ) INTO policy_exists;

  IF NOT policy_exists THEN
    CREATE POLICY "Allow public read access for blog images"
      ON storage.objects
      FOR SELECT
      TO public
      USING (bucket_id = 'blog-images');
  END IF;

  SELECT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow authenticated users to upload blog images'
  ) INTO policy_exists;

  IF NOT policy_exists THEN
    CREATE POLICY "Allow authenticated users to upload blog images"
      ON storage.objects
      FOR INSERT
      TO authenticated
      WITH CHECK (bucket_id = 'blog-images');
  END IF;

  SELECT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow users to manage their blog images'
  ) INTO policy_exists;

  IF NOT policy_exists THEN
    CREATE POLICY "Allow users to manage their blog images"
      ON storage.objects
      FOR ALL
      TO authenticated
      USING (bucket_id = 'blog-images');
  END IF;
END $$;