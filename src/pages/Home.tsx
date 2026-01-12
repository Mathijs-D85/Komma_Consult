import { Link } from 'react-router-dom'
import { ArrowRight, Target, Shield, Clock, Settings, Quote } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const diensten = [
  {
    icon: Target,
    title: 'Strategisch inhuuradvies',
    description: 'Optimaliseer je externe inhuurstrategie en maximaliseer ROI.',
    href: '/diensten#strategisch-inhuuradvies',
  },
  {
    icon: Shield,
    title: 'Compliant inhuren',
    description: 'Volledig voldoen aan wet- en regelgeving, risico\'s minimaliseren.',
    href: '/diensten#compliant-inhuren',
  },
  {
    icon: Clock,
    title: 'Interim ondersteuning',
    description: 'Tijdelijke managementondersteuning wanneer je het nodig hebt.',
    href: '/diensten#interim-ondersteuning',
  },
  {
    icon: Settings,
    title: 'Implementatie',
    description: 'Van ontwerp tot training - soepele implementatie gegarandeerd.',
    href: '/diensten#implementatie',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section - Bold & Dynamic */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Fuchsia accent shape */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/5 transform skew-x-12 translate-x-20" />
          {/* Navy accent shape */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-komma-navy/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          {/* Decorative comma */}
          <div className="absolute top-20 right-20 text-[20rem] font-display font-black text-komma-navy/[0.03] leading-none select-none hidden xl:block">
            ,
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-komma-fuchsia/10 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-komma-fuchsia rounded-full animate-pulse" />
              <span className="text-komma-fuchsia font-medium text-sm tracking-wide uppercase">
                Strategisch Inhuuradvies
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-komma-navy leading-[0.95] tracking-tight animate-fade-in-up">
              Ontdek wat er
              <br />
              schuilt achter
              <br />
              <span className="text-komma-fuchsia">de komma</span>
            </h1>
            
            <p className="mt-8 text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-100">
              Waar passies, ambities en mogelijkheden ontstaan. 
              Komma Consult begeleidt, inspireert en ondersteunt bij 
              alle vraagstukken rondom externe inhuur.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 bg-komma-fuchsia hover:bg-komma-fuchsia-dark">
                  Plan een gesprek
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/diensten">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
                  Bekijk diensten
                </Button>
              </Link>
            </div>
            
            {/* Founder tag */}
            <div className="mt-16 flex items-center gap-4 animate-fade-in-up animation-delay-300">
              <img 
                src="/mathijs-duisdecker.jpg" 
                alt="Mathijs Duisdecker"
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
              />
              <div>
                <p className="font-semibold text-komma-navy">Mathijs Duisdecker</p>
                <p className="text-gray-500 text-sm">Oprichter Komma Consult</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bold Cards */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Dienstverlening
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-komma-navy tracking-tight">
              Expertise op maat
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Van strategisch advies tot hands-on implementatie. 
              Altijd afgestemd op jouw specifieke situatie.
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

      {/* Testimonial Section - More Dynamic */}
      <section className="py-24 lg:py-32 bg-komma-navy relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-komma-fuchsia/10 transform skew-x-12 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Quote icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-komma-fuchsia flex items-center justify-center">
                <Quote className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl text-white font-display font-semibold leading-snug">
                "Komma Consult heeft een cruciale rol gespeeld in het vormgeven van onze visie op Vendor Management. 
                <span className="text-komma-fuchsia"> Dankzij hun unieke inzichten</span> hebben we nu een robuuste 
                en toekomstbestendige aanpak."
              </blockquote>
              
              <div className="mt-10 flex items-center gap-4">
                <div className="w-1 h-12 bg-komma-fuchsia rounded-full" />
                <div>
                  <p className="text-white font-semibold text-lg">Hays Enterprise Solutions</p>
                  <p className="text-white/60">Vendor Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            Plan een vrijblijvend adviesgesprek en ontdek hoe Komma Consult 
            jouw organisatie kan helpen met externe inhuur vraagstukken.
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
