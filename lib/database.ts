import { supabase } from './supabaseClient';
import type { Occasion, Card, Order } from './supabaseClient';

/**
 * Database helper functions for RHF Blessing Cards
 * Following Supabase best practices: no foreign key joins, manual data fetching
 */

// ==================== OCCASIONS ====================

/**
 * Get all active occasions
 */
export async function getOccasions(): Promise<Occasion[]> {
  const { data, error } = await supabase
    .from('occasions')
    .select('*')
    .eq('is_active', true)
    .order('name_ar', { ascending: true });

  if (error) {
    console.error('Error fetching occasions:', error);
    throw error;
  }

  return data || [];
}

/**
 * Get a single occasion by ID
 */
export async function getOccasionById(id: string): Promise<Occasion | null> {
  const { data, error } = await supabase
    .from('occasions')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Error fetching occasion:', error);
    throw error;
  }

  return data;
}

// ==================== CARDS ====================

/**
 * Get all active cards
 */
export async function getCards(): Promise<Card[]> {
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }

  return data || [];
}

/**
 * Get cards by occasion ID
 */
export async function getCardsByOccasion(occasionId: string): Promise<Card[]> {
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .eq('occasion_id', occasionId)
    .eq('is_active', true)
    .order('is_featured', { ascending: false });

  if (error) {
    console.error('Error fetching cards by occasion:', error);
    throw error;
  }

  return data || [];
}

/**
 * Get featured cards
 */
export async function getFeaturedCards(): Promise<Card[]> {
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .eq('is_featured', true)
    .eq('is_active', true)
    .limit(6);

  if (error) {
    console.error('Error fetching featured cards:', error);
    throw error;
  }

  return data || [];
}

/**
 * Get a single card by ID
 */
export async function getCardById(id: string): Promise<Card | null> {
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Error fetching card:', error);
    throw error;
  }

  return data;
}

/**
 * Search cards by title
 */
export async function searchCards(query: string): Promise<Card[]> {
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .or(`title_ar.ilike.%${query}%,title_en.ilike.%${query}%`)
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error searching cards:', error);
    throw error;
  }

  return data || [];
}

// ==================== ORDERS ====================

/**
 * Create a new order
 */
export async function createOrder(orderData: {
  card_id: string;
  recipient_name: string;
  recipient_phone: string;
  sender_name: string;
  custom_message: string;
  payment_amount: number;
  payment_method: string;
}): Promise<Order> {
  const { data, error } = await supabase
    .from('orders')
    .insert([orderData])
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error creating order:', error);
    throw error;
  }

  if (!data) {
    throw new Error('Failed to create order');
  }

  return data;
}

/**
 * Get order by ID
 */
export async function getOrderById(id: string): Promise<Order | null> {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Error fetching order:', error);
    throw error;
  }

  return data;
}

/**
 * Update order payment status
 */
export async function updateOrderPaymentStatus(
  orderId: string,
  status: 'pending' | 'completed' | 'failed'
): Promise<Order | null> {
  const { data, error } = await supabase
    .from('orders')
    .update({ payment_status: status })
    .eq('id', orderId)
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error updating order payment status:', error);
    throw error;
  }

  return data;
}

/**
 * Get recent orders (for admin dashboard)
 */
export async function getRecentOrders(limit: number = 10): Promise<Order[]> {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching recent orders:', error);
    throw error;
  }

  return data || [];
}

/**
 * Get order statistics (for admin dashboard)
 */
export async function getOrderStats(): Promise<{
  total_orders: number;
  total_revenue: number;
  completed_orders: number;
  pending_orders: number;
}> {
  const { data, error } = await supabase
    .from('orders')
    .select('payment_amount, payment_status');

  if (error) {
    console.error('Error fetching order stats:', error);
    throw error;
  }

  const stats = {
    total_orders: data?.length || 0,
    total_revenue: data?.reduce((sum, order) => sum + Number(order.payment_amount), 0) || 0,
    completed_orders: data?.filter(order => order.payment_status === 'completed').length || 0,
    pending_orders: data?.filter(order => order.payment_status === 'pending').length || 0,
  };

  return stats;
}
