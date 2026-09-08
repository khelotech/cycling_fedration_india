import type { Metadata } from 'next'
import { Building2, Flag, Globe2, Target } from 'lucide-react'
import { PageHero, SectionHeading, Card } from '@/components/ui-kit'
import { officials, partners, stats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About CFI | Cycling Federation of India',
  description:
    'History, vision, mission, governance and affiliations of the Cycling Federation of India.',
}

const affiliations = [
  'Union Cycliste Internationale (UCI)',
  'Asian Cycling Confederation (ACC)',
  'Indian Olympic Association (IOA)',
  'Ministry of Youth Affairs & Sports',
  'Sports Authority of India (SAI)',
  'National Anti-Doping Agency (NADA)',
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About CFI"
        title="Governing Cycling in India Since 1946"
        description="The Cycling Federation of India is the sole national governing body for competitive cycling, recognised by the Government of India and affiliated to the UCI."
        image="/images/gallery-2.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Our Story" title="Who We Are" />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                The Cycling Federation of India (CFI) is the apex body responsible
                for the promotion, development and governance of competitive cycling
                across the country. Established to unify state associations under a
                single national framework, CFI organises national championships,
                selection trials and development programmes spanning road, track,
                mountain biking and para cycling.
              </p>
              <p>
                As the recognised national federation, CFI selects and prepares
                India&apos;s representative teams for continental and world
                competitions, upholds the technical regulations of the sport, and
                works closely with the Government of India and the Sports Authority
                of India to build world-class infrastructure and talent pathways.
              </p>
              <p>
                From grassroots talent identification to elite performance on the
                international stage, CFI is committed to clean, competitive and
                inclusive cycling for every rider in India.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-6">
              <Flag className="h-8 w-8 text-saffron" />
              <h3 className="mt-4 font-display text-lg font-bold uppercase text-primary">History</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Founded in 1946, CFI has grown from a handful of state units into a
                national federation with affiliated associations across India.
              </p>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((s) => (
                <Card key={s.label} className="p-5 text-center">
                  <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-secondary/50 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Card className="p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold uppercase text-primary">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To establish India as a leading cycling nation, producing world-class
              athletes who compete for medals at the Olympic, World and Asian
              Championships while inspiring a nationwide cycling culture.
            </p>
          </Card>
          <Card className="p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron/20 text-accent-foreground">
              <Globe2 className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold uppercase text-primary">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To develop cycling at every level through fair competition, robust
              governance, athlete welfare, modern infrastructure and transparent
              selection, ensuring opportunity for every rider across all disciplines.
            </p>
          </Card>
        </div>
      </section>

      {/* Governance / Office bearers */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Governance"
          title="Office Bearers"
          description="CFI is governed by an elected Executive Committee supported by commissions and an administrative team."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {officials.map((o) => (
            <Card key={o.name} className="p-6 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary font-display text-xl font-bold text-primary-foreground">
                {o.name.split(' ').map((n) => n[0]).join('')}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary">{o.name}</h3>
              <p className="text-sm font-medium text-accent-foreground">{o.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.bio}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Affiliations */}
      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recognition"
            title="Affiliations & Partners"
            description="CFI operates under national and international sporting frameworks."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {affiliations.map((a) => (
              <Card key={a} className="flex items-center gap-3 p-5">
                <Building2 className="h-5 w-5 shrink-0 text-accent-foreground" />
                <span className="font-medium text-foreground">{a}</span>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Working alongside {partners.length} national and international partner organisations.
          </p>
        </div>
      </section>
    </main>
  )
}
