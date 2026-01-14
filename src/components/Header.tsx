import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Diensten', href: '/diensten' },
  { name: 'Over', href: '/over' },
  { name: 'Nieuws', href: '/nieuws' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
                  src="/logo-komma-consult.png" 
                  alt="Komma Consult" 
                  className="h-12 sm:h-14 md:h-16 w-auto max-w-[220px] object-contain transition-transform group-hover:scale-[1.02]" 
            />
                <span className="sr-only">Komma Consult</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-semibold rounded-lg transition-colors",
                  location.pathname === item.href
                    ? "text-komma-fuchsia bg-komma-fuchsia/5"
                    : "text-gray-600 hover:text-komma-navy hover:bg-gray-50"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-komma-fuchsia text-white text-sm font-semibold rounded-lg hover:bg-komma-fuchsia-dark transition-all shadow-lg shadow-komma-fuchsia/25 hover:shadow-xl hover:shadow-komma-fuchsia/30"
            >
              Plan een gesprek
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600 hover:text-komma-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menu openen</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-semibold rounded-lg transition-colors",
                    location.pathname === item.href
                      ? "text-komma-fuchsia bg-komma-fuchsia/5"
                      : "text-gray-600 hover:text-komma-navy hover:bg-gray-50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-komma-fuchsia text-white text-base font-semibold rounded-lg text-center hover:bg-komma-fuchsia-dark transition-colors"
              >
                Plan een gesprek
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
