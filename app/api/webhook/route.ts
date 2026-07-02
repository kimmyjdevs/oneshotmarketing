import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import {
  sendAdminNotification,
  sendCustomerConfirmation,
  orderConfirmationHtml,
  adminOrderHtml,
} from '@/lib/email'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('Webhook signature error:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as import('stripe').Stripe.Checkout.Session

    const customerEmail = session.customer_email ?? session.customer_details?.email ?? ''
    const addons = (session.metadata?.addons ?? '').split(',').filter(Boolean)
    const total = session.amount_total ?? 0

    const emailData = {
      customerEmail,
      addons,
      total,
      sessionId: session.id,
      metadata: session.metadata as Record<string, string>,
    }

    await Promise.all([
      sendAdminNotification(
        `New Order — Website in a Week — ${customerEmail}`,
        adminOrderHtml(emailData)
      ),
      customerEmail
        ? sendCustomerConfirmation(
            customerEmail,
            'Your website build is confirmed — One Shot Marketing',
            orderConfirmationHtml(emailData)
          )
        : Promise.resolve(),
    ])
  }

  return NextResponse.json({ received: true })
}
