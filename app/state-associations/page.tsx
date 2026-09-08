import type { Metadata } from 'next'
import { Mail, MapPin } from 'lucide-react'
import { PageHero, SectionHeading, StatusBadge, Card } from '@/components/ui-kit'
import { stateAssociations } from '@/lib/data'

export const metadata: Metadata = {
  title: 'State Associations | Cycling Federation of India',
  description: 'Directory of CFI-affiliated state cycling associations across India.',
}

export default function StateAssociationsPage() {
  const affiliated = stateAssociations.filter((s) => s.status === 'Affiliated').length

  return (
    <main>
      <PageHero
        eyebrow="State Associations"
        title="Affiliated State Bodies"
        description="CFI works through a nationwide network of affiliated state cycling associations that develop the sport at the regional and grassroots level."
        image="/images/mtb.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <Card className="p-6 text-center">
            <p className="font-display text-4xl font-bold text-primary">{stateAssociations.length}</p>
            <p className="mt-1 text-sm text-muted-foreground">State Associations Listed</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="font-display text-4xl font-bold text-india-green">{affiliated}</p>
            <p className="mt-1 text-sm text-muted-foreground">Fully Affiliated</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="font-display text-4xl font-bold text-accent-foreground">
              {stateAssociations.length - affiliated}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Provisional</p>
          </Card>
        </div>

        <SectionHeading eyebrow="Directory" title="Association Contacts" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stateAssociations.map((s) => (
            <Card key={s.state} className="p-5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
                    {s.state.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-primary">{s.state}</h3>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {s.city}
                    </p>
                  </div>
                </div>
                <StatusBadge status={s.status} />
              </div>
              <dl className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">President</dt>
                  <dd className="font-medium text-foreground">{s.president}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Secretary</dt>
                  <dd className="font-medium text-foreground">{s.secretary}</dd>
                </div>
                <div className="flex items-center gap-2 pt-1 text-accent-foreground">
                  <Mail className="h-3.5 w-3.5" />
                  <span className="text-xs">
                    {s.state.toLowerCase().replace(/\s+/g, '')}@cyclingfederation.in
                  </span>
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
