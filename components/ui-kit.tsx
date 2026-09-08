import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

const buttonVariants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  accent: 'bg-saffron text-saffron-foreground hover:bg-saffron/90',
  outline: 'border border-border bg-transparent text-foreground hover:bg-secondary',
  ghostLight: 'border border-white/30 bg-white/10 text-white hover:bg-white/20',
}

const buttonSizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-base',
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof buttonVariants
  size?: keyof typeof buttonSizes
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)}
    >
      {children}
    </Link>
  )
}

export function Badge({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        className,
      )}
    >
      {children}
    </span>
  )
}

const statusStyles: Record<string, string> = {
  'Registration Open': 'bg-india-green/15 text-india-green',
  Upcoming: 'bg-primary/10 text-primary',
  'Registration Closed': 'bg-saffron/20 text-accent-foreground',
  Completed: 'bg-muted text-muted-foreground',
  Cancelled: 'bg-destructive/10 text-destructive',
  Affiliated: 'bg-india-green/15 text-india-green',
  Provisional: 'bg-saffron/20 text-accent-foreground',
}

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge className={statusStyles[status] ?? 'bg-muted text-muted-foreground'}>
      {status}
    </Badge>
  )
}

const disciplineStyles: Record<string, string> = {
  Road: 'bg-primary/10 text-primary',
  Track: 'bg-saffron/20 text-accent-foreground',
  MTB: 'bg-india-green/15 text-india-green',
  'Para Cycling': 'bg-primary/10 text-primary',
}

export function DisciplineBadge({ discipline }: { discipline: string }) {
  return (
    <Badge className={disciplineStyles[discipline] ?? 'bg-muted text-muted-foreground'}>
      {discipline}
    </Badge>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  action?: { label: string; href: string }
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        action && 'sm:flex-row sm:items-end sm:justify-between',
      )}
    >
      <div className={cn('flex flex-col gap-2', align === 'center' && 'items-center')}>
        {eyebrow && (
          <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-foreground">
            <span className="h-4 w-1 rounded-full bg-saffron" />
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-primary text-balance sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex w-fit items-center text-sm font-semibold text-primary underline-offset-4 hover:text-accent-foreground hover:underline"
        >
          {action.label} →
        </Link>
      )}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string
  title: string
  description: string
  image: string
}) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <img
        src={image || '/placeholder.svg'}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-saffron">
          <span className="h-4 w-1 rounded-full bg-saffron" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
          {description}
        </p>
      </div>
    </section>
  )
}

export function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md',
        className,
      )}
    >
      {children}
    </div>
  )
}
