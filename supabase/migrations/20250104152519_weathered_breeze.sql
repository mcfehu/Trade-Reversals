/*
  # Create testimonials system
  
  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text)
      - `role` (text)
      - `content` (text)
      - `avatar_url` (text)
      - `metrics_label` (text)
      - `metrics_value` (text)
      - `featured` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Public can read testimonials
    - Only authenticated users can manage testimonials
*/

CREATE TABLE testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  content text NOT NULL,
  avatar_url text,
  metrics_label text,
  metrics_value text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON testimonials
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage testimonials
CREATE POLICY "Allow authenticated users to manage testimonials"
  ON testimonials
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);