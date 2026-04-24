'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function initializePayment(): Promise<void> {
  const supabase = await createClient()
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    redirect('/login?next=/dashboard')
  }

  // Check if already paid
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('has_access')
    .eq('id', user!.id)
    .single()

  if (profile?.has_access) {
    redirect('/dashboard?already_paid=true')
  }

  const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

  if (!PAYSTACK_SECRET || !SITE_URL) {
    redirect('/dashboard?payment=config_error')
  }

  try {
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user!.email,
        amount: Number(process.env.ACCESS_PRICE_KOBO || 500000), // default $50 in kobo
        currency: 'USD',
        reference: `FTL-${user!.id}-${Date.now()}`,
        callback_url: `${SITE_URL}/api/payment/verify`,
        metadata: {
          user_id: user!.id,
          product: 'fasttrack_full_access',
        },
      }),
    })

    const data = await response.json()

    if (!data.status || !data.data?.authorization_url) {
      redirect('/dashboard?payment=init_failed')
    }

    redirect(data.data.authorization_url)
  } catch {
    redirect('/dashboard?payment=failed')
  }
}
