'use client'

import { useState } from 'react'
import { Building2, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero, Card } from '@/components/ui-kit'

const departments = [
  { name: 'Athlete Registration', email: 'athletes@cyclingfederation.in' },
  { name: 'Events & Competitions', email: 'events@cyclingfederation.in' },
  { name: 'Licenses', email: 'licenses@cyclingfederation.in' },
  { name: 'Media & Press', email: 'media@cyclingfederation.in' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch With CFI"
        description="Reach the Cycling Federation of India for athlete registration, event queries, licensing, media requests and general enquiries."
        image="/images/gallery-2.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: info */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-accent-foreground" />
                <h2 className="font-display text-lg font-bold uppercase text-primary">Registered Office</h2>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                CFI House, Indira Gandhi Stadium Complex,
                <br />
                Indraprastha Estate, New Delhi 110002
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent-foreground" />
                <h2 className="font-display text-lg font-bold uppercase text-primary">Correspondence Office</h2>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                National Cycling Academy, IGI Velodrome,
                <br />
                New Delhi 110002
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-accent-foreground" /> +91 11 2345 6789
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-accent-foreground" /> info@cyclingfederation.in
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="font-display text-lg font-bold uppercase text-primary">Department Contacts</h2>
              <ul className="mt-4 divide-y divide-border">
                {departments.map((d) => (
                  <li key={d.name} className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm">
                    <span className="font-medium text-foreground">{d.name}</span>
                    <span className="text-muted-foreground">{d.email}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="CFI location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.2385%2C28.6260%2C77.2530%2C28.6360&layer=mapnik&marker=28.6310%2C77.2457"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: form */}
          <Card className="h-fit p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold uppercase text-primary">Send Us a Message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We typically respond within two working days.
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center gap-4 rounded-lg bg-india-green/10 p-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-india-green" />
                <div>
                  <p className="font-display text-lg font-bold text-primary">Message Sent</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thank you for contacting CFI. Our team will be in touch shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" id="name" required />
                  <Field label="Email" id="email" type="email" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" id="phone" type="tel" />
                  <Field label="Subject" id="subject" required />
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-foreground">Message</span>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </label>
                {/* Honeypot for spam protection */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <label className="flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" required className="mt-1" />
                  <span>I confirm I am not a robot and consent to CFI processing this enquiry.</span>
                </label>
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Submit Message
                </button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </main>
  )
}

function Field({
  label,
  id,
  type = 'text',
  required,
}: {
  label: string
  id: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
      />
    </label>
  )
}
