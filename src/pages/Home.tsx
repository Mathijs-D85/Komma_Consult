import { Link } from 'react-router-dom'
import { ArrowRight, Target, Shield, Clock, Settings } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import ChatApp from '@/components/chat/ChatApp'
import Seo from '@/seo/Seo'

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
      <Seo
        path="/"
        title="Externe inhuur & strategisch inhuuradvies"
        description="Komma Consult helpt grote organisaties en overheden met externe inhuur: strategisch inhuuradvies, compliant inhuren en interim ondersteuning."
      />
      {/* Wrapper met doorlopende decoratieve fuchsia baan */}
      <div className="relative overflow-hidden bg-white">
        {/* Fuchsia accent shape - loopt door over chat + diensten */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/5 transform skew-x-12 translate-x-20 pointer-events-none" />
        {/* Navy accent shape */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-komma-navy/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        {/* Chat als hero - vervangt de oude hero sectie */}
        <ChatApp config={{
          supabaseUrl: import.meta.env.VITE_SUPABASE_URL || "https://dhuppyaqprsjaquomqtp.supabase.co",
          supabaseFunctionsUrl: import.meta.env.VITE_SUPABASE_FUNCTIONS_URL || "https://dhuppyaqprsjaquomqtp.supabase.co/functions/v1",
          contactUrl: "/contact",
        }} />

        {/* Services Section - Bold Cards */}
        <section className="relative py-24 lg:py-32">
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
