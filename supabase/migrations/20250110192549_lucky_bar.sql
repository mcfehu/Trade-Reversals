/*
  # Add storage for blog images

  1. New Storage Bucket
    - Create bucket for blog images
    - Set up public access policies
  2. Security
    - Enable RLS for storage
    - Add policies for authenticated users
*/

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies
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