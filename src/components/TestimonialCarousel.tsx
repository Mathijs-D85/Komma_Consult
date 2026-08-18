import { useState, useEffect, useCallback } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote: `Met de hulp van Komma Consult hebben we de MSP-dienstverlening van ons label Haert naar een volwassen niveau getild. Door de juiste balans te vinden tussen strategische visie en hands-on implementatie — van inkoop van technologie tot teamopbouw — heeft Komma Consult de fundering gelegd voor onze huidige groei. Mede hierdoor hebben we nieuwe klanten kunnen toevoegen en een aanzienlijke omzetstijging gerealiseerd. Een absolute aanrader voor complexe verandertrajecten.`,
    author: 'Groepsdirectie',
    company: 'Driessen Groep',
  },
  {
    quote: `Komma Consult heeft een cruciale rol gespeeld in het vormgeven van onze visie op Vendor Management bij Hays. De unieke inzichten en strategische benadering hebben ons geholpen om niet alleen onze huidige processen te versterken, maar ook beter voorbereid te zijn op de toekomst. Dankzij Komma Consult hebben we nu een robuuste en toekomstbestendige aanpak in Vendor Management, wat essentieel is in onze voortdurend veranderende branche.`,
    author: 'Hays Enterprise Solutions',
    company: 'Vendor Management',
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefersReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion) return

    const interval = setInterval(() => {
      goToNext()
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, prefersReducedMotion, goToNext])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    goToPrevious()
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    goToNext()
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section
      className="py-16 lg:py-24 bg-komma-navy"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => {
        if (!prefersReducedMotion) setIsAutoPlaying(true)
      }}
      onFocus={() => setIsAutoPlaying(false)}
      aria-roledescription="carousel"
      aria-label="Klantreferenties"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-white/80 font-semibold text-sm tracking-wide uppercase">
            Wat klanten zeggen
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Referenties
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-komma-fuchsia flex items-center justify-center">
            <Quote className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
        </div>

        <div className="text-center" aria-live="polite">
          <blockquote className="text-lg sm:text-xl text-white font-display font-medium leading-relaxed max-w-4xl mx-auto">
            &quot;{activeTestimonial?.quote}&quot;
          </blockquote>

          <div className="mt-8 flex flex-col items-center">
            <div className="w-12 h-1 bg-komma-fuchsia rounded-full mb-4" />
            <p className="text-white font-semibold text-lg">{activeTestimonial?.author}</p>
            <p className="text-white/70">{activeTestimonial?.company}</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={handlePrevious}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Vorige referentie"
            type="button"
          >
            <ChevronLeft className="h-6 w-6 text-white" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-3">
            {testimonials.map((item, index) => (
              <button
                key={item.author}
                onClick={() => handleDotClick(index)}
                type="button"
                className={cn(
                  'transition-all duration-300 rounded-full',
                  index === activeIndex
                    ? 'w-8 h-3 bg-komma-fuchsia'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                )}
                aria-label={`Ga naar referentie ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Volgende referentie"
            type="button"
          >
            <ChevronRight className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
