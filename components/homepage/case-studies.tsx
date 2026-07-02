import { CASE_STUDIES } from '@/lib/config'

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 border-t border-teal">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent mb-4">Proof</p>
        <span className="block w-12 h-px bg-accent mb-8" aria-hidden />

        <h2 className="font-display text-heading font-semibold leading-tight mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
          What one shot looks like in practice.
        </h2>
        <p className="text-muted text-[16px] max-w-xl mb-14 leading-relaxed">
          Real clients. Real results. Real fast.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-teal border border-teal">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.id} className="bg-bg p-8 flex flex-col gap-5 card-hover">
              {/* Hero stat */}
              <div className="border border-teal p-4 inline-block self-start">
                <p className="font-mono text-accent text-3xl font-medium leading-none">{cs.resultStat}</p>
                <p className="font-mono text-muted/50 text-[10px] tracking-widest uppercase mt-1">turnaround</p>
              </div>

              <div>
                <p className="font-mono text-[10px] text-accent/60 tracking-wider uppercase mb-1">{cs.category}</p>
                <h3 className="font-display text-heading text-2xl font-semibold">{cs.businessName}</h3>
                <a
                  href={cs.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-teal hover:text-accent transition-colors tracking-wide"
                >
                  {cs.url.replace('https://', '')} ↗
                </a>
              </div>

              <div className="space-y-3 border-t border-teal pt-5">
                <div>
                  <p className="font-mono text-[10px] text-muted/50 tracking-wider uppercase mb-1">Challenge</p>
                  <p className="text-muted text-[14px] leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-muted/50 tracking-wider uppercase mb-1">Solution</p>
                  <p className="text-muted text-[14px] leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-muted/50 tracking-wider uppercase mb-1">Result</p>
                  <p className="text-heading text-[14px] leading-relaxed">{cs.resultDetail}</p>
                </div>
              </div>

              <blockquote className="border-l-2 border-accent pl-4 mt-auto">
                <p className="font-display italic text-heading text-[15px] leading-relaxed">
                  "{cs.quote}"
                </p>
                <cite className="font-mono text-[10px] text-muted/60 tracking-wider uppercase not-italic mt-2 block">
                  — Kim, One Shot Marketing
                </cite>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
