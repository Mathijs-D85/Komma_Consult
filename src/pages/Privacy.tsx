import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'

export default function Privacy() {
  return (
    <>
      {/* Header */}
      <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-komma-fuchsia/5 transform skew-x-12 translate-x-20" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-komma-navy hover:text-komma-fuchsia transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-komma-fuchsia flex items-center justify-center">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-komma-navy tracking-tight">
              Privacy Policy
            </h1>
          </div>
          
          <p className="text-gray-500">
            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="font-display text-2xl font-bold text-komma-navy mt-0">
                1. Inleiding
              </h2>
              <p className="text-gray-600">
                Komma Consult, gevestigd te Keurenplein 41, 1069 CD Amsterdam, is verantwoordelijk 
                voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
              </p>
              <p className="text-gray-600">
                <strong>Contactgegevens:</strong><br />
                Komma Consult<br />
                Keurenplein 41<br />
                1069 CD Amsterdam<br />
                E-mail: kommaconsult@outlook.com<br />
                Telefoon: +31 6 27 30 76 89
              </p>

              <h2 className="font-display text-2xl font-bold text-komma-navy">
                2. Persoonsgegevens die wij verwerken
              </h2>
              <p className="text-gray-600">
                Komma Consult verwerkt je persoonsgegevens doordat je gebruik maakt van onze 
                diensten en/of omdat je deze gegevens zelf aan ons verstrekt. Hieronder vind 
                je een overzicht van de persoonsgegevens die wij verwerken:
              </p>
              <ul className="text-gray-600">
                <li>Voor- en achternaam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Bedrijfsnaam</li>
                <li>Gegevens over jouw activiteiten op onze website (via Vercel Analytics)</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-komma-navy">
                3. Waarom wij gegevens nodig hebben
              </h2>
              <p className="text-gray-600">
                Komma Consult verwerkt jouw persoonsgegevens voor de volgende doelen:
              </p>
              <ul className="text-gray-600">
                <li>Het afhandelen van jouw betaling (indien van toepassing)</li>
                <li>Je te kunnen bellen of e-mailen indien dit nodig is voor onze dienstverlening</li>
                <li>Je te informeren over wijzigingen van onze diensten</li>
                <li>Om onze website te analyseren en verbeteren</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-komma-navy">
                4. Hoe lang we gegevens bewaren
              </h2>
              <p className="text-gray-600">
                Komma Consult bewaart je persoonsgegevens niet langer dan strikt nodig is om de 
                doelen te realiseren waarvoor je gegevens worden verzameld. Wij hanteren de 
                volgende bewaartermijnen:
              </p>
              <ul className="text-gray-600">
                <li>Contactgegevens: gedurende de samenwerking en 2 jaar daarna</li>
                <li>Analytische gegevens: maximaal 26 maanden</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-komma-navy">
                5. Delen met derden
              </h2>
              <p className="text-gray-600">
                Komma Consult verkoopt jouw gegevens niet aan derden en zal deze uitsluitend 
                verstrekken indien dit nodig is voor de uitvoering van onze overeenkomst met 
                jou of om te voldoen aan een wettelijke verplichting.
              </p>
              <p className="text-gray-600">
                Wij maken gebruik van de volgende diensten van derden:
              </p>
              <ul className="text-gray-600">
                <li><strong>Vercel Analytics</strong> - voor websitestatistieken (privacy-vriendelijk, geen cookies)</li>
                <li><strong>Cal.com</strong> - voor het inplannen van afspraken</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-komma-navy">
                6. Cookies
              </h2>
              <p className="text-gray-600">
                Komma Consult gebruikt alleen technische en functionele cookies. Deze cookies 
                zijn noodzakelijk voor het functioneren van de website en verzamelen geen 
                persoonlijke gegevens.
              </p>
              <p className="text-gray-600">
                Vercel Analytics werkt zonder cookies en respecteert de privacy van bezoekers.
              </p>

              <h2 className="font-display text-2xl font-bold text-komma-navy">
                7. Jouw rechten
              </h2>
              <p className="text-gray-600">
                Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te 
                verwijderen. Daarnaast heb je het recht om je eventuele toestemming voor de 
                gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van 
                jouw persoonsgegevens.
              </p>
              <p className="text-gray-600">
                Je kunt een verzoek tot inzage, correctie, verwijdering of gegevensoverdraging 
                sturen naar <a href="mailto:kommaconsult@outlook.com" className="text-komma-fuchsia hover:underline">kommaconsult@outlook.com</a>.
              </p>

              <h2 className="font-display text-2xl font-bold text-komma-navy">
                8. Beveiliging
              </h2>
              <p className="text-gray-600">
                Komma Consult neemt de bescherming van jouw gegevens serieus en neemt 
                passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste 
                openbaarmaking en ongeoorloofde wijziging tegen te gaan.
              </p>
              <p className="text-gray-600">
                Onze website maakt gebruik van een SSL-certificaat (HTTPS) om de verbinding 
                tussen jouw browser en onze server te beveiligen.
              </p>

              <h2 className="font-display text-2xl font-bold text-komma-navy">
                9. Vragen
              </h2>
              <p className="text-gray-600">
                Als je vragen hebt over deze privacyverklaring of onze verwerking van 
                persoonsgegevens, neem dan gerust contact met ons op:
              </p>
              <p className="text-gray-600">
                <strong>Komma Consult</strong><br />
                Mathijs Duisdecker<br />
                E-mail: <a href="mailto:kommaconsult@outlook.com" className="text-komma-fuchsia hover:underline">kommaconsult@outlook.com</a><br />
                Telefoon: <a href="tel:+31627307689" className="text-komma-fuchsia hover:underline">+31 6 27 30 76 89</a>
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
