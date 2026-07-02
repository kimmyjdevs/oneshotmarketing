import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Payment Confirmed | One Shot Marketing',
  description: 'Welcome aboard. Your website build starts now.',
  robots: { index: false },
}

const TIMELINE = [
  { day: 'Today', desc: 'Payment confirmed. Confirmation email on its way.' },
  { day: 'Within 24 hours', desc: 'You\'ll receive your onboarding form link by email.' },
  { day: 'Days 2–5', desc: 'We build your website from your onboarding answers.' },
  { day: 'Day 6', desc: 'Testing, your review, final checks.' },
  { day: 'Day 7', desc: 'Your website is launch-ready.' },
]

export default function PaymentSuccessPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-4">
            Payment confirmed
          </p>
          <h1 className="font-display text-heading font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Welcome Aboard. We're Excited.
          </h1>
          <p className="text-muted text-[17px] leading-relaxed mb-12 max-w-xl mx-auto">
            Your build starts now. Here's what happens next — to the day.
          </p>

          {/* Video placeholder */}
          <div className="border border-teal mb-12 relative overflow-hidden group cursor-pointer">
            <div className="aspect-video bg-accent/5 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center group-hover:border-[#5da07f] transition-colors">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-accent ml-1" />
              </div>
              <p className="font-mono text-[11px] text-muted/60 tracking-wider uppercase">
                A message from Kim, Lead Developer
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="text-left border border-teal divide-y divide-teal mb-12">
            {TIMELINE.map(({ day, desc }, i) => (
              <div key={i} className="flex items-start gap-6 p-5">
                <span className="font-mono text-accent text-[12px] tracking-wide shrink-0 w-28">{day}</span>
                <p className="text-muted text-[14px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Inbox prompt */}
          <div className="border border-teal p-6 mb-10 text-left bg-accent/5">
            <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-3">Check your inbox</p>
            <p className="text-muted text-[14px] leading-relaxed">
              Check your inbox for an email from{' '}
              <span className="text-heading">hello@oneshotmarketing.com.au</span>.
              Sometimes we land in spam or trash — we promise we're not trash, we just end up there occasionally.
              The sooner you complete your onboarding form, the sooner we kick off your build.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-bg font-medium text-base rounded-[2px] hover:bg-[#5da07f] transition-all"
          >
            Go to Onboarding Form →
          </Link>
          <p className="font-mono text-[11px] text-muted/40 tracking-wider mt-4">
            Also sent to your email
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
