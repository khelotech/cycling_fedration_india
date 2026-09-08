'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { PageHero } from '@/components/ui-kit'
import { EventCard } from '@/components/cards'
import { disciplines, events } from '@/lib/data'

const statuses = ['All', 'Registration Open', 'Upcoming', 'Registration Closed', 'Completed'] as const

export default function EventsPage() {
  const [query, setQuery] = useState('')
  const [discipline, setDiscipline] = useState('All')
  const [status, setStatus] = useState('All')

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q || e.name.toLowerCase().includes(q) || e.city.toLowerCase().includes(q) || e.state.toLowerCase().includes(q)
      const matchesDiscipline = discipline === 'All' || e.discipline === discipline
      const matchesStatus = status === 'All' || e.status === status
      return matchesQuery && matchesDiscipline && matchesStatus
    })
  }, [query, discipline, status])

  return (
    <main>
      <PageHero
        eyebrow="Events"
        title="National Cycling Calendar"
        description="Championships, series rounds, stage races and selection trials sanctioned by the Cycling Federation of India."
        image="/images/hero.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events, city or state"
              className="h-11 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', ...disciplines].map((d) => (
              <Chip key={d} active={discipline === d} onClick={() => setDiscipline(d)}>
                {d}
              </Chip>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {statuses.map((s) => (
            <Chip key={s} active={status === s} onClick={() => setStatus(s)} subtle>
              {s}
            </Chip>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {events.length} events
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground">
            No events match your filters.
          </div>
        )}
      </section>
    </main>
  )
}

function Chip({
  children,
  active,
  onClick,
  subtle,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
  subtle?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={
        'rounded-full px-4 py-1.5 text-sm font-medium transition-colors ' +
        (active
          ? subtle
            ? 'bg-saffron text-saffron-foreground'
            : 'bg-primary text-primary-foreground'
          : 'border border-border bg-background text-muted-foreground hover:bg-secondary')
      }
    >
      {children}
    </button>
  )
}
