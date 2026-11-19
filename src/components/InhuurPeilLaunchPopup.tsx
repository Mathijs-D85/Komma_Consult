import { useState, useEffect } from 'react'
import { X, ArrowRight, BarChart3, Check } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

const INHUURPEIL_URL = 'https://inhuurpeil.kommaconsult.nl/dashboard'
const STORAGE_KEY = 'komma_inhuurpeil_beta_popup_dismissed_v1'
// Actief voor 2 weken vanaf 19 november 2026 (stopt automatisch op 4 december 2026)
const CAMPAIGN_END_DATE = new Date('2026-12-04T00:00:00+01:00')

export default function InhuurPeilLaunchPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (new Date() >= CAMPAIGN_END_DATE) return

    try {
      if (window.localStorage.getItem(STORAGE_KEY) === '1') return
    } catch {
      // Negeer localStorage-beperkingen in strikte privacy-modi
    }

    const timer = window.setTimeout(() => {
      setOpen(true)
    }, 2400)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const handleClose = () => {
    setOpen(false)
    try {
      window.localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // ignore
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-komma-navy/55 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inhuurpeil-popup-title"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-komma-fuchsia/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bovenbalk in Komma Consult huisstijl */}
        <div className="bg-komma-navy px-6 py-5 text-white relative">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Sluit melding"
            className="absolute top-4 right-4 p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-komma-fuchsia/20 border border-komma-fuchsia/40 text-xs font-semibold text-pink-200 mb-3">
            <span className="w-2 h-2 rounded-full bg-komma-fuchsia animate-pulse" />
            <span>Nu in live bèta · Gratis beschikbaar</span>
          </div>

          <h2
            id="inhuurpeil-popup-title"
            className="font-display text-xl sm:text-2xl font-bold leading-snug pr-6"
          >
            Nieuw: InhuurPeil voor alle vragen over inhuurtarieven in Nederland
          </h2>
        </div>

        {/* Inhoud */}
        <div className="px-6 py-5 space-y-4">
          <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
            Twijfel je of een voorgesteld uurtarief marktconform is, hoe externe inhuur zich
            verhoudt tot vaste loondienst of waar besparingskansen zitten in je flexibele schil?
            Met <strong className="text-komma-navy font-semibold">InhuurPeil</strong>{' '}
            <span className="text-gray-500">(powered by Komma Consult)</span> toets je het direct
            zelf — gratis en zonder account.
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-komma-fuchsia/10 text-komma-fuchsia flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span>Actuele richtprijzen, onderhandelingsruimte &amp; arbeidsmarktkrapte</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-komma-fuchsia/10 text-komma-fuchsia flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span>Omrekening bruto salaris ↔ extern uurtarief (werkgeverslasten 2026/2027)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-komma-fuchsia/10 text-komma-fuchsia flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span>Direct deelbare PDF- en Excel-rapporten voor management &amp; directie</span>
            </li>
          </ul>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={INHUURPEIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className={cn(buttonVariants(), 'flex-1 justify-center gap-2')}
            >
              <BarChart3 className="h-4 w-4" aria-hidden="true" />
              <span>Ga naar InhuurPeil</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2.5 text-sm font-semibold text-gray-500 hover:text-komma-navy transition-colors rounded-lg"
            >
              Later bekijken
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
