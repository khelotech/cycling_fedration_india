export type NavItem = { label: string; href: string }

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Athletes', href: '/athletes' },
  { label: 'Events', href: '/events' },
  { label: 'Championships', href: '/championships' },
  { label: 'Results & Rankings', href: '/results' },
]

export const moreNav: NavItem[] = [
  { label: 'Selection Trials', href: '/selection-trials' },
  { label: 'Licenses', href: '/licenses' },
  { label: 'Circulars', href: '/circulars' },
  { label: 'Para Cycling', href: '/para-cycling' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'Media', href: '/media' },
  { label: 'Partners', href: '/partners' },
  { label: 'State Associations', href: '/state-associations' },
]

export const allNav: NavItem[] = [
  ...primaryNav,
  ...moreNav,
  { label: 'Contact', href: '/contact' },
]
