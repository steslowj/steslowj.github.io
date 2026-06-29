import type { PagesConfig } from '../types'

export const PAGES: PagesConfig = {
  home: {
    title: 'About Me',
    subtitle: 'Hello! Welcome to my website!',
    isActive: true,
  },
  blog: {
    title: 'Blog',
    subtitle: 'Thoughts on...',
    isActive: false,
  },
  publications: {
    title: 'Publications',
    subtitle: 'A collection of research papers and scientific articles.',
    isActive: false,
  },
  talks: {
    title: 'Talks & Presentations',
    subtitle: 'Public lectures, colloquia, and conference presentations.',
    isActive: false,
  },
  projects: {
    title: 'Projects',
    subtitle: "Projects I've worked on.",
    isActive: true,
  },
  teaching: {
    title: 'Teaching',
    subtitle: 'Academic courses and educational materials.',
    isActive: false,
  },
  tags: {
    title: 'Tags',
    subtitle: 'Explore content by topic.',
    isActive: false,
  },
  cv: {
    title: 'Resume',
    subtitle: 'Academic and professional history.',
    isActive: true,
  },
}
