/*
  # Create trades table

  1. New Tables
    - `trades`
      - `id` (uuid, primary key)
      - `date` (date)
      - `time` (time)
      - `market` (text)
      - `result` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `trades` table
    - Add policies for authenticated users to manage trades
    - Add policy for public read access
*/

-- Create trades table
CREATE TABLE trades (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  time time NOT NULL,
  market text NOT NULL CHECK (market IN ('GC', 'NQ')),
  result text NOT NULL CHECK (result IN ('WIN', 'LOSS')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE trades ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
  ON trades
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage trades"
  ON trades
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add indexes
CREATE INDEX trades_date_idx ON trades(date DESC);
CREATE INDEX trades_market_idx ON trades(market);

-- Add updated_at trigger
CREATE TRIGGER update_trades_updated_at
    BEFORE UPDATE ON trades
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();