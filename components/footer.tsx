import Link from 'next/link'
import { LogoIcon } from '@/components/logo-icon'
import { SERVICES } from '@/lib/services'

export function Footer() {
  return (
    <footer className="border-t border-teal pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* Services index */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-teal mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="One Shot Marketing">
              <LogoIcon className="w-10 h-10 text-accent shrink-0" />
              <div className="flex flex-col leading-none">
                <span className="font-body font-black text-accent text-[14px] tracking-[0.18em] uppercase">One Shot</span>
                <span className="font-mono text-muted text-[9px] tracking-[0.22em] uppercase mt-0.5">Marketing</span>
              </div>
            </Link>
            <p className="text-muted/50 text-[13px] leading-relaxed">
              Brisbane-based marketing consultancy. One asset, one action, done.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-muted/40 mb-4">Flagship</p>
            <div className="space-y-2">
              <Link href="/" className="block text-[13px] text-muted hover:text-accent transition-colors">
                Websites in a Week
              </Link>
              <Link href="/#how-it-works" className="block text-[13px] text-muted hover:text-accent transition-colors">
                How It Works
              </Link>
              <Link href="/#case-studies" className="block text-[13px] text-muted hover:text-accent transition-colors">
                Portfolio
              </Link>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <p className="font-mono text-[10px] tracking-widest uppercase text-muted/40 mb-4">Services</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {SERVICES.map((s) => (
                <Link
                  key={s.id}
                  href={`/services#${s.id}`}
                  className="text-[13px] text-muted hover:text-accent transition-colors truncate"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-[13px] text-muted">
            <a
              href="https://instagram.com/oneshotmarketingau"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-heading transition-colors"
            >
              @oneshotmarketingau
            </a>
            <a
              href="mailto:hello@oneshotmarketing.com.au"
              className="hover:text-heading transition-colors"
            >
              hello@oneshotmarketing.com.au
            </a>
            <Link href="/terms" className="hover:text-heading transition-colors">
              Terms
            </Link>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] text-muted/50 tracking-wider">Brisbane QLD, Australia</p>
            <p className="font-mono text-[10px] text-muted/50 tracking-wider mt-1">
              © {new Date().getFullYear()} One Shot Marketing
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
