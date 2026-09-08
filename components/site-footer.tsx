import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { CfiLogo } from '@/components/cfi-logo'
import { allNav } from '@/lib/nav'

export function SiteFooter() {
  const year = new Date().getFullYear()
  const cols = [
    allNav.slice(0, 5),
    allNav.slice(5, 10),
    allNav.slice(10),
  ]

  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <CfiLogo invert />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              The national governing body for competitive cycling in India,
              affiliated to the UCI and Asian Cycling Confederation, developing
              athletes across road, track, MTB and para cycling.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                CFI House, Indira Gandhi Stadium Complex, New Delhi 110002
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-saffron" />
                +91 11 2345 6789
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-saffron" />
                info@cyclingfederation.in
              </li>
            </ul>
          </div>

          {cols.map((col, i) => (
            <nav key={i} aria-label={`Footer navigation ${i + 1}`}>
              <ul className="space-y-2.5 text-sm">
                {col.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-primary-foreground/70 transition-colors hover:text-saffron"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Cycling Federation of India. All rights reserved.</p>
          <p>Affiliated to UCI · Asian Cycling Confederation · Indian Olympic Association</p>
        </div>
      </div>
    </footer>
  )
}
