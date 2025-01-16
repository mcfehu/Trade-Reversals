/*
  # Create signals table

  1. New Tables
    - `signals`
      - `id` (uuid, primary key)
      - `market` (text) - e.g., 'GOLD', 'NASDAQ'
      - `type` (text) - 'LONG' or 'SHORT'
      - `entry` (numeric)
      - `stop_loss` (numeric)
      - `take_profit` (numeric)
      - `profit` (numeric)
      - `success_rate` (integer)
      - `status` (text) - 'active', 'completed', 'cancelled'
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Add policies for read/write access
*/

CREATE TABLE signals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  market text NOT NULL,
  type text NOT NULL CHECK (type IN ('LONG', 'SHORT')),
  entry numeric NOT NULL,
  stop_loss numeric NOT NULL,
  take_profit numeric NOT NULL,
  profit numeric,
  success_rate integer,
  status text NOT NULL CHECK (status IN ('active', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE signals ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON signals
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage signals
CREATE POLICY "Allow authenticated users to manage signals"
  ON signals
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);