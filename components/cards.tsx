import Link from 'next/link'
import { CalendarDays, MapPin, Trophy } from 'lucide-react'
import type { Athlete, Championship, CyclingEvent, NewsItem } from '@/lib/data'
import { Card, DisciplineBadge, StatusBadge } from '@/components/ui-kit'

function formatRange(start: string, end: string) {
  const s = new Date(start)
  const e = new Date(end)
  const month = (d: Date) => d.toLocaleDateString('en-IN', { month: 'short' })
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return `${s.getDate()}–${e.getDate()} ${month(e)} ${e.getFullYear()}`
  }
  return `${s.getDate()} ${month(s)} – ${e.getDate()} ${month(e)} ${e.getFullYear()}`
}

export function EventCard({ event }: { event: CyclingEvent }) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={event.image || '/placeholder.svg'}
          alt={event.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <StatusBadge status={event.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2">
          <DisciplineBadge discipline={event.discipline} />
          <span className="text-xs font-medium text-muted-foreground">{event.type}</span>
        </div>
        <h3 className="font-display text-lg font-semibold leading-tight text-primary text-balance">
          {event.name}
        </h3>
        <div className="mt-auto space-y-1.5 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-accent-foreground" />
            {formatRange(event.startDate, event.endDate)}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent-foreground" />
            {event.city}, {event.state}
          </p>
        </div>
      </div>
    </Card>
  )
}

export function AthleteCard({ athlete }: { athlete: Athlete }) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={athlete.image || '/placeholder.svg'}
          alt={athlete.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 pt-10">
          <div className="mb-1.5">
            <DisciplineBadge discipline={athlete.discipline} />
          </div>
          <h3 className="font-display text-lg font-semibold text-white">{athlete.name}</h3>
          <p className="text-sm text-white/75">
            {athlete.state} · Rank #{athlete.ranking}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 p-4 text-sm">
        <span className="text-muted-foreground">{athlete.category}</span>
        <span className="flex items-center gap-1 font-semibold text-primary">
          <Trophy className="h-4 w-4 text-saffron" />
          {athlete.medals.gold}G {athlete.medals.silver}S {athlete.medals.bronze}B
        </span>
      </div>
    </Card>
  )
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card className="group flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image || '/placeholder.svg'}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-semibold uppercase tracking-wide text-accent-foreground">
            {item.category}
          </span>
          <span>·</span>
          <span>{new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
        </div>
        <h3 className="font-display text-lg font-semibold leading-tight text-primary text-balance">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
        <Link
          href="/media"
          className="mt-auto pt-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </Card>
  )
}

export function ChampionshipCard({ championship }: { championship: Championship }) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={championship.image || '/placeholder.svg'}
          alt={championship.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <DisciplineBadge discipline={championship.discipline} />
          <StatusBadge status={championship.status} />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-xl font-bold text-white text-balance">
            {championship.name}
          </h3>
          <p className="text-sm text-white/80">{championship.location} · {championship.year}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 divide-x divide-border">
        <div className="p-4 text-center">
          <p className="font-display text-2xl font-bold text-primary">{championship.categories}</p>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Categories</p>
        </div>
        <div className="p-4 text-center">
          <p className="font-display text-2xl font-bold text-primary">{championship.participants}</p>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Participants</p>
        </div>
      </div>
    </Card>
  )
}
