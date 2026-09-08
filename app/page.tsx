import Link from 'next/link'
import { ArrowRight, FileText, TrendingDown, TrendingUp } from 'lucide-react'
import { HomeHero } from '@/components/home-hero'
import { AthleteCard, ChampionshipCard, EventCard, NewsCard } from '@/components/cards'
import { ButtonLink, Card, SectionHeading } from '@/components/ui-kit'
import {
  athletes,
  championships,
  circulars,
  events,
  gallery,
  news,
  partners,
  rankings,
  results,
} from '@/lib/data'

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      {/* Featured Events */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Compete"
          title="Featured Events"
          description="National championships, series rounds and stage races across every discipline."
          action={{ label: 'View all events', href: '/events' }}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Upcoming Championships */}
      <section className="bg-secondary/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Flagship"
            title="Upcoming Championships"
            description="India's premier national cycling championships, sanctioned and ranked by CFI."
            action={{ label: 'All championships', href: '/championships' }}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {championships.slice(0, 2).map((championship) => (
              <ChampionshipCard key={championship.id} championship={championship} />
            ))}
          </div>
        </div>
      </section>

      {/* Results + Rankings */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Latest"
              title="Recent Results"
              action={{ label: 'All results', href: '/results' }}
            />
            <Card className="mt-8 overflow-hidden">
              <ul className="divide-y divide-border">
                {results.slice(0, 5).map((r, i) => (
                  <li key={i} className="flex items-center gap-4 p-4">
                    <span
                      className={
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ' +
                        (r.position === 1
                          ? 'bg-saffron text-saffron-foreground'
                          : 'bg-secondary text-primary')
                      }
                    >
                      {r.position}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-foreground">{r.athlete}</p>
                      <p className="truncate text-sm text-muted-foreground">
                        {r.event} · {r.category}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-sm text-muted-foreground">{r.time}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div>
            <SectionHeading
              eyebrow="Latest"
              title="Top Rankings"
              action={{ label: 'All rankings', href: '/results' }}
            />
            <Card className="mt-8 overflow-hidden">
              <ul className="divide-y divide-border">
                {rankings.slice(0, 5).map((r, i) => (
                  <li key={i} className="flex items-center gap-4 p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                      {r.rank}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-foreground">{r.athlete}</p>
                      <p className="truncate text-sm text-muted-foreground">
                        {r.state} · {r.discipline}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="font-display text-base font-bold text-primary">{r.points}</span>
                      {r.previousRank > r.rank ? (
                        <TrendingUp className="h-4 w-4 text-india-green" />
                      ) : r.previousRank < r.rank ? (
                        <TrendingDown className="h-4 w-4 text-destructive" />
                      ) : (
                        <span className="h-4 w-4 text-center text-xs text-muted-foreground">–</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Circulars */}
      <section className="bg-secondary/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Official"
            title="Latest Circulars"
            description="Selection policies, notices, regulations and federation announcements."
            action={{ label: 'Document repository', href: '/circulars' }}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {circulars.slice(0, 4).map((c) => (
              <Card key={c.id} className="flex items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-semibold uppercase tracking-wide text-accent-foreground">
                      {c.category}
                    </span>
                    <span>·</span>
                    <span>{new Date(c.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <h3 className="font-semibold leading-snug text-foreground text-balance">{c.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Athletes */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Talent"
          title="Featured Athletes"
          description="Meet the national riders leading India's charge across road, track, MTB and para cycling."
          action={{ label: 'Athlete directory', href: '/athletes' }}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {athletes.slice(0, 4).map((athlete) => (
            <AthleteCard key={athlete.id} athlete={athlete} />
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-secondary/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Newsroom"
            title="Latest News"
            action={{ label: 'All news & media', href: '/media' }}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Gallery"
          title="From The Race"
          description="Moments from national championships and camps across the country."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {gallery.map((g, i) => (
            <div
              key={i}
              className={
                'group relative overflow-hidden rounded-xl ' +
                (i === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : '')
              }
            >
              <img
                src={g.src || '/placeholder.svg'}
                alt={g.title}
                loading="lazy"
                className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <div>
                  <p className="text-sm font-semibold text-white">{g.title}</p>
                  <p className="text-xs text-white/70">{g.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-border bg-background py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Partners &amp; Affiliations
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <div
                key={p}
                className="flex items-center justify-center rounded-lg border border-border bg-card p-4 text-center text-xs font-medium leading-tight text-muted-foreground"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary">
        <img src="/images/track.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
              Join the movement. Ride for India.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-white/80">
              Register as an athlete, apply for your national license, or affiliate
              your state association with the Cycling Federation of India.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/licenses" variant="accent" size="lg">
              Apply for License
            </ButtonLink>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 text-base font-semibold text-white transition-colors hover:bg-white/20"
            >
              Contact CFI
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
