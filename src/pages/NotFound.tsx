import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-komma-fuchsia/5 transform skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-komma-navy/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        
        {/* Floating commas */}
        <div className="absolute top-20 left-[10%] text-8xl font-display font-black text-komma-fuchsia/10 animate-bounce" style={{ animationDuration: '3s' }}>
          ,
        </div>
        <div className="absolute top-40 right-[15%] text-6xl font-display font-black text-komma-navy/10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          ,
        </div>
        <div className="absolute bottom-32 left-[20%] text-7xl font-display font-black text-komma-fuchsia/10 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
          ,
        </div>
        <div className="absolute bottom-20 right-[25%] text-5xl font-display font-black text-komma-navy/10 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
          ,
        </div>
      </div>

      <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* 404 with creative comma integration */}
        <div className="relative inline-block mb-8">
          <span className="text-[10rem] sm:text-[14rem] lg:text-[18rem] font-display font-black text-komma-navy leading-none tracking-tighter">
            4
          </span>
          <span className="text-[10rem] sm:text-[14rem] lg:text-[18rem] font-display font-black text-komma-fuchsia leading-none tracking-tighter relative">
            ,
            {/* Animated dot under comma */}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-komma-fuchsia rounded-full animate-ping" />
          </span>
          <span className="text-[10rem] sm:text-[14rem] lg:text-[18rem] font-display font-black text-komma-navy leading-none tracking-tighter">
            4
          </span>
        </div>

        {/* Message */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-komma-navy mb-6">
          Oeps! Hier zetten we even een
          <span className="text-komma-fuchsia"> punt</span> 
        </h1>
        
        <p className="text-xl text-gray-600 mb-4 max-w-xl mx-auto">
          Je bent de komma voorbijgeschoten.
          Deze pagina is 'niet compliant' met onze websitestructuur. 
        </p>
        
        <p className="text-lg text-gray-500 mb-12">
          Geen zorgen, wij adviseren je graag de weg terug naar de juiste informatie.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button size="lg" className="text-lg px-8">
              <Home className="mr-2 h-5 w-5" />
              Naar de homepage
            </Button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-komma-navy hover:text-komma-fuchsia transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Ga terug
          </button>
        </div>

        {/* Fun footer text */}
        <p className="mt-16 text-sm text-gray-400">
          Error 404 • Pagina niet gevonden • Maar samen lossen we het op! 💜
        </p>
      </div>
    </section>
  )
}
