import { supabase } from './supabase';

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return { data, error };
}

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: window.location.origin
    }
  });
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// Utility function to create a test user
export async function createTestUser() {
  const testEmail = 'test@example.com';
  const testPassword = 'test123456';

  try {
    // Try to sign in first
    const { error: signInError } = await signIn(testEmail, testPassword);
    
    // If sign in fails, create the account
    if (signInError) {
      const { error: signUpError } = await signUp(testEmail, testPassword);
      if (signUpError) throw signUpError;
      
      // Sign in with the newly created account
      const { error: finalSignInError } = await signIn(testEmail, testPassword);
      if (finalSignInError) throw finalSignInError;
    }
    
    return { email: testEmail, password: testPassword };
  } catch (error) {
    console.error('Error creating test user:', error);
    throw error;
  }
}