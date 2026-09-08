import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, SectionHeading, Card } from '@/components/ui-kit'
import { AthleteCard, EventCard } from '@/components/cards'
import { athletes, events } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Para Cycling | Cycling Federation of India',
  description: 'Dedicated para cycling programme — athletes, events, classification, results and documents.',
}

const paraAthletes = athletes.filter((a) => a.discipline === 'Para Cycling')
const paraEvents = events.filter((e) => e.discipline === 'Para Cycling')

const sections = ['About', 'Athletes', 'Events', 'Selection Trials', 'Results', 'Classification', 'Documents', 'Contact']

export default function ParaCyclingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Para Cycling"
        title="Cycling Without Limits"
        description="CFI's dedicated para cycling programme develops classified athletes across C, H, T and B categories, building a pathway from talent identification to the Paralympic stage."
        image="/images/para.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="About" title="An Inclusive Programme" />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Para cycling is an integral pillar of the Cycling Federation of
                India. Our programme provides classified competition, coaching and
                equipment support for athletes with physical and visual impairments
                across road and track disciplines.
              </p>
              <p>
                Working with national classifiers and partner academies, CFI runs
                dedicated selection trials, classification camps and a national para
                road series that feeds directly into India&apos;s international para
                cycling squad.
              </p>
            </div>
          </div>
          <Card className="p-6">
            <h3 className="font-display text-lg font-bold uppercase text-primary">Explore</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {sections.map((s) => (
                <li key={s} className="rounded-lg bg-secondary px-3 py-2 text-muted-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Talent"
            title="Para Athletes"
            action={{ label: 'Full directory', href: '/athletes' }}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {paraAthletes.map((a) => (
              <AthleteCard key={a.id} athlete={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Compete"
          title="Para Cycling Events"
          action={{ label: 'All events', href: '/events' }}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paraEvents.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
        <div className="mt-10 rounded-xl bg-primary p-8 text-center text-primary-foreground">
          <h3 className="font-display text-2xl font-bold uppercase">Get Classified & Compete</h3>
          <p className="mx-auto mt-2 max-w-xl text-primary-foreground/80">
            Register for the national classification camp to begin your para cycling journey with CFI.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex h-11 items-center rounded-lg bg-saffron px-6 font-semibold text-saffron-foreground transition-colors hover:bg-saffron/90"
          >
            Contact the Para Programme
          </Link>
        </div>
      </section>
    </main>
  )
}
