import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ServiceList } from '@/components/services/service-list'
import { EnquiryForm } from '@/components/services/enquiry-form'
import { SERVICES } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services | One Shot Marketing — Brisbane',
  description:
    'Marketing consultant Brisbane — full-service strategy, social media management, content creation, custom website development, and business consulting. Every engagement scoped through conversation.',
  keywords: [
    'marketing consultant Brisbane',
    'social media management Brisbane',
    'content creation Gold Coast',
    'custom website development Australia',
    'business consulting Brisbane',
    'marketing strategy Brisbane',
    'One Shot Marketing services',
  ],
  openGraph: {
    title: 'Services | One Shot Marketing',
    description:
      'Getting online fast is step one. Here\'s everything after — strategy, content, social, and bespoke builds.',
    url: 'https://oneshotmarketing.com.au/services',
  },
}

export default function ServicesPage({
  searchParams,
}: {
  searchParams: { service?: string }
}) {
  const defaultService = searchParams.service
    ? SERVICES.find((s) => s.name === searchParams.service)?.name
    : undefined

  return (
    <>
      <Nav />
      <main>

        {/* ── Section 1: Header ── */}
        <section className="pt-32 pb-16 border-b border-teal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-5">
                Beyond the Flagship
              </p>
              <span className="block w-12 h-px bg-accent mb-8" aria-hidden />
              <h1
                className="font-display text-heading font-bold leading-[1.05] mb-7"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
              >
                Getting Online Fast Is Step One.{' '}
                <em className="text-accent not-italic">Here's Everything After.</em>
              </h1>
              <p className="text-muted text-[17px] leading-relaxed mb-8 max-w-2xl">
                Websites in a Week gets you a front door. These services are what bring people
                through it — and what you do with them once they're inside. Every engagement
                below is scoped through a proper conversation, because strategy isn't a form
                you fill in.
              </p>
              <Link
                href="/"
                className="font-mono text-[11px] text-muted/50 hover:text-accent tracking-wider uppercase transition-colors"
              >
                Just need a website, fast? → Websites in a Week
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 2: Services Index ── */}
        <section className="border-b border-teal">
          <div className="max-w-6xl mx-auto px-6">
            <ServiceList />
          </div>
        </section>

        {/* ── Section 3: How Engagements Work ── */}
        <section className="py-20 border-b border-teal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-4">
                How it works
              </p>
              <span className="block w-12 h-px bg-accent mb-8" aria-hidden />
              <h2
                className="font-display text-heading font-semibold leading-tight"
                style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}
              >
                Three steps. No surprises.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-teal border border-teal">
              {[
                {
                  n: '1',
                  title: 'Talk',
                  desc: 'Book a conversation. Tell us where you are and where you\'re going. No prep needed.',
                },
                {
                  n: '2',
                  title: 'Scope',
                  desc: 'We come back with a clear proposal — deliverables, timeline, investment. Nothing vague.',
                },
                {
                  n: '3',
                  title: 'Build',
                  desc: 'We execute. You stay informed. No surprises, no scope creep, no runarounds.',
                },
              ].map(({ n, title, desc }) => (
                <div key={n} className="bg-bg p-8 hover:bg-accent/5 transition-colors">
                  <span className="font-display text-accent text-5xl font-bold opacity-80 block mb-5 leading-none">
                    {n}
                  </span>
                  <h3 className="font-display text-heading text-xl font-semibold mb-3">
                    {title}
                  </h3>
                  <p className="text-muted text-[14px] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Cross-Sell Band ── */}
        <section className="py-16 border-b border-teal bg-accent/5">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="font-display text-heading text-lg italic mb-6 max-w-xl mx-auto leading-relaxed">
              "Not sure where to start? Most clients begin with the flagship — a website in a
              week — then grow from there."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-medium text-sm rounded-[2px] hover:bg-[#5da07f] transition-all"
              >
                Websites in a Week →
              </Link>
              <Link
                href="#enquiry"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-accent text-accent text-sm rounded-[2px] hover:bg-accent hover:text-bg transition-all"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 5: Enquiry Form ── */}
        <section id="enquiry" className="py-20 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-4">
                  Start a conversation
                </p>
                <span className="block w-12 h-px bg-accent mb-8" aria-hidden />
                <h2
                  className="font-display text-heading font-semibold leading-tight mb-5"
                  style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
                >
                  Tell us what you're working with.
                </h2>
                <p className="text-muted text-[15px] leading-relaxed mb-8">
                  No pitch decks. No pressure. Just a real conversation about where you are and
                  what move makes the most sense next.
                </p>

                {/* Service anchors */}
                <div className="space-y-2">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-muted/40 mb-3">
                    Jump to a service
                  </p>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-3 text-[13px] text-muted/60 hover:text-accent transition-colors"
                    >
                      <span className="font-mono text-[10px] text-teal">{s.number}</span>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="lg:sticky lg:top-24">
                <EnquiryForm defaultService={defaultService} />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
