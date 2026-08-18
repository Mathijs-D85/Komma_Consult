import { SITE, absoluteUrl } from './site'

export const PERSON_ID = `${SITE.url}/over#mathijs`
export const ORGANIZATION_ID = `${SITE.url}/#organization`

export const personJsonLd = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Mathijs Duisdecker',
  jobTitle: 'Oprichter',
  url: `${SITE.url}/over`,
  image: absoluteUrl('/mathijs-duisdecker-800.webp'),
  worksFor: { '@id': ORGANIZATION_ID },
  sameAs: ['https://www.linkedin.com/in/mduisdecker'],
}

export const organizationJsonLd = {
  '@type': 'ProfessionalService',
  '@id': ORGANIZATION_ID,
  name: SITE.name,
  url: SITE.url,
  logo: absoluteUrl('/logo-icon.svg'),
  image: absoluteUrl('/logo-komma-consult.png'),
  email: 'kommaconsult@outlook.com',
  telephone: '+31627307689',
  foundingDate: '2023-03',
  founder: { '@id': PERSON_ID },
  employee: { '@id': PERSON_ID },
  areaServed: {
    '@type': 'Country',
    name: 'Netherlands',
  },
  knowsAbout: [
    'externe inhuur',
    'strategisch inhuuradvies',
    'compliant inhuren',
    'MSP',
    'broker',
    'VMS',
    'Wet DBA',
    'Wtta',
    'leveranciersmanagement',
  ],
  sameAs: [
    'https://www.linkedin.com/company/kommaconsult',
    'https://www.linkedin.com/in/mduisdecker',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Keurenplein 41',
    postalCode: '1069 CD',
    addressLocality: 'Amsterdam',
    addressCountry: 'NL',
  },
}

export const websiteJsonLd = {
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  inLanguage: 'nl-NL',
  publisher: { '@id': ORGANIZATION_ID },
}

export const siteGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [organizationJsonLd, personJsonLd, websiteJsonLd],
}

export function articleJsonLd(input: {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  section?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.headline,
    description: input.description,
    articleSection: input.section,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: 'nl-NL',
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORGANIZATION_ID },
    image: absoluteUrl(input.image ?? SITE.defaultOgImagePath),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}${input.path}`,
    },
  }
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  }
}
