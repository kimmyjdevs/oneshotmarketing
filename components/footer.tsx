import Link from 'next/link'
import { LogoIcon } from '@/components/logo-icon'

export function Footer() {
  return (
    <footer className="border-t border-teal py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label="One Shot Marketing">
            <LogoIcon className="w-10 h-10 text-accent shrink-0" />
            <div className="flex flex-col leading-none">
              <span className="font-body font-black text-accent text-[14px] tracking-[0.18em] uppercase">One Shot</span>
              <span className="font-mono text-muted text-[9px] tracking-[0.22em] uppercase mt-0.5">Marketing</span>
            </div>
          </Link>

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
