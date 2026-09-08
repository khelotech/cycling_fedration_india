import type { Metadata } from 'next'
import { CalendarCheck, FileText, ListChecks, MapPin, Medal, Users } from 'lucide-react'
import { PageHero, SectionHeading, Card } from '@/components/ui-kit'
import { ChampionshipCard } from '@/components/cards'
import { championships } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Championships | Cycling Federation of India',
  description:
    'National cycling championships across road, track, MTB and para cycling — overview, schedules, participants and results.',
}

const supports = [
  { icon: CalendarCheck, label: 'Schedule' },
  { icon: MapPin, label: 'Venue & Categories' },
  { icon: Users, label: 'Participants & Start Lists' },
  { icon: Medal, label: 'Results & Rankings' },
  { icon: FileText, label: 'Circulars & Documents' },
  { icon: ListChecks, label: 'Gallery' },
]

export default function ChampionshipsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Championships"
        title="India's Flagship Cycling Championships"
        description="Every national championship is fully documented with schedules, categories, participant lists, start lists, results and galleries."
        image="/images/track.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="2025–26 Season"
          title="Championship Programme"
          description="Sanctioned national championships carrying official CFI ranking points."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {championships.map((championship) => (
            <ChampionshipCard key={championship.id} championship={championship} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's Covered"
            title="Every Championship, Fully Documented"
            description="Each championship page on the CFI portal brings together everything athletes, officials and fans need."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supports.map((s) => (
              <Card key={s.label} className="flex items-center gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-semibold text-foreground">{s.label}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
