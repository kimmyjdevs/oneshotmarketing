import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { PortfolioCard } from '@/components/portfolio/portfolio-card'
import { PORTFOLIO } from '@/lib/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio | One Shot Marketing — Brisbane',
  description:
    'Real websites built in a week for Queensland businesses. Photography, trades, hospitality, advocacy — every site live in 7 days for 997 AUD.',
  keywords: [
    'website portfolio Brisbane',
    'small business websites Queensland',
    'websites in a week results',
    'One Shot Marketing portfolio',
    'fast website Brisbane',
  ],
  openGraph: {
    title: 'Portfolio | One Shot Marketing',
    description:
      'Real websites. Real businesses. Every site below went from brief to live in a week.',
    url: 'https://oneshotmarketing.com.au/portfolio',
  },
}

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Header ── */}
        <section className="pt-32 pb-16 border-b border-teal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-5">
                What we've built
              </p>
              <span className="block w-12 h-px bg-accent mb-8" aria-hidden />
              <h1
                className="font-display text-heading font-bold leading-[1.05] mb-7"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
              >
                Real websites.{' '}
                <em className="text-accent not-italic">Real businesses.</em>
              </h1>
              <p className="text-muted text-[17px] leading-relaxed max-w-2xl">
                Every site below went from brief to live in a week. Hover a card to
                scroll through the full page — what you see is what their customers see.
              </p>
            </div>
          </div>
        </section>

        {/* ── Portfolio grid ── */}
        <section className="py-20 border-b border-teal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {PORTFOLIO.map((site) => (
                <PortfolioCard key={site.id} site={site} />
              ))}

              {/* "Your site here" placeholder */}
              <div className="flex flex-col border border-dashed border-teal/40 h-full min-h-[300px]">
                <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted/30 mb-6">
                    Slot open
                  </span>
                  <p className="font-display text-heading/50 text-lg font-semibold mb-4 leading-snug max-w-[200px]">
                    Your business could be next.
                  </p>
                  <Link
                    href="/qualify"
                    className="font-mono text-[11px] tracking-wider uppercase text-accent/60 hover:text-accent transition-colors border border-accent/30 hover:border-accent/60 px-4 py-2"
                  >
                    Get started →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-6">
              Yours could be next
            </p>
            <h2
              className="font-display text-heading font-bold leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              One week from now, you could have a site like these.
            </h2>
            <p className="text-muted text-[16px] leading-relaxed mb-10 max-w-xl mx-auto">
              997 AUD. All in. No subscriptions, no lock-ins, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/qualify"
                className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-bg font-medium text-base rounded-[2px] hover:bg-[#5da07f] transition-all"
              >
                Start Your Website →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-teal text-muted text-sm rounded-[2px] hover:border-accent hover:text-heading transition-all"
              >
                See all services
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
