import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Head } from 'vite-react-ssg'
import ScrollToTop from './ScrollToTop'
import { siteGraphJsonLd } from '@/seo/jsonld'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Head>
        <script type="application/ld+json">{JSON.stringify(siteGraphJsonLd)}</script>
      </Head>
      <a href="#main-content" className="skip-link">
        Ga naar inhoud
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
