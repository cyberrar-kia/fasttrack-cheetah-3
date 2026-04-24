import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const reference = searchParams.get('reference')
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!

  if (!reference) {
    return NextResponse.redirect(`${siteUrl}/dashboard?payment=failed`)
  }

  try {
    // Verify with Paystack
    const res = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
    })

    const data = await res.json()

    if (!data.status || data.data.status !== 'success') {
      return NextResponse.redirect(`${siteUrl}/dashboard?payment=failed`)
    }

    const userId = data.data.metadata?.user_id

    if (!userId) {
      return NextResponse.redirect(`${siteUrl}/dashboard?payment=failed`)
    }

    // Update user access in Supabase using service role
    const { createClient: createServiceClient } = await import('@supabase/supabase-js')
    const serviceClient = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await serviceClient
      .from('user_profiles')
      .upsert({
        id: userId,
        has_access: true,
        paid_at: new Date().toISOString(),
        payment_reference: reference,
        amount_paid: data.data.amount,
      })

    if (error) {
      console.error('Failed to update access:', error)
      return NextResponse.redirect(`${siteUrl}/dashboard?payment=error`)
    }

    return NextResponse.redirect(`${siteUrl}/dashboard?payment=success`)
  } catch (err) {
    console.error('Payment verify error:', err)
    return NextResponse.redirect(`${siteUrl}/dashboard?payment=failed`)
  }
}
