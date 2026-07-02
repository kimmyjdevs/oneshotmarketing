import Link from 'next/link'
import { INCLUSIONS } from '@/lib/config'

export function Solution() {
  return (
    <section id="solution" className="py-24 border-t border-teal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent mb-4">The Solution</p>
            <span className="block w-12 h-px bg-accent mb-8" aria-hidden />

            <h2 className="font-display text-heading font-semibold leading-tight mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              A Website in a Week.{' '}
              <em className="text-accent not-italic">Built Right.</em> Launched Live.
            </h2>

            <p className="text-muted text-[16px] leading-relaxed mb-8">
              One week. One clean, professional, SEO-ready website. Built to convert visitors into
              customers and Google into a referral source.
            </p>

            <div className="flex items-baseline gap-3 mb-10">
              <span className="font-mono text-accent text-5xl font-medium">$997</span>
              <div>
                <p className="font-mono text-[10px] text-accent/60 tracking-wider uppercase">AUD</p>
                <p className="font-mono text-[10px] text-muted/50 tracking-wider uppercase">All in. No surprises.</p>
              </div>
            </div>

            <Link
              href="/qualify"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-medium text-sm rounded-[2px] hover:bg-[#5da07f] transition-all"
            >
              Give Me My Website in a Week
            </Link>
          </div>

          <div className="border border-teal divide-y divide-teal">
            {INCLUSIONS.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 hover:bg-accent/5 transition-colors">
                <span className="text-accent mt-0.5 shrink-0 text-sm">✓</span>
                <p className="text-muted text-[14px] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
