import { Link } from 'react-router-dom'
import { ArrowRight, Target, Shield, Clock, Settings, Linkedin } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'
import Testimonials from '@/components/Testimonials'
import FounderPhoto from '@/components/FounderPhoto'
import FaqSection from '@/components/FaqSection'
import ChatApp from '@/components/chat/ChatApp'
import { ClientOnly } from 'vite-react-ssg'
import Seo from '@/seo/Seo'
import { cn } from '@/lib/utils'
import { homeFaqs, toFaqJsonLd } from '@/content/faqs'
import { getBlogPostUrl, getPostsBySlugs } from '@/content/blogPosts'

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
    description: 'Grip op risico\'s, rollen en wet- en regelgeving.',
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
    description: 'Begeleiding bij keuze, inrichting en invoering van MSP, broker of VMS.',
    href: '/diensten#implementatie',
  },
]

const uitgelichteArtikelen = getPostsBySlugs([
  'wtta-waarom-2028-nu-al-op-je-agenda',
  'msp-broker-master-vendor-of-decentraal-model',
  'wanneer-is-zzp-inhuur-verantwoord',
])

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

      {/* 1. Hero: één claim, de kennischat als ingang */}
      <div className="relative overflow-hidden bg-[#fdf2f8]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-komma-fuchsia/10 transform skew-x-12 translate-x-16 pointer-events-none" />
        <div className="absolute -bottom-24 -left-10 w-[28rem] h-[28rem] rounded-full bg-komma-fuchsia/20 blur-3xl pointer-events-none" />
        <div className="absolute top-24 right-1/4 w-72 h-72 rounded-full bg-komma-navy/5 blur-3xl pointer-events-none" />

        <section className="relative pt-16 lg:pt-24">
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
              Grip, regie en bestuurbaarheid in externe inhuur. Stel je vraag aan
              de kennisbank van Komma Consult, of{' '}
              <Link
                to="/contact"
                className="font-semibold text-komma-navy underline decoration-komma-fuchsia decoration-2 underline-offset-4 hover:text-komma-fuchsia transition-colors"
              >
                plan direct een gesprek
              </Link>
              .
            </p>
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

      {/* 2. Bewijs: twee stille quotes, direct onder de hero */}
      <Testimonials />

      {/* 3. Diensten */}
      <section className="py-16 lg:py-24 bg-gray-50">
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
              Komma Consult brengt daar overzicht, structuur en bestuurbaarheid in.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diensten.map((dienst, index) => (
              <Link
                key={dienst.title}
                to={dienst.href}
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-komma-fuchsia/40 hover:shadow-sm transition-all"
              >
                <span className="text-komma-fuchsia font-semibold text-sm">
                  0{index + 1}
                </span>

                <div className="mt-4 w-11 h-11 rounded-xl bg-komma-navy flex items-center justify-center mb-5 group-hover:bg-komma-fuchsia transition-colors">
                  <dienst.icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>

                <h3 className="font-display text-xl font-bold text-komma-navy mb-2">
                  {dienst.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm mb-5">
                  {dienst.description}
                </p>

                <span className="inline-flex items-center text-sm text-komma-navy font-semibold group-hover:text-komma-fuchsia transition-colors">
                  Meer informatie
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mathijs: het gezicht en de kennis achter Komma Consult */}
      <section className="py-16 lg:py-24 bg-komma-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="absolute -inset-3 rounded-3xl bg-komma-fuchsia/30 blur-2xl" aria-hidden="true" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <FounderPhoto
                    alt="Mathijs Duisdecker, oprichter van Komma Consult"
                    className="w-full h-full object-cover"
                    width={800}
                    height={1000}
                    sizes="(min-width: 1024px) 36vw, 90vw"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-komma-fuchsia-light font-semibold text-sm tracking-wide uppercase">
                Wie er achter de komma zit
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Mathijs Duisdecker
              </h2>
              <p className="mt-2 text-white/70 font-medium">
                Oprichter Komma Consult, adviseur externe inhuur
              </p>

              <div className="mt-6 space-y-4 text-lg text-white/85 leading-relaxed max-w-2xl">
                <p>
                  Externe inhuur zit op het snijvlak van HR, inkoop, finance, legal en
                  de business. Juist daar ontstaan versnipperde verantwoordelijkheid en
                  gebrek aan sturing. Mathijs helpt organisaties die complexiteit terug te
                  brengen tot overzicht en regie.
                </p>
                <p>
                  Hij bouwde mee aan MSP- en vendormanagementprogramma&apos;s bij onder meer
                  Driessen Groep en Hays, en schrijft in de kennisbank over Wtta, Wet DBA,
                  MSP, broker en VMS. Geen adviseur op afstand: dicht op de inhoud en
                  dicht op de praktijk.
                </p>
              </div>

              <blockquote className="mt-8 border-l-2 border-komma-fuchsia pl-5 font-display text-xl font-medium text-white">
                &quot;Externe inhuur wordt pas echt bestuurbaar als inhoud, uitvoering en
                eigenaarschap weer met elkaar verbonden zijn.&quot;
              </blockquote>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/over#mathijs"
                  className={cn(buttonVariants(), 'bg-white text-komma-navy hover:bg-komma-fuchsia hover:text-white')}
                >
                  Meer over Mathijs
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="https://www.linkedin.com/in/mduisdecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Kennis: drie artikelen die de expertise laten zien */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
                Kennisbank
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-komma-navy tracking-tight">
                Lezen wat er speelt in externe inhuur
              </h2>
            </div>
            <Link
              to="/kennis"
              className="inline-flex items-center font-semibold text-komma-navy hover:text-komma-fuchsia transition-colors"
            >
              Alle artikelen
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {uitgelichteArtikelen.map((post) => (
              <Link
                key={post.slug}
                to={getBlogPostUrl(post)}
                className="group flex flex-col rounded-2xl border border-gray-100 p-7 hover:border-komma-fuchsia/40 hover:shadow-sm transition-all"
              >
                <span className="text-xs font-semibold tracking-wide uppercase text-komma-fuchsia">
                  {post.category}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-komma-navy leading-snug group-hover:text-komma-fuchsia transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm flex-1">
                  {post.excerpt}
                </p>
                <span className="mt-5 text-sm text-gray-400">{post.readTime} leestijd</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        items={homeFaqs}
        heading="Veelgestelde vragen"
        variant="accordion"
        className="bg-gray-50 py-16 lg:py-20"
      />

      {/* 6. Afsluitende uitnodiging */}
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
