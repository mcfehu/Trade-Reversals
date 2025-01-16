import { createClient } from '@supabase/supabase-js';

// Define Supabase URL and anonymous key
const supabaseUrl = 'https://zxmzrbwuqnlttqsoydbq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4bXpyYnd1cW5sdHRxc295ZGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3ODk5NjQsImV4cCI6MjA1MjM2NTk2NH0.W17nkj78wLXRhQnPh37H-o_ba7FAoJ-tcmoThv7mYVo';

// Initialize Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export a dummy client for when Supabase is unavailable
export const dummyClient = {
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  },
  from: () => ({
    select: () => ({ data: [], error: null }),
    insert: () => ({ data: null, error: null }),
    update: () => ({ data: null, error: null }),
    delete: () => ({ data: null, error: null })
  })
};