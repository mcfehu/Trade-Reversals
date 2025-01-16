/*
  # Add sample performance reports

  1. New Data
    - Adds sample performance reports for testing
  2. Changes
    - Inserts initial data into performance_reports table
*/

-- Insert sample performance reports
INSERT INTO performance_reports (title, description, file_path)
VALUES 
  (
    'January 2024 Performance Report',
    'Monthly trading performance analysis including win rate, profit metrics, and detailed trade breakdowns.',
    'reports/january-2024.pdf'
  ),
  (
    'December 2023 Performance Report',
    'End of year trading performance summary with annual statistics and key achievements.',
    'reports/december-2023.pdf'
  ),
  (
    'November 2023 Performance Report',
    'Monthly analysis of trading signals performance and market conditions.',
    'reports/november-2023.pdf'
  )
ON CONFLICT DO NOTHING;