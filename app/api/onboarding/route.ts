import { NextRequest, NextResponse } from 'next/server'
import {
  sendAdminNotification,
  sendCustomerConfirmation,
  onboardingSubmissionHtml,
  onboardingCustomerHtml,
} from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, unknown>
    const email = body.email as string | undefined
    const name = (body.businessName as string | undefined) ?? 'there'

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    await Promise.all([
      sendAdminNotification(
        `Onboarding Submitted — ${name} (${email})`,
        onboardingSubmissionHtml(body)
      ),
      sendCustomerConfirmation(
        email,
        "We've got everything — your build starts now | One Shot Marketing",
        onboardingCustomerHtml(name)
      ),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Onboarding submission error:', err)
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 })
  }
}
