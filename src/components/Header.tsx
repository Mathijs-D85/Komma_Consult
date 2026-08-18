import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button-variants'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Diensten', href: '/diensten' },
  { name: 'Over', href: '/over' },
  { name: 'Kennis', href: '/kennis' },
  { name: 'Contact', href: '/contact' },
]

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-komma-fuchsia/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hoofdnavigatie">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <Link to="/" className="flex items-center shrink-0 -my-3">
            <img
              src="/logo-komma-consult.png"
              alt="Komma Consult"
              width={360}
              height={96}
              className="h-20 sm:h-24 md:h-28 w-auto max-w-[420px] object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const active = isActivePath(location.pathname, item.href)
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'px-3 py-2 text-sm font-semibold rounded-lg transition-colors',
                    active
                      ? 'text-komma-fuchsia bg-komma-fuchsia/10'
                      : 'text-gray-600 hover:text-komma-navy hover:bg-gray-50'
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
            <Link
              to="/contact"
              className={cn(buttonVariants({ size: 'sm' }), 'ml-3')}
            >
              Plan een gesprek
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-gray-600 hover:text-komma-navy rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => {
                const active = isActivePath(location.pathname, item.href)
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'px-4 py-3 text-base font-semibold rounded-lg transition-colors',
                      active
                        ? 'text-komma-fuchsia bg-komma-fuchsia/10'
                        : 'text-gray-600 hover:text-komma-navy hover:bg-gray-50'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(buttonVariants(), 'mt-2 text-center')}
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
