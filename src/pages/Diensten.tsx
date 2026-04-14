import { Link } from 'react-router-dom'
import { ArrowRight, Target, Shield, Clock, Settings, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getBlogPostBySlug, getBlogPostUrl } from '@/content/blogPosts'
import { getServiceLinkById } from '@/content/serviceLinks'
import Seo from '@/seo/Seo'

const diensten = [
  {
    id: 'strategisch-inhuuradvies',
    icon: Target,
    title: 'Strategisch inhuuradvies',
    description: `Externe inhuur wordt vaak pas een thema als kosten oplopen, verantwoordelijkheden versnipperd raken of niemand precies weet waar de grootste risico's zitten. Strategisch inhuuradvies helpt om eerst scherp te krijgen wat er speelt, waar het wringt en welke keuzes nodig zijn om weer regie te krijgen.`,
    details: `Dat kan gaan over governance, leveranciers, procesinrichting, de verhouding tussen vast en flex of de vraag of een MSP, broker of VMS past bij jouw organisatie. Geen advies om het advies, maar richting waarmee je verder kunt.`,
    when: `Dit is relevant als je meer grip wilt op externe inhuur, een verandering overweegt of eerst goed wilt begrijpen welk probleem je eigenlijk oplost.`,
    benefits: [
      'Meer overzicht in rollen, processen en verantwoordelijkheden',
      'Heldere keuzes over inrichting, sturing en governance',
      'Betere onderbouwing voor beleid, verandering of aanbesteding',
      'Een aanpak die inhoud en uitvoering met elkaar verbindt',
    ],
  },
  {
    id: 'compliant-inhuren',
    icon: Shield,
    title: 'Compliant inhuren',
    description: `Compliant inhuren vraagt om meer dan een checklist of modelovereenkomst. Wet- en regelgeving raakt processen, rollen, gedrag op de werkvloer en de manier waarop je met leveranciers samenwerkt.`,
    details: `Komma Consult helpt om compliance praktisch te maken: zonder ad-hoc maatregelen, maar ook zonder onderschatting van de risico's. We kijken naar wat er op papier staat en vooral naar wat er in de praktijk gebeurt.`,
    when: `Dit is relevant als regelgeving druk zet op je organisatie, als je risico's beter wilt beheersen of als je wilt voorkomen dat compliance een los project naast de business wordt.`,
    benefits: [
      'Meer grip op risico\'s en verantwoordelijkheden',
      'Een werkbare aanpak die past bij de dagelijkse praktijk',
      'Minder afhankelijkheid van aannames of schijnzekerheid op papier',
      'Beter inzicht in waar bijsturing echt nodig is',
    ],
  },
  {
    id: 'interim-ondersteuning',
    icon: Clock,
    title: 'Interim ondersteuning',
    description: `Soms is het vraagstuk helder, maar ontbreekt tijd, capaciteit of specifieke expertise om het goed op te pakken. Dan is tijdelijke ondersteuning nodig van iemand die snel overzicht heeft en direct waarde toevoegt.`,
    details: `Komma Consult kan tijdelijk regie, inhoudelijke scherpte of extra slagkracht brengen in lopende trajecten. Bijvoorbeeld bij implementaties, governancevraagstukken, leveranciersmanagement of dossiers die blijven liggen.`,
    when: `Dit is relevant als er intern te weinig capaciteit is, als een belangrijk traject niet kan wachten of als je tijdelijk een ervaren sparringpartner en uitvoerder nodig hebt.`,
    benefits: [
      'Snel extra regie en voortgang in complexe dossiers',
      'Direct inzetbare expertise zonder lange inwerktijd',
      'Flexibele ondersteuning waar de druk het hoogst is',
      'Tijdelijke versterking die inhoud en uitvoering verbindt',
    ],
  },
  {
    id: 'implementatie',
    icon: Settings,
    title: 'Implementeren van een inhuuroplossing',
    description: `Een MSP, broker, VMS of nieuwe werkwijze implementeren is niet alleen een systeem- of inkoopvraagstuk. Het raakt processen, stakeholders, leveranciers en de dagelijkse praktijk van managers en recruiters.`,
    details: `Komma Consult helpt om implementaties bestuurbaar te maken. Van het aanscherpen van de uitgangspunten tot begeleiding tijdens inrichting, besluitvorming en adoptie. Zodat de oplossing niet alleen live gaat, maar ook echt gaat werken.`,
    when: `Dit is relevant als je een nieuwe inhuuroplossing invoert, een bestaand model wilt verbeteren of meer samenhang wilt tussen beleid, proces en uitvoering.`,
    benefits: [
      'Meer samenhang tussen ontwerp, besluitvorming en uitvoering',
      'Minder ruis tussen business, leveranciers en projectteam',
      'Betere adoptie doordat de praktijk vanaf het begin wordt meegenomen',
      'Een implementatie die niet alleen technisch, maar ook organisatorisch klopt',
    ],
  },
]

const aanpak = [
  {
    title: 'Verkennen',
    description:
      'We brengen scherp in kaart wat er speelt, waar het wringt en welke aanleiding er is om nu in beweging te komen.',
  },
  {
    title: 'Analyseren',
    description:
      'We kijken naar processen, rollen, risico\'s, leveranciers, data en sturing, zodat duidelijk wordt wat er echt aan de hand is.',
  },
  {
    title: 'Realiseren',
    description:
      'Afhankelijk van de vraag vertalen we dit naar advies, een plan van aanpak, begeleiding bij keuzes of directe ondersteuning in de uitvoering.',
  },
  {
    title: 'Bijsturen',
    description:
      'Tijdens het traject blijven we volgen, aanscherpen en verbeteren op basis van wat er in de praktijk gebeurt.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: diensten.map((dienst) => ({
    '@type': 'Question',
    name: dienst.title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: `${dienst.description} ${dienst.details}`,
    },
  })),
}

