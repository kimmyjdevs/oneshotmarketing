import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-teal py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-mono text-accent text-[15px] font-medium tracking-wide">ONE SHOT</span>
            <span className="font-body text-muted text-[11px] tracking-widest uppercase">Marketing</span>
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
