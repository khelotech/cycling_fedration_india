import { cn } from '@/lib/utils'

export function CfiLogo({
  className,
  showText = true,
  invert = false,
}: {
  className?: string
  showText?: boolean
  invert?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
          <circle cx="24" cy="24" r="22" className="fill-primary" />
          {/* tricolor wheel arcs */}
          <path d="M24 6 A18 18 0 0 1 42 24 L36 24 A12 12 0 0 0 24 12 Z" fill="oklch(0.72 0.17 55)" />
          <path d="M42 24 A18 18 0 0 1 24 42 L24 36 A12 12 0 0 0 36 24 Z" fill="oklch(0.98 0 0)" />
          <path d="M24 42 A18 18 0 0 1 6 24 A18 18 0 0 1 24 6 L24 12 A12 12 0 0 0 12 24 A12 12 0 0 0 24 36 Z" fill="oklch(0.52 0.13 152)" />
          <circle cx="24" cy="24" r="5" className="fill-primary" />
          <circle cx="24" cy="24" r="2.4" fill="oklch(0.98 0 0)" />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display text-lg font-bold uppercase tracking-wide',
              invert ? 'text-white' : 'text-primary',
            )}
          >
            Cycling Federation
          </span>
          <span
            className={cn(
              'font-display text-[0.7rem] font-medium uppercase tracking-[0.28em]',
              invert ? 'text-white/70' : 'text-muted-foreground',
            )}
          >
            of India
          </span>
        </span>
      )}
    </div>
  )
}
