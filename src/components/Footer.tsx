import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="bg-komma-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo-komma-consult-white-wordmark.png"
                alt="Komma Consult"
                width={443}
                height={216}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/80 text-base leading-relaxed max-w-md">
              Continuïteit, vernieuwing en de oneindige mogelijkheden
              die ontstaan na &quot;de komma&quot;. Laten we deze samen ontdekken.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className={cn(buttonVariants(), 'inline-flex')}
              >
                Plan een gesprek
                <ArrowUpRight className="h-4 w-4 ml-2" aria-hidden="true" />
              </Link>
            </div>

            <a
              href="/game/"
              className="inline-flex items-center gap-2 mt-6 text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Speel Komma Racing
            </a>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display text-lg font-bold mb-6">Navigatie</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="text-white/80 hover:text-white transition-colors font-medium">
                  Diensten
                </Link>
              </li>
              <li>
                <Link to="/over" className="text-white/80 hover:text-white transition-colors font-medium">
                  Over Komma Consult
                </Link>
              </li>
              <li>
                <Link to="/kennis" className="text-white/80 hover:text-white transition-colors font-medium">
                  Kennis
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="font-display text-lg font-bold mb-6">Contact</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:kommaconsult@outlook.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium">kommaconsult@outlook.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+31627307689"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium">+31 6 27 30 76 89</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/80">
                  <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium">Keurenplein 41<br />1069 CD Amsterdam</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Komma Consult. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacyverklaring
            </Link>
            <span className="hidden sm:inline" aria-hidden="true">|</span>
            <span className="hidden sm:inline">KVK: 89738306</span>
            <span className="hidden sm:inline" aria-hidden="true">|</span>
            <span className="hidden sm:inline">BTW: NL004757591B01</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
