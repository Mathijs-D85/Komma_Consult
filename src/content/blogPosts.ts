export type BlogPostKind = 'kennis' | 'actueel'

export interface BlogPost {
  slug: string
  kind: BlogPostKind
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  primaryServiceId?: string
  relatedSlugs?: string[]
  image?: string
  featured?: boolean
}

const postBasePaths: Record<BlogPostKind, string> = {
  kennis: '/kennis/artikelen',
  actueel: '/kennis/actueel',
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'wat-is-grip-op-externe-inhuur',
    kind: 'kennis',
    title: 'Wat is grip op externe inhuur?',
    excerpt:
      'Grip op externe inhuur gaat niet alleen over overzicht, maar vooral over regie op kosten, risico\'s, leveranciers en besluitvorming.',
    content: `
      <p class="lead">
        Grip op externe inhuur klinkt vaak logisch, maar in de praktijk betekent het voor elke organisatie iets anders. Bij kleine volumes gaat het meestal om overzicht. Bij grotere inhuurvolumes gaat het vooral om regie.
      </p>

      <p>
        Zodra externe inhuur meerdere afdelingen raakt, verandert het vraagstuk. Dan wil je niet alleen weten wie er werkt en tegen welk tarief, maar ook hoe je stuurt op risico's, leveranciers, compliance en marktwerking.
      </p>

      <h2>Wat grip in de praktijk betekent</h2>

      <p>
        Grip begint met inzicht, maar eindigt daar niet. Een organisatie heeft pas echt grip als ze op basis van data, heldere rollen en vaste werkafspraken kan bijsturen.
      </p>

      <ul>
        <li><strong>Overzicht:</strong> Je weet wie er werkt, waar, onder welke contractvorm en tegen welk tarief.</li>
        <li><strong>Regie:</strong> Je kunt sturen op kosten, compliance, leveranciersprestaties en doorlooptijd.</li>
        <li><strong>Bestuurbaarheid:</strong> Rollen, processen en eigenaarschap zijn duidelijk belegd.</li>
      </ul>

      <h2>Signalen dat grip ontbreekt</h2>

      <p>
        Veel organisaties merken pas laat dat de inrichting niet meer past bij de werkelijkheid. Typische signalen zijn:
      </p>

      <ul>
        <li>Er is discussie over wie eigenaar is van externe inhuur.</li>
        <li>Managers huren buiten het proces om in.</li>
        <li>Data zit verspreid in mailboxen, Excels en systemen.</li>
        <li>Leveranciers leveren wel kandidaten, maar prestaties worden niet structureel beoordeeld.</li>
        <li>Er is onzekerheid over Wet DBA, tarieven of contractvormen.</li>
      </ul>

      <h2>Van overzicht naar regie</h2>

      <p>
        In organisaties met een laag inhuurvolume kan een decentraal model prima werken. Naarmate de schaal toeneemt, groeit de behoefte aan centrale regie. Dan ontstaat vaak de afweging tussen bijvoorbeeld broker, master vendor of MSP.
      </p>

      <p>
        Er is dus geen universeel beste model. Het juiste model hangt af van je volume, volwassenheid, risicoprofiel en de mate waarin je strategisch wilt sturen.
      </p>

      <h2>Waar je op wilt sturen</h2>

      <ul>
        <li><strong>Kosten:</strong> tarief, ketenopbouw, facturatie en total cost of ownership.</li>
        <li><strong>Compliance:</strong> contractvormen, dossiervorming en werkpraktijk.</li>
        <li><strong>Marktwerking:</strong> toegang tot talent en objectieve leverancierssturing.</li>
        <li><strong>Governance:</strong> duidelijke rollen tussen HR, Inkoop, Finance, Legal en business.</li>
      </ul>

      <hr />

      <p>
        <strong>Wil je toetsen hoeveel grip jouw organisatie nu echt heeft?</strong> We denken graag met je mee over wat er nodig is om van overzicht naar regie te komen.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-04-07',
    readTime: '5 min',
    category: 'Inhuurstrategie',
    primaryServiceId: 'strategisch-inhuuradvies',
    relatedSlugs: [
      'msp-broker-master-vendor-of-decentraal-model',
      'leveranciersmanagement-bij-externe-inhuur',
      'kostenmanagement-bij-externe-inhuur',
    ],
    featured: true,
  },
  {
    slug: 'msp-broker-master-vendor-of-decentraal-model',
    kind: 'kennis',
    title: 'MSP, broker, master vendor of decentraal model: wat past wanneer?',
    excerpt:
      'Het juiste inhuurmodel hangt af van je volume, volwassenheid en doelstelling. Niet elk probleem vraagt om een MSP.',
    content: `
      <p class="lead">
        Veel organisaties zoeken naar het beste inhuurmodel, maar die vraag is eigenlijk te algemeen. De betere vraag is: welk model past bij jouw fase, volume en ambitie?
      </p>

      <p>
        Waar de ene organisatie vooral snelheid en eenvoud nodig heeft, zoekt de andere juist centrale regie, marktwerking of risicobeheersing. Het model moet daarop aansluiten.
      </p>

      <h2>1. Decentraal model</h2>

      <p>
        In een decentraal model huren managers zelf in via een beperkt netwerk van bekende leveranciers. Dit werkt vaak prima bij lage volumes of wanneer snelheid belangrijker is dan centrale sturing.
      </p>

      <ul>
        <li><strong>Voordeel:</strong> korte lijnen en veel invloed voor de manager.</li>
        <li><strong>Nadeel:</strong> weinig centraal overzicht en beperkte grip op risico's en kosten.</li>
      </ul>

      <h2>2. Broker</h2>

      <p>
        De broker neemt vooral de administratieve en contractuele afhandeling over. Je organisatie blijft zelf vaak verantwoordelijk voor het vinden of selecteren van kandidaten.
      </p>

      <ul>
        <li><strong>Voordeel:</strong> minder administratieve last en beter compliance-dossier.</li>
        <li><strong>Nadeel:</strong> het lost je sourcing- of selectieprobleem niet op.</li>
      </ul>

      <h2>3. Master vendor</h2>

      <p>
        Een master vendor werkt goed in omgevingen met grote volumes en repeterende profielen. Een hoofdleverancier vult aanvragen zelf in of schakelt andere bureaus onder zich in.
      </p>

      <ul>
        <li><strong>Voordeel:</strong> efficiency en een duidelijk aanspreekpunt.</li>
        <li><strong>Nadeel:</strong> afhankelijkheid en mogelijke beperking van markttoegang.</li>
      </ul>

      <h2>4. Managed Service Provider</h2>

      <p>
        Een MSP is de meest volwassen vorm van centrale regie. In het zuivere model draait het niet om zelf leveren, maar om het managen van proces, leveranciers, data, compliance en marktwerking.
      </p>

      <ul>
        <li><strong>Voordeel:</strong> regie op de hele keten, transparantie en strategisch inzicht.</li>
        <li><strong>Nadeel:</strong> vraagt investering, veranderkracht en voldoende schaal.</li>
      </ul>

      <h2>Hoe kies je het juiste model?</h2>

      <p>
        Kijk niet alleen naar volume, maar ook naar de vraag die je probeert op te lossen:
      </p>

      <ul>
        <li>Zoek je vooral administratieve ontzorging? Dan kan een broker logisch zijn.</li>
        <li>Wil je leverzekerheid in generieke profielen? Dan past een master vendor vaak beter.</li>
        <li>Wil je marktwerking, compliance en stuurinformatie combineren? Dan kom je sneller bij een MSP uit.</li>
      </ul>

      <p>
        De essentie is dat het model je organisatie moet helpen om verder te komen, niet dat je een modeterm kopieert die bij een ander werkt.
      </p>

      <hr />

      <p>
        <strong>Twijfel je welk model past bij jouw organisatie?</strong> We verkennen graag samen waar je nu staat en welke route logisch is.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-04-07',
    readTime: '6 min',
    category: 'Inhuurstrategie',
    primaryServiceId: 'strategisch-inhuuradvies',
    relatedSlugs: [
      'wat-is-grip-op-externe-inhuur',
      'kostenmanagement-bij-externe-inhuur',
      'wat-doet-een-vms-wel-en-niet',
    ],
    featured: false,
  },
  {
    slug: 'wat-is-compliant-inhuren',
    kind: 'kennis',
    title: 'Wat is compliant inhuren?',
    excerpt:
      'Compliant inhuren betekent dat contract, werkpraktijk, documentatie en verantwoordelijkheden op elkaar aansluiten en aantoonbaar kloppen.',
    content: `
      <p class="lead">
        Compliant inhuren wordt vaak teruggebracht tot papierwerk. In de praktijk is het veel meer dan dat. Het gaat om de vraag of de gekozen constructie inhoudelijk klopt en ook op de werkvloer wordt nageleefd.
      </p>

      <p>
        Een goed contract helpt, maar is nooit genoeg. Toezichthouders en rechters kijken uiteindelijk naar de feitelijke samenwerking.
      </p>

      <h2>Wat compliant inhuren wel is</h2>

      <ul>
        <li><strong>Een passende contractvorm:</strong> de gekozen vorm sluit aan op het type opdracht en de praktijk.</li>
        <li><strong>Heldere verantwoordelijkheden:</strong> opdrachtgever, leverancier en manager weten wie waarop stuurt.</li>
        <li><strong>Een volledig dossier:</strong> verplichte documenten, checks en afspraken zijn op orde.</li>
        <li><strong>Naleving in de praktijk:</strong> wat op papier staat, gebeurt ook echt zo op de werkvloer.</li>
      </ul>

      <h2>Waar het vaak misgaat</h2>

      <p>
        Veel organisaties nemen losse maatregelen, maar pakken het onderliggende proces niet aan. Dan ontstaat schijnveiligheid.
      </p>

      <ul>
        <li>Managers behandelen zelfstandigen als medewerkers.</li>
        <li>Modelovereenkomsten worden gebruikt als juridisch schild, zonder toets op de praktijk.</li>
        <li>Documenten worden verzameld, maar niet inhoudelijk beoordeeld.</li>
        <li>Niemand voelt zich eigenaar van het geheel.</li>
      </ul>

      <h2>Compliance is ook een governance-vraagstuk</h2>

      <p>
        Externe inhuur raakt HR, Inkoop, Legal, Finance en de business. Als die functies ieder hun eigen stukje managen zonder centrale regie, ontstaan gaten in het proces.
      </p>

      <p>
        Daarom vraagt compliant inhuren niet alleen om juridische kennis, maar ook om bestuurbaarheid: wie besluit, wie toetst, wie signaleert en wie grijpt in als de praktijk afwijkt?
      </p>

      <h2>Wat een werkbare aanpak kenmerkt</h2>

      <ul>
        <li>Je maakt onderscheid tussen groene, oranje en rode situaties.</li>
        <li>Je combineert documentcontrole met toetsing van de werkpraktijk.</li>
        <li>Je helpt managers begrijpen waarom bepaalde grenzen er zijn.</li>
        <li>Je organiseert niet alleen controle, maar ook herstel en bijsturing.</li>
      </ul>

      <hr />

      <p>
        <strong>Wil je scherper krijgen waar compliant inhuren in jouw organisatie echt om draait?</strong> We kijken graag met je mee naar de inrichting, de risico's en de werkbaarheid.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-04-07',
    readTime: '5 min',
    category: 'Compliance',
    primaryServiceId: 'compliant-inhuren',
    relatedSlugs: [
      'wet-dba-deliveroo-en-zelfstandigenwet',
      'wanneer-is-zzp-inhuur-verantwoord',
      'wat-doet-een-vms-wel-en-niet',
    ],
    featured: false,
  },
  {
    slug: 'wet-dba-deliveroo-en-zelfstandigenwet',
    kind: 'kennis',
    title: 'Wet DBA, Deliveroo en Zelfstandigenwet: wat betekenen ze voor opdrachtgevers?',
    excerpt:
      'De beoordeling van zzp-inhuur draait steeds minder om papieren zekerheid en steeds meer om het totaalplaatje van de feitelijke arbeidsrelatie.',
    content: `
      <p class="lead">
        Voor opdrachtgevers is het speelveld rond zzp-inhuur de afgelopen jaren ingrijpend veranderd. Niet omdat de basisregels volledig nieuw zijn, maar omdat de interpretatie en handhaving scherper zijn geworden.
      </p>

      <p>
        De combinatie van de Wet DBA, het Deliveroo-arrest en de ontwikkeling richting Zelfstandigenwet maakt een zuivere beoordeling belangrijker dan ooit.
      </p>

      <h2>Wet DBA: waarom papier alleen niet genoeg is</h2>

      <p>
        Onder de Wet DBA werd lang veel waarde gehecht aan modelovereenkomsten. Inmiddels is duidelijk dat die maar beperkt beschermen. De praktijk is leidend.
      </p>

      <p>
        Als een zelfstandige op de werkvloer wordt aangestuurd als werknemer, biedt een goed contract geen echte veiligheid.
      </p>

      <h2>Deliveroo: het totaalplaatje is doorslaggevend</h2>

      <p>
        Het Deliveroo-arrest heeft nog eens bevestigd dat er niet naar een enkel criterium wordt gekeken. Rechters en toezichthouders wegen alle omstandigheden samen.
      </p>

      <ul>
        <li>Hoe vrij is iemand echt in de uitvoering?</li>
        <li>Is het werk organisatorisch ingebed?</li>
        <li>Gedraagt iemand zich aantoonbaar als ondernemer?</li>
        <li>Hoe afhankelijk is iemand economisch van de opdrachtgever?</li>
      </ul>

      <h2>Van VBAR naar Zelfstandigenwet</h2>

      <p>
        De politieke lijn is verschoven. Waar eerder sterk werd gekeken naar inbedding en aansturing, komt in het nieuwe denken ondernemerschap prominenter naar voren.
      </p>

      <p>
        Tegelijk blijft het rechtsvermoeden relevant voor lagere tarieven en blijft de praktijktoets doorslaggevend. Dat betekent dat opdrachtgevers niet achterover kunnen leunen.
      </p>

      <h2>Wat dit concreet betekent voor opdrachtgevers</h2>

      <ul>
        <li>Je moet beter onderbouwen waarom iemand als zelfstandige wordt ingezet.</li>
        <li>Je moet managers helpen om binnen de juiste kaders te handelen.</li>
        <li>Je moet populaties segmenteren in laag, midden en hoog risico.</li>
        <li>Je moet kunnen aantonen dat je actief stuurt op herstel en verbetering.</li>
      </ul>

      <h2>De fout die je wilt vermijden</h2>

      <p>
        De grootste fout is wachten op volledige politieke duidelijkheid. Handhaving vindt plaats op basis van bestaande wetgeving en jurisprudentie. Afwachten is dus geen strategie.
      </p>

      <hr />

      <p>
        <strong>Wil je vertalen wat deze ontwikkelingen betekenen voor jouw manier van inhuren?</strong> We helpen je graag om het juridische kader praktisch en bestuurbaar te maken.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-04-07',
    readTime: '6 min',
    category: 'Compliance',
    primaryServiceId: 'compliant-inhuren',
    relatedSlugs: [
      'wat-is-compliant-inhuren',
      'wanneer-is-zzp-inhuur-verantwoord',
      'wat-doet-een-vms-wel-en-niet',
    ],
    featured: false,
  },
  {
    slug: 'wanneer-is-zzp-inhuur-verantwoord',
    kind: 'kennis',
    title: 'Wanneer is zzp-inhuur verantwoord?',
    excerpt:
      'Zzp-inhuur is verantwoord als de opdracht, werkpraktijk en ondernemerspositie logisch op elkaar aansluiten en je niet probeert structureel werk te verpakken als flexibiliteit.',
    content: `
      <p class="lead">
        Zzp-inhuur is niet per definitie problematisch. Het wordt pas risicovol als de feitelijke situatie niet meer past bij ondernemerschap, maar nog wel als zelfstandige constructie wordt ingericht.
      </p>

      <p>
        De vraag is dus niet of zzp-inhuur nog kan, maar onder welke voorwaarden deze zuiver en verdedigbaar is.
      </p>

      <h2>Groene signalen</h2>

      <p>
        Zzp-inhuur is het best verdedigbaar wanneer de inzet duidelijk projectmatig of specialistisch is en je kunt sturen op resultaat.
      </p>

      <ul>
        <li>Er is specifieke expertise nodig die tijdelijk wordt ingezet.</li>
        <li>De opdracht is afgebakend in resultaat, scope of periode.</li>
        <li>De zelfstandige heeft een herkenbaar ondernemersprofiel.</li>
        <li>Er is voldoende afstand in de aansturing.</li>
      </ul>

      <h2>Oranje signalen</h2>

      <p>
        Twijfelgevallen vragen om extra beoordeling en vaak ook om aanpassing van contract of werkwijze.
      </p>

      <ul>
        <li>De rol lijkt op regulier werk, maar bevat wel specialistische kennis.</li>
        <li>De looptijd wordt steeds verlengd.</li>
        <li>De zelfstandige werkt grotendeels voor een opdrachtgever.</li>
        <li>De manager wil sturen alsof het om een medewerker gaat.</li>
      </ul>

      <h2>Rode signalen</h2>

      <ul>
        <li>Structureel werk dat gelijk is aan dat van werknemers.</li>
        <li>Volledige organisatorische inbedding in team, roosters en evaluaties.</li>
        <li>Verplichte aanwezigheid buiten de opdracht of materiele voorzieningen alsof iemand in loondienst is.</li>
        <li>Een economische afhankelijkheid die nauwelijks bij ondernemerschap past.</li>
      </ul>

      <h2>Denk in segmenten, niet in algemene verboden</h2>

      <p>
        Een werkbare aanpak is om je populatie in segmenten op te delen. Niet iedereen vraagt dezelfde oplossing. Sommige situaties kun je continueren, andere moet je aanpassen en sommige moet je stoppen als zzp-inzet.
      </p>

      <p>
        Dit voorkomt paniekbeleid en helpt je om gericht bij te sturen.
      </p>

      <h2>Alternatieven als zzp niet past</h2>

      <p>
        Als de inzet niet zuiver is, kun je denken aan detachering, midlance, tijdelijke loondienst of een resultaatgerichte constructie zoals een Statement of Work.
      </p>

      <hr />

      <p>
        <strong>Wil je scherper krijgen welke zzp-inzet in jouw organisatie verantwoord is en welke niet?</strong> We denken graag met je mee over een werkbare indeling en passende alternatieven.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-04-07',
    readTime: '5 min',
    category: 'Compliance',
    primaryServiceId: 'compliant-inhuren',
    relatedSlugs: [
      'wat-is-compliant-inhuren',
      'wet-dba-deliveroo-en-zelfstandigenwet',
      'wat-is-grip-op-externe-inhuur',
    ],
    featured: false,
  },
  {
    slug: 'wat-doet-een-vms-wel-en-niet',
    kind: 'kennis',
    title: 'Wat doet een VMS wel en niet?',
    excerpt:
      'Een VMS helpt je processen, data en compliance te structureren, maar het vervangt geen inhoudelijke keuzes, governance of verandermanagement.',
    content: `
      <p class="lead">
        Een Vendor Management Systeem wordt vaak verkocht als de oplossing voor externe inhuur. In werkelijkheid is een VMS vooral een belangrijke enabler. Het systeem helpt je sturen, maar lost een slecht proces niet vanzelf op.
      </p>

      <h2>Wat een VMS wel doet</h2>

      <p>
        De echte waarde van een VMS zit in het centraal vastleggen van data en het ondersteunen van een uniform proces.
      </p>

      <ul>
        <li><strong>Overzicht:</strong> je krijgt inzicht in aantallen, contractvormen, tarieven en leveranciers.</li>
        <li><strong>Procesondersteuning:</strong> aanvragen, voorstellen, contracten en facturen lopen via een centrale route.</li>
        <li><strong>Compliance-ondersteuning:</strong> het systeem bewaakt verplichte documenten en signalen.</li>
        <li><strong>Stuurinformatie:</strong> je kunt beter sturen op kosten, doorlooptijd en leveranciersprestatie.</li>
      </ul>

      <h2>Wat een VMS niet doet</h2>

      <p>
        Een VMS kan niet voor je beoordelen of een inzet juridisch klopt of organisatorisch verstandig is. Het systeem controleert of iets is ingevuld, niet of de inhoud ook echt deugt.
      </p>

      <ul>
        <li>Een VMS vervangt geen expertise op Wet DBA of contractering.</li>
        <li>Een VMS lost geen gebrekkige governance op.</li>
        <li>Een VMS haalt weerstand bij managers niet vanzelf weg.</li>
        <li>Een VMS voorkomt geen geautomatiseerde chaos als het proces rommelig blijft.</li>
      </ul>

      <h2>Wanneer een VMS vooral waarde toevoegt</h2>

      <p>
        Naarmate je inhuurvolume stijgt, wordt centrale dossiervorming en historisch inzicht belangrijker. Zeker bij ontwikkelingen in regelgeving wil je personen en inzet over tijd kunnen volgen.
      </p>

      <p>
        Dat maakt een VMS niet alleen een operationeel hulpmiddel, maar ook een fundament voor bestuurbaarheid.
      </p>

      <h2>Waar je vooraf scherp op moet zijn</h2>

      <ul>
        <li>Van wie blijft de data?</li>
        <li>Hoe voorkom je vendor lock-in?</li>
        <li>Hoe sluit het proces aan op de dagelijkse praktijk van managers?</li>
        <li>Koop je een eigen licentie of gebruik je technologie van broker of MSP?</li>
      </ul>

      <hr />

      <p>
        <strong>Twijfel je of een VMS voor jouw situatie echt waarde toevoegt?</strong> We helpen je graag om het vraagstuk breder te bekijken dan alleen technologie.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-04-07',
    readTime: '5 min',
    category: 'Technologie',
    primaryServiceId: 'implementatie',
    relatedSlugs: [
      'leveranciersmanagement-bij-externe-inhuur',
      'wat-is-compliant-inhuren',
      'msp-broker-master-vendor-of-decentraal-model',
    ],
    featured: false,
  },
  {
    slug: 'leveranciersmanagement-bij-externe-inhuur',
    kind: 'kennis',
    title: 'Leveranciersmanagement bij externe inhuur: waar stuur je echt op?',
    excerpt:
      'Goed leveranciersmanagement draait niet alleen om contracten, maar om prestaties, transparantie, feedbackloops en een leveranciersbestand dat past bij je strategie.',
    content: `
      <p class="lead">
        Leveranciersmanagement wordt nog vaak verward met contractmanagement. Maar een getekend contract is geen garantie op goede levering, marktwerking of toegang tot de beste kandidaten.
      </p>

      <p>
        In een krappe markt moet je als opdrachtgever actief werken aan de vraag waarom leveranciers juist voor jou willen lopen.
      </p>

      <h2>Customer of choice worden</h2>

      <p>
        Leveranciers sturen hun beste kandidaten niet automatisch naar de hoogste bieder. Ze kiezen eerder voor organisaties waar de intake helder is, de terugkoppeling snel komt en het proces voorspelbaar voelt.
      </p>

      <ul>
        <li>Duidelijkheid over project en opdracht.</li>
        <li>Snelle feedback op voorstellen.</li>
        <li>Een realistische distributie van aanvragen.</li>
        <li>Menselijk contact naast technologie.</li>
      </ul>

      <h2>Sturen op data, niet op onderbuik</h2>

      <p>
        Persoonlijke relaties zijn belangrijk, maar leverancierssturing hoort objectief te blijven. Daarom wil je meten op onder meer:
      </p>

      <ul>
        <li>snelheid tot eerste voorstel</li>
        <li>kwaliteit van voorgestelde kandidaten</li>
        <li>conversie naar gesprek of plaatsing</li>
        <li>marktconformiteit van tarieven</li>
      </ul>

      <p>
        Data maakt het gesprek zuiverder. Niet om relaties weg te drukken, maar om betere keuzes te maken.
      </p>

      <h2>Segmentatie houdt je leveranciersbestand gezond</h2>

      <p>
        Niet elke leverancier vraagt dezelfde aandacht. Strategische partners, preferred suppliers en incidentele leveranciers vragen ieder om een andere ritmiek in overleg, evaluatie en ontwikkeling.
      </p>

      <p>
        Ook offboarding hoort daarbij. Een leveranciersbestand dat te groot of te passief wordt, verliest focus en marktwerking.
      </p>

      <h2>Feedbackloops maken het verschil</h2>

      <p>
        Leveranciersmanagement is tweerichtingsverkeer. Goede programma's organiseren ook feedback op het gedrag van de interne organisatie. Reageert een manager te laat? Dan raakt dat direct de kwaliteit van je instroom.
      </p>

      <hr />

      <p>
        <strong>Wil je scherper krijgen hoe je leveranciers objectief en werkbaar kunt aansturen?</strong> We denken graag met je mee over de inrichting van jouw leveranciersbestand en prestatiesturing.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-04-07',
    readTime: '6 min',
    category: 'Leveranciersmanagement',
    primaryServiceId: 'strategisch-inhuuradvies',
    relatedSlugs: [
      'wat-is-grip-op-externe-inhuur',
      'msp-broker-master-vendor-of-decentraal-model',
      'wat-doet-een-vms-wel-en-niet',
    ],
    featured: false,
  },
  {
    slug: 'kostenmanagement-bij-externe-inhuur',
    kind: 'kennis',
    title: 'Kostenmanagement bij externe inhuur: waar stuur je echt op?',
    excerpt:
      'Goed kostenmanagement gaat verder dan tariefdruk. Het draait om kostenbeheersing, kostenbesparing, kostenvermijding en maximale waarde per euro.',
    content: `
      <p class="lead">
        Kostenmanagement bij externe inhuur wordt nog te vaak versmald tot tariefonderhandeling. Daarmee laat je een groot deel van het speelveld liggen.
      </p>

      <p>
        Wie echt wil sturen, maakt onderscheid tussen kostenbeheersing, kostenbesparing, kostenvermijding en maximale waarde per euro.
      </p>

      <h2>De vier bouwstenen van kostenmanagement</h2>

      <ul>
        <li><strong>Kostenbeheersing:</strong> binnen budget blijven en afwijkingen vroeg signaleren.</li>
        <li><strong>Kostenbesparing:</strong> de uitgaven daadwerkelijk verlagen zonder onnodig kwaliteitsverlies.</li>
        <li><strong>Kostenvermijding:</strong> toekomstige kosten voorkomen, bijvoorbeeld door risico's te beperken.</li>
        <li><strong>Value for money:</strong> niet alleen naar prijs kijken, maar naar de waarde per euro.</li>
      </ul>

      <h2>Waarom een nulmeting onmisbaar is</h2>

      <p>
        Besparingen zeggen weinig als vooraf niet helder is hoe je ze definieert en waar je vandaan komt. Daarom begint een goed kostenprogramma met een nulmeting.
      </p>

      <p>
        Denk aan huidige inhuuruitgaven, contractvormen, tarieven, ketenopbouw, looptijden, inhuur buiten het afgesproken proces om en bestaande leveranciersprestaties.
      </p>

      <h2>Waar in jaar 1 vaak winst zit</h2>

      <ul>
        <li>centralisatie van werving en facturatie</li>
        <li>ketenbeperking en minder schakels</li>
        <li>meer voorspelbaarheid in aanvragen</li>
        <li>slimmere standaardisatie van tarieven en afspraken</li>
      </ul>

      <h2>Waar later meer volwassen winst zit</h2>

      <p>
        Na de eerste verbeteringen verschuift de aandacht vaak naar leveranciersrationalisatie, urenbeperking, direct sourcing en sturen op waarde in plaats van alleen op prijs.
      </p>

      <p>
        Dat vraagt meer data, meer vertrouwen in het programma en vaak ook stevigere gesprekken met managers.
      </p>

      <h2>De denkfout die je wilt vermijden</h2>

      <p>
        Niet elke kostenverlaging is automatisch een verbetering. Een lager tarief kan ook leiden tot slechtere kwaliteit, langere doorlooptijden of meer risico. Daarom is kostenmanagement pas sterk als het wordt verbonden met kwaliteit, compliance en leveranciersstrategie.
      </p>

      <hr />

      <p>
        <strong>Wil je scherper krijgen waar voor jouw organisatie echte besparingsruimte zit?</strong> We kijken graag met je mee naar de data, de definities en de logische verbeterstappen.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-04-07',
    readTime: '6 min',
    category: 'Kostenmanagement',
    primaryServiceId: 'strategisch-inhuuradvies',
    relatedSlugs: [
      'wat-is-grip-op-externe-inhuur',
      'msp-broker-master-vendor-of-decentraal-model',
      'leveranciersmanagement-bij-externe-inhuur',
    ],
    featured: false,
  },
  {
    slug: 'procurecon-total-talent-management-amsterdam',
    kind: 'actueel',
    title: 'Van visie naar praktijk: de realiteit van Total Talent Management',
    excerpt:
      'Tijdens ProcureCon Total Talent in Amsterdam werd opnieuw duidelijk dat Total Talent Management geen toekomstmuziek meer is, maar een vraagstuk van executie.',
    content: `
      <p class="lead">
        Tijdens ProcureCon Total Talent in Amsterdam werd opnieuw duidelijk dat de integratie van vast en flexibel talent geen theoretisch model meer is. De echte vraag is inmiddels hoe organisaties de stap maken van visie naar werkbare uitvoering.
      </p>

      <h2>1. Interne alignment is belangrijker dan tooling</h2>

      <p>
        Succesvolle voorbeelden lieten zien dat Total Talent niet begint bij een systeem, maar bij samenwerking tussen HR, Inkoop, Finance, Legal en de business. Zonder mandaat en gedeeld eigenaarschap blijft technologie ondersteunend in plaats van richtinggevend.
      </p>

      <h2>2. Compliance kan juist versnellen</h2>

      <p>
        Wet- en regelgeving werd meerdere keren genoemd als aanleiding om het gesprek op directieniveau te openen. Strakkere kaders dwingen organisaties om silo's te doorbreken en scherper naar hun totale talentstrategie te kijken.
      </p>

      <h2>3. Start klein, schaal daarna</h2>

      <p>
        De praktijkvoorbeelden die het meest overtuigden, begonnen niet met een wereldwijde uitrol, maar met een gerichte pilot. Klein starten maakte het mogelijk om te leren, draagvlak te bouwen en successen zichtbaar te maken.
      </p>

      <h2>Skills als gemeenschappelijke taal</h2>

      <p>
        De rode draad op het event was dat skills-based organiseren helpt om vast en flexibel talent eindelijk in hetzelfde gesprek te brengen. Daarmee verschuift de focus van functies en contractvormen naar daadwerkelijke capaciteit.
      </p>

      <hr />

      <p>
        <strong>Wil je verkennen wat deze ontwikkeling praktisch betekent voor jouw organisatie?</strong> We denken graag met je mee over de vertaalslag van visie naar uitvoering.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-03-17',
    readTime: '4 min',
    category: 'Event',
    primaryServiceId: 'strategisch-inhuuradvies',
    relatedSlugs: [
      'wat-is-grip-op-externe-inhuur',
      'msp-broker-master-vendor-of-decentraal-model',
      'kostenmanagement-bij-externe-inhuur',
    ],
    featured: true,
  },
  {
    slug: 'veilige-haven-toptalent-zzp',
    kind: 'actueel',
    title: 'De veilige haven voor toptalent: waarom de beste zzp\'ers kiezen voor de strengste opdrachtgevers',
    excerpt:
      'Strakkere handhaving hoeft geen rem te zijn. Organisaties die hun samenwerking met zelfstandigen zuiver inrichten, worden aantrekkelijker voor schaars talent.',
    content: `
      <p class="lead">
        Nu de vrijblijvendheid rond zzp-inhuur verder afneemt, ontstaat een interessante verschuiving. Organisaties die hun processen op orde brengen, worden niet minder aantrekkelijk, maar juist geloofwaardiger voor echte ondernemers.
      </p>

      <h2>Compliance is ook een marktpositie</h2>

      <p>
        Topspecialisten zoeken geen opdrachtgever die maar wat doet. Ze willen duidelijkheid, voorspelbaarheid en een samenwerking die ook voor hen verdedigbaar voelt. Daarmee wordt compliance steeds meer onderdeel van je opdrachtgeversmerk.
      </p>

      <h2>Drie effecten van een volwassen aanpak</h2>

      <ol>
        <li><strong>Betere data:</strong> je weet wie er werkt, tegen welk tarief en onder welke voorwaarden.</li>
        <li><strong>Gerichtere sourcing:</strong> je kunt talentpools en direct sourcing zuiverder inzetten.</li>
        <li><strong>Meer resultaatgericht werken:</strong> de focus verschuift van aanwezigheid naar output.</li>
      </ol>

      <h2>De kans van dit moment</h2>

      <p>
        Wie nu wacht op volledige wettelijke rust, mist een kans. Dit is juist het moment om populaties te toetsen, ondernemerskenmerken beter vast te leggen en alternatieven voor risicovolle inzet uit te werken.
      </p>

      <hr />

      <p>
        <strong>Wil je weten hoe jouw organisatie er nu voor staat?</strong> We denken graag met je mee over een aanpak die zowel werkbaar als toekomstbestendig is.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-03-17',
    readTime: '4 min',
    category: 'Compliance',
    primaryServiceId: 'compliant-inhuren',
    relatedSlugs: [
      'wat-is-compliant-inhuren',
      'wet-dba-deliveroo-en-zelfstandigenwet',
      'wanneer-is-zzp-inhuur-verantwoord',
    ],
    featured: false,
  },
  {
    slug: 'verdienmodel-msp-deugt-waarschijnlijk-niet',
    kind: 'actueel',
    title: 'Waarom het verdienmodel van je MSP waarschijnlijk niet deugt',
    excerpt:
      'Veel MSP-modellen belonen volume in plaats van waarde. Daardoor kan de prikkel om echt op kosten en innovatie te sturen onder druk komen te staan.',
    content: `
      <p class="lead">
        Veel organisaties halen een MSP in huis om grip te krijgen op externe inhuur en om kosten te besparen. Tegelijkertijd is het dominante verdienmodel in de markt vaak nog gekoppeld aan volume. En precies daar ontstaat spanning.
      </p>

      <h2>De perverse prikkel</h2>

      <p>
        Als een MSP verdient op basis van een percentage van de spend, daalt de fee zodra jouw organisatie minder uitgeeft. Besparing voor de klant betekent dan automatisch minder omzet voor de dienstverlener.
      </p>

      <p>
        Dat maakt het lastig om belangen echt gelijk te trekken.
      </p>

      <h2>Waarom dit verder gaat dan geld</h2>

      <ul>
        <li>innovatie wordt minder aantrekkelijk als die volume verlaagt</li>
        <li>kostenreductie botst met het eigen inkomstenmodel</li>
        <li>strategisch partnerschap blijft al snel hangen in operationeel beheer</li>
      </ul>

      <h2>Welke vragen je wel wilt stellen</h2>

      <ol>
        <li>Welke prikkel heeft mijn MSP om mijn kosten echt te verlagen?</li>
        <li>Hoe wordt innovatie beloond als die het volume verlaagt?</li>
        <li>Past een vaste fee of resultaatcomponent beter bij onze doelstelling?</li>
      </ol>

      <hr />

      <p>
        <strong>Wil je toetsen of het commerciële model van jouw MSP nog past bij wat je wilt bereiken?</strong> We kijken graag met je mee naar de logica achter de samenwerking.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-02-08',
    readTime: '5 min',
    category: 'MSP',
    primaryServiceId: 'strategisch-inhuuradvies',
    relatedSlugs: [
      'msp-broker-master-vendor-of-decentraal-model',
      'kostenmanagement-bij-externe-inhuur',
      'wat-is-grip-op-externe-inhuur',
    ],
    featured: false,
  },
  {
    slug: 'verantwoordelijkheidsvacuum-flexibele-schil',
    kind: 'actueel',
    title: 'Het verantwoordelijkheidsvacuum: waarom niemand echt eigenaar is van de flexibele schil',
    excerpt:
      'Als externe inhuur wel belangrijk is maar niemand er integraal eigenaar van is, ontstaat versnippering, vertraging en een dure vorm van bestuurlijke mist.',
    content: `
      <p class="lead">
        In veel organisaties is externe inhuur belangrijk genoeg om veel geld, tijd en risico mee te gemoeien, maar niet duidelijk genoeg belegd om er echt op te sturen. Dan ontstaat een verantwoordelijkheidsvacuum.
      </p>

      <h2>De illusie van eigenaarschap</h2>

      <p>
        HR bewaakt cultuur, Inkoop let op kosten, Legal op contracten en Finance op budget. Op papier lijkt alles verdeeld. In de praktijk ontbreekt juist daardoor vaak een partij die het geheel bestuurt.
      </p>

      <h2>Wat je daarvan merkt</h2>

      <ul>
        <li>maverick buying en uitzonderingen op het proces</li>
        <li>versnipperde data en onduidelijke stuurinformatie</li>
        <li>compliance-risico's die te laat zichtbaar worden</li>
        <li>discussies zonder duidelijk eigenaar of besluitroute</li>
      </ul>

      <h2>Waar de oplossing meestal zit</h2>

      <p>
        De oplossing zit zelden in meer tooling alleen. Die zit vaker in een regiefunctie of multidisciplinair eigenaarschap dat HR, Inkoop, Finance en business verbindt.
      </p>

      <p>
        Pas dan wordt inhuur bestuurbaar in plaats van alleen operationeel verwerkt.
      </p>

      <hr />

      <p>
        <strong>Wil je scherp krijgen waar eigenaarschap voor externe inhuur in jouw organisatie nu echt ligt?</strong> We denken graag met je mee over een inrichting die rust en regie brengt.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-01-13',
    readTime: '4 min',
    category: 'Governance',
    primaryServiceId: 'interim-ondersteuning',
    relatedSlugs: [
      'wat-is-grip-op-externe-inhuur',
      'leveranciersmanagement-bij-externe-inhuur',
      'wet-dba-deliveroo-en-zelfstandigenwet',
    ],
    featured: false,
  },
]

