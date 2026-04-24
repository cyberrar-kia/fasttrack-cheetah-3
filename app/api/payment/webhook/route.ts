import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('x-paystack-signature')

  // Verify webhook signature
  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
    .update(body)
    .digest('hex')

  if (hash !== signature) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  const event = JSON.parse(body)

  if (event.event === 'charge.success') {
    const userId = event.data.metadata?.user_id

    if (!userId) {
      return NextResponse.json({ received: true })
    }

    const serviceClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    await serviceClient
      .from('user_profiles')
      .upsert({
        id: userId,
        has_access: true,
        paid_at: new Date().toISOString(),
        payment_reference: event.data.reference,
        amount_paid: event.data.amount,
      })
  }

  return NextResponse.json({ received: true })
}
