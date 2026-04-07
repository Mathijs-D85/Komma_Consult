export interface ServiceLinkConfig {
  id: string
  title: string
  href: string
  description: string
  knowledgeSlugs: string[]
}

export const serviceLinks: ServiceLinkConfig[] = [
  {
    id: 'strategisch-inhuuradvies',
    title: 'Strategisch inhuuradvies',
    href: '/diensten#strategisch-inhuuradvies',
    description:
      'Voor vraagstukken over regie, inrichting, leveranciers, governance en de juiste koers in externe inhuur.',
    knowledgeSlugs: [
      'wat-is-grip-op-externe-inhuur',
      'msp-broker-master-vendor-of-decentraal-model',
      'leveranciersmanagement-bij-externe-inhuur',
      'kostenmanagement-bij-externe-inhuur',
    ],
  },
  {
    id: 'compliant-inhuren',
    title: 'Compliant inhuren',
    href: '/diensten#compliant-inhuren',
    description:
      'Voor situaties waarin wet- en regelgeving, risico\'s en werkpraktijk beter op elkaar moeten aansluiten.',
    knowledgeSlugs: [
      'wat-is-compliant-inhuren',
      'wet-dba-deliveroo-en-zelfstandigenwet',
      'wanneer-is-zzp-inhuur-verantwoord',
      'wat-doet-een-vms-wel-en-niet',
    ],
  },
  {
    id: 'interim-ondersteuning',
    title: 'Interim ondersteuning',
    href: '/diensten#interim-ondersteuning',
    description:
      'Voor urgente of vastgelopen vraagstukken waar tijdelijk extra regie, scherpte of uitvoeringskracht nodig is.',
    knowledgeSlugs: [
      'wat-is-grip-op-externe-inhuur',
      'wet-dba-deliveroo-en-zelfstandigenwet',
      'wanneer-is-zzp-inhuur-verantwoord',
      'verantwoordelijkheidsvacuum-flexibele-schil',
    ],
  },
  {
    id: 'implementatie',
    title: 'Implementatie',
    href: '/diensten#implementatie',
    description:
      'Voor keuzes en trajecten rond VMS, broker, MSP of procesinrichting die niet alleen ontworpen, maar ook werkend moeten worden gemaakt.',
    knowledgeSlugs: [
      'wat-doet-een-vms-wel-en-niet',
      'leveranciersmanagement-bij-externe-inhuur',
      'kostenmanagement-bij-externe-inhuur',
      'msp-broker-master-vendor-of-decentraal-model',
    ],
  },
]

export function getServiceLinkById(id: string) {
  return serviceLinks.find((service) => service.id === id)
}
