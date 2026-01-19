function stripTrailingSlash(url: string) {
  return url.endsWith('/') ? url.slice(0, -1) : url
}

export const SITE = {
  url: stripTrailingSlash(import.meta.env.VITE_SITE_URL ?? 'https://kommaconsult.nl'),
  name: 'Komma Consult',
  defaultTitle: 'Komma Consult | Strategisch Inhuuradvies',
  titleTemplate: '%s | Komma Consult',
  defaultDescription:
    'Komma Consult - Strategisch inhuuradvies, compliant inhuren en interim ondersteuning. Ontdek wat er schuilt achter de komma.',
  defaultOgImagePath: '/logo-komma-consult.png',
} as const

export function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) return pathOrUrl
  const normalized = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${SITE.url}${normalized}`
}

export function canonicalUrl(pathname: string) {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${SITE.url}${normalized}`
}

