import { Link } from 'react-router-dom'
import { ArrowRight, Target, Shield, Clock, Settings } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import ChatApp from '@/components/chat/ChatApp'
import { ClientOnly } from 'vite-react-ssg'
import Seo from '@/seo/Seo'
import { cn } from '@/lib/utils'
import FaqSection from '@/components/FaqSection'
import { homeFaqs, toFaqJsonLd } from '@/content/faqs'

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

function ChatFallback() {
  return (
    <div className="px-2 py-10 text-center">
      <p className="text-lg text-gray-600">
        Stel een vraag over grip, compliance of keuzes in externe inhuur.
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        title="Grip op externe inhuur"
        description="Komma Consult helpt organisaties grip en regie te krijgen in externe inhuur, van strategie en compliance tot implementatie."
        jsonLd={toFaqJsonLd(homeFaqs)}
      />

      <div className="relative overflow-hidden bg-[#fdf2f8]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-komma-fuchsia/10 transform skew-x-12 translate-x-16 pointer-events-none" />
        <div className="absolute -bottom-24 -left-10 w-[28rem] h-[28rem] rounded-full bg-komma-fuchsia/20 blur-3xl pointer-events-none" />
        <div className="absolute top-24 right-1/4 w-72 h-72 rounded-full bg-komma-navy/5 blur-3xl pointer-events-none" />

        <section className="relative pt-16 lg:pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Strategisch inhuuradvies
            </p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-komma-navy tracking-tight">
              Ontdek wat er schuilt achter
              <br />
              <span className="text-komma-fuchsia">de komma</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Komma Consult helpt organisaties met grip, regie en bestuurbaarheid
              in externe inhuur. Stel hier je vraag, of plan een gesprek.
            </p>
            <div className="mt-8">
              <Link to="/contact" className={buttonVariants({ size: 'lg' })}>
                Plan een gesprek
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section id="kennisassistent" className="relative pt-10 pb-20 lg:pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ClientOnly fallback={<ChatFallback />}>
              {() => (
                <ChatApp config={{
                  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || 'https://dhuppyaqprsjaquomqtp.supabase.co',
                  supabaseFunctionsUrl: import.meta.env.VITE_SUPABASE_FUNCTIONS_URL || 'https://dhuppyaqprsjaquomqtp.supabase.co/functions/v1',
                  contactUrl: '/contact',
                }} />
              )}
            </ClientOnly>
          </div>
        </section>
      </div>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Dienstverlening
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-komma-navy tracking-tight">
              Van inzicht naar regie
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Externe inhuur raakt HR, inkoop, finance, legal en de business.
              Komma Consult helpt om daar overzicht, structuur en bestuurbaarheid in aan te brengen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {diensten.map((dienst, index) => (
              <Link
                key={dienst.title}
                to={dienst.href}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-komma-fuchsia/30 transition-colors"
              >
                <span className="text-komma-fuchsia font-semibold text-sm">
                  0{index + 1}
                </span>

                <div className="mt-5 w-12 h-12 rounded-xl bg-komma-navy flex items-center justify-center mb-5 group-hover:bg-komma-fuchsia transition-colors">
                  <dienst.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>

                <h3 className="font-display text-2xl font-bold text-komma-navy mb-3">
                  {dienst.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {dienst.description}
                </p>

                <span className="inline-flex items-center text-komma-navy font-semibold group-hover:text-komma-fuchsia transition-colors">
                  Meer informatie
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Wie wij helpen
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-komma-navy tracking-tight">
              Herkenbare situaties
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Komma Consult helpt organisaties die voelen dat externe inhuur belangrijk is,
              maar merken dat overzicht, eigenaarschap en sturing onder druk staan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {situaties.map((situatie) => (
              <div
                key={situatie.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="font-display text-xl font-bold text-komma-navy">
                  {situatie.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {situatie.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={homeFaqs} heading="Veelgestelde vragen over externe inhuur" />

      <TestimonialCarousel />

      <section className="py-16 lg:py-24 bg-[#fdf2f8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
            Laten we kennismaken
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-komma-navy tracking-tight">
            Klaar voor de volgende stap?
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Plan een vrijblijvend gesprek en verken waar jouw organisatie meer
            grip, overzicht of bijsturing nodig heeft in externe inhuur.
          </p>
          <div className="mt-8">
            <Link to="/contact" className={cn(buttonVariants({ size: 'lg' }))}>
              Plan een gesprek
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
