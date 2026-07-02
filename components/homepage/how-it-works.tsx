import Link from 'next/link'
import { HOW_IT_WORKS } from '@/lib/config'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-teal">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent mb-4">Process</p>
        <span className="block w-12 h-px bg-accent mb-8" aria-hidden />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2 className="font-display text-heading font-semibold leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Seven steps.<br />
            <em className="text-accent not-italic">Seven days.</em>
          </h2>
          <Link
            href="/qualify"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-medium text-sm rounded-[2px] hover:bg-[#5da07f] transition-all"
          >
            Start Now →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-teal border border-teal">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.step} className="bg-bg p-6 hover:bg-accent/5 transition-colors">
              <span className="font-display text-accent text-5xl font-bold opacity-80 block mb-4 leading-none">
                {String(step.step).padStart(2, '0')}
              </span>
              <h3 className="font-display text-heading text-[17px] font-semibold mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-muted text-[13px] leading-relaxed">{step.desc}</p>
            </div>
          ))}
          {/* Fill remaining slots with CTA card */}
          <div className="bg-accent/10 border-l border-teal p-6 flex flex-col justify-center sm:col-span-2 lg:col-span-4">
            <p className="font-mono text-[10px] text-accent/70 tracking-widest uppercase mb-2">Ready?</p>
            <p className="font-display text-heading text-xl font-semibold mb-4">You either do or you don't.</p>
            <Link
              href="/qualify"
              className="self-start inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-medium text-sm rounded-[2px] hover:bg-[#5da07f] transition-all"
            >
              Give Me My Website in a Week
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
