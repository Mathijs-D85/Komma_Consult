import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Lightbulb, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Seo from '@/seo/Seo'

const waarden = [
  {
    icon: Lightbulb,
    title: 'Vernieuwend',
    description: 'We zoeken altijd naar innovatieve oplossingen die passen bij de specifieke situatie van onze klanten.',
  },
  {
    icon: Users,
    title: 'Persoonlijk',
    description: 'Elke klant is uniek. Wij nemen de tijd om te begrijpen wat jouw organisatie nodig heeft.',
  },
  {
    icon: TrendingUp,
    title: 'Vooruit',
    description: 'Net als een komma in een zin, staat Komma Consult voor voortgang en doorlopende ontwikkeling.',
  },
]

export default function Over() {
  return (
    <>
      <Seo
        path="/over"
        title="Over"
        description="Lees het verhaal achter Komma Consult en maak kennis met oprichter Mathijs Duisdecker."
      />
      {/* Header - Bold Style */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/5 transform skew-x-12 translate-x-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Over ons
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-komma-navy tracking-tight">
              Het verhaal achter
              <br />
              <span className="text-komma-fuchsia">de komma</span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              De naam weerspiegelt onze filosofie: Komma Consult staat voor continuïteit, 
              vernieuwing en de oneindige mogelijkheden die ontstaan na "de komma".
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section - With Real Photo */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/mathijs-duisdecker.jpg" 
                  alt="Mathijs Duisdecker - Oprichter Komma Consult"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-komma-fuchsia rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-komma-navy/10 rounded-3xl -z-10" />
            </div>
            
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-komma-fuchsia/10 rounded-full mb-6">
                <Calendar className="h-4 w-4 text-komma-fuchsia" />
                <span className="text-komma-fuchsia font-semibold text-sm">Opgericht maart 2023</span>
              </div>
              
              <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-komma-navy tracking-tight mb-8">
                Mathijs Duisdecker
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Met jarenlange ervaring en een goed ontwikkeld inzicht in het vakgebied, 
                  zag ik een groeiende vraag naar deskundigheid binnen externe inhuur.
                </p>
                <p>
                  Komma Consult is opgericht met de doelstelling om deze behoefte aan expertise 
                  te adresseren, door bedrijven te ondersteunen in het begrijpen van de 
                  complexiteiten binnen de wereld van externe inhuur.
                </p>
                <p className="text-komma-navy font-semibold">
                  "Laten we samen ontdekken wat er schuilt achter de komma! 
                  Wat mij betreft is dat waar passies, ambities en mogelijkheden ontstaan."
                </p>
              </div>
              
              <div className="mt-10">
                <Link to="/contact">
                  <Button className="bg-komma-fuchsia hover:bg-komma-fuchsia-dark">
                    Neem contact op
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Kernwaarden
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-komma-navy tracking-tight">
              Waar wij voor staan
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {waarden.map((waarde, index) => (
              <div 
                key={waarde.title} 
                className="group bg-gray-50 hover:bg-komma-navy p-10 rounded-3xl transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-komma-fuchsia/10 group-hover:bg-komma-fuchsia flex items-center justify-center mb-8 transition-colors">
                  <waarde.icon className="h-8 w-8 text-komma-fuchsia group-hover:text-white transition-colors" />
                </div>
                <span className="text-5xl font-display font-black text-gray-200 group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-komma-navy group-hover:text-white transition-colors">
                  {waarde.title}
                </h3>
                <p className="mt-4 text-gray-600 group-hover:text-white/80 leading-relaxed transition-colors">
                  {waarde.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement - Bold */}
      <section className="py-20 lg:py-28 bg-komma-navy relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-komma-fuchsia/10 transform -skew-x-12 -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 text-[30rem] font-display font-black text-white/[0.02] leading-none select-none">
          ,
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
            Onze missie
          </span>
          
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Organisaties helpen
            <br />
            <span className="text-komma-fuchsia">groeien en floreren</span>
          </h2>
          
          <p className="mt-8 text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Komma Consult biedt strategische adviezen en oplossingen, gericht op het 
            optimaliseren van inhuurprocessen en het verbeteren van bedrijfsresultaten 
            in een steeds veranderende wereld.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-komma-navy tracking-tight">
            Benieuwd wat ik voor
            <br />
            <span className="text-komma-fuchsia">jou kan betekenen?</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Ik maak graag kennis met je om te bespreken hoe ik je kan helpen.
          </p>
          <div className="mt-10">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-10 py-5 bg-komma-fuchsia hover:bg-komma-fuchsia-dark shadow-xl shadow-komma-fuchsia/25">
                Neem contact op
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