export function getPostBasePath(kind: BlogPostKind) {
  return postBasePaths[kind]
}

export function getBlogPostUrl(post: BlogPost) {
  return `${getPostBasePath(post.kind)}/${post.slug}`
}

export function getBlogPostBySlug(slug: string, kind?: BlogPostKind): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && (!kind || post.kind === kind))
}

export function getPostsBySlugs(slugs: string[]): BlogPost[] {
  return slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => Boolean(post))
}

export function getPostsByKind(kind: BlogPostKind): BlogPost[] {
  return blogPosts.filter((post) => post.kind === kind)
}

export function getFeaturedPostByKind(kind: BlogPostKind): BlogPost | undefined {
  const posts = getPostsByKind(kind)
  return posts.find((post) => post.featured) || posts[0]
}

export function getRecentPosts(limit: number = 3, kind?: BlogPostKind): BlogPost[] {
  const posts = kind ? getPostsByKind(kind) : blogPosts
  return posts.slice(0, limit)
}

export function getPostsByCategory(category: string, kind?: BlogPostKind): BlogPost[] {
  const posts = kind ? getPostsByKind(kind) : blogPosts
  return posts.filter((post) => post.category === category)
}

export function getAllCategories(kind?: BlogPostKind): string[] {
  const posts = kind ? getPostsByKind(kind) : blogPosts
  return [...new Set(posts.map((post) => post.category))]
}

export function getKindLabel(kind: BlogPostKind) {
  return kind === 'kennis' ? 'Kennisartikel' : 'Actueel'
}
