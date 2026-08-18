export type FaqItem = {
  question: string
  answer: string
  href?: string
}

export function toFaqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/** Vragen die bezoekers in de chat stellen en die AI-engines het vaakst zullen nazoeken. */
export const homeFaqs: FaqItem[] = [
  {
    question: 'Hoe krijg ik meer grip op externe inhuur?',
    answer:
      'Grip ontstaat als overzicht, rollen en sturing bij elkaar komen. Je weet wie er werkt, tegen welke voorwaarden en via welke leveranciers, en je kunt bijsturen op kosten, compliance en doorlooptijd. Komma Consult helpt organisaties om van versnippering naar overzicht en regie te komen.',
    href: '/kennis/artikelen/wat-is-grip-op-externe-inhuur',
  },
  {
    question: 'Wanneer past een MSP, broker of VMS?',
    answer:
      'Dat hangt af van volume, volwassenheid en het probleem dat je wilt oplossen. Een broker past bij administratieve ontzorging, een VMS bij proces en data, een master vendor bij leverzekerheid in generieke profielen, en een MSP bij centrale regie. Er is geen universeel beste model.',
    href: '/kennis/artikelen/msp-broker-master-vendor-of-decentraal-model',
  },
  {
    question: 'Wat is compliant inhuren in de praktijk?',
    answer:
      'Compliant inhuren is meer dan een checklist of modelovereenkomst. Het gaat om processen, rollen, gedrag op de werkvloer en de manier waarop je met leveranciers samenwerkt. Wat op papier staat, moet aansluiten op wat er dagelijks gebeurt.',
    href: '/kennis/artikelen/wat-is-compliant-inhuren',
  },
  {
    question: 'Wat verandert de Wtta voor inleners vanaf 2028?',
    answer:
      'Vanaf 1 januari 2028 mag je alleen nog arbeidskrachten inlenen bij uitleners met een toelating van de Nederlandse Autoriteit Uitleenmarkt. Als inlener heb je een inleenverbod, een controleplicht via het openbare register en een administratieplicht. De Nederlandse Arbeidsinspectie kan boetes opleggen aan inleners en aan uitleners zonder toelating.',
    href: '/kennis/artikelen/wtta-waarom-2028-nu-al-op-je-agenda',
  },
  {
    question: 'Wanneer is zzp-inhuur verantwoord?',
    answer:
      'Zzp-inhuur is verantwoord als de praktijk bij ondernemerschap past: echte vrijheid in de uitvoering en geen schijnzelfstandigheid. Een contract of modelovereenkomst is daarvoor niet genoeg. Niet elk profiel hoort in hetzelfde contractmodel.',
    href: '/kennis/artikelen/wanneer-is-zzp-inhuur-verantwoord',
  },
  {
    question: 'Wat doet Komma Consult?',
    answer:
      'Komma Consult helpt organisaties om grip, regie en bestuurbaarheid te krijgen in externe inhuur. Dat kan via strategisch advies, compliant inhuren, implementatie van een MSP, broker of VMS, of tijdelijke ondersteuning. Het bureau is in 2023 opgericht door Mathijs Duisdecker.',
    href: '/over',
  },
]

export const dienstenFaqs: FaqItem[] = [
  {
    question: 'Wanneer is strategisch inhuuradvies relevant?',
    answer:
      'Als je meer grip wilt op externe inhuur, een verandering overweegt of eerst scherp wilt krijgen welk probleem je oplost. Denk aan governance, leveranciers, de verhouding tussen vast en flex, of de vraag of een MSP, broker of VMS past. Het resultaat is richting waarmee HR, inkoop en de business verder kunnen.',
    href: '/diensten#strategisch-inhuuradvies',
  },
  {
    question: 'Hoe maak je compliant inhuren werkbaar?',
    answer:
      'Door compliance te verbinden aan het dagelijkse inhuurproces: rollen, leveranciersafspraken en gedrag op de werkvloer, niet alleen documenten. Dat is nodig als regelgeving druk zet, of als papieren zekerheid niet meer volstaat.',
    href: '/diensten#compliant-inhuren',
  },
  {
    question: 'Wanneer helpt interim ondersteuning?',
    answer:
      'Als het vraagstuk helder is, maar tijd, capaciteit of expertise ontbreekt. Bijvoorbeeld bij implementaties, governance, leveranciersmanagement of dossiers die blijven liggen. Je krijgt dan tijdelijk regie van iemand die de inhoud van externe inhuur al kent.',
    href: '/diensten#interim-ondersteuning',
  },
  {
    question: 'Wat levert de implementatie van een MSP, broker of VMS op?',
    answer:
      'Waarde ontstaat pas als ontwerp, besluitvorming en praktijk op elkaar aansluiten. Komma Consult begeleidt keuzes, inrichting en adoptie, zodat de oplossing niet alleen live gaat maar ook gebruikt wordt.',
    href: '/diensten#implementatie',
  },
  {
    question: 'Hoe pakt Komma Consult een vraagstuk aan?',
    answer:
      'In vier stappen: verkennen wat er speelt, analyseren van processen, rollen en risico’s, realiseren via advies of uitvoering, en bijsturen op basis van de praktijk. Geen zwaar adviestraject, wel scherpte en beweging.',
    href: '/diensten',
  },
]

export const chatSuggestions = homeFaqs.slice(0, 4).map((item) => item.question)
