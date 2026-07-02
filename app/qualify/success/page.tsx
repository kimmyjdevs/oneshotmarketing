import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { AddonsCalculator } from '@/components/success/addons-calculator'
import { INCLUSIONS } from '@/lib/config'

export const metadata: Metadata = {
  title: 'You Qualify | One Shot Marketing',
  description: 'You\'re a great fit. See exactly what\'s included in your website build.',
  robots: { index: false },
}

export default function SuccessPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="mb-14">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-3">
              You qualify
            </p>
            <h1 className="font-display text-heading font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              You Qualify. Let's Go.
            </h1>
            <p className="text-muted text-[17px] max-w-xl leading-relaxed">
              Here's exactly what you're getting, plus a few optional extras if you want them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Inclusions */}
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-accent mb-5">
                What's Included — $997 AUD
              </p>

              <div className="border border-teal divide-y divide-teal mb-8">
                {INCLUSIONS.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5">
                    <span className="text-accent mt-0.5 shrink-0 text-sm">✓</span>
                    <p className="text-muted text-[14px] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {/* Timeline strip */}
              <div className="border border-teal p-5">
                <p className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4">Timeline</p>
                <div className="flex items-center gap-2 text-[13px] overflow-x-auto">
                  {['Pay today', 'We build this week', 'Launch within 7 days'].map((step, i, arr) => (
                    <div key={i} className="flex items-center gap-2 shrink-0">
                      <div className="text-center">
                        <span className="text-heading font-medium">{step}</span>
                      </div>
                      {i < arr.length - 1 && (
                        <span className="text-accent font-mono">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms summary */}
              <div className="mt-6 p-4 bg-accent/5 border border-teal/50 space-y-1.5">
                <p className="font-mono text-[10px] text-muted/50 tracking-wider uppercase mb-2">Key terms</p>
                <p className="text-muted/60 text-[12px] leading-relaxed">Two revisions included; further revisions may incur costs.</p>
                <p className="text-muted/60 text-[12px] leading-relaxed">Seven-day launch-ready guarantee runs from payment. Revision turnaround is the client's responsibility.</p>
                <p className="text-muted/60 text-[12px] leading-relaxed">Integrations and additional pages quoted separately.</p>
              </div>
            </div>

            {/* Add-ons calculator + checkout */}
            <div>
              <AddonsCalculator />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
