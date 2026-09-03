import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: `Met de hulp van Komma Consult hebben we de MSP-dienstverlening van ons label Haert naar een volwassen niveau getild. De juiste balans tussen strategische visie en hands-on implementatie legde de fundering voor onze huidige groei.`,
    author: 'Groepsdirectie',
    company: 'Driessen Groep',
  },
  {
    quote: `Komma Consult heeft een cruciale rol gespeeld in het vormgeven van onze visie op Vendor Management. Dankzij de inzichten en strategische benadering hebben we nu een robuuste en toekomstbestendige aanpak.`,
    author: 'Hays Enterprise Solutions',
    company: 'Vendor Management',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-20 bg-white" aria-label="Klantreferenties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold tracking-wide uppercase text-gray-400">
          Vertrouwd door onder meer Driessen Groep en Hays
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <figure
              key={item.company}
              className="relative rounded-2xl bg-[#fdf2f8] p-8 lg:p-10"
            >
              <Quote className="h-8 w-8 text-komma-fuchsia/40" aria-hidden="true" />
              <blockquote className="mt-4 font-display text-lg lg:text-xl font-medium text-komma-navy leading-relaxed">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-komma-fuchsia" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-komma-navy">{item.author}</span>
                  <span className="block text-sm text-gray-500">{item.company}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
