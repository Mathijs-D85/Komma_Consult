import { useEffect } from 'react'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'

declare global {
  interface Window {
    Cal?: {
      (action: string, ...args: unknown[]): void;
      ns?: Record<string, unknown>;
      q?: unknown[];
      loaded?: boolean;
    };
  }
}

export default function Contact() {
  useEffect(() => {
    // Initialize Cal.com inline embed (EU Version)
    if (window.Cal) {
      window.Cal("inline", {
        elementOrSelector: "#cal-embed",
        calLink: "kommaconsult",
        config: {
          layout: "month_view",
          theme: "light",
        }
      });
      
      window.Cal("ui", {
        theme: "light",
        styles: {
          branding: {
            brandColor: "#eb088d"
          }
        },
        hideEventTypeDetails: false,
      });
    }
  }, []);

  return (
    <>
      {/* Header */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/5 transform skew-x-12 translate-x-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-komma-fuchsia font-semibold text-sm tracking-wide uppercase">
              Contact
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-komma-navy tracking-tight">
              Laten we
              <br />
              <span className="text-komma-fuchsia">kennismaken</span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Heb je een vraag of wil je vrijblijvend sparren over jouw inhuur vraagstuk? 
              Plan direct een gesprek of neem contact met me op.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Cal.com Embed - Takes more space */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-komma-fuchsia flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-komma-navy">
                    Plan een gesprek
                  </h2>
                  <p className="text-gray-500">Kies een moment dat jou uitkomt</p>
                </div>
              </div>
              
              {/* Cal.com inline embed */}
              <div 
                id="cal-embed" 
                className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[600px]"
                style={{ width: '100%', height: '100%', minHeight: '600px' }}
              />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-komma-navy mb-8">
                Direct contact
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Liever direct contact opnemen? Dat kan natuurlijk ook. 
                Stuur een e-mail of bel me gerust.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:kommaconsult@outlook.com"
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-komma-fuchsia/30 hover:shadow-lg hover:shadow-komma-fuchsia/10 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-komma-navy/5 flex items-center justify-center group-hover:bg-komma-fuchsia transition-colors">
                    <Mail className="h-6 w-6 text-komma-navy group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-komma-navy">E-mail</p>
                    <p className="text-gray-600">kommaconsult@outlook.com</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+31627307689"
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-komma-fuchsia/30 hover:shadow-lg hover:shadow-komma-fuchsia/10 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-komma-navy/5 flex items-center justify-center group-hover:bg-komma-fuchsia transition-colors">
                    <Phone className="h-6 w-6 text-komma-navy group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-komma-navy">Telefoon</p>
                    <p className="text-gray-600">+31 6 27 30 76 89</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100">
                  <div className="w-14 h-14 rounded-xl bg-komma-navy/5 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-komma-navy" />
                  </div>
                  <div>
                    <p className="font-bold text-komma-navy">Postadres</p>
                    <p className="text-gray-600">
                      Keurenplein 41<br />
                      1069 CD Amsterdam
                    </p>
                  </div>
                </div>
              </div>

              {/* Mathijs card */}
              <div className="mt-8 p-6 bg-komma-navy rounded-3xl text-white relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-komma-fuchsia/20 rounded-full blur-2xl" />
                
                <div className="relative flex items-center gap-4">
                  <img 
                    src="/mathijs-duisdecker.jpg" 
                    alt="Mathijs Duisdecker"
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <p className="font-display text-lg font-bold">Mathijs Duisdecker</p>
                    <p className="text-white/70">Oprichter Komma Consult</p>
                  </div>
                </div>
                <p className="relative mt-4 text-white/80 text-sm leading-relaxed">
                  "Ik kijk ernaar uit om met je in gesprek te gaan en samen te ontdekken 
                  hoe ik je kan helpen met jouw inhuur vraagstuk."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom tagline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-3xl sm:text-4xl font-bold text-komma-navy">
            Laten we samen ontdekken wat er schuilt 
            <span className="text-komma-fuchsia"> achter de komma</span>
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            Wat mij betreft is dat waar passies, ambities en mogelijkheden ontstaan.
          </p>
        </div>
      </section>
    </>
  )
}
