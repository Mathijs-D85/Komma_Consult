import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // Als er een hash is (bijv. /diensten#implementatie), scroll naar het element.
    if (location.hash) {
      const id = location.hash.replace('#', '')
      // Even wachten tot de nieuwe pagina/sectie gerenderd is.
      window.setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' })
        else window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }, 0)
      return
    }

    // Default: bij nieuwe route altijd bovenaan beginnen.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return null
}

