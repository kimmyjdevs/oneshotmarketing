'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AccordionItem {
  q: string
  a: string
}

interface AccordionProps {
  items: readonly AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={cn('divide-y divide-teal', className)}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-start justify-between gap-4 py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-display text-heading text-[17px] leading-snug group-hover:text-offwhite transition-colors">
              {item.q}
            </span>
            <span
              className={cn(
                'text-accent mt-0.5 shrink-0 text-xl leading-none transition-transform duration-200',
                open === i && 'rotate-45'
              )}
              aria-hidden
            >
              +
            </span>
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              open === i ? 'max-h-96 pb-5' : 'max-h-0'
            )}
          >
            <p className="text-muted text-[15px] leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
