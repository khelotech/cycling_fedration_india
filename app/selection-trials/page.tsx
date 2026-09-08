import type { Metadata } from 'next'
import { CalendarDays, MapPin, Users } from 'lucide-react'
import { PageHero, SectionHeading, DisciplineBadge, StatusBadge, Card } from '@/components/ui-kit'
import type { Discipline } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Selection Trials | Cycling Federation of India',
  description: 'National selection trials for road, track, MTB and para cycling squads.',
}

type Trial = {
  name: string
  discipline: Discipline
  date: string
  venue: string
  slots: number
  status: 'Registration Open' | 'Upcoming' | 'Completed'
}

const trials: Trial[] = [
  { name: 'National Road Squad Trial — Asian Champs', discipline: 'Road', date: '15–17 Dec 2025', venue: 'Chandigarh', slots: 60, status: 'Registration Open' },
  { name: 'Track Endurance Selection Trial', discipline: 'Track', date: '9–11 Jan 2026', venue: 'IGI Velodrome, Delhi', slots: 40, status: 'Upcoming' },
  { name: 'MTB National Squad Trial', discipline: 'MTB', date: '5–6 Nov 2025', venue: 'Gangtok', slots: 30, status: 'Completed' },
  { name: 'Para Cycling Classification & Trial', discipline: 'Para Cycling', date: '20–22 Dec 2025', venue: 'Kochi', slots: 25, status: 'Registration Open' },
]

const process = [
  { step: 'Registration', desc: 'Eligible athletes register online through their state association.' },
  { step: 'Start List', desc: 'Confirmed participants and heat allocations are published.' },
  { step: 'Trial & Timing', desc: 'Officials and timekeepers record performances under UCI rules.' },
  { step: 'Selection', desc: 'The selection committee names the national squad and publishes results.' },
]

export default function SelectionTrialsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Selection Trials"
        title="Earning the National Jersey"
        description="Transparent, performance-based selection trials across all disciplines determine the athletes who represent India internationally."
        image="/images/track.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Schedule" title="Upcoming Trials" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {trials.map((t) => (
            <Card key={t.name} className="p-6">
              <div className="flex items-start justify-between gap-3">
                <DisciplineBadge discipline={t.discipline} />
                <StatusBadge status={t.status} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary text-balance">{t.name}</h3>
              <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-accent-foreground" /> {t.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-foreground" /> {t.venue}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-accent-foreground" /> {t.slots} athlete slots
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="The Selection Process" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Card key={p.step} className="p-6">
                <span className="font-display text-3xl font-bold text-saffron">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-primary">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
