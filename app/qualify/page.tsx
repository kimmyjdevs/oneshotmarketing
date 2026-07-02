import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { QualifyForm } from '@/components/qualify/qualify-form'

export const metadata: Metadata = {
  title: 'Quick Questions | One Shot Marketing',
  description: 'Three quick questions to make sure we\'re the right fit for your website build.',
  robots: { index: false },
}

export default function QualifyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mx-auto mb-10 text-center">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-3">
              Quick qualifying questions
            </p>
            <h1 className="font-display text-heading text-3xl md:text-4xl font-semibold leading-tight">
              Let's make sure we're the right fit.
            </h1>
            <p className="text-muted text-[15px] mt-3">Three questions. Sixty seconds.</p>
          </div>
          <QualifyForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
