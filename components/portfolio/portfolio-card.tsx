'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { PortfolioSite } from '@/lib/portfolio'

export function PortfolioCard({ site }: { site: PortfolioSite }) {
  const [hovered, setHovered] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
  }, [])

  const active = hovered && !reducedMotion
  const restY = site.yOffset ?? '0'

  return (
    <article
      className="flex flex-col border border-teal hover:border-accent/60 transition-colors duration-300 h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Screenshot scroll window */}
      <div
        className="relative overflow-hidden bg-teal/10 shrink-0"
        style={{ height: 300 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.screenshot}
          alt={`${site.name} website preview`}
          className="w-full"
          style={{
            height: 'auto',
            display: 'block',
            transform: active ? 'translateY(calc(-100% + 300px))' : `translateY(${restY})`,
            transition: active
              ? 'transform 7s ease-in-out'
              : 'transform 1.2s ease-in-out',
          }}
          loading="lazy"
        />

        {/* Hint label */}
        <span
          className="absolute bottom-3 right-3 font-mono text-[9px] tracking-widest uppercase text-heading/40 group-hover:text-heading/60 transition-opacity duration-500 pointer-events-none select-none"
          style={{ opacity: hovered ? 0 : 1, transition: 'opacity 0.4s' }}
          aria-hidden
        >
          Hover to scroll ↑
        </span>
      </div>

      {/* Card meta */}
      <div className="flex flex-col flex-1 p-6 border-t border-teal">
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <h3 className="font-display text-heading font-semibold text-[1.05rem] leading-snug">
            {site.name}
          </h3>
          <span className="font-mono text-[9px] tracking-widest uppercase text-muted/35 shrink-0 mt-0.5">
            {site.category}
          </span>
        </div>

        <p className="text-muted text-[13px] leading-relaxed flex-1 mb-5">
          {site.tagline}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="font-mono text-[9px] tracking-wider uppercase border border-accent/25 text-accent/55 px-2 py-0.5">
            {site.deliverable}
          </span>
          <Link
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-muted/35 hover:text-accent transition-colors tracking-wider"
            aria-label={`Visit ${site.name}`}
          >
            Visit ↗
          </Link>
        </div>
      </div>
    </article>
  )
}
