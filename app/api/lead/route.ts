import { NextRequest, NextResponse } from 'next/server'
import { sendAdminNotification } from '@/lib/email'
import { nonQualifyLeadHtml } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message, reason, answers } = body as {
      name: string
      email: string
      phone?: string
      message?: string
      reason: string
      answers: Record<string, unknown>
    }

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    await sendAdminNotification(
      `Non-Qualify Lead — ${name} — ${reason}`,
      nonQualifyLeadHtml({
        name,
        email,
        phone: phone ?? '',
        message: message ?? '',
        reason,
        answers: answers as Record<string, string>,
      })
    )

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Lead capture error:', err)
    return NextResponse.json({ error: 'Failed to send lead' }, { status: 500 })
  }
}
