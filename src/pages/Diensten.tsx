import { Link } from 'react-router-dom'
import { ArrowRight, Target, Shield, Clock, Settings, CheckCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'
import { getBlogPostBySlug, getBlogPostUrl } from '@/content/blogPosts'
import { getServiceLinkById } from '@/content/serviceLinks'
import Seo from '@/seo/Seo'
import PageHero from '@/components/PageHero'
import FaqSection from '@/components/FaqSection'
import { dienstenFaqs, toFaqJsonLd } from '@/content/faqs'

const diensten = [
  {
    id: 'strategisch-inhuuradvies',
    icon: Target,
    title: 'Strategisch inhuuradvies',
    short: 'Overzicht, keuzes en regie',
    description: `Externe inhuur wordt vaak pas een thema als kosten oplopen, verantwoordelijkheden versnipperd raken of niemand weet waar de grootste risico's zitten. Strategisch inhuuradvies maakt eerst scherp wat er speelt en welke keuzes nodig zijn om weer regie te krijgen: governance, leveranciers, de verhouding vast-flex, of de vraag of een MSP, broker of VMS past.`,
    when: `Je wilt meer grip op externe inhuur, overweegt een verandering of wilt eerst begrijpen welk probleem je eigenlijk oplost.`,
    benefits: [
      'Overzicht in rollen, processen en verantwoordelijkheden',
      'Heldere keuzes over inrichting, sturing en governance',
      'Onderbouwing voor beleid, verandering of aanbesteding',
    ],
  },
  {
    id: 'compliant-inhuren',
    icon: Shield,
    title: 'Compliant inhuren',
    short: 'Risico\'s, rollen en regelgeving',
    description: `Compliant inhuren vraagt meer dan een checklist of modelovereenkomst. Wet- en regelgeving raakt processen, rollen, gedrag op de werkvloer en de samenwerking met leveranciers. Komma Consult maakt compliance praktisch: geen ad-hoc maatregelen, geen onderschatting van risico's, en vooral aandacht voor wat er in de praktijk gebeurt.`,
    when: `Regelgeving zet druk op je organisatie, je wilt risico's beter beheersen, of je wilt voorkomen dat compliance een los project naast de business wordt.`,
    benefits: [
      'Grip op risico\'s en verantwoordelijkheden',
      'Een aanpak die werkt in de dagelijkse praktijk',
      'Minder schijnzekerheid op papier',
    ],
  },
  {
    id: 'interim-ondersteuning',
    icon: Clock,
    title: 'Interim ondersteuning',
    short: 'Tijdelijke regie en slagkracht',
    description: `Soms is het vraagstuk helder, maar ontbreekt tijd, capaciteit of specifieke expertise. Komma Consult brengt dan tijdelijk regie, inhoudelijke scherpte of extra slagkracht in lopende trajecten: implementaties, governancevraagstukken, leveranciersmanagement of dossiers die blijven liggen.`,
    when: `Er is intern te weinig capaciteit, een belangrijk traject kan niet wachten, of je hebt tijdelijk een ervaren sparringpartner en uitvoerder nodig.`,
    benefits: [
      'Snel extra regie en voortgang in complexe dossiers',
      'Direct inzetbare expertise zonder inwerktijd',
      'Versterking die inhoud en uitvoering verbindt',
    ],
  },
  {
    id: 'implementatie',
    icon: Settings,
    title: 'Implementatie',
    short: 'MSP, broker of VMS werkend maken',
    description: `Een MSP, broker, VMS of nieuwe werkwijze invoeren is niet alleen een systeem- of inkoopvraagstuk. Het raakt processen, stakeholders, leveranciers en de dagelijkse praktijk van managers en recruiters. Komma Consult begeleidt uitgangspunten, inrichting, besluitvorming en adoptie, zodat de oplossing niet alleen live gaat maar ook echt gaat werken.`,
    when: `Je voert een nieuwe inhuuroplossing in, wilt een bestaand model verbeteren of zoekt meer samenhang tussen beleid, proces en uitvoering.`,
    benefits: [
      'Samenhang tussen ontwerp, besluitvorming en uitvoering',
      'Minder ruis tussen business, leveranciers en projectteam',
      'Betere adoptie doordat de praktijk vanaf dag één meedoet',
    ],
  },
]

const aanpak = [
  { title: 'Verkennen', description: 'Wat speelt er, waar wringt het en waarom nu?' },
  { title: 'Analyseren', description: 'Processen, rollen, risico\'s, leveranciers, data en sturing.' },
  { title: 'Realiseren', description: 'Advies, plan van aanpak, begeleiding of directe uitvoering.' },
  { title: 'Bijsturen', description: 'Volgen, aanscherpen en verbeteren op basis van de praktijk.' },
]

export default function Diensten() {
  return (
    <>
      <Seo
        path="/diensten"
        title="Regie op externe inhuur"
        description="Komma Consult helpt met strategisch inhuuradvies, compliant inhuren, implementatie en tijdelijke ondersteuning."
        jsonLd={toFaqJsonLd(dienstenFaqs)}
      />
      <PageHero
        eyebrow="Wat wij doen"
        title={
          <>
            Regie op
            <br />
            <span className="text-komma-fuchsia">externe inhuur</span>
          </>
        }
      >
        <p>
          Externe inhuur raakt HR, inkoop, finance, legal en de business tegelijk.
          Komma Consult brengt daar overzicht, richting en bestuurbaarheid in.
        </p>
        <nav aria-label="Diensten" className="mt-8 flex flex-wrap gap-3">
          {diensten.map((dienst) => (
            <a
              key={dienst.id}
              href={`#${dienst.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-komma-fuchsia/20 px-4 py-2 text-sm font-semibold text-komma-navy hover:border-komma-fuchsia hover:text-komma-fuchsia transition-colors"
            >
              <dienst.icon className="h-4 w-4 text-komma-fuchsia" aria-hidden="true" />
              {dienst.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* Diensten */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-20">
            {diensten.map((dienst, index) => {
              const serviceLink = getServiceLinkById(dienst.id)
              const artikelen = (serviceLink?.knowledgeSlugs ?? [])
                .map((slug) => getBlogPostBySlug(slug))
                .filter(Boolean)
                .slice(0, 2)

              return (
                <article
                  key={dienst.id}
                  id={dienst.id}
                  className="scroll-mt-28 border-t border-gray-100 pt-16 first:border-t-0 first:pt-0"
                >
                  <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                    <div className="lg:col-span-7">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-komma-fuchsia flex items-center justify-center flex-shrink-0">
                          <dienst.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-komma-fuchsia font-semibold text-sm">0{index + 1}</span>
                          <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-komma-navy tracking-tight">
                            {dienst.title}
                          </h2>
                          <p className="mt-1 text-gray-500 font-medium">{dienst.short}</p>
                        </div>
                      </div>

                      <p className="mt-8 text-gray-700 text-lg leading-relaxed max-w-[42rem]">
                        {dienst.description}
                      </p>

                      <div className="mt-8 border-l-2 border-komma-fuchsia/30 pl-5 max-w-[40rem]">
                        <span className="text-komma-fuchsia font-semibold text-xs tracking-wide uppercase">
                          Relevant als
                        </span>
                        <p className="mt-2 text-gray-600 leading-relaxed">{dienst.when}</p>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-komma-navy font-semibold hover:text-komma-fuchsia transition-colors"
                        >
                          Bespreek dit vraagstuk
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        {artikelen.map((post) => (
                          <Link
                            key={post!.slug}
                            to={getBlogPostUrl(post!)}
                            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-komma-fuchsia transition-colors"
                          >
                            <span className="h-1 w-1 rounded-full bg-komma-fuchsia/70" aria-hidden="true" />
                            {post!.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-7 lg:p-8">
                        <h3 className="font-display text-lg font-bold text-komma-navy">
                          Wat levert dit op?
                        </h3>
                        <ul className="mt-5 space-y-4">
                          {dienst.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-komma-fuchsia flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="text-gray-700 leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Aanpak */}
      <section className="py-16 lg:py-24 bg-komma-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-komma-fuchsia-light font-semibold text-sm tracking-wide uppercase">
              Onze aanpak
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Van vraagstuk naar werkbare oplossing
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Geen zwaar adviestraject, maar snel scherpte en onderweg bijsturen.
            </p>
          </div>

          <ol className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {aanpak.map((stap, index) => (
              <li key={stap.title} className="rounded-2xl bg-white/5 border border-white/10 p-7">
                <span className="text-komma-fuchsia-light font-semibold text-sm">0{index + 1}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{stap.title}</h3>
                <p className="mt-2 text-white/75 leading-relaxed">{stap.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FaqSection
        items={dienstenFaqs}
        heading="Veelgestelde vragen over onze diensten"
        variant="accordion"
        className="bg-white"
      />

      <section className="py-16 lg:py-24 bg-[#fdf2f8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
            Laten we kennismaken
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-komma-navy tracking-tight">
            Welke uitdaging mogen wij oplossen?
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Plan een vrijblijvend gesprek en ontdek hoe Komma Consult jouw organisatie
            het beste kan ondersteunen.
          </p>
          <div className="mt-8">
            <Link to="/contact" className={buttonVariants({ size: 'lg' })}>
              Plan een gesprek
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
