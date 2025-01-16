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