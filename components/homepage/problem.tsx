const painPoints = [
  'No Google presence means no discoverability.',
  'Social media owns your customer data, not you.',
  'One algorithm change kills your reach overnight.',
  'You look small and scattered to serious clients.',
]

export function Problem() {
  return (
    <section id="problem" className="py-24 border-t border-teal">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent mb-4">The Problem</p>
        <span className="block w-12 h-px bg-accent mb-8" aria-hidden />

        <h2 className="font-display text-heading font-semibold leading-tight mb-8"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
          Your Business Lives on Rented Land.
        </h2>

        <p className="text-muted text-[17px] max-w-xl mb-14 leading-relaxed">
          You take bookings through DMs. Inquiries come through comments. If Instagram goes down
          tomorrow, so does your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-teal border border-teal">
          {painPoints.map((point, i) => (
            <div key={i} className="bg-bg p-8 hover:bg-accent/5 transition-colors">
              <span className="font-mono text-[10px] text-accent/60 tracking-wider mb-3 block">
                0{i + 1}
              </span>
              <p className="font-display text-heading text-lg leading-snug">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
