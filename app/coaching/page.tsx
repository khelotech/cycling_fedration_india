import type { Metadata } from 'next'
import { GraduationCap, Bike, HeartPulse, LineChart } from 'lucide-react'
import { PageHero, SectionHeading, Card, ButtonLink } from '@/components/ui-kit'

export const metadata: Metadata = {
  title: 'Coaching | Cycling Federation of India',
  description: 'CFI coaching education, certification levels and development programmes.',
}

const levels = [
  { level: 'Level 1', title: 'Community Coach', desc: 'Foundation coaching for clubs and schools — safety, basic skills and talent spotting.' },
  { level: 'Level 2', title: 'Development Coach', desc: 'Structured training, race preparation and athlete development for state programmes.' },
  { level: 'Level 3', title: 'Performance Coach', desc: 'High-performance coaching, periodisation and data-driven programme design.' },
  { level: 'Elite', title: 'National Coach', desc: 'UCI-aligned certification for coaching national and international squads.' },
]

const focus = [
  { icon: Bike, title: 'Technical Skills', desc: 'Bike handling, race craft and discipline-specific technique.' },
  { icon: HeartPulse, title: 'Sports Science', desc: 'Physiology, nutrition, recovery and athlete welfare.' },
  { icon: LineChart, title: 'Performance Analysis', desc: 'Power data, testing protocols and structured periodisation.' },
]

export default function CoachingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Coaching"
        title="Building India's Coaching Force"
        description="CFI's coaching education pathway certifies coaches at every level, equipping them to develop riders from grassroots clubs to the national squad."
        image="/images/mtb.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Pathway" title="Certification Levels" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((l) => (
            <Card key={l.level} className="p-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-saffron/20 px-3 py-1 text-xs font-semibold text-accent-foreground">
                <GraduationCap className="h-3.5 w-3.5" /> {l.level}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Curriculum" title="What Coaches Learn" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {focus.map((f) => (
              <Card key={f.title} className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/contact" size="lg">
              Enquire About Coaching Courses
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}
