import { FAQ_ITEMS } from '@/lib/config'
import { Accordion } from '@/components/ui/accordion'

export function FAQ() {
  return (
    <section id="faq" className="py-24 border-t border-teal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent mb-4">FAQ</p>
            <span className="block w-12 h-px bg-accent mb-8" aria-hidden />
            <h2 className="font-display text-heading font-semibold leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              The questions we get every time.
            </h2>
            <p className="text-muted text-[16px] leading-relaxed mt-6 max-w-sm">
              We answer them here so you can decide fast. No discovery calls required.
            </p>
          </div>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  )
}
