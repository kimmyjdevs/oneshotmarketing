import { cn } from '@/lib/utils'

interface ProgressProps {
  value: number
  max: number
  className?: string
  label?: string
}

export function Progress({ value, max, className, label }: ProgressProps) {
  const pct = Math.round((value / max) * 100)
  return (
    <div className={cn('w-full', className)} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} aria-label={label ?? `Step ${value} of ${max}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
          Step {value} of {max}
        </span>
        <span className="font-mono text-[10px] text-muted">{pct}%</span>
      </div>
      <div className="h-px bg-teal w-full overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
