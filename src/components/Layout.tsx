import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet-async'
import { SITE, absoluteUrl } from '@/seo/site'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl('/logo-icon.svg'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Keurenplein 41',
      postalCode: '1069 CD',
      addressLocality: 'Amsterdam',
      addressCountry: 'NL',
    },
    email: 'kommaconsult@outlook.com',
    telephone: '+31627307689',
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      </Helmet>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

