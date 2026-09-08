'use client'

import { useMemo, useState } from 'react'
import { Minus, TrendingDown, TrendingUp } from 'lucide-react'
import { PageHero } from '@/components/ui-kit'
import { DisciplineBadge } from '@/components/ui-kit'
import { disciplines, rankings, results } from '@/lib/data'

type Tab = 'results' | 'rankings'

export default function ResultsPage() {
  const [tab, setTab] = useState<Tab>('results')
  const [discipline, setDiscipline] = useState('All')

  const filteredResults = useMemo(
    () => results.filter((r) => discipline === 'All' || r.discipline === discipline),
    [discipline],
  )
  const filteredRankings = useMemo(
    () => rankings.filter((r) => discipline === 'All' || r.discipline === discipline),
    [discipline],
  )

  return (
    <main>
      <PageHero
        eyebrow="Results & Rankings"
        title="Race Results & National Rankings"
        description="Searchable results from every sanctioned event and the official national ranking standings across all disciplines."
        image="/images/gallery-1.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex gap-2 rounded-lg border border-border bg-card p-1">
          <TabButton active={tab === 'results'} onClick={() => setTab('results')}>
            Results
          </TabButton>
          <TabButton active={tab === 'rankings'} onClick={() => setTab('rankings')}>
            Rankings
          </TabButton>
        </div>

        {/* Discipline filter */}
        <div className="mt-6 flex flex-wrap gap-2">
          {['All', ...disciplines].map((d) => (
            <button
              key={d}
              onClick={() => setDiscipline(d)}
              className={
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors ' +
                (discipline === d
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-background text-muted-foreground hover:bg-secondary')
              }
            >
              {d}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          {tab === 'results' ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/60 text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="px-4 py-3 font-semibold">Pos</th>
                    <th className="px-4 py-3 font-semibold">Athlete</th>
                    <th className="px-4 py-3 font-semibold">State</th>
                    <th className="px-4 py-3 font-semibold">Event</th>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Time</th>
                    <th className="px-4 py-3 text-right font-semibold">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.map((r, i) => (
                    <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/40">
                      <td className="px-4 py-3">
                        <span
                          className={
                            'inline-flex h-7 w-7 items-center justify-center rounded-full font-display text-xs font-bold ' +
                            (r.position === 1 ? 'bg-saffron text-saffron-foreground' : 'bg-secondary text-primary')
                          }
                        >
                          {r.position}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-foreground">{r.athlete}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.state}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.event}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.category}</td>
                      <td className="px-4 py-3 font-mono text-muted-foreground">{r.time}</td>
                      <td className="px-4 py-3 text-right font-semibold text-primary">{r.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/60 text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="px-4 py-3 font-semibold">Rank</th>
                    <th className="px-4 py-3 font-semibold">Athlete</th>
                    <th className="px-4 py-3 font-semibold">State</th>
                    <th className="px-4 py-3 font-semibold">Discipline</th>
                    <th className="px-4 py-3 text-center font-semibold">Events</th>
                    <th className="px-4 py-3 text-right font-semibold">Points</th>
                    <th className="px-4 py-3 text-center font-semibold">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRankings.map((r, i) => (
                    <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/40">
                      <td className="px-4 py-3">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">
                          {r.rank}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-foreground">{r.athlete}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.state}</td>
                      <td className="px-4 py-3">
                        <DisciplineBadge discipline={r.discipline} />
                      </td>
                      <td className="px-4 py-3 text-center text-muted-foreground">{r.events}</td>
                      <td className="px-4 py-3 text-right font-semibold text-primary">{r.points}</td>
                      <td className="px-4 py-3">
                        <span className="flex items-center justify-center">
                          {r.previousRank > r.rank ? (
                            <TrendingUp className="h-4 w-4 text-india-green" />
                          ) : r.previousRank < r.rank ? (
                            <TrendingDown className="h-4 w-4 text-destructive" />
                          ) : (
                            <Minus className="h-4 w-4 text-muted-foreground" />
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function TabButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={
        'flex-1 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors sm:flex-none sm:px-8 ' +
        (active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary')
      }
    >
      {children}
    </button>
  )
}
