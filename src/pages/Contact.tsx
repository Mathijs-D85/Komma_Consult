import { useEffect } from 'react'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'
import Seo from '@/seo/Seo'
import { SITE, absoluteUrl } from '@/seo/site'
import PageHero from '@/components/PageHero'
import FounderPhoto from '@/components/FounderPhoto'

declare global {
  interface Window {
    Cal?: {
      (action: string, ...args: unknown[]): void
      ns?: Record<string, unknown>
      q?: unknown[]
      loaded?: boolean
    }
  }
}

function loadCalEmbed() {
  const start = () => {
    if (!window.Cal) return
    window.Cal('inline', {
      elementOrSelector: '#cal-embed',
      calLink: 'kommaconsult',
      config: {
        layout: 'month_view',
        theme: 'light',
      },
    })
    window.Cal('ui', {
      theme: 'light',
      styles: {
        branding: {
          brandColor: '#eb088d',
        },
      },
      hideEventTypeDetails: false,
    })
  }

  if (window.Cal) {
    start()
    return
  }

  if (!document.getElementById('cal-embed-script')) {
    const loader = document.createElement('script')
    loader.id = 'cal-embed-script'
    loader.text = `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.eu/embed/embed.js", "init"); Cal("init", {origin:"https://app.cal.eu"});`
    document.head.appendChild(loader)
  }

  start()
}

export default function Contact() {
  useEffect(() => {
    loadCalEmbed()
  }, [])

  const contactPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact | ${SITE.name}`,
    url: `${SITE.url}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: absoluteUrl('/logo-icon.svg'),
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'kommaconsult@outlook.com',
          telephone: '+31627307689',
          areaServed: 'NL',
          availableLanguage: ['nl'],
        },
      ],
    },
  }

  return (
    <>
      <Seo
        path="/contact"
        title="Contact"
        description="Plan een vrijblijvend adviesgesprek met Mathijs Duisdecker van Komma Consult. Stel je vraag over externe inhuur, compliance of inhuurstrategie."
        jsonLd={contactPageJsonLd}
      />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Laten we
            <br />
            <span className="text-komma-fuchsia">kennismaken</span>
          </>
        }
      >
        <p>
          Heb je een vraag of wil je vrijblijvend sparren over jouw inhuurvraagstuk?
          Plan direct een gesprek of neem contact met me op.
        </p>
      </PageHero>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-komma-fuchsia flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-komma-navy">
                    Plan een gesprek
                  </h2>
                  <p className="text-gray-600">Kies een moment dat jou uitkomt</p>
                </div>
              </div>

              <div
                id="cal-embed"
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden min-h-[600px]"
                style={{ width: '100%', height: '100%', minHeight: '600px' }}
              />
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-komma-navy mb-6">
                Direct contact
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Liever direct contact opnemen? Dat kan natuurlijk ook.
                Stuur een e-mail of bel me gerust.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:kommaconsult@outlook.com"
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-komma-navy/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-komma-navy/5 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-komma-navy" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-komma-navy">E-mail</p>
                    <p className="text-gray-600">kommaconsult@outlook.com</p>
                  </div>
                </a>

                <a
                  href="tel:+31627307689"
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-komma-navy/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-komma-navy/5 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-komma-navy" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-komma-navy">Telefoon</p>
                    <p className="text-gray-600">+31 6 27 30 76 89</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-komma-navy/5 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-komma-navy" aria-hidden="true" />
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

              <div className="mt-8 p-6 bg-komma-navy rounded-2xl text-white">
                <div className="flex items-center gap-4">
                  <FounderPhoto
                    alt="Mathijs Duisdecker"
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                    width={64}
                    height={64}
                    sizes="64px"
                  />
                  <div>
                    <p className="font-display text-lg font-bold">Mathijs Duisdecker</p>
                    <p className="text-white/80">Oprichter Komma Consult</p>
                  </div>
                </div>
                <p className="mt-4 text-white/80 text-sm leading-relaxed">
                  &quot;Ik kijk ernaar uit om met je in gesprek te gaan en samen te ontdekken
                  hoe ik je kan helpen met jouw inhuurvraagstuk.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-2xl sm:text-3xl font-bold text-komma-navy">
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
