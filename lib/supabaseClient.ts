import { createClient } from '@supabase/supabase-js';

// Supabase client configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check .env.local file.');
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Database Types (auto-generated types will go here after running: npm run types)
export interface Occasion {
  id: string;
  name_ar: string;
  name_en: string;
  icon: string;
  card_count: number;
  is_active: boolean;
  created_at: string;
}

export interface Card {
  id: string;
  occasion_id: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image_url: string;
  price: number;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
}

export interface Order {
  id: string;
  card_id: string;
  recipient_name: string;
  recipient_phone: string;
  sender_name: string;
  custom_message: string;
  payment_amount: number;
  payment_status: 'pending' | 'completed' | 'failed';
  payment_method: string;
  delivery_status: 'pending' | 'sent' | 'delivered';
  created_at: string;
}
