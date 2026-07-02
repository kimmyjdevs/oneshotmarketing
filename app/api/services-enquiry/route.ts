import { NextRequest, NextResponse } from 'next/server'
import { sendAdminNotification } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      name: string
      business?: string
      email: string
      phone?: string
      service?: string
      message: string
    }

    const { name, business, email, phone, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    const subject = `Services Enquiry — ${service || 'General'} — ${name}`

    const html = `
      <h2>Services Enquiry — One Shot Marketing</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Business:</strong> ${business || 'Not provided'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Service interested in:</strong> ${service || 'Not specified'}</p>
      <hr />
      <h3>Their message</h3>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `

    await sendAdminNotification(subject, html)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Services enquiry error:', err)
    return NextResponse.json({ error: 'Failed to send enquiry' }, { status: 500 })
  }
}
