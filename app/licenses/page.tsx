import type { Metadata } from 'next'
import { BadgeCheck, CreditCard, FileCheck2, QrCode, ShieldCheck, Upload } from 'lucide-react'
import { PageHero, SectionHeading, Card, ButtonLink } from '@/components/ui-kit'

export const metadata: Metadata = {
  title: 'Licenses | Cycling Federation of India',
  description: 'Apply for and renew your national cycling license online with CFI.',
}

const workflow = [
  { icon: FileCheck2, title: 'Application', desc: 'Complete the online application with your athlete and category details.' },
  { icon: Upload, title: 'Document Upload', desc: 'Upload ID, photo, medical clearance and state endorsement.' },
  { icon: CreditCard, title: 'Payment', desc: 'Pay the applicable annual license fee securely online.' },
  { icon: ShieldCheck, title: 'Admin Review', desc: 'CFI verifies your documents and eligibility.' },
  { icon: BadgeCheck, title: 'Approval', desc: 'On approval your license is activated for the season.' },
  { icon: QrCode, title: 'Digital License', desc: 'Download your QR-verifiable digital license instantly.' },
]

const fees = [
  { type: 'Athlete — Elite/U23', price: '₹1,500', period: 'per year' },
  { type: 'Athlete — Junior/Youth', price: '₹800', period: 'per year' },
  { type: 'Coach', price: '₹2,000', period: 'per year' },
  { type: 'Technical Official', price: '₹1,200', period: 'per year' },
]

export default function LicensesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Licenses"
        title="National Cycling License"
        description="A valid CFI license is required to compete in all sanctioned events. Apply, renew, track and download your digital license entirely online."
        image="/images/gallery-1.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="How Licensing Works"
          description="A fully digital workflow from application to a QR-verifiable license."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workflow.map((w, i) => (
            <Card key={w.title} className="p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <w.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-2xl font-bold text-border">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Fees" title="License Fee Structure" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fees.map((f) => (
              <Card key={f.type} className="p-6 text-center">
                <p className="text-sm font-medium text-muted-foreground">{f.type}</p>
                <p className="mt-3 font-display text-3xl font-bold text-primary">{f.price}</p>
                <p className="text-xs text-muted-foreground">{f.period}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-primary p-10 text-center text-primary-foreground">
            <QrCode className="h-12 w-12 text-saffron" />
            <div>
              <h3 className="font-display text-2xl font-bold uppercase">Ready to Apply?</h3>
              <p className="mx-auto mt-2 max-w-xl text-primary-foreground/80">
                Start a new application or renew your existing license in minutes. Track your
                status and download your digital license anytime.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact" variant="accent" size="lg">
                New Application
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghostLight" size="lg">
                Renew License
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
