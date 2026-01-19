import { Helmet } from 'react-helmet-async'
import { SITE, absoluteUrl, canonicalUrl } from './site'

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>

export type SeoProps = {
  title?: string
  description?: string
  /** Route path zonder hash/query, bv. "/diensten" */
  path: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  publishedTime?: string
  modifiedTime?: string
  jsonLd?: JsonLd
}

export default function Seo({
  title,
  description,
  path,
  image,
  type = 'website',
  noindex = false,
  publishedTime,
  modifiedTime,
  jsonLd,
}: SeoProps) {
  const fullTitle = title ? SITE.titleTemplate.replace('%s', title) : SITE.defaultTitle
  const desc = description ?? SITE.defaultDescription
  const canonical = canonicalUrl(path)
  const ogImage = absoluteUrl(image ?? SITE.defaultOgImagePath)

  return (
    <Helmet>
      <html lang="nl" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? 'noindex,follow' : 'index,follow'} />

      <meta property="og:locale" content="nl_NL" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {type === 'article' && publishedTime ? (
        <meta property="article:published_time" content={publishedTime} />
      ) : null}
      {type === 'article' && modifiedTime ? (
        <meta property="article:modified_time" content={modifiedTime} />
      ) : null}

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  )
}

