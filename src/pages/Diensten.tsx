import { Link } from 'react-router-dom'
import { ArrowRight, Target, Shield, Clock, Settings, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const diensten = [
  {
    id: 'strategisch-inhuuradvies',
    icon: Target,
    title: 'Strategisch inhuuradvies',
    description: `Wij begrijpen dat het succes van je organisatie afhankelijk is van het effectief inzetten van talent. Onze dienstverlening op het gebied van strategisch inhuuradvies is gericht op het optimaliseren van je inhuurstrategie.`,
    details: `In welke fase je ook zit als organisatie, wij bieden grondige analyses en strategieën die zijn ontworpen om je organisatie te helpen bij het efficiënt beheren van je inhuur en het maximaliseren van de ROI op je inhuurinvesteringen.`,
    benefits: [
      'Optimalisatie van je externe inhuurstrategie',
      'Grondige analyses van de huidige situatie',
      'Strategieën voor efficiënt beheer van je inhuur',
      'Kostenmanagement strategie voor maximalisatie en optimalisatie van je inhuurinvestering',
    ],
  },
  {
    id: 'compliant-inhuren',
    icon: Shield,
    title: 'Compliant inhuren',
    description: `In de soms complexe wereld van externe inhuur, zorgt Komma Consult ervoor dat je inhuurprocessen volledig voldoen aan de geldende wet- en regelgeving.`,
    details: `Onze specialisten op het gebied van compliant inhuren bieden deskundig advies en ondersteuning om te zorgen dat je organisatie risico's minimaliseert en zodoende voldoet aan alle juridische en wettelijke vereisten.`,
    benefits: [
      'Volledig compliant met wet- en regelgeving',
      'Minimalisatie van juridische risico\'s',
      'Deskundig advies van specialisten',
      'Continue ondersteuning bij veranderingen in wetgeving',
    ],
  },
  {
    id: 'interim-ondersteuning',
    icon: Clock,
    title: 'Interim ondersteuning',
    description: `Heb je dringend behoefte aan tijdelijke managementondersteuning of specifieke vaardigheden voor een korte termijn? Kies voor actie met Komma Consult!`,
    details: `Wij staan klaar om je uitdagingen om te zetten in een succesvolle oplossing. Tijdens een vrijblijvend adviesgesprek verkennen we de mogelijkheden of zoeken we alternatieve ondersteuningswegen, zoals het inzetten van ons uitgebreide netwerk. Op deze manier voorzien wij je altijd van een oplossing.`,
    benefits: [
      'Snelle beschikbaarheid van expertise',
      'Flexibele inzet voor korte of lange termijn',
      'Toegang tot ons uitgebreide netwerk',
      'Altijd een passende oplossing',
    ],
  },
  {
    id: 'implementatie',
    icon: Settings,
    title: 'Implementeren van een inhuuroplossing',
    description: `De implementatie van een nieuw inhuursysteem of -proces kan een uitdaging zijn. Komma Consult biedt uitgebreide ondersteuning bij de implementatie van inhuuroplossingen.`,
    details: `Wij begeleiden je bij elke stap van het proces. Van het geven van advies, het ontwerpen van het systeem tot de daadwerkelijke implementatie en training van je personeel. Wij zorgen ervoor dat de overgang soepel en succesvol verloopt.`,
    benefits: [
      'End-to-end begeleiding bij implementatie',
      'Advies en systeemontwerp op maat',
      'Training van personeel',
      'Soepele en succesvolle overgang',
    ],
  },
]

export default function Diensten() {
  return (
    <>
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
              Expertise
              <br />
              <span className="text-komma-fuchsia">op maat</span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl">
              Van strategisch advies tot implementatie - wij staan klaar om je 
              organisatie te helpen groeien en floreren met alle vraagstukken 
              rondom inhuur.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-32">
            {diensten.map((dienst, index) => (
              <div 
                key={dienst.id}
                id={dienst.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${index % 2 === 1 ? '' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-komma-fuchsia flex items-center justify-center flex-shrink-0">
                        <dienst.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <span className="text-komma-fuchsia font-bold text-sm">0{index + 1}</span>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-komma-navy tracking-tight">
                          {dienst.title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {dienst.description}
                    </p>
                    
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {dienst.details}
                    </p>
                    
                    <div className="mt-10">
                      <Link to="/contact">
                        <Button className="bg-komma-fuchsia hover:bg-komma-fuchsia-dark">
                          Neem contact op
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Benefits card */}
                  <div className={`bg-white rounded-3xl p-8 lg:p-10 shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="font-display text-xl font-bold text-komma-navy mb-8">
                      Wat levert dit op?
                    </h3>
                    <ul className="space-y-5">
                      {dienst.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-komma-fuchsia/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-komma-fuchsia" />
                          </div>
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
