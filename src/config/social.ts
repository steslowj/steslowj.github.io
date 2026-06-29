import type { SocialLink } from '../types';

export const SOCIALS: SocialLink[] = [
  {
    name: 'Github',
    href: 'https://github.com/steslowj',
    linkTitle: `Follow Jessica Steslow on Github`,
    isActive: true,
  },
  {
    name: 'Mail',
    href: 'mailto:steslowj@gmail.com',
    linkTitle: `Send an email to Jessica`,
    isActive: true,
  },
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=shannon',
    linkTitle: `Jessica Steslow on Google Scholar`,
    isActive: false,
  },
  {
    name: 'ORCID',
    href: 'https://orcid.org/0000-0002-1825-0097',
    linkTitle: `Jessica Steslow on ORCID`,
    isActive: false,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jessicasteslow',
    linkTitle: `Jessica Steslow on LinkedIn`,
    isActive: true,
  },
];

export const SOCIAL_ICONS: Record<string, string> = {
  Github: 'Github',
  Mail: 'Mail',
  Linkedin: 'LinkedIn',
  'Google Scholar': 'GoogleScholar',
  ORCID: 'ORCID',
  RSS: 'RSS',
};
