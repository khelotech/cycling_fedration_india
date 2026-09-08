import type { Metadata } from 'next'
import { PageHero, SectionHeading } from '@/components/ui-kit'
import { NewsCard } from '@/components/cards'
import { gallery, news } from '@/lib/data'

export const metadata: Metadata = {
  title: 'News & Media | Cycling Federation of India',
  description: 'Latest news, press releases, announcements, photos and media coverage from CFI.',
}

const pressReleases = [
  { title: 'CFI Announces National Talent Identification Programme', date: '2025-08-30' },
  { title: 'Statement on 2026 International Racing Calendar', date: '2025-08-15' },
  { title: 'CFI Signs Development Partnership With State Academies', date: '2025-07-28' },
  { title: 'Anti-Doping Awareness Week Concludes Successfully', date: '2025-07-10' },
]

export default function MediaPage() {
  return (
    <main>
      <PageHero
        eyebrow="News & Media"
        title="The CFI Newsroom"
        description="Official news, press releases, announcements and a photo archive from national cycling events across India."
        image="/images/hero.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Newsroom" title="Latest News" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Official" title="Press Releases" />
            <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
              {pressReleases.map((p) => (
                <li key={p.title} className="flex items-center justify-between gap-4 p-5">
                  <span className="font-medium text-foreground text-balance">{p.title}</span>
                  <span className="shrink-0 text-sm text-muted-foreground">
                    {new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Archive" title="Photo Gallery" />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {gallery.map((g, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl">
                  <img
                    src={g.src || '/placeholder.svg'}
                    alt={g.title}
                    loading="lazy"
                    className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-xs font-semibold text-white">{g.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
