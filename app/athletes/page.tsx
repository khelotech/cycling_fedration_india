'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { PageHero } from '@/components/ui-kit'
import { AthleteCard } from '@/components/cards'
import { athletes, disciplines } from '@/lib/data'

const states = ['All States', ...Array.from(new Set(athletes.map((a) => a.state))).sort()]
const genders = ['All', 'Male', 'Female'] as const

export default function AthletesPage() {
  const [query, setQuery] = useState('')
  const [discipline, setDiscipline] = useState('All')
  const [state, setState] = useState('All States')
  const [gender, setGender] = useState<(typeof genders)[number]>('All')

  const filtered = useMemo(() => {
    return athletes.filter((a) => {
      const q = query.trim().toLowerCase()
      const matchesQuery = !q || a.name.toLowerCase().includes(q) || a.id.toLowerCase().includes(q)
      const matchesDiscipline = discipline === 'All' || a.discipline === discipline
      const matchesState = state === 'All States' || a.state === state
      const matchesGender = gender === 'All' || a.gender === gender
      return matchesQuery && matchesDiscipline && matchesState && matchesGender
    })
  }, [query, discipline, state, gender])

  return (
    <main>
      <PageHero
        eyebrow="Athletes"
        title="National Athlete Directory"
        description="Explore India's registered competitive cyclists across road, track, MTB and para cycling. Search by name, athlete ID, state or discipline."
        image="/images/gallery-1.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2 pb-3 text-sm font-semibold text-primary">
            <SlidersHorizontal className="h-4 w-4" />
            Filter Athletes
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Name or Athlete ID"
                className="h-11 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <FilterSelect value={discipline} onChange={setDiscipline} options={['All', ...disciplines]} label="Discipline" />
            <FilterSelect value={state} onChange={setState} options={states} label="State" />
            <FilterSelect value={gender} onChange={(v) => setGender(v as (typeof genders)[number])} options={[...genders]} label="Gender" />
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {athletes.length} athletes
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((athlete) => (
            <AthleteCard key={athlete.id} athlete={athlete} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground">
            No athletes match your filters.
          </div>
        )}
      </section>
    </main>
  )
}

function FilterSelect({
  value,
  onChange,
  options,
  label,
}: {
  value: string
  onChange: (v: string) => void
  options: string[]
  label: string
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o === 'All' ? `All ${label}s` : o}
          </option>
        ))}
      </select>
    </label>
  )
}
