import { ArrowRight, CalendarDays } from 'lucide-react'
import { ButtonLink } from '@/components/ui-kit'
import { stats } from '@/lib/data'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <img
        src="/images/hero.png"
        alt="Professional road cycling peloton racing at speed"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/20">
            <span className="h-2 w-2 rounded-full bg-saffron" />
            Official Body · Road · Track · MTB · Para Cycling
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
            Powering India&apos;s Cycling Champions
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
            The Cycling Federation of India governs, develops and promotes
            competitive cycling nationwide — from grassroots talent to the world
            stage. Explore events, athletes, results and rankings across every
            discipline.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/events" variant="accent" size="lg">
              <CalendarDays className="h-5 w-5" />
              Upcoming Events
            </ButtonLink>
            <ButtonLink href="/athletes" variant="ghostLight" size="lg">
              Athlete Registration
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
          </div>
        </div>

        <dl className="mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15 ring-1 ring-white/15 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-primary/60 p-5 backdrop-blur-sm">
              <dt className="font-display text-3xl font-bold text-white sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-white/70">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
