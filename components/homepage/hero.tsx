'use client'

import Link from 'next/link'
import { LogoIcon } from '@/components/logo-icon'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#4E8C70 1px, transparent 1px), linear-gradient(90deg, #4E8C70 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: '#4E8C70' }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center gap-3 mb-10 animate-fade-in">
          <LogoIcon className="w-10 h-10 text-accent opacity-80" />
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent">
            Websites in a Week · Brisbane · Australia
          </p>
        </div>

        <h1 className="font-display text-heading font-bold leading-[1.02] tracking-tight mb-8 animate-fade-up"
          style={{ fontSize: 'clamp(56px, 9vw, 112px)' }}>
          Get Online Fast.
        </h1>

        <p className="text-muted text-xl leading-relaxed max-w-2xl mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
          Your business needs its own front door. Not borrowed land on social media.{' '}
          <span className="text-heading">We build real websites in a week.</span>
        </p>

        <p className="text-muted/70 text-[15px] leading-relaxed max-w-xl mb-12 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          Social media is not a business. It's borrowed land. One algorithm change, one account suspension,
          and you're dead in the water. You need a website Google can find, that you own, and that works for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
          <Link
            href="/qualify"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg font-medium text-[15px] rounded-[2px] hover:bg-[#5da07f] transition-all"
          >
            Give Me My Website in a Week
          </Link>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-teal text-muted text-[15px] rounded-[2px] hover:border-accent hover:text-heading transition-all"
          >
            See the Proof ↓
          </a>
        </div>

        {/* Price callout */}
        <div className="mt-16 flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
          <span className="font-mono text-accent text-2xl font-medium">997 AUD</span>
          <span className="text-teal text-sm">·</span>
          <span className="font-mono text-muted/60 text-[11px] tracking-wider uppercase">All in. No surprises.</span>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden>
        <span className="font-mono text-[9px] text-accent/60 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent" />
      </div>
    </section>
  )
}
