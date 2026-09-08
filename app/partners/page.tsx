import type { Metadata } from 'next'
import { Download, Handshake, Megaphone, Trophy, Users } from 'lucide-react'
import { PageHero, SectionHeading, Card, ButtonLink } from '@/components/ui-kit'
import { partners } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Partners & Sponsors | Cycling Federation of India',
  description: 'Partnership and sponsorship opportunities with the Cycling Federation of India.',
}

const opportunities = [
  { icon: Trophy, title: 'Title Sponsorship', desc: 'Headline national championships and series with premium brand visibility.' },
  { icon: Users, title: 'Team Partnership', desc: 'Support the national squad across kit, equipment and travel.' },
  { icon: Megaphone, title: 'Event Sponsorship', desc: 'Activate your brand at high-profile races across India.' },
  { icon: Handshake, title: 'Development Partner', desc: 'Invest in grassroots and para cycling programmes nationwide.' },
]

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Partners & Sponsors"
        title="Partner With Indian Cycling"
        description="Align your brand with one of India's fastest-growing Olympic sports and reach a passionate, nationwide audience of athletes and fans."
        image="/images/hero.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Network" title="Partners & Affiliations" />
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p}
              className="flex items-center justify-center rounded-lg border border-border bg-card p-5 text-center text-xs font-medium leading-tight text-muted-foreground shadow-sm"
            >
              {p}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Opportunities"
            title="Sponsorship Opportunities"
            description="Flexible partnership packages tailored to your brand's objectives and reach."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((o) => (
              <Card key={o.title} className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <o.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary p-8 text-primary-foreground sm:flex-row">
            <div>
              <h3 className="font-display text-2xl font-bold uppercase">Become a CFI Partner</h3>
              <p className="mt-2 max-w-xl text-primary-foreground/80">
                Download our sponsorship brochure or send an enquiry to discuss a bespoke partnership.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="accent" size="lg">
                Sponsorship Enquiry
              </ButtonLink>
              <button className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 text-base font-semibold text-white transition-colors hover:bg-white/20">
                <Download className="h-5 w-5" />
                Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
