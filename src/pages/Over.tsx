import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Lightbulb, Linkedin, Users, TrendingUp } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'
import Seo from '@/seo/Seo'
import PageHero from '@/components/PageHero'
import FounderPhoto from '@/components/FounderPhoto'

const waarden = [
  {
    icon: Lightbulb,
    title: 'Vernieuwend',
    description: 'We kijken niet alleen naar hoe het altijd is gedaan, maar vooral naar wat in jouw situatie werkt. Dat betekent frisse analyse, scherpe vragen en oplossingen die passen bij de praktijk van nu.',
  },
  {
    icon: Users,
    title: 'Persoonlijk',
    description: 'Geen wisselende contactpersonen of afstandelijke adviestaal. Je werkt direct samen met iemand die jouw vraagstuk begrijpt, meedenkt en betrokken blijft van eerste gesprek tot uitvoering.',
  },
  {
    icon: TrendingUp,
    title: 'Vooruit',
    description: 'Een goed advies is geen eindpunt. We helpen je om keuzes om te zetten in beweging, en blijven onderweg aanscherpen waar de praktijk daarom vraagt.',
  },
]

export default function Over() {
  return (
    <>
      <Seo
        path="/over"
        title="Over Komma Consult"
        description="Lees hoe Komma Consult externe inhuur bestuurbaar maakt met inhoudelijke scherpte en oog voor de praktijk."
      />

      <PageHero
        eyebrow="Over ons"
        title={
          <>
            Het verhaal achter
            <br />
            <span className="text-komma-fuchsia">de komma</span>
          </>
        }
      >
        <p>
          Komma Consult helpt organisaties om grip, regie en rust te brengen in
          externe inhuur. Niet met abstracte modellen, maar door
          complexe vraagstukken terug te brengen tot heldere keuzes en werkbare oplossingen.
        </p>
      </PageHero>

      <section id="mathijs" className="py-16 lg:py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                <FounderPhoto
                  alt="Mathijs Duisdecker - Oprichter Komma Consult"
                  className="w-full h-full object-cover"
                  width={800}
                  height={1000}
                  priority
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-komma-fuchsia/10 rounded-full mb-6">
                <Calendar className="h-4 w-4 text-komma-fuchsia" aria-hidden="true" />
                <span className="text-komma-fuchsia font-semibold text-sm">Opgericht maart 2023</span>
              </div>

              <h2 className="font-display text-3xl lg:text-4xl font-bold text-komma-navy tracking-tight mb-6">
                Mathijs Duisdecker
              </h2>

              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  In externe inhuur komen veel werelden samen: HR, inkoop, finance,
                  legal, leveranciers en de business. Juist daardoor ontstaan er in
                  de praktijk vaak onduidelijkheid, versnipperde verantwoordelijkheid en gebrek aan sturing.
                </p>
                <p>
                  Ik heb Komma Consult opgericht om organisaties te helpen die
                  complexiteit terug te brengen tot overzicht en regie. Niet vanaf
                  de zijlijn, maar dicht op de inhoud en dicht op de praktijk.
                </p>
                <p className="text-komma-navy font-semibold">
                  &quot;Ik geloof dat externe inhuur pas echt bestuurbaar wordt als
                  inhoud, uitvoering en eigenaarschap weer met elkaar verbonden zijn.&quot;
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/contact" className={buttonVariants()}>
                  Neem contact op
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="https://www.linkedin.com/in/mduisdecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-komma-navy hover:text-komma-fuchsia transition-colors"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Kernwaarden
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-komma-navy tracking-tight">
              Hoe wij werken
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Wat Komma Consult onderscheidt, zit niet in grotere woorden of meer lagen,
              maar in de manier van kijken en samenwerken: inhoudelijk scherp, direct betrokken en altijd gericht op beweging in de praktijk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {waarden.map((waarde, index) => (
              <div
                key={waarde.title}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-komma-fuchsia/10 flex items-center justify-center mb-6">
                  <waarde.icon className="h-6 w-6 text-komma-fuchsia" aria-hidden="true" />
                </div>
                <p className="text-komma-fuchsia font-semibold text-sm">0{index + 1}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-komma-navy">
                  {waarde.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {waarde.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-komma-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 font-semibold text-sm tracking-wide uppercase">
            Onze missie
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Externe inhuur bestuurbaar maken
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Komma Consult helpt organisaties om externe inhuur terug te brengen tot
            overzicht, eigenaarschap en werkbare keuzes. Zodat beleid, processen en
            uitvoering weer op elkaar aansluiten.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-komma-navy tracking-tight">
            Benieuwd wat ik voor jou kan betekenen?
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Ik maak graag kennis om te verkennen waar jouw organisatie meer grip,
            regie of scherpte nodig heeft.
          </p>
          <div className="mt-8">
            <Link to="/contact" className={buttonVariants({ size: 'lg' })}>
              Neem contact op
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