export default function Diensten() {
  return (
    <>
      <Seo
        path="/diensten"
        title="Regie op externe inhuur"
        description="Komma Consult helpt met strategisch inhuuradvies, compliant inhuren, implementatie en tijdelijke ondersteuning."
        jsonLd={faqJsonLd}
      />
      {/* Header - Bold Style */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/5 transform skew-x-12 translate-x-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Wat wij doen
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-komma-navy tracking-tight">
              Regie op
              <br />
              <span className="text-komma-fuchsia">externe inhuur</span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl">
              Externe inhuur wordt al snel een vraagstuk van HR, inkoop, finance,
              legal en de business tegelijk. Komma Consult helpt organisaties om
              daar overzicht, richting en bestuurbaarheid in aan te brengen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Onze aanpak
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-komma-navy tracking-tight">
              Van vraagstuk naar werkbare oplossing
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Geen zwaar consultantentraject, maar een aanpak die helpt om snel
              scherpte te krijgen en onderweg bij te sturen waar nodig.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {aanpak.map((stap, index) => (
              <div key={stap.title} className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <span className="text-komma-fuchsia font-bold text-sm">0{index + 1}</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-komma-navy">
                  {stap.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {stap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-20">
            {diensten.map((dienst, index) => {
              const serviceLink = getServiceLinkById(dienst.id)

              return (
                <div
                  key={dienst.id}
                  id={dienst.id}
                  className="scroll-mt-24 border-t border-gray-200 pt-16 first:border-t-0 first:pt-0"
                >
                  <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                    <div className="lg:col-span-7">
                      <div className="flex items-start gap-5 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-komma-fuchsia flex items-center justify-center flex-shrink-0 shadow-lg shadow-komma-fuchsia/15">
                          <dienst.icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <span className="text-komma-fuchsia font-bold text-sm">0{index + 1}</span>
                          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-komma-navy tracking-tight">
                            {dienst.title}
                          </h2>
                        </div>
                      </div>

                      <div className="max-w-2xl space-y-5">
                        <p className="text-gray-700 text-lg leading-relaxed max-w-[42rem]">
                          {dienst.description}
                        </p>

                        <p className="text-gray-600 leading-relaxed max-w-[40rem]">
                          {dienst.details}
                        </p>
                      </div>

                      <div className="mt-8 border-l-2 border-komma-fuchsia/20 pl-5 max-w-[40rem]">
                        <span className="text-komma-fuchsia font-semibold text-xs tracking-wide uppercase">
                          Relevant als
                        </span>
                        <p className="mt-3 text-gray-600 leading-relaxed">
                          {dienst.when}
                        </p>
                      </div>

                      {serviceLink ? (
                        <div className="mt-10 pt-6 border-t border-gray-200 max-w-[40rem]">
                          <h3 className="font-semibold text-komma-navy">
                            Verdiep je verder
                          </h3>
                          <div className="mt-4 flex flex-col gap-2.5">
                            {serviceLink.knowledgeSlugs
                              .map((slug) => getBlogPostBySlug(slug))
                              .filter(Boolean)
                              .map((post) => (
                                <Link
                                  key={post!.slug}
                                  to={getBlogPostUrl(post!)}
                                  className="group inline-flex items-center gap-3 text-sm text-gray-500 hover:text-komma-fuchsia transition-colors"
                                >
                                  <span className="h-1 w-1 rounded-full bg-komma-fuchsia/70 flex-shrink-0" />
                                  <span className="font-medium">{post!.title}</span>
                                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-komma-fuchsia transition-colors" />
                                </Link>
                              ))}
                          </div>
                        </div>
                      ) : null}

                      <div className="mt-10">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-komma-navy font-semibold hover:text-komma-fuchsia transition-colors"
                        >
                          Bespreek dit vraagstuk
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="rounded-3xl bg-white/80 backdrop-blur-sm border border-white shadow-md p-7 lg:p-9 lg:sticky lg:top-28">
                        <span className="text-komma-fuchsia font-semibold text-xs tracking-wide uppercase">
                          Opbrengst
                        </span>
                        <h3 className="mt-3 font-display text-xl font-bold text-komma-navy mb-6">
                          Wat levert dit op?
                        </h3>
                        <ul className="space-y-4">
                          {dienst.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-4">
                              <div className="w-6 h-6 rounded-full bg-komma-fuchsia/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="h-4 w-4 text-komma-fuchsia" />
                              </div>
                              <span className="text-gray-700 leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA - Bold */}
      <section className="py-24 lg:py-32 bg-komma-navy relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-komma-fuchsia/10 transform skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 text-[25rem] font-display font-black text-white/[0.02] leading-none select-none">
          ?
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Welke uitdaging
            <br />
            <span className="text-komma-fuchsia">mogen wij oplossen?</span>
          </h2>
          <p className="mt-8 text-xl text-white/70 max-w-2xl mx-auto">
            Plan een vrijblijvend adviesgesprek en ontdek samen met ons hoe we jouw 
            organisatie het beste kunnen ondersteunen.
          </p>
          <div className="mt-12">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="text-lg px-10 py-5 bg-komma-fuchsia hover:bg-komma-fuchsia-dark shadow-xl shadow-komma-fuchsia/25"
              >
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
