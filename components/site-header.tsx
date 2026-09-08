'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, Menu, Search, User, X } from 'lucide-react'
import { CfiLogo } from '@/components/cfi-logo'
import { ButtonLink } from '@/components/ui-kit'
import { allNav, moreNav, primaryNav } from '@/lib/nav'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Tricolor top strip */}
      <div className="flex h-1 w-full">
        <span className="flex-1 bg-saffron" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-india-green" />
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Cycling Federation of India — Home">
            <CfiLogo />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary',
                  isActive(item.href) ? 'text-primary' : 'text-foreground/70',
                )}
              >
                {item.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                More
                <ChevronDown className="h-4 w-4" />
              </button>
              {moreOpen && (
                <div className="absolute right-0 top-full w-60 rounded-lg border border-border bg-popover p-2 shadow-lg">
                  {moreNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'block rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary hover:text-primary',
                        isActive(item.href) ? 'text-primary' : 'text-foreground/70',
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </button>
            <ButtonLink href="/contact" size="sm" className="hidden sm:inline-flex">
              <User className="h-4 w-4" />
              Login
            </ButtonLink>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-secondary xl:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-border bg-secondary/60">
            <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                autoFocus
                type="search"
                placeholder="Search athletes, events, results, circulars…"
                className="h-10 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col bg-background shadow-xl">
            <div className="flex items-center justify-between border-b border-border p-4">
              <CfiLogo showText={false} />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-secondary"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile">
              {allNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-secondary',
                    isActive(item.href) ? 'bg-secondary text-primary' : 'text-foreground/80',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="border-t border-border p-4">
              <ButtonLink href="/contact" className="w-full" onClick={() => setMobileOpen(false)}>
                <User className="h-4 w-4" />
                Login
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
