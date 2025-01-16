/*
  # Create performance reports infrastructure
  
  1. New Tables
    - `performance_reports`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `file_path` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS
    - Add policies for public read access
    - Add policies for authenticated users to manage reports
*/

-- Create storage bucket for PDF files if it doesn't exist
DO $$ 
BEGIN
  INSERT INTO storage.buckets (id, name)
  VALUES ('performance-reports', 'performance-reports')
  ON CONFLICT DO NOTHING;
END $$;

-- Set up storage policies if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow public read access for performance reports'
  ) THEN
    CREATE POLICY "Allow public read access for performance reports"
      ON storage.objects
      FOR SELECT
      TO public
      USING (bucket_id = 'performance-reports');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow authenticated users to manage performance report files'
  ) THEN
    CREATE POLICY "Allow authenticated users to manage performance report files"
      ON storage.objects
      FOR ALL
      TO authenticated
      USING (bucket_id = 'performance-reports')
      WITH CHECK (bucket_id = 'performance-reports');
  END IF;
END $$;