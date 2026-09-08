'use client'

import { useMemo, useState } from 'react'
import { Download, Eye, FileText, Search } from 'lucide-react'
import { PageHero, Badge } from '@/components/ui-kit'
import { circulars } from '@/lib/data'

const categories = ['All', ...Array.from(new Set(circulars.map((c) => c.category)))]

export default function CircularsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return circulars.filter((c) => {
      const q = query.trim().toLowerCase()
      const matchesQuery = !q || c.title.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)
      const matchesCategory = category === 'All' || c.category === category
      return matchesQuery && matchesCategory
    })
  }, [query, category])

  return (
    <main>
      <PageHero
        eyebrow="Circulars & Documents"
        title="Official Document Repository"
        description="Circulars, notices, regulations, selection policies and federation documents — searchable by category and keyword."
        image="/images/gallery-2.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative mb-6 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documents by title or reference"
            className="h-11 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors ' +
                (category === c
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-background text-muted-foreground hover:bg-secondary')
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <Badge className="bg-saffron/20 text-accent-foreground">{c.category}</Badge>
                  <span>{c.id}</span>
                  <span>·</span>
                  <span>{new Date(c.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <h3 className="font-semibold leading-snug text-foreground text-balance">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                  <Eye className="h-4 w-4" /> View
                </button>
                <button className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  <Download className="h-4 w-4" /> Download
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground">
              No documents match your search.
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
