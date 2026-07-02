import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const FROM = `One Shot Marketing <${process.env.SMTP_USER}>`
const ADMIN = process.env.ADMIN_EMAIL ?? 'hello@oneshotmarketing.com.au'

export async function sendAdminNotification(subject: string, html: string) {
  await transporter.sendMail({ from: FROM, to: ADMIN, subject, html })
}

export async function sendCustomerConfirmation(
  to: string,
  subject: string,
  html: string
) {
  await transporter.sendMail({ from: FROM, to, subject, html })
}

export function nonQualifyLeadHtml(data: {
  name: string
  email: string
  phone: string
  message: string
  reason: string
  answers: Record<string, string>
}) {
  return `
    <h2>Non-Qualify Lead — ${data.name}</h2>
    <p><strong>Reason:</strong> ${data.reason}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
    <p><strong>Message:</strong> ${data.message || 'Not provided'}</p>
    <hr />
    <h3>Qualifying Answers</h3>
    <pre>${JSON.stringify(data.answers, null, 2)}</pre>
  `
}

export function orderConfirmationHtml(data: {
  customerEmail: string
  addons: string[]
  total: number
  sessionId: string
}) {
  const addonList =
    data.addons.length > 0 ? data.addons.join(', ') : 'None selected'
  return `
    <h2>Payment Confirmed — One Shot Marketing</h2>
    <p>Thanks for your payment. Your website build starts now.</p>
    <hr />
    <p><strong>Order total:</strong> $${(data.total / 100).toFixed(0)} AUD</p>
    <p><strong>Add-ons:</strong> ${addonList}</p>
    <p><strong>Session ID:</strong> ${data.sessionId}</p>
    <hr />
    <p><strong>Your next step:</strong> Complete your onboarding form so we can start building.</p>
    <p><a href="${process.env.NEXT_PUBLIC_BASE_URL}/onboarding">Go to Onboarding Form →</a></p>
    <p>Check your spam folder if you don't see this email. The onboarding form link is also in this email.</p>
  `
}

export function adminOrderHtml(data: {
  customerEmail: string
  addons: string[]
  total: number
  sessionId: string
  metadata: Record<string, string>
}) {
  return `
    <h2>New Order — Website in a Week</h2>
    <p><strong>Customer:</strong> ${data.customerEmail}</p>
    <p><strong>Total:</strong> $${(data.total / 100).toFixed(0)} AUD</p>
    <p><strong>Add-ons:</strong> ${data.addons.join(', ') || 'None'}</p>
    <p><strong>Stripe Session:</strong> ${data.sessionId}</p>
    <hr />
    <h3>Qualifying Metadata</h3>
    <pre>${JSON.stringify(data.metadata, null, 2)}</pre>
  `
}

export function onboardingSubmissionHtml(data: Record<string, unknown>) {
  return `
    <h2>Onboarding Form Submitted</h2>
    <p><strong>Business:</strong> ${data.businessName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <hr />
    <h3>Full Submission</h3>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `
}

export function onboardingCustomerHtml(name: string) {
  return `
    <h2>We've got everything we need, ${name}.</h2>
    <p>Your build starts now. We'll be in touch within 24 hours with an update.</p>
    <p>Keep an eye on your inbox — we'll reach out for revision feedback once the first draft is ready.</p>
    <p>— Kim & the One Shot Marketing team</p>
  `
}
