import { Link } from 'react-router-dom'
import { ArrowRight, Target, Shield, Clock, Settings } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import ChatApp from '@/components/chat/ChatApp'
import { ClientOnly } from 'vite-react-ssg'
import Seo from '@/seo/Seo'

const diensten = [
  {
    icon: Target,
    title: 'Strategisch inhuuradvies',
    description: 'Van versnippering naar overzicht, keuzes en regie.',
    href: '/diensten#strategisch-inhuuradvies',
  },
  {
    icon: Shield,
    title: 'Compliant inhuren',
    description: 'Meer grip op risico\'s, rollen en wet- en regelgeving.',
    href: '/diensten#compliant-inhuren',
  },
  {
    icon: Clock,
    title: 'Interim ondersteuning',
    description: 'Tijdelijke regie voor vraagstukken die niet kunnen wachten.',
    href: '/diensten#interim-ondersteuning',
  },
  {
    icon: Settings,
    title: 'Implementatie',
    description: 'Begeleiding bij keuzes, inrichting en invoering van je oplossing.',
    href: '/diensten#implementatie',
  },
]

const situaties = [
  {
    title: 'Je mist grip op externe inhuur',
    description:
      'Er wordt veel ingehuurd, maar overzicht ontbreekt. Wie huurt in, tegen welke voorwaarden, via welke leveranciers en met welke risico\'s? Als dat niet helder is, wordt sturen lastig.',
  },
  {
    title: 'Je wilt compliant inhuren met een aanpak die werkt',
    description:
      'Wet- en regelgeving vraagt om aandacht, maar losse maatregelen of extra controles lossen het onderliggende probleem niet op. Je zoekt een aanpak die inhoudelijk klopt en werkbaar blijft in de praktijk.',
  },
  {
    title: 'Je inhuurproces draait, maar voelt niet bestuurbaar',
    description:
      'Aanvragen lopen, leveranciers leveren en facturen worden betaald, maar in de inrichting ontstaan knelpunten. Rollen zijn onduidelijk, belangen lopen door elkaar en sturen gebeurt te weinig op basis van data.',
  },
  {
    title: 'Je staat voor een keuze of verandering',
    description:
      'Je overweegt een MSP, broker, VMS of een andere inrichting van externe inhuur. Dan wil je eerst scherp krijgen welk probleem je oplost, welke route past en hoe je de organisatie meeneemt.',
  },
]

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        title="Grip op externe inhuur"
        description="Komma Consult helpt organisaties grip en regie te krijgen in externe inhuur, van strategie en compliance tot implementatie."
      />
      {/* Wrapper met doorlopende decoratieve fuchsia baan */}
      <div className="relative overflow-hidden bg-white">
        {/* Fuchsia accent shape - loopt door over chat + diensten */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/5 transform skew-x-12 translate-x-20 pointer-events-none" />
        {/* Navy accent shape */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-komma-navy/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        {/* Chat als hero - vervangt de oude hero sectie */}
        <ClientOnly fallback={
          <div className="min-h-[600px] flex items-center justify-center">
            <div className="text-center max-w-2xl mx-auto px-4 py-24">
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-komma-navy tracking-tight mb-6">
                Grip op externe inhuur
              </h1>
              <p className="text-xl text-gray-600">
                Komma Consult helpt organisaties met overzicht, regie en bestuurbaarheid in externe inhuur.
              </p>
            </div>
          </div>
        }>
          {() => (
            <ChatApp config={{
              supabaseUrl: import.meta.env.VITE_SUPABASE_URL || "https://dhuppyaqprsjaquomqtp.supabase.co",
              supabaseFunctionsUrl: import.meta.env.VITE_SUPABASE_FUNCTIONS_URL || "https://dhuppyaqprsjaquomqtp.supabase.co/functions/v1",
              contactUrl: "/contact",
            }} />
          )}
        </ClientOnly>

        {/* Services Section - Bold Cards */}
        <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Dienstverlening
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-komma-navy tracking-tight">
              Van inzicht naar regie
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Externe inhuur raakt HR, inkoop, finance, legal en de business.
              Komma Consult helpt om daar overzicht, structuur en bestuurbaarheid in aan te brengen.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {diensten.map((dienst, index) => (
              <Link 
                key={dienst.title} 
                to={dienst.href}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-komma-fuchsia/30 hover:shadow-2xl hover:shadow-komma-fuchsia/10 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Number */}
                <span className="absolute top-8 right-8 text-7xl font-display font-black text-gray-100 group-hover:text-komma-fuchsia/10 transition-colors">
                  0{index + 1}
                </span>
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-komma-navy flex items-center justify-center mb-6 group-hover:bg-komma-fuchsia transition-colors duration-300">
                    <dienst.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-komma-navy mb-4 group-hover:text-komma-fuchsia transition-colors">
                    {dienst.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {dienst.description}
                  </p>
                  
                  <span className="inline-flex items-center text-komma-navy font-semibold group-hover:text-komma-fuchsia transition-colors">
                    Meer informatie
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </section>

        <section className="relative pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
                Wie wij helpen
              </span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-komma-navy tracking-tight">
                Herkenbare situaties
              </h2>
              <p className="mt-6 text-xl text-gray-600">
                Komma Consult helpt organisaties die voelen dat externe inhuur belangrijk is,
                maar merken dat overzicht, eigenaarschap en sturing onder druk staan.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {situaties.map((situatie) => (
                <div
                  key={situatie.title}
                  className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100"
                >
                  <h3 className="font-display text-2xl font-bold text-komma-navy">
                    {situatie.title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    {situatie.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Testimonial Carousel */}
      <TestimonialCarousel />

      {/* CTA Section - Bold */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(235,8,141,0.05)_0%,transparent_50%)]" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
            Laten we kennismaken
          </span>
          
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-komma-navy tracking-tight">
            Klaar voor de volgende
            <br />
            <span className="text-komma-fuchsia">stap?</span>
          </h2>
          
          <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
            Plan een vrijblijvend gesprek en verken waar jouw organisatie meer
            grip, overzicht of bijsturing nodig heeft in externe inhuur.
          </p>
          
          <div className="mt-12">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-10 py-5 bg-komma-fuchsia hover:bg-komma-fuchsia-dark shadow-xl shadow-komma-fuchsia/25 hover:shadow-2xl hover:shadow-komma-fuchsia/30 transition-all">
                Plan een gesprek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
