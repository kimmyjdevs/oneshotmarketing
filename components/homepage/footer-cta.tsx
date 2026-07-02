import Link from 'next/link'

export function FooterCTA() {
  return (
    <section id="contact" className="py-28 border-t border-teal text-center">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-6">
          Ready when you are
        </p>
        <h2 className="font-display text-heading font-bold leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
          Ready to own your online presence?
        </h2>
        <p className="text-muted text-[17px] leading-relaxed mb-10 max-w-xl mx-auto">
          One week. One price. One website that's yours forever. No subscriptions, no lock-ins,
          no rented land.
        </p>
        <Link
          href="/qualify"
          className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-bg font-medium text-base rounded-[2px] hover:bg-[#5da07f] transition-all"
        >
          Start Your Website →
        </Link>
        <p className="font-mono text-[11px] text-muted/40 tracking-wider mt-6 uppercase">
          997 AUD · All in · No surprises
        </p>

        <div className="mt-20 pt-10 border-t border-teal flex flex-col sm:flex-row items-center justify-center gap-8 text-[13px] text-muted/60">
          <span>More from One Shot Marketing:</span>
          <div className="flex gap-6">
            <Link href="/services#marketing-strategy" className="hover:text-accent transition-colors">Strategy</Link>
            <Link href="/services#business-planning" className="hover:text-accent transition-colors">Consulting</Link>
            <Link href="/services#social-media-audit" className="hover:text-accent transition-colors">Audits</Link>
            <Link href="/services" className="hover:text-accent transition-colors">All Services</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
