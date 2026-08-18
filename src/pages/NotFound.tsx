import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'
import Seo from '@/seo/Seo'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white py-16">
      <Seo
        path="/404"
        title="Pagina niet gevonden"
        description="Deze pagina bestaat niet (404)."
        noindex
      />

      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <p className="font-display text-7xl sm:text-8xl font-bold text-komma-navy tracking-tight">
          4<span className="text-komma-fuchsia">,</span>4
        </p>

        <h1 className="mt-6 font-display text-3xl sm:text-4xl font-bold text-komma-navy">
          Hier zetten we even een punt
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Je bent de komma voorbijgeschoten. Deze pagina bestaat niet.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className={buttonVariants({ size: 'lg' })}>
            <Home className="mr-2 h-5 w-5" aria-hidden="true" />
            Naar de homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            type="button"
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-komma-navy hover:text-komma-fuchsia transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
            Ga terug
          </button>
        </div>
      </div>
    </section>
  )
}
