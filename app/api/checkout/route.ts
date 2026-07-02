import type Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'
import { stripe, STRIPE_LINE_ITEMS } from '@/lib/stripe'
import type { AddonId } from '@/lib/config'

export async function POST(req: NextRequest) {
  try {
    const { addons, answers } = (await req.json()) as {
      addons: AddonId[]
      answers: Record<string, unknown>
    }

    const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://oneshotmarketing.com.au'

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      STRIPE_LINE_ITEMS.base,
      ...addons.map((id) => STRIPE_LINE_ITEMS[id]).filter(Boolean),
    ]

    const metadata: Record<string, string> = {
      addons: addons.join(','),
      budget: String(answers.budget ?? ''),
      scope: String(answers.scope ?? ''),
      integrations: Array.isArray(answers.integrations)
        ? (answers.integrations as string[]).join(',')
        : '',
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: lineItems,
      success_url: `${base}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}/qualify/success`,
      metadata,
      billing_address_collection: 'auto',
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Checkout error:', err)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
