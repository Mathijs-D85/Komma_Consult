import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-komma-navy text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/10 transform skew-x-12 translate-x-1/4" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand - Takes more space */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                    src="/logo-komma-consulte-white.png" 
                    alt="Komma Consult" 
                    className="h-12 sm:h-14 w-auto" 
              />
                  <span className="sr-only">Komma Consult</span>
            </Link>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Continuïteit, vernieuwing en de oneindige mogelijkheden 
              die ontstaan na "de komma". Laten we deze samen ontdekken.
            </p>
            
            {/* CTA in footer */}
            <div className="mt-8">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-komma-fuchsia text-white font-semibold rounded-lg hover:bg-komma-fuchsia-dark transition-colors"
              >
                Plan een gesprek
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            
            {/* Easter egg - Game link */}
            <a 
              href="/game/" 
              className="inline-flex items-center gap-2 mt-6 text-sm text-white/40 hover:text-komma-fuchsia transition-colors"
            >
              🎮 Speel Komma Racing
            </a>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg font-bold mb-6">Navigatie</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-white/70 hover:text-komma-fuchsia transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="text-white/70 hover:text-komma-fuchsia transition-colors font-medium">
                  Diensten
                </Link>
              </li>
              <li>
                <Link to="/over" className="text-white/70 hover:text-komma-fuchsia transition-colors font-medium">
                  Over Komma Consult
                </Link>
              </li>
              <li>
                <Link to="/nieuws" className="text-white/70 hover:text-komma-fuchsia transition-colors font-medium">
                  Nieuws
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-komma-fuchsia transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:kommaconsult@outlook.com" 
                  className="flex items-center gap-3 text-white/70 hover:text-komma-fuchsia transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-komma-fuchsia/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="font-medium">kommaconsult@outlook.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+31627307689" 
                  className="flex items-center gap-3 text-white/70 hover:text-komma-fuchsia transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-komma-fuchsia/20 transition-colors">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="font-medium">+31 6 27 30 76 89</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="font-medium">Keurenplein 41<br />1069 CD Amsterdam</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Komma Consult. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <Link to="/privacy" className="hover:text-komma-fuchsia transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">KVK: 89738306</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">BTW: NL004757591B01</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
