'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { LogoIcon } from '@/components/logo-icon'

const links = [
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Contact', href: '/#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg/95 backdrop-blur-md border-b border-teal'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5" aria-label="One Shot Marketing">
            <LogoIcon className="w-8 h-8 text-accent shrink-0" />
            <div className="flex flex-col leading-none">
              <span className="font-body font-black text-accent text-[14px] tracking-[0.18em] uppercase">One Shot</span>
              <span className="font-mono text-muted text-[9px] tracking-[0.22em] uppercase mt-0.5">Marketing</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13px] text-muted hover:text-heading transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/qualify"
              className="text-[13px] px-5 py-2 rounded-[2px] border border-accent text-accent hover:bg-accent hover:text-bg transition-all"
            >
              Get an audit
            </Link>
            <Link
              href="/qualify"
              className="text-[13px] px-5 py-2 rounded-[2px] bg-accent text-bg hover:bg-[#5da07f] transition-all font-medium"
            >
              Websites in a Week →
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={cn('block w-6 h-px bg-heading transition-transform duration-200', mobileOpen && 'translate-y-[6px] rotate-45')} />
            <span className={cn('block w-6 h-px bg-heading transition-opacity duration-200', mobileOpen && 'opacity-0')} />
            <span className={cn('block w-6 h-px bg-heading transition-transform duration-200', mobileOpen && '-translate-y-[6px] -rotate-45')} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-10 transition-opacity duration-300 md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center gap-2 mb-4">
          <LogoIcon className="w-14 h-14 text-accent" />
          <div className="text-center">
            <p className="font-body font-black text-accent text-[16px] tracking-[0.18em] uppercase">One Shot</p>
            <p className="font-mono text-muted text-[9px] tracking-[0.22em] uppercase mt-0.5">Marketing</p>
          </div>
        </div>
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            onClick={() => setMobileOpen(false)}
            className="font-display text-3xl text-heading hover:text-accent transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/qualify"
          onClick={() => setMobileOpen(false)}
          className="mt-4 px-8 py-4 rounded-[2px] bg-accent text-bg font-medium text-base"
        >
          Websites in a Week →
        </Link>
      </div>
    </>
  )
}
