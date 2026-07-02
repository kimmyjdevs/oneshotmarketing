import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { OnboardingForm } from '@/components/onboarding/onboarding-form'

export const metadata: Metadata = {
  title: 'Onboarding | One Shot Marketing',
  description: 'Tell us everything we need to build your website.',
  robots: { index: false },
}

export default function OnboardingPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mx-auto mb-10">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-3">
              Onboarding
            </p>
            <h1 className="font-display text-heading text-3xl md:text-4xl font-semibold leading-tight mb-3">
              Let's build your website.
            </h1>
            <p className="text-muted text-[15px] leading-relaxed">
              Five sections. Takes about ten minutes. Your answers are everything we need to
              build your site — be as specific as you like.
            </p>
          </div>
          <OnboardingForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
