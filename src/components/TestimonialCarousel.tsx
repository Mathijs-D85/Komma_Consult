import { useState, useEffect } from 'react'
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

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 8000) // Switch every 8 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
  }

  return (
    <section className="py-24 lg:py-32 bg-komma-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-komma-fuchsia/10 transform skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
            Wat klanten zeggen
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Referenties
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Quote icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-komma-fuchsia flex items-center justify-center">
              <Quote className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Testimonials */}
          <div className="relative min-h-[300px] sm:min-h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-in-out",
                  index === activeIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-8" 
                      : "opacity-0 translate-x-8"
                )}
              >
                <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white font-display font-medium leading-relaxed text-center max-w-4xl mx-auto">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="mt-10 flex flex-col items-center">
                  <div className="w-12 h-1 bg-komma-fuchsia rounded-full mb-4" />
                  <p className="text-white font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-white/60">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-komma-fuchsia flex items-center justify-center transition-colors group"
              aria-label="Vorige testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-white/70 group-hover:text-white transition-colors" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3 px-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "transition-all duration-300",
                    index === activeIndex 
                      ? "w-8 h-3 bg-komma-fuchsia rounded-full" 
                      : "w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full"
                  )}
                  aria-label={`Ga naar testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-komma-fuchsia flex items-center justify-center transition-colors group"
              aria-label="Volgende testimonial"
            >
              <ChevronRight className="h-6 w-6 text-white/70 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
