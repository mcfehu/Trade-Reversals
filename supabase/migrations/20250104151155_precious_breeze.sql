/*
  # Create performance reports table

  1. New Tables
    - `performance_reports`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `file_path` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Add policies for public read access
    - Add policies for authenticated users to manage reports
*/

CREATE TABLE performance_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  file_path text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE performance_reports ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON performance_reports
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to create reports
CREATE POLICY "Allow authenticated users to create reports"
  ON performance_reports
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update reports
CREATE POLICY "Allow authenticated users to update reports"
  ON performance_reports
  FOR UPDATE
  TO authenticated
  USING (true);

-- Allow authenticated users to delete reports
CREATE POLICY "Allow authenticated users to delete reports"
  ON performance_reports
  FOR DELETE
  TO authenticated
  USING (true);