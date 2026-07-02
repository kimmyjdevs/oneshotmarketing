import Link from 'next/link'
import { SERVICES } from '@/lib/services'
import { cn } from '@/lib/utils'

export function ServiceList() {
  return (
    <div className="divide-y divide-teal">
      {SERVICES.map((service) => (
        <article
          key={service.id}
          id={service.id}
          className="group py-14 md:py-16 scroll-mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-[96px_1fr] gap-6 md:gap-10">
            {/* Number */}
            <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0 md:pt-1">
              <span className="font-mono text-accent text-3xl md:text-4xl font-medium leading-none block">
                {service.number}
              </span>
              <span className="block md:hidden w-8 h-px bg-teal" aria-hidden />
            </div>

            {/* Content */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-5">
                <div>
                  <h2 className="font-display text-heading font-semibold leading-tight mb-2"
                    style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>
                    {service.name}
                  </h2>
                  <p className="font-display italic text-muted text-[16px] leading-snug">
                    "{service.hook}"
                  </p>
                </div>

                {/* CTA — top right on desktop */}
                <div className="shrink-0">
                  <ServiceCTA service={service} />
                </div>
              </div>

              <p className="text-muted text-[15px] leading-relaxed mb-5 max-w-2xl">
                {service.description}
              </p>

              {/* Outputs */}
              {service.outputs && service.outputs.length > 0 && (
                <div className="mb-5">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-muted/50 mb-2">
                    Typical outputs
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.outputs.map((output) => (
                      <span
                        key={output}
                        className="font-mono text-[11px] tracking-wide text-accent border border-teal px-3 py-1 rounded-[2px]"
                      >
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Package placeholder */}
              {service.packagePlaceholder && (
                <div className="mb-5 border border-dashed border-teal/50 p-4 rounded-[2px]">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-muted/40 mb-2">
                    Package tiers
                  </p>
                  <p className="text-muted/50 text-[13px] italic">
                    Monthly packages available — pricing scoped to your channels and volume.
                    Ask about options in your first conversation.
                  </p>
                </div>
              )}

              {/* Note */}
              {service.note && (
                <p className="text-muted/60 text-[13px] italic mb-5 border-l-2 border-teal pl-4">
                  {service.note}
                </p>
              )}

              {/* Price + mobile CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                {service.priceLabel && (
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-accent text-lg font-medium">
                      ${service.price} AUD
                    </span>
                    <span className="font-mono text-[10px] text-muted/50 tracking-wider uppercase">
                      Fixed price
                    </span>
                  </div>
                )}
                {!service.priceLabel && (
                  <span className="font-mono text-[11px] text-muted/40 tracking-wider uppercase">
                    Scoped through conversation
                  </span>
                )}
                {/* Mobile CTA */}
                <div className="sm:hidden">
                  <ServiceCTA service={service} />
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

function ServiceCTA({ service }: { service: (typeof SERVICES)[number] }) {
  const href = `/services?service=${service.name}#enquiry`
  const isScope =
    service.ctaLabel === 'Scope Your Build' ||
    service.ctaLabel === 'Book Your Audit'

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium rounded-[2px] transition-all whitespace-nowrap',
        isScope
          ? 'bg-accent text-bg hover:bg-[#5da07f]'
          : 'border border-accent text-accent hover:bg-accent hover:text-bg'
      )}
    >
      {service.ctaLabel} →
    </Link>
  )
}
