import type { NavLink } from '../types'

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'About', isActive: true },
  { href: '/publications', label: 'Publications', isActive: false },
  { href: '/talks', label: 'Talks', isActive: false },
  { href: '/teaching', label: 'Teaching', isActive: false },
  { href: '/projects', label: 'Projects', isActive: true },
  { href: '/posts', label: 'Blog', isActive: false },
  { href: '/tags', label: 'Tags', isActive: false },
  { href: '/resume', label: 'Resume', isActive: true },
]
