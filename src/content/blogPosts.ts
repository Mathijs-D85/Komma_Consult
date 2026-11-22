export type BlogPostKind = 'kennis' | 'actueel'

export interface BlogPost {
  slug: string
  kind: BlogPostKind
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  updated?: string
  readTime: string
  category: string
  primaryServiceId?: string
  relatedSlugs?: string[]
  image?: string
  featured?: boolean
  /** Vervolgvragen voor de kennischat onder dit artikel. */
  chatSuggestions?: string[]
}

const defaultChatSuggestions = [
  'Wat betekent dit voor een organisatie met weinig inhuur?',
  'Waar begin ik als ik dit wil aanpakken?',
  'Welke fout maken organisaties hier het vaakst?',
  'Hoe verhoudt dit zich tot MSP, broker en VMS?',
]

export function getChatSuggestions(post: BlogPost): string[] {
  return post.chatSuggestions ?? defaultChatSuggestions
}

const postBasePaths: Record<BlogPostKind, string> = {
  kennis: '/kennis/artikelen',
  actueel: '/kennis/actueel',
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'wtta-waarom-2028-nu-al-op-je-agenda',
    kind: 'kennis',
    chatSuggestions: [
      'Geldt de Wtta ook voor detachering en zzp via een tussenpartij?',
      'Wat moet ik als opdrachtgever vóór 2028 geregeld hebben?',
      'Hoe controleer ik of een leverancier straks toegelaten is?',
      'Wat is het verschil tussen de Wtta en het SNA-keurmerk?',
    ],
    title: 'De Wtta: waarom 1 januari 2028 nú al op je agenda hoort',
    excerpt:
      'Vanaf 1 januari 2028 mag je alleen nog personeel inhuren bij uitleners met een geldige toelating. Juist daarom is de Wtta een onderwerp voor 2026, niet voor 2027.',
    content: `
      <p class="lead">
        Er komt een wet aan die verandert hoe organisaties flexibele arbeid inhuren. De <strong>Wet toelating terbeschikkingstelling van arbeidskrachten (Wtta)</strong> klinkt als weer een compliance-klus voor de juridische afdeling. Dat is het niet. Deze wet raakt je leveranciersbestand, je inhuurprocessen en uiteindelijk het vermogen van je organisatie om snel de juiste mensen te vinden.
      </p>

      <p>
        De harde deadline ligt op <strong>1 januari 2028</strong>. Dat lijkt ver weg, maar de keuzes die je leveranciers nú maken &mdash; certificeren, fuseren of stoppen &mdash; bepalen straks of je zonder vertraging kunt blijven inhuren. Wie nu begint, handelt rustig en doordacht. Wie wacht, komt voor verrassingen te staan.
      </p>

      <div class="callout">
        <p class="callout-title">In één zin</p>
        <p>
          Vanaf 1 januari 2028 mag je alleen nog personeel inhuren bij uitleners met een geldige toelating &mdash; en juist daarom is dit een onderwerp voor 2026, niet voor 2027.
        </p>
      </div>

      <h2>Wat verandert de Wtta precies?</h2>

      <p>
        Tot nu toe was certificering voor uitzendbureaus en detacheerders vrijwillig. Bureaus konden het SNA-keurmerk halen &mdash; het keurmerk van de Stichting Normering Arbeid, gebaseerd op de <strong>NEN 4400-norm</strong> &mdash; of niet. Onder de Wtta wordt dat anders: zonder een officiële <strong>toelating van de Nederlandse Autoriteit Uitleenmarkt (NAU)</strong> is het simpelweg verboden om personeel ter beschikking te stellen. Geen toelating, geen mensen leveren.
      </p>

      <p>
        Voor opdrachtgevers betekent dit een eigen verantwoordelijkheid. Samenwerken met een bureau zonder geldige toelating brengt straks niet alleen dat bureau in gevaar, maar ook je eigen organisatie.
      </p>

      <h2>Wat betekent dit concreet voor jou als inlener?</h2>

      <p>
        Vanaf de toelatingsplicht rusten er drie verplichtingen op de inlener:
      </p>

      <ul>
        <li><strong>Inleenverbod</strong> &mdash; je mag geen arbeidskrachten meer inlenen van een uitlener zonder geldige toelating.</li>
        <li><strong>Controleplicht</strong> &mdash; je moet vóór inhuur controleren of de uitlener in het openbare register van de NAU staat.</li>
        <li><strong>Administratie- en bewaarplicht</strong> &mdash; je legt vast dat een arbeidskracht ter beschikking is gesteld (uiterlijk op de eerste werkdag) en bewaart die gegevens zeven jaar.</li>
      </ul>

      <p>
        De controle en administratie kun je operationeel beleggen bij een inhuurregisseur, zoals een broker of MSP. Let op: dat ontslaat je niet van je eigen verantwoordelijkheid. Als inlener blijf je zelf eindverantwoordelijk, dus leg goede afspraken vast en blijf steekproefsgewijs zelf controleren.
      </p>

      <p>
        De Nederlandse Arbeidsinspectie handhaaft hierop en kan boetes opleggen aan zowel uitleners die zonder toelating leveren als aan inleners die met hen blijven samenwerken.
      </p>

      <h2>Hoe ziet de Wtta-tijdlijn eruit?</h2>

      <p>
        De Wtta wordt gefaseerd ingevoerd. Let goed op het verschil tussen <em>het stelsel treedt in werking</em> (2027) en <em>de plicht en handhaving gaan in</em> (2028).
      </p>

      <p>
        In de tijdlijn nemen we ook drie aanpalende wetten mee, omdat ze samen het speelveld voor inhuur bepalen: de <strong>Wet DBA</strong> (handhaving op schijnzelfstandigheid), de <strong>Wet meer zekerheid flexwerkers (WMZF)</strong> en de aankomende <strong>Zelfstandigenwet</strong>. Verderop in &ldquo;Vooruitblik&rdquo; lichten we ze toe &mdash; hier gaat het er vooral om dat je ziet hoe de planning samenloopt.
      </p>

      <table>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Wat gebeurt er</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 jan 2025</td>
            <td>Handhaving Wet DBA op schijnzelfstandigheid hervat</td>
            <td>Definitief ingegaan</td>
          </tr>
          <tr>
            <td>1 jan 2026</td>
            <td>Gelijkwaardige arbeidsvoorwaarden voor uitzendkrachten via de cao (ABU/NBBU) &mdash; vervangt de inlenersbeloning</td>
            <td>Al van kracht (cao)</td>
          </tr>
          <tr>
            <td>medio 2026</td>
            <td>Wet rechtsvermoeden werknemerschap bij uurtarief &lt; &euro;38 (publicatie Staatsblad)</td>
            <td>Aangenomen Tweede Kamer</td>
          </tr>
          <tr>
            <td>2e helft 2026</td>
            <td>Wtta-aanmeldportaal opent; aanmelding overgangsrecht (nov&ndash;dec 2026)</td>
            <td>Definitief</td>
          </tr>
          <tr>
            <td><strong>1 jan 2027</strong></td>
            <td><strong>Wtta-toelatingsstelsel treedt in werking; uitleners kunnen toelating aanvragen</strong></td>
            <td>Definitief</td>
          </tr>
          <tr>
            <td>1 jan 2027</td>
            <td>WMZF verankert gelijkwaardige arbeidsvoorwaarden uitzendkrachten wettelijk (op zijn vroegst)</td>
            <td>Beoogd (Eerste Kamer nog)</td>
          </tr>
          <tr>
            <td>1 jul 2027</td>
            <td>NAU beoordeelt aanvragen (volledige aanvraag uiterlijk 30 juni 2027)</td>
            <td>Definitief</td>
          </tr>
          <tr>
            <td><strong>1 jan 2028</strong></td>
            <td><strong>Wtta-toelatingsplicht + handhaving: inhuur alleen nog bij toegelaten uitleners</strong></td>
            <td>Definitief</td>
          </tr>
          <tr>
            <td>1 jan 2028</td>
            <td>WMZF: bandbreedtecontract, aangescherpte ketenregeling, uitzendfasen</td>
            <td>Beoogd (Eerste Kamer nog)</td>
          </tr>
          <tr>
            <td>1 jan 2028</td>
            <td>Zelfstandigenwet (vervanger ingetrokken VBAR-deel)</td>
            <td>Concept</td>
          </tr>
        </tbody>
      </table>

      <div class="callout callout-warning">
        <p class="callout-title">Veelgemaakte denkfout</p>
        <p>
          &ldquo;De wet gaat pas in 2028 echt in, dus we hebben nog tijd.&rdquo; Klopt &mdash; maar je leveranciers moeten hun toelating al in 2027 aanvragen. Of een vertrouwd bureau straks nog mag leveren, wordt dus in 2026 en 2027 beslist, niet in 2028.
        </p>
      </div>

      <h2>Wat betekent consolidatie voor inleners?</h2>

      <p>
        De toelatingseisen zijn pittig. Uitleners moeten onder meer een <strong>waarborgsom van &euro;100.000</strong> storten (&euro;50.000 voor starters, in termijnen), Verklaringen Omtrent het Gedrag (VOG) aanleveren, voldoen aan een normenkader en zich periodiek laten inspecteren. Voor grote, professionele spelers is dat te doen. Voor veel kleine nichebureaus &mdash; vaak de vertrouwde huisleveranciers waar je hiring managers al jaren graag mee werken &mdash; is dit een enorme horde.
      </p>

      <p>
        Verwacht daarom een consolidatiegolf: grote partijen nemen kleinere over. En juist daar schuilt een risico dat weinig mensen zien aankomen: <strong>een Wtta-toelating is gebonden aan een specifiek KVK-nummer en straalt niet automatisch af op een overgenomen entiteit.</strong>
      </p>

      <ul>
        <li>Bij een <strong>aandelentransactie</strong> blijft de overgenomen bv als zelfstandige entiteit bestaan. Heeft die bv geen eigen toelating, dan mag je er niet via inhuren &mdash; ook al is de moederorganisatie wél toegelaten.</li>
        <li>Bij een <strong>juridische fusie of activa/passiva-transactie</strong> gaan de contracten over naar de (toegelaten) overnemende partij. Op papier is het probleem dan opgelost.</li>
      </ul>

      <p>
        Maar zelfs in dat laatste geval blijft het gevaar van de <strong>achterblijvende administratie</strong> reëel. Onvolledige dossiers of een onjuist toegepaste inlenersbeloning verdwijnen niet bij een fusie. Komen die bij een periodieke inspectie aan het licht, dan kan de toelating van de gehele overnemende partij geschorst worden &mdash; en zie je van de ene op de andere dag een hofleverancier stilvallen.
      </p>

      <p>
        <strong>Wat je nu kunt doen:</strong> ga het gesprek aan met je kleinere leveranciers. Gaan zij certificeren, laten zij zich overnemen, of stoppen zij? Hoe eerder dat duidelijk is, hoe beter je kunt anticiperen.
      </p>

      <h2>Welke vluchtroutes moet je herkennen?</h2>

      <p>
        Bureaus die niet kunnen of willen voldoen, worden creatief. De wet kijkt echter niet naar het etiket op het contract, maar naar de praktijk. Drie constructies om alert op te zijn:
      </p>

      <ul>
        <li><strong>Aanneming van werk / BPO.</strong> De dienst wordt omgezet van &ldquo;capaciteit&rdquo; naar &ldquo;resultaatverplichting&rdquo;. Legitiem &mdash; zolang de sturing daadwerkelijk bij de leverancier ligt. Geeft je eigen organisatie feitelijk leiding aan de professional, dan is het alsnog inhuur en valt het onder de Wtta.</li>
        <li><strong>ZZP-bemiddeling.</strong> Het bureau stoot het loondienstmodel af en bemiddelt enkel zelfstandigen. Je ruilt dan een Wtta-risico in voor een risico onder de Wet DBA (schijnzelfstandigheid), waarop nu al actief wordt gehandhaafd.</li>
        <li><strong>Werving &amp; selectie + payrolling.</strong> Het bureau vindt nog steeds de kandidaat, maar brengt die onder bij een wél toegelaten payrollorganisatie en factureert een bemiddelingsfee. De keten is dan schoon, mits de payrollpartij daadwerkelijk is toegelaten.</li>
      </ul>

      <p>
        Een wijziging van de constructie verdient daarom altijd een toets &mdash; niet alleen juridisch, maar ook door iemand met praktijkkennis van de inhuurmarkt.
      </p>

      <h2>Hoe houd je grip op de inleenketen?</h2>

      <p>
        Een complexiteit die snel wordt onderschat: veel bureaus lenen zelf óók in bij andere bureaus. Onder de Wtta moet <strong>elke schakel in die keten</strong> een geldige toelating hebben. Zit er ergens in schakel drie of vier een niet-toegelaten (of buitenlandse) partij, dan loop je als eindopdrachtgever financieel en reputationeel risico &mdash; ook als je daar geen weet van had.
      </p>

      <p>
        Let op: ook <strong>buitenlandse uitleners</strong> die in Nederland arbeidskrachten ter beschikking stellen, vallen onder de toelatingsplicht. Bij internationale inhuur (denk aan schaarse IT-profielen) levert dat extra vragen op rond buitenlandse bewijsstukken en de controle op de inlenersbeloning.
      </p>

      <p>
        Ketentransparantie is daarmee geen luxe meer, maar een harde eis: bevraag leveranciers actief over hun eigen inleenketen en leg die informatie vast.
      </p>

      <h2>Wat kost dit, en wie betaalt?</h2>

      <p>
        Eerlijk is eerlijk: de Wtta drijft de kostprijs van inhuur omhoog. Waarborgsommen, administratieve lasten en inspectiekosten worden doorberekend in de inhuurtarieven. Dat is niet onredelijk, maar het vraagt om intern verwachtingsmanagement &mdash; richting zowel inkoop als de business.
      </p>

      <p>
        Draai daarbij de inkoopreflex om: <strong>een extreem scherp tarief is straks geen onderhandelingssucces meer, maar een potentieel compliance-risico.</strong> Een tarief dat onder de reële kostprijs van loon, sociale lasten en reserveringen duikt, maakt onderbetaling statistisch waarschijnlijk &mdash; en daarmee een rode vlag. Een hogere factuurprijs voor een aantoonbaar compliant bureau weegt op tegen de financiële en reputatieschade van een niet-toegelaten leverancier.
      </p>

      <h2>Waarom staat de Wtta niet op zichzelf?</h2>

      <p>
        De Wtta is de meest urgente en concrete verandering, maar het is de eerste van meerdere ingrepen in de flexmarkt. Benader het dossier daarom niet als iets dat op zichzelf staat.
      </p>

      <ul>
        <li>De <strong>Wet meer zekerheid flexwerkers (WMZF)</strong> is op 12 mei 2026 aangenomen door de Tweede Kamer en wacht op de Eerste Kamer. Die wet vervangt het nulurencontract door een bandbreedtecontract en scherpt de ketenregeling aan. Belangrijk voor inleners: het recht op <strong>gelijkwaardige arbeidsvoorwaarden voor uitzendkrachten</strong> geldt feitelijk al sinds 1 januari 2026 via de CAO voor Uitzendkrachten (ABU/NBBU) &mdash; dit verving de oude inlenersbeloning. De WMZF verankert datzelfde recht wettelijk (op zijn vroegst per 1 januari 2027). Het raakt direct de beloningsnorm waar ook de Wtta op toetst.</li>
        <li>Voor zelfstandigen is het verduidelijkingsdeel van de VBAR ingetrokken; er wordt gewerkt aan een aparte <strong>Zelfstandigenwet</strong> (beoogd 2028). Het losse <strong>rechtsvermoeden van werknemerschap bij een uurtarief onder circa &euro;38</strong> is wél aangenomen.</li>
      </ul>

      <p>
        De strategische les: het Wtta-normenkader toetst simpelweg of uitleners zich aan de geldende wet- en regelgeving houden. Verzwaart wetgeving als de WMZF die spelregels, dan verschuift de meetlat van de Wtta-inspecteur automatisch mee. Richt processen, systemen en leveranciersafspraken voor de Wtta daarom nu al zó wendbaar in dat ze niet opnieuw op de schop hoeven.
      </p>

      <h2>Waar begin je: de vlootschouw?</h2>

      <p>
        De succesvolle implementatie van de Wtta begint met een grondige <strong>vlootschouw</strong> van je huidige leveranciersbestand. Concreet:
      </p>

      <ol>
        <li><strong>Breng in kaart</strong> welke bureaus al het SNA-keurmerk hebben &mdash; zij staan er naar verwachting beter voor in het overgangsrecht.</li>
        <li><strong>Identificeer de risicopartijen</strong> &mdash; vooral kleine nichespelers voor wie de eisen een hoge drempel vormen.</li>
        <li><strong>Start het gesprek</strong> met die partijen over hun plannen (certificeren, fuseren of uitfaseren) én bereid je organisatie erop voor dat sommige vertrouwde leveranciers mogelijk afvallen.</li>
      </ol>

      <p>
        Dat hoeft niet in één week. Maar het moet wel beginnen. Organisaties die nu vooruitlopen, bouwen een stabieler, transparanter en uiteindelijk robuuster inkoopproces op dan organisaties die afwachten.
      </p>

      <p>
        De Wtta is geen bedreiging voor wie hem vóór is. Het is een kans om de kwaliteit van je leveranciersbestand structureel te verbeteren &mdash; en meteen een heldere norm te stellen voor de partners waarmee je werkt.
      </p>

      <h2>Welke bronnen kun je zelf raadplegen?</h2>

      <ul>
        <li><a href="https://www.nau.nl/" target="_blank" rel="noopener noreferrer">Nederlandse Autoriteit Uitleenmarkt (NAU)</a></li>
        <li><a href="https://www.toelatinguitleenmarkt.nl/" target="_blank" rel="noopener noreferrer">Toelating uitleenmarkt</a></li>
        <li><a href="https://www.nlarbeidsinspectie.nl/onderwerpen/wet-toelating-terbeschikkingstelling-van-arbeidskrachten/wet-toelating-terbeschikkingstelling-van-arbeidskrachten1" target="_blank" rel="noopener noreferrer">Nederlandse Arbeidsinspectie over de Wtta</a></li>
        <li><a href="https://www.rijksoverheid.nl/actueel/nieuws/2025/11/11/eerste-kamer-stemt-in-met-strengere-regels-voor-de-uitleenmarkt" target="_blank" rel="noopener noreferrer">Rijksoverheid: Eerste Kamer stemt in met strengere regels voor de uitleenmarkt</a></li>
      </ul>

      <hr />

      <p>
        <strong>Wil je weten hoe Wtta-proof jouw leveranciersbestand nu is?</strong> We helpen je graag met een vlootschouw en een concreet stappenplan richting 2028.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-05-30',
    updated: '2026-08-18',
    readTime: '8 min',
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
    slug: 'wmzf-flexibele-schil-onder-vuur',
    kind: 'kennis',
    title: 'De Wet meer zekerheid flexwerkers (WMZF): de flexibele schil onder vuur',
    excerpt:
      'De WMZF schaft oproepcontracten af, verlengt de tussenperiode van de ketenregeling naar drie jaar en verankert de gelijkwaardige beloning van uitzendkrachten wettelijk.',
    content: `
      <p class="lead">
        Het kabinet hanteert een duidelijk uitgangspunt: bij structureel werk hoort een vast contract. Met de aanname van de <strong>Wet meer zekerheid flexwerkers (WMZF)</strong> door de Eerste Kamer gaat de flexibele schil van organisaties fundamenteel op de schop. Nulurencontracten verdwijnen, de ketenregeling wordt drastisch aangescherpt en uitzendkrachten krijgen recht op exact dezelfde arbeidsvoorwaarden als vaste medewerkers.
      </p>

      <p>
        Laat ik direct met de deur in huis vallen: deze wet is een streep door de rekening van organisaties die gewend zijn om pieken en dalen volledig op te vangen met oproepkrachten. Flexibiliteit wordt schaarser en duurder. Organisaties die veelvuldig gebruikmaken van dit type flex doen er goed aan nu in actie te komen om te voorkomen dat de bedrijfsvoering straks spaak loopt.
      </p>

      <div class="callout">
        <p class="callout-title">In één zin</p>
        <p>
          De WMZF schaft oproepcontracten af ten gunste van basiscontracten, verlengt de tussenperiode van de ketenregeling naar drie jaar en verankert de reeds ingevoerde cao-gelijkwaardigheid van uitzendkrachten wettelijk.
        </p>
      </div>

      <h2>De tijdlijn: wanneer verandert wat?</h2>

      <p>
        Het speelveld rondom flexwerk verandert in fasen. Cruciaal is de wisselwerking tussen cao-afspraken (ABU/NBBU) en de wetgeving (WMZF).
      </p>

      <table>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Verandering &amp; wetgeving</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1 jan 2026</strong></td>
            <td>Gelijkwaardige beloning via de cao (ABU/NBBU): het principe van gelijkwaardige beloning (totaalpakket) gaat in voor alle uitzendkrachten onder de ABU- en NBBU-cao</td>
            <td>Reeds van kracht</td>
          </tr>
          <tr>
            <td>31 dec 2026</td>
            <td>Wettelijke verankering (WMZF): de gelijke arbeidsvoorwaarden (uitbreiding van secundaire voorwaarden zoals bonus en pensioen) worden wettelijk verankerd in de Waadi</td>
            <td>Definitief aangenomen</td>
          </tr>
          <tr>
            <td><strong>1 jan 2028</strong></td>
            <td>Invoering basiscontract &amp; ketenregeling: afschaffing oproepcontracten, verkorting uitzendfasen (max. 3 jaar flex) en verlenging tussenperiode ketenregeling naar 3 jaar</td>
            <td>Definitief aangenomen</td>
          </tr>
        </tbody>
      </table>

      <h2>1. Het basiscontract: einde van het nulurencontract</h2>

      <p>
        Een van de meest ingrijpende maatregelen is het verbod op traditionele oproepcontracten zoals <strong>nulurencontracten</strong> en <strong>min/max-contracten</strong> per 1 januari 2028. In plaats daarvan introduceert de wet het <strong>basiscontract</strong>.
      </p>

      <ul>
        <li><strong>Minimale arbeidsomvang:</strong> als werkgever spreek je een vast minimumaantal uren af per week, maand of jaar. Deze uren moet je gegarandeerd uitbetalen, of er nu werk is of niet. Sluit je dit contract af voor onbepaalde tijd? Dan profiteer je wel van een lage WW-premie.</li>
        <li><strong>De 130%-bandbreedte:</strong> bovenop het minimumaantal uren mag je de werknemer oproepen, maar met een strikte grens. De maximale arbeidsomvang mag <strong>nooit groter zijn dan 130%</strong> van het minimum. <em>Voorbeeld:</em> spreek je een basiscontract af van minimaal 20 uur? Dan mag je de medewerker voor maximaal 26 uur (20 uur &times; 1,3) inroosteren.</li>
        <li><strong>Weigeringsrecht &amp; opschaling:</strong> werknemers hebben het recht om diensten te weigeren die deze 130%-grens overschrijden. Werkt iemand bovendien structureel meer uren dan het minimum? Dan ben je verplicht een nieuw contract aan te bieden met een passend, hoger aantal uren.</li>
      </ul>

      <div class="callout callout-warning">
        <p class="callout-title">Veelgemaakte denkfout</p>
        <p>
          &ldquo;We passen gewoon een jaarurennorm toe om de flexibiliteit te behouden.&rdquo; Dat kan, maar onder de WMZF moet je dan wel per kwartaal een vaste mate van roosterzekerheid én specifieke niet-beschikbaarheidsdagen met je werknemer afstemmen. De vrijblijvendheid is er echt af.
        </p>
      </div>

      <h2>2. Ketenregeling: draaideuren definitief op slot</h2>

      <p>
        De huidige ketenregeling telt opeenvolgende tijdelijke contracten bij elkaar op, tenzij er een tussenperiode van minimaal 6 maanden tussen zit. Dit leidde in de praktijk tot de beruchte &lsquo;draaideurconstructie&rsquo;: een werknemer werd na twee jaar 6 maanden naar huis gestuurd, om vervolgens weer op een tijdelijk contract te starten.
      </p>

      <p>
        De WMZF maakt hier per 1 januari 2028 korte metten mee:
      </p>

      <ul>
        <li><strong>Tussenperiode naar 3 jaar:</strong> de tussenperiode waarin de keten wordt doorbroken, wordt verruimd van 6 maanden naar <strong>3 jaar</strong>.</li>
        <li><strong>Geen cao-afwijkingen:</strong> het is onder de nieuwe wet niet meer mogelijk om bij cao af te wijken van het maximaal aantal toegestane tijdelijke contracten (3) of de totale maximale duur (3 jaar).</li>
      </ul>

      <p>
        <strong>Gevolg:</strong> HR kan een medewerker die uit dienst treedt pas na 3 jaar weer een tijdelijk contract aanbieden. Dit dwingt organisaties om bij structureel werk veel sneller over te gaan tot een contract voor onbepaalde tijd.
      </p>

      <h2>3. Nieuwe spelregels voor uitzendkrachten</h2>

      <p>
        Uitzendkrachten worden door de wetgever beter beschermd om oneerlijke concurrentie op arbeidsvoorwaarden te voorkomen.
      </p>

      <h3>De nuance: gelijkwaardige beloning per 1 januari 2026</h3>

      <p>
        Hoewel de WMZF de gelijke arbeidsvoorwaarden wettelijk verankert per 31 december 2026, is de praktijk al veranderd. De grote uitzendkoepels (ABU en NBBU) hebben namelijk al voorgesorteerd op de wetgeving. Sinds <strong>1 januari 2026</strong> is het principe van <strong>gelijkwaardige beloning</strong> al van kracht via de cao voor uitzendkrachten.
      </p>

      <p>
        Dit betekent een fundamentele verschuiving ten opzichte van de oude &lsquo;inlenersbeloning&rsquo;:
      </p>

      <ul>
        <li><strong>Van elementen naar totaalpakket:</strong> waar voorheen enkel naar specifieke losse loonelementen werd gekeken, wordt nu gekeken naar de <strong>totale waarde van het arbeidsvoorwaardenpakket</strong> onder de streep.</li>
        <li><strong>Essentiële vs. niet-essentiële voorwaarden:</strong> er wordt onderscheid gemaakt tussen essentiële voorwaarden (zoals loon, vakantiedagen, toeslagen en doorbetaling bij ziekte) en niet-essentiële voorwaarden (zoals pensioen).</li>
        <li><strong>Uitruilbaarheid:</strong> binnen strikte kaders mogen essentiële voorwaarden onderling worden uitgeruild (bijvoorbeeld een lagere toeslag compenseren met een hoger basisloon), mits de totale waarde minimaal gelijkwaardig blijft.</li>
        <li><strong>Informatieplicht voor inleners:</strong> als opdrachtgever ben je verplicht alle benodigde arbeidsvoorwaardeninformatie transparant te delen met het uitzendbureau. Het berekenen en toepassen hiervan wordt ondersteund via het landelijke platform <strong>Wijzerbelonen.nl</strong>.</li>
      </ul>

      <p>
        De wettelijke verankering in de <strong>Waadi</strong> (Wet allocatie arbeidskrachten door intermediairs) per eind 2026 vormt hiermee het sluitstuk van een praktijk die op de werkvloer al sinds begin 2026 verplicht is.
      </p>

      <h3>Verkorting van het fasensysteem (1 januari 2028)</h3>

      <p>
        Het fasensysteem voor uitzendkrachten wordt aanzienlijk ingekort en cao&rsquo;s mogen hier niet meer van afwijken:
      </p>

      <ul>
        <li><strong>Fase A (uitzendbeding):</strong> wordt verkort van 78 weken naar maximaal <strong>52 weken</strong>.</li>
        <li><strong>Fase B (bepaalde tijd):</strong> wordt verkort van 3 jaar (max. 6 contracten) naar maximaal <strong>2 jaar</strong> (max. 6 contracten).</li>
      </ul>

      <p>
        <strong>Gevolg:</strong> de totale flexibele periode (fase A + B) bedraagt nog maar maximaal <strong>3 jaar</strong>. Daarna is de uitzendonderneming verplicht de uitzendkracht een vast contract aan te bieden.
      </p>

      <h3>Meer bescherming bij ziekte &amp; overnamekosten</h3>

      <ul>
        <li><strong>Loondoorbetaling bij ziekte:</strong> uitzendkrachten met een uitzendbeding behouden bij ziekte recht op loondoorbetaling, ook als dit niet expliciet in de uitzend-cao is geregeld.</li>
        <li><strong>Capping overnamevergoeding:</strong> de fee die je als inlener aan een uitzendbureau moet betalen om een uitzendkracht rechtstreeks over te nemen, wordt wettelijk aan een maximum gebonden om de drempel naar vast werk te verlagen.</li>
      </ul>

      <h2>4. Uitzonderingen: wie de dans ontspringen?</h2>

      <p>
        De wetgever erkent dat specifieke groepen een andere dynamiek kennen. Er gelden uitzonderingen voor:
      </p>

      <ul>
        <li><strong>Seizoenswerkers:</strong> voor functies die vanwege klimatologische of natuurlijke omstandigheden maximaal 9 maanden per jaar kunnen worden uitgeoefend, blijft een oproepovereenkomst mogelijk.</li>
        <li><strong>AOW-gerechtigden:</strong> zij mogen op basis van een nulurencontract blijven werken.</li>
        <li><strong>Scholieren en studenten:</strong> zij mogen op basis van een oproepcontract blijven werken mits ze <strong>maximaal 16 uur per week</strong> werken. Werken ze meer? Dan gelden de reguliere regels. De bewijslast voor hun studentenstatus is bovendien versoepeld: naast een inschrijvingsbewijs volstaat bijvoorbeeld ook een studentenkaart of bewijs van studiefinanciering.</li>
      </ul>

      <h2>5. Wat betekent dit voor HR? Strategisch actieplan</h2>

      <p>
        De WMZF staat niet op zichzelf, maar vormt samen met de hernieuwde handhaving van de <strong>Wet DBA</strong> en de toekomstige Zelfstandigenwet het nieuwe compliance-klimaat. Wacht niet af tot 2028, maar kom nu al in actie:
      </p>

      <ol>
        <li><strong>Vlootschouw op contracten:</strong> inventariseer per direct alle lopende nuluren-, min/max- en uitzendcontracten binnen de organisatie. Breng in kaart hoeveel fte er momenteel in de ultieme flexschil zit.</li>
        <li><strong>Audit op gelijkwaardige beloning:</strong> omdat de ABU/NBBU-cao al per 1 januari 2026 is aangepast, moet je controleren of de inleenkosten van uitzendkrachten al correct zijn gecorrigeerd via Wijzerbelonen.nl. Zorg dat alle vereiste arbeidsvoorwaardeninformatie correct is gedeeld met je uitzendpartners om naheffingen of cao-claims te voorkomen.</li>
        <li><strong>Impactanalyse op de business:</strong> met name in sectoren zoals de zorg, horeca en logistiek zal de flexibiliteit afnemen en zullen de loonkosten stijgen. Bereken de impact van de 130%-bandbreedte op de roosterplanning en budgetten.</li>
        <li><strong>Heroverweeg de inhuurstrategie:</strong> bied voor structureel werk sneller een (basis)contract aan en maak voor specialistische projecten gebruik van gerichte oplossingen zoals een Statement of Work in plaats van doorlopende uitzendarbeid.</li>
      </ol>

      <hr />

      <p>
        <strong>Wil je weten hoe WMZF-proof jouw flexibele schil nu is?</strong> We helpen je graag met een vlootschouw en een concreet stappenplan richting 2028.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-07-18',
    readTime: '7 min',
    category: 'Compliance',
    primaryServiceId: 'compliant-inhuren',
    relatedSlugs: [
      'wtta-waarom-2028-nu-al-op-je-agenda',
      'wet-dba-deliveroo-en-zelfstandigenwet',
      'wanneer-is-zzp-inhuur-verantwoord',
    ],
    featured: true,
  },
  {
    slug: 'wat-is-grip-op-externe-inhuur',
    kind: 'kennis',
    chatSuggestions: [
      'Hoe krijg ik snel overzicht van wie er allemaal wordt ingehuurd?',
      'Wie hoort eigenaar te zijn van externe inhuur: HR of inkoop?',
      'Welke stuurinformatie heb ik minimaal nodig?',
      'Hoe groot moet de inhuur zijn voordat regie loont?',
    ],
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

      <h2>Wat betekent grip op externe inhuur in de praktijk?</h2>

      <p>
        Grip begint met inzicht, maar eindigt daar niet. Een organisatie heeft pas echt grip als ze op basis van data, heldere rollen en vaste werkafspraken kan bijsturen.
      </p>

      <ul>
        <li><strong>Overzicht:</strong> Je weet wie er werkt, waar, onder welke contractvorm en tegen welk tarief.</li>
        <li><strong>Regie:</strong> Je kunt sturen op kosten, compliance, leveranciersprestaties en doorlooptijd.</li>
        <li><strong>Bestuurbaarheid:</strong> Rollen, processen en eigenaarschap zijn duidelijk belegd.</li>
      </ul>

      <h2>Hoe merk je dat grip op inhuur ontbreekt?</h2>

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

      <h2>Wanneer groeit overzicht uit tot regie?</h2>

      <p>
        In organisaties met een laag inhuurvolume kan een decentraal model prima werken. Naarmate de schaal toeneemt, groeit de behoefte aan centrale regie. Dan ontstaat vaak de afweging tussen bijvoorbeeld broker, master vendor of MSP.
      </p>

      <p>
        Er is dus geen universeel beste model. Het juiste model hangt af van je volume, volwassenheid, risicoprofiel en de mate waarin je strategisch wilt sturen.
      </p>

      <h2>Waar stuur je op als je grip wilt?</h2>

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
    updated: '2026-08-18',
    readTime: '5 min',
    category: 'Inhuurstrategie',
    primaryServiceId: 'strategisch-inhuuradvies',
    relatedSlugs: [
      'msp-broker-master-vendor-of-decentraal-model',
      'leveranciersmanagement-bij-externe-inhuur',
      'kostenmanagement-bij-externe-inhuur',
    ],
    featured: false,
  },
  {
    slug: 'msp-broker-master-vendor-of-decentraal-model',
    kind: 'kennis',
    chatSuggestions: [
      'Wie betaalt de MSP: de leverancier of de opdrachtgever?',
      'Wat is het verschil tussen een broker en een MSP?',
      'Wanneer is een master vendor een slecht idee?',
      'Hoe voorkom ik dat de MSP te veel macht krijgt?',
    ],
    title: 'MSP, broker, master vendor of decentraal model: wat past wanneer?',
    excerpt:
      'Het juiste inhuurmodel hangt af van je volume, volwassenheid en doelstelling. En minstens zo belangrijk is inzicht in wie er in de keten aan je tarief verdient.',
    content: `
      <p class="lead">
        "Grip op inhuur" staat in vrijwel elk jaarplan. Toch betekent het in iedere organisatie iets anders. Voor de een gaat het om overzicht: wie werkt er, waar en tegen welk tarief? Voor de ander gaat het om regie: actief sturen op kosten, risico's en toegang tot de markt.
      </p>

      <p>
        Welke betekenis past, hangt sterk af van het volume en de volwassenheid van je inhuur. Een organisatie die af en toe een externe inhuurt, heeft iets anders nodig dan een organisatie met honderden externen aan boord. Er is dus geen beste model. Er is wel een model dat het beste past bij de fase waarin je organisatie nu zit.
      </p>

      <div class="callout">
        <p class="callout-title">In één zin</p>
        <p>
          Grip op inhuur begint bij een bewuste keuze voor het inhuurmodel dat past bij je volume, je risico's en je ambitie, en bij inzicht in wie er in de keten aan je tarief verdient.
        </p>
      </div>

      <h2>Wat de inhuurketen met je tarief doet</h2>

      <p>
        Wie tarieven van vergelijkbare professionals naast elkaar legt, ziet al snel flinke verschillen. Dat ligt lang niet altijd aan de kandidaat. Vaak zit het verschil in de keten. Iedere partij tussen jou en de professional neemt iets over, zoals werving, administratie, risico of contractbeheer. En iedere partij rekent daar een vergoeding voor.
      </p>

      <p>
        Dat is op zich niet verkeerd. Je moet alleen weten waarvoor je betaalt. Zolang dat niet duidelijk is, vergelijk je tarieven die eigenlijk niet met elkaar te vergelijken zijn.
      </p>

      <h2>Vier modellen</h2>

      <p>
        In de Nederlandse markt kom ik grofweg vier inhuurmodellen tegen. Veel organisaties doorlopen ze in de loop der jaren min of meer op volgorde.
      </p>

      <h3>1. Decentraal, met preferred suppliers</h3>

      <p>
        Dit is vaak waar het begint. Een manager heeft capaciteit nodig, belt een leverancier waar hij goede ervaringen mee heeft en regelt het. HR of Inkoop stelt meestal een lijst met voorkeursleveranciers op om wildgroei te beperken.
      </p>

      <p>
        Bij lage volumes werkt dit prima. De lijnen zijn kort en de manager is nauw betrokken. Het nadeel merk je pas als de inhuur groeit. Er is geen centraal overzicht van kosten en risico's, processen raken versnipperd en afdelingen betalen voor dezelfde rol verschillende tarieven.
      </p>

      <h3>2. De broker</h3>

      <p>
        Nemen de administratieve last en de compliance-risico's toe, dan is een broker een logische volgende stap. Je werft en selecteert zelf, maar de broker wordt contractpartij. Die verzorgt de screening, de contracten en de facturatie.
      </p>

      <p>
        Dat geeft rust: één proces, één factuur en een compleet dossier. Een broker lost alleen je wervingsvraag niet op. Je moet nog steeds zelf de markt op. Leveranciers ervaren de broker bovendien soms als een extra schakel waarvan het nut voor hen niet direct duidelijk is.
      </p>

      <h3>3. Master vendor</h3>

      <p>
        Dit model zie ik vooral bij organisaties met veel generieke functies, zoals klantenservice, logistiek of productie. Eén grote leverancier vult alle aanvragen in. Lukt dat niet, dan schakelt die onder eigen verantwoordelijkheid andere bureaus in.
      </p>

      <p>
        Bij grote volumes in steeds terugkerende profielen is dat efficiënt. Je hebt één aanspreekpunt dat verantwoordelijk is voor de levering. De keerzijde is afhankelijkheid. Kan de master vendor niet leveren, dan heb je een probleem. Ook heeft een master vendor weinig belang bij het toelaten van concurrenten, wat je toegang tot de markt beperkt. Voor schaarse specialisten is dit model daarom minder geschikt.
      </p>

      <h3>4. Managed Service Provider (MSP)</h3>

      <p>
        Bij een MSP draait het niet om leveren, maar om regisseren. Ik vergelijk het graag met de luchtverkeersleiding. Zij vliegen zelf niet, maar zorgen dat alle vluchten veilig en volgens de regels landen. De MSP beheert het hele proces van aanvraag tot factuur, meestal ondersteund door een <a href="/kennis/artikelen/wat-doet-een-vms-wel-en-niet">Vendor Management Systeem (VMS)</a>, en ontsluit de markt via een breed netwerk van leveranciers, brokers en zzp'ers.
      </p>

      <p>
        Een MSP biedt de meeste marktwerking, inzicht en compliance. Het vraagt wel om een serieuze investering, verandermanagement bij de implementatie en voldoende volume om rendabel te zijn.
      </p>

      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Past wanneer?</th>
            <th>Sterkte</th>
            <th>Beperking</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Decentraal</td>
            <td>Laag volume, snelheid belangrijker dan centrale sturing</td>
            <td>Korte lijnen, veel invloed voor de manager</td>
            <td>Weinig overzicht, versnipperde tarieven en risico's</td>
          </tr>
          <tr>
            <td>Broker</td>
            <td>Administratieve ontzorging en dossiervorming</td>
            <td>Eén proces, één factuur, compleet compliance-dossier</td>
            <td>Lost werving of selectie niet op</td>
          </tr>
          <tr>
            <td>Master vendor</td>
            <td>Grote volumes en repeterende, generieke profielen</td>
            <td>Leverzekerheid en één aanspreekpunt</td>
            <td>Afhankelijkheid en beperkte toegang tot niche-specialisten</td>
          </tr>
          <tr>
            <td>MSP</td>
            <td>Centrale regie op keten, compliance en marktwerking</td>
            <td>Transparantie, stuurinformatie en ketenregie</td>
            <td>Vraagt investering, veranderkracht en voldoende schaal</td>
          </tr>
          <tr>
            <td>VMS</td>
            <td>Proces, data en dossiervorming (systeem, geen inhuurmodel)</td>
            <td>Overzicht, uniforme workflow en rapportage</td>
            <td>Vervangt geen governance, juridische toets of verandermanagement</td>
          </tr>
        </tbody>
      </table>

      <h2>Wie betaalt de regie?</h2>

      <p>
        Kies je voor een broker of MSP, kijk dan goed naar het financieringsmodel. Dat bepaalt meer van de samenwerking dan vaak wordt gedacht.
      </p>

      <p>
        Bij <strong>supplier funded</strong> brengt de broker of MSP een fee in rekening bij de leveranciers, meestal een percentage van het uurtarief. Voor de opdrachtgever lijkt de dienstverlening daardoor kosteloos. In de praktijk verwerken leveranciers die fee echter gewoon in hun tarief. Daarnaast verdient de regiepartij meer naarmate er meer wordt ingehuurd. Dat staat op gespannen voet met de wens om inhuur juist terug te dringen.
      </p>

      <p>
        Bij <strong>client funded</strong> betaalt de opdrachtgever zelf een vergoeding voor de dienstverlening. Die staat los van de leveranciersmarges en is daardoor transparant. Voor organisaties die echt willen sturen op kwaliteit en <a href="/kennis/artikelen/kostenmanagement-bij-externe-inhuur">kostenmanagement</a>, vind ik dit de zuiverste verhouding. De regiepartij heeft dan geen enkel belang bij hogere tarieven.
      </p>

      <h2>En als je het zelf wilt doen?</h2>

      <p>
        Niet iedere organisatie hoeft een MSP in te schakelen. Een eigen inhuurdesk kan ook goed werken. Het kantelpunt ligt daarbij niet alleen in het volume, maar vooral in het draagvlak bij de directie. Zonder stevig mandaat wordt een interne inhuurdesk al snel gepasseerd door managers die liever hun eigen weg gaan.
      </p>

      <p>
        Een interessante tussenvorm is Build-Operate-Transfer. GVB Amsterdam besteedde de inhuur uit aan een MSP met de opdracht om het proces in te richten en de organisatie mee te nemen, zodat GVB het op termijn zelf kan overnemen. Dat laat goed zien dat inhuur een vak is dat specifieke kennis vraagt.
      </p>

      <h2>Waar begin je?</h2>

      <p>
        Wil je weten of je huidige model nog past, ga dan met HR, Inkoop en Finance om tafel en bespreek de volgende vragen:
      </p>

      <ol>
        <li>Waar zit vandaag de grootste pijn? Bij administratie en compliance, bij de levering van grote aantallen mensen, of bij het gebrek aan overzicht en regie?</li>
        <li>Hoeveel partijen zitten er tussen jou en de professional, en weet je wat elke partij toevoegt?</li>
        <li>Hoe wordt je broker of MSP betaald, en beloont dat model volume of resultaat?</li>
        <li>Waarop baseer je of een tarief marktconform is? Op het oordeel van de leverancier of op onafhankelijke marktinformatie?</li>
      </ol>

      <p>
        De keuze voor een model ligt niet voor altijd vast. Veel organisaties beginnen decentraal, voegen een broker toe voor de zekerheid en groeien door naar een MSP of eigen inhuurdesk wanneer ze echt regie willen voeren. Het belangrijkste is dat je die keuze bewust maakt, in plaats van er ongemerkt in terecht te komen.
      </p>

      <hr />

      <p>
        <strong>Twijfel je welk model past bij jouw organisatie?</strong> We verkennen graag samen waar je nu staat en welke route logisch is.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-04-07',
    updated: '2026-10-06',
    readTime: '7 min',
    category: 'Inhuurstrategie',
    primaryServiceId: 'strategisch-inhuuradvies',
    relatedSlugs: [
      'wat-is-grip-op-externe-inhuur',
      'kostenmanagement-bij-externe-inhuur',
      'verdienmodel-msp-deugt-waarschijnlijk-niet',
    ],
    featured: false,
  },
  {
    slug: 'wat-is-compliant-inhuren',
    kind: 'kennis',
    chatSuggestions: [
      'Welke wetten raken externe inhuur allemaal?',
      'Wat is ketenaansprakelijkheid en hoe beperk ik het risico?',
      'Waar moet ik op letten bij een G-rekening?',
      'Hoe leg ik compliance vast zonder een papieren tijger te bouwen?',
    ],
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

      <h2>Wat is compliant inhuren wel?</h2>

      <ul>
        <li><strong>Een passende contractvorm:</strong> de gekozen vorm sluit aan op het type opdracht en de praktijk.</li>
        <li><strong>Heldere verantwoordelijkheden:</strong> opdrachtgever, leverancier en manager weten wie waarop stuurt.</li>
        <li><strong>Een volledig dossier:</strong> verplichte documenten, checks en afspraken zijn op orde.</li>
        <li><strong>Naleving in de praktijk:</strong> wat op papier staat, gebeurt ook echt zo op de werkvloer.</li>
      </ul>

      <h2>Waar gaat compliant inhuren vaak mis?</h2>

      <p>
        Veel organisaties nemen losse maatregelen, maar pakken het onderliggende proces niet aan. Dan ontstaat schijnveiligheid.
      </p>

      <ul>
        <li>Managers behandelen zelfstandigen als medewerkers.</li>
        <li>Modelovereenkomsten worden gebruikt als juridisch schild, zonder toets op de praktijk.</li>
        <li>Documenten worden verzameld, maar niet inhoudelijk beoordeeld.</li>
        <li>Niemand voelt zich eigenaar van het geheel.</li>
      </ul>

      <h2>Waarom is compliant inhuren ook een governance-vraagstuk?</h2>

      <p>
        Externe inhuur raakt HR, Inkoop, Legal, Finance en de business. Als die functies ieder hun eigen stukje managen zonder centrale regie, ontstaan gaten in het proces.
      </p>

      <p>
        Daarom vraagt compliant inhuren niet alleen om juridische kennis, maar ook om bestuurbaarheid: wie besluit, wie toetst, wie signaleert en wie grijpt in als de praktijk afwijkt?
      </p>

      <h2>Wat kenmerkt een werkbare compliance-aanpak?</h2>

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
    updated: '2026-08-18',
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
    chatSuggestions: [
      'Wat betekent de eis van drie opdrachtgevers in de Zelfstandigenwet?',
      'Wat is het verschil tussen bemiddeling en tussenkomst bij zzp-inhuur?',
      'Hoe pas ik het stoplichtmodel toe op onze zzp-populatie?',
      'Wanneer is het uurtarief een risicosignaal onder de Wet DBA?',
    ],
    title: 'Wet DBA, Deliveroo en Zelfstandigenwet: van paniek naar regie',
    excerpt:
      'Het inhuren van zzp\'ers is niet verboden, maar vraagt om een kritische blik op de praktijk én op de uitkomsten van de consultatie rond de Zelfstandigenwet.',
    content: `
      <p class="lead">
        Wie verantwoordelijk is voor externe inhuur, kan niet om de juridische kaders heen. Rond de inzet van zelfstandigen spelen op dit moment drie zaken tegelijk: de handhaving door de Belastingdienst, de jurisprudentie van de Hoge Raad en nieuwe wetgeving vanuit Den Haag. Dat zorgt voor onrust in de markt. Sommige organisaties kondigen zelfs een algehele zzp-stop af.
      </p>

      <p>
        Laat ik direct duidelijk zijn: dat vind ik een overtrokken reactie. Het inhuren van zelfstandigen blijft goed mogelijk, mits je bereid bent kritisch naar de feiten te kijken en te sturen op echt ondernemerschap. Dat vraagt wel om een eerlijke afweging tussen vast en flex.
      </p>

      <div class="callout">
        <p class="callout-title">In één zin</p>
        <p>
          Het inhuren van zzp'ers is niet verboden, maar vraagt om een kritische blik op hoe er in de praktijk wordt gewerkt en om een bewuste keuze tussen vast, detachering en zelfstandig ondernemerschap.
        </p>
      </div>

      <h2>Bemiddeling of tussenkomst</h2>

      <p>
        Veel verwarring ontstaat doordat bemiddeling en tussenkomst door elkaar worden gebruikt. Toch bepaalt juist dit onderscheid wie het fiscale risico loopt.
      </p>

      <p>
        Bij <strong>bemiddeling</strong> brengt een intermediair vraag en aanbod bij elkaar, maar sluit de opdrachtgever het contract rechtstreeks met de zzp'er. Oordeelt de Belastingdienst dat er sprake is van schijnzelfstandigheid, dan meldt de fiscus zich direct bij de opdrachtgever.
      </p>

      <p>
        Bij <strong>tussenkomst</strong> sluit de intermediair, broker of MSP het contract met de zzp'er en leent deze door aan de opdrachtgever. Het primaire fiscale risico ligt dan bij de intermediair. Dat is geen vrijbrief. Oefent de opdrachtgever op de werkvloer zoveel gezag uit dat hij feitelijk als werkgever optreedt, dan kan de Belastingdienst alsnog door de constructie heen kijken. Daarnaast blijft de inlenersaansprakelijkheid van kracht.
      </p>

      <p>
        Ook de modelovereenkomst onder de <a href="https://wetten.overheid.nl/BWBR0037602" target="_blank" rel="noopener noreferrer">Wet DBA</a> biedt minder zekerheid dan vaak wordt gedacht. De Belastingdienst en de rechter kijken niet naar wat er op papier staat, maar naar hoe er in de praktijk wordt gewerkt. De Belastingdienst keurt om die reden nog nauwelijks nieuwe modelovereenkomsten goed.
      </p>

      <h2>De negen gezichtspunten uit het Deliveroo-arrest</h2>

      <p>
        De spelregels zelf zijn niet wezenlijk veranderd, de uitleg wel. Met het <a href="https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:HR:2023:443" target="_blank" rel="noopener noreferrer">Deliveroo-arrest van de Hoge Raad (ECLI:NL:HR:2023:443)</a> zijn negen gezichtspunten benoemd die in samenhang moeten worden gewogen:
      </p>

      <ol>
        <li>De aard en duur van de werkzaamheden.</li>
        <li>De manier waarop werkzaamheden en werktijden worden bepaald.</li>
        <li>De inbedding van het werk en de werkende in de organisatie.</li>
        <li>De verplichting om het werk persoonlijk uit te voeren.</li>
        <li>De manier waarop de contractuele verhouding tot stand is gekomen.</li>
        <li>De manier waarop de beloning wordt bepaald.</li>
        <li>De hoogte van de beloning.</li>
        <li>Of de werkende commercieel risico loopt.</li>
        <li>Of de werkende zich in het economisch verkeer als ondernemer gedraagt.</li>
      </ol>

      <p>
        Er zit geen rangorde in deze punten. Het gaat om het totaalbeeld. Wel wil ik punt 7 even uitlichten. Ligt het uurtarief nauwelijks boven de loonkosten van een vergelijkbare medewerker in vaste dienst, dan is het lastig te verdedigen dat de werkende zelf de risico's van ondernemerschap draagt, zoals pensioen, arbeidsongeschiktheid en periodes zonder opdracht.
      </p>

      <h2>De stand van zaken</h2>

      <p>
        Waar de focus eerst lag op de beperkende criteria uit de Wet VBAR, is de politieke wind inmiddels gedraaid. Het onderdeel "verduidelijking" uit de VBAR, met de criteria rond organisatorische inbedding, is begin 2026 ingetrokken. Alleen het <strong>rechtsvermoeden</strong> blijft over. Werkenden met een uurtarief onder de &euro; 38 (peildatum 2026) kunnen dan via de rechter eenvoudiger een dienstverband claimen, waarbij de bewijslast bij de opdrachtgever ligt. De beoogde invoering is 1 januari 2027.
      </p>

      <p>
        Daarnaast heeft het kabinet een voorstel voor een <strong>Zelfstandigenwet</strong> in consultatie gebracht. Daarover verderop meer.
      </p>

      <p>
        De Belastingdienst handhaaft sinds 1 januari 2025 weer. Voor 2026 is de zachte landing gedeeltelijk verlengd: er worden geen verzuimboetes opgelegd voor administratieve fouten. Vergrijpboetes bij opzet of grove schuld zijn wel weer mogelijk. Vanaf 1 januari 2027 vervallen de verzachtende maatregelen. Met zo'n 80 fte aan handhavingscapaciteit is de kans op controle beperkt, maar wordt schijnzelfstandigheid vastgesteld, dan zijn de gevolgen fors.
      </p>

      <div class="callout callout-warning">
        <p class="callout-title">Een rekenvoorbeeld</p>
        <p>
          Een zzp'er werkt vijf maanden voor je organisatie voor &euro; 5.000 per maand, in totaal &euro; 25.000 exclusief btw. Bij een naheffing betaal je ongeveer:
        </p>
        <ul>
          <li>Loonbelasting (circa &euro; 1.400 per maand): <strong>&euro; 7.000</strong></li>
          <li>Premies werknemersverzekeringen (circa 20%): <strong>&euro; 5.000</strong></li>
          <li>Een vergrijpboete van bijvoorbeeld 25%: <strong>&euro; 3.000</strong></li>
        </ul>
        <p>
          Samen ruim <strong>&euro; 15.000</strong>, bovenop het tarief dat al is betaald. Pensioenfondsen kunnen daarnaast tot vijf jaar terug premies vorderen.
        </p>
      </div>

      <h2>De Zelfstandigenwet: steun voor het doel, kritiek op de uitwerking</h2>

      <p>
        Van 1 tot en met 29 oktober 2026 lag het conceptwetsvoorstel voor de Zelfstandigenwet in internetconsultatie. Het kabinet wil met deze wet de opvolger van de VBAR neerzetten en mikt op inwerkingtreding per 1 januari 2028.
      </p>

      <p>
        De kern van het voorstel is een zogenoemde veilige haven. Wie daarbinnen valt, werkt aantoonbaar als zelfstandige. Daarvoor moet aan twee toetsen worden voldaan. De zelfstandigentoets kijkt naar de ondernemer zelf: minimaal drie verschillende opdrachtgevers in het lopende en het voorgaande kalenderjaar samen, een minimale besteding aan voorzieningen tegen risico's zoals arbeidsongeschiktheid en pensioen, en de basiskenmerken van een onderneming. De werkrelatietoets kijkt naar de opdracht. Beide partijen willen geen arbeidsovereenkomst, de zelfstandige bepaalt zelf hoe het werk wordt uitgevoerd en in beginsel ook waar en wanneer, en het werk gebeurt voor eigen rekening en risico.
      </p>

      <p>
        Belangrijk om te weten: wie niet in de veilige haven valt, is niet automatisch werknemer. Dan wordt de arbeidsrelatie beoordeeld zoals nu, aan de hand van de wet en de gezichtspunten uit het Deliveroo-arrest.
      </p>

      <h3>Ruim 1.100 reacties</h3>

      <p>
        De consultatie leverde ruim 1.100 reacties op. Volgens een analyse van ZiPconomy was zo'n 85% daarvan kritisch. Het doel, meer duidelijkheid en rechtszekerheid, wordt breed gesteund. De uitwerking een stuk minder.
      </p>

      <p>
        Het grootste struikelblok is de eis van drie opdrachtgevers. Zzp-organisaties, werkgeversorganisaties als VNO-NCW en MKB-Nederland en veel individuele zelfstandigen wijzen erop dat juist interim-managers, ICT-specialisten, consultants en projectleiders vaak langere tijd voor één opdrachtgever werken. Dat zegt weinig over afhankelijkheid, maar alles over het soort werk dat zij doen. De vrees is dat deze groep buiten de veilige haven valt, of kleine opdrachten gaat aannemen alleen om aan het aantal te komen.
      </p>

      <p>
        Het tweede punt is de administratieve last. Om zekerheid te ontlenen aan de veilige haven, moeten zelfstandigen en opdrachtgevers kunnen laten zien dat aan alle criteria is voldaan. Dat betekent bijhouden, vastleggen en controleren, ook van zaken die buiten de opdracht zelf liggen, zoals het aantal andere opdrachtgevers en de gedane reserveringen. Critici waarschuwen dat de wet zo een afvinklijst wordt in plaats van een toets op echt ondernemerschap. Daarnaast bevat het voorstel nog open normen, wat de beloofde duidelijkheid deels weer tenietdoet.
      </p>

      <p>
        Vakbonden zijn ook kritisch, maar vanuit de andere kant. Zij vrezen dat de wet juist te veel ruimte laat voor schijnzelfstandigheid.
      </p>

      <h3>Mijn kijk</h3>

      <p>
        Ik vind het een goede ontwikkeling dat ondernemerschap centraal komt te staan, in plaats van de vraag hoe iemand in de organisatie is ingebed. Bij de eis van drie opdrachtgevers heb ik wel mijn twijfels. Zelf kijk ik bij ondernemerschap liever naar de verdeling van de omzet dan naar het aantal opdrachtgevers. Iemand die een groot deel van het jaar aan een afgebakend project bij één klant werkt, kan prima een zelfstandig ondernemer zijn.
      </p>

      <p>
        Voor opdrachtgevers is mijn advies: wacht niet af, maar raak ook niet in paniek. Na deze kritiek wordt het voorstel naar verwachting nog aangepast voordat het naar de Tweede Kamer gaat. Tot die tijd blijven de huidige regels en de Deliveroo-gezichtspunten leidend. Het loont wel om nu al te weten welke zelfstandigen in je organisatie waarschijnlijk binnen de veilige haven zouden vallen en welke niet. Richt daarnaast je onboarding zo in dat je ondernemerskenmerken eenvoudig vastlegt, zonder er een papieren werkelijkheid van te maken. Dan ben je voorbereid, welke vorm de wet uiteindelijk ook krijgt.
      </p>

      <h2>Gezag op de werkvloer</h2>

      <p>
        De kern van de discussie is gezag. Managers zeggen vaak: "Ik vertel hem niet hoe hij moet programmeren, dus er is geen gezag." Dat is te kort door de bocht. Ik gebruik hier graag de eend-test: als het eruitziet als een eend, zwemt als een eend en kwaakt als een eend, dan is het waarschijnlijk een eend.
      </p>

      <p>
        Doet een zzp'er hetzelfde werk als vaste collega's, op vaste tijden en volledig opgenomen in het team, dan is het ongeacht het contract waarschijnlijk gewoon een werknemer.
      </p>

      <p>
        Er zijn een paar signalen waarbij ik direct zou ingrijpen. Denk aan functioneringsgesprekken met een zzp'er, het gebruik van een auto van de zaak of andere secundaire arbeidsvoorwaarden, en verplichte aanwezigheid bij overleggen die niets met de opdracht te maken hebben.
      </p>

      <p>
        Dat betekent niet dat een zzp'er geen koffie meer mag halen of niet mee mag naar een teamuitje. Is de basis goed, met een duidelijke opdracht en echt ondernemerschap, dan is daar niets mis mee. Is de inzet al een twijfelgeval, dan kunnen dit wel de druppels zijn die de emmer doen overlopen.
      </p>

      <p>
        Kijk bij ondernemerschap ook naar de verdeling van de omzet en niet alleen naar het aantal opdrachtgevers. Komt het grootste deel van het inkomen bij één opdrachtgever vandaan, dan is er sprake van economische afhankelijkheid. Zelf hanteer ik een grens van 70%.
      </p>

      <h2>Van onrust naar actie</h2>

      <p>
        Ik adviseer om de huidige periode te gebruiken om je zzp-populatie door te lichten. Breng in kaart wie er werkt en wat die persoon precies doet. Bepaal welke rollen je in vaste dienst wilt hebben en hoe je het overige werk zzp-geschikt inricht. Ga het gesprek aan met je zzp'ers en blijf daarna sturen op de praktijk in plaats van op het contract.
      </p>

      <p>
        Een stoplichtmodel helpt om de populatie te ordenen:
      </p>

      <ul>
        <li><strong>Groen:</strong> duidelijke expertise, projectmatig werk en een resultaatverplichting, bij voorkeur vastgelegd in een Statement of Work. Deze inzet kun je voortzetten.</li>
        <li><strong>Oranje:</strong> twijfelgevallen. Regulier werk, maar wel met specifieke kennis. Pas de werkwijze en contractvorm aan of beperk de looptijd.</li>
        <li><strong>Rood:</strong> structureel werk, volledig ingebed in het team en een lange inzetduur. Stop de inzet als zzp'er en kijk naar alternatieven zoals werving in vaste dienst of detachering.</li>
      </ul>

      <p>
        Er zijn partijen in de markt, zoals Uniforce/DUBV, die speciale constructies als oplossing aanbieden. Die adviseer ik niet. In mijn ogen zijn ze vooral bedoeld om de wet te omzeilen in plaats van eraan te voldoen. Kies voor zuivere en transparante oplossingen.
      </p>

      <h2>De afweging tussen vast en flex</h2>

      <p>
        Uiteindelijk gaat goed DBA-beleid niet over vinkjes zetten voor de fiscus. Het gaat om een eerlijke afweging tussen vast en flex. Reken de werkelijke kosten van een medewerker in vaste dienst door, inclusief werkgeverslasten en productieve uren, en leg die naast het externe tarief. Zet zzp'ers vervolgens bewust in waar hun ondernemerschap en specialistische kennis echt het verschil maken.
      </p>

      <h2>Bronnen</h2>

      <ul>
        <li><a href="https://wetten.overheid.nl/BWBR0037602" target="_blank" rel="noopener noreferrer">Wet DBA op wetten.overheid.nl</a></li>
        <li><a href="https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:HR:2023:443" target="_blank" rel="noopener noreferrer">Hoge Raad 24 maart 2023, ECLI:NL:HR:2023:443 (Deliveroo)</a></li>
      </ul>

      <hr />

      <p>
        <strong>Wil je vertalen wat deze ontwikkelingen betekenen voor jouw manier van inhuren?</strong> We helpen je graag om het juridische kader praktisch en bestuurbaar te maken.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-04-07',
    updated: '2026-11-22',
    readTime: '9 min',
    category: 'Compliance',
    primaryServiceId: 'compliant-inhuren',
    relatedSlugs: [
      'wat-is-compliant-inhuren',
      'wanneer-is-zzp-inhuur-verantwoord',
      'wtta-waarom-2028-nu-al-op-je-agenda',
    ],
    featured: false,
  },
  {
    slug: 'wanneer-is-zzp-inhuur-verantwoord',
    kind: 'kennis',
    chatSuggestions: [
      'Wat is het risico van schijnzelfstandigheid voor de opdrachtgever?',
      'Hoe beoordeel ik of een opdracht echt als zzp kan?',
      'Wat verandert de Wet DBA-handhaving voor lopende contracten?',
      'Is een modelovereenkomst nog voldoende?',
    ],
    title: 'Wanneer is zzp-inhuur verantwoord?',
    excerpt:
      'Zzp-inhuur is verantwoord als opdracht, werkpraktijk en ondernemerschap op elkaar aansluiten en niet op regulier werk gaan lijken.',
    content: `
      <p class="lead">
        Zzp-inhuur is niet per definitie problematisch. Het wordt pas risicovol als de feitelijke situatie niet meer past bij ondernemerschap, maar nog wel als zelfstandige constructie wordt ingericht.
      </p>

      <p>
        De vraag is dus niet of zzp-inhuur nog kan, maar onder welke voorwaarden deze zuiver en verdedigbaar is.
      </p>

      <h2>Wanneer is zzp-inhuur groen (verantwoord)?</h2>

      <p>
        Zzp-inhuur is het best verdedigbaar wanneer de inzet duidelijk projectmatig of specialistisch is en je kunt sturen op resultaat.
      </p>

      <ul>
        <li>Er is specifieke expertise nodig die tijdelijk wordt ingezet.</li>
        <li>De opdracht is afgebakend in resultaat, scope of periode.</li>
        <li>De zelfstandige heeft een herkenbaar ondernemersprofiel.</li>
        <li>Er is voldoende afstand in de aansturing.</li>
      </ul>

      <h2>Wanneer is zzp-inhuur oranje (twijfel)?</h2>

      <p>
        Twijfelgevallen vragen om extra beoordeling en vaak ook om aanpassing van contract of werkwijze.
      </p>

      <ul>
        <li>De rol lijkt op regulier werk, maar bevat wel specialistische kennis.</li>
        <li>De looptijd wordt steeds verlengd.</li>
        <li>De zelfstandige werkt grotendeels voor een opdrachtgever.</li>
        <li>De manager wil sturen alsof het om een medewerker gaat.</li>
      </ul>

      <h2>Wanneer is zzp-inhuur rood (niet verantwoord)?</h2>

      <ul>
        <li>Structureel werk dat gelijk is aan dat van werknemers.</li>
        <li>Volledige organisatorische inbedding in team, roosters en evaluaties.</li>
        <li>Verplichte aanwezigheid buiten de opdracht of materiele voorzieningen alsof iemand in loondienst is.</li>
        <li>Een economische afhankelijkheid die nauwelijks bij ondernemerschap past.</li>
      </ul>

      <h2>Waarom denk je in segmenten in plaats van een algemeen verbod?</h2>

      <p>
        Een werkbare aanpak is om je populatie in segmenten op te delen. Niet iedereen vraagt dezelfde oplossing. Sommige situaties kun je continueren, andere moet je aanpassen en sommige moet je stoppen als zzp-inzet.
      </p>

      <p>
        Dit voorkomt paniekbeleid en helpt je om gericht bij te sturen.
      </p>

      <h2>Welke alternatieven zijn er als zzp niet past?</h2>

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
    updated: '2026-08-18',
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
    chatSuggestions: [
      'Heb ik een VMS nodig als ik weinig inhuur?',
      'Wat is het verschil tussen een VMS en een MSP?',
      'Waar gaat een VMS-implementatie meestal mis?',
      'Welke data moet een VMS minimaal opleveren?',
    ],
    title: 'Wat doet een VMS wel en niet?',
    excerpt:
      'Een VMS helpt je processen, data en compliance te structureren, maar het vervangt geen inhoudelijke keuzes, governance of verandermanagement.',
    content: `
      <p class="lead">
        Een Vendor Management Systeem wordt vaak verkocht als de oplossing voor externe inhuur. In werkelijkheid is een VMS vooral een belangrijke enabler. Het systeem helpt je sturen, maar lost een slecht proces niet vanzelf op.
      </p>

      <h2>Wat doet een VMS wel?</h2>

      <p>
        De echte waarde van een VMS zit in het centraal vastleggen van data en het ondersteunen van een uniform proces.
      </p>

      <ul>
        <li><strong>Overzicht:</strong> je krijgt inzicht in aantallen, contractvormen, tarieven en leveranciers.</li>
        <li><strong>Procesondersteuning:</strong> aanvragen, voorstellen, contracten en facturen lopen via een centrale route.</li>
        <li><strong>Compliance-ondersteuning:</strong> het systeem bewaakt verplichte documenten en signalen.</li>
        <li><strong>Stuurinformatie:</strong> je kunt beter sturen op kosten, doorlooptijd en leveranciersprestatie.</li>
      </ul>

      <h2>Wat doet een VMS niet?</h2>

      <p>
        Een VMS kan niet voor je beoordelen of een inzet juridisch klopt of organisatorisch verstandig is. Het systeem controleert of iets is ingevuld, niet of de inhoud ook echt deugt.
      </p>

      <ul>
        <li>Een VMS vervangt geen expertise op Wet DBA of contractering.</li>
        <li>Een VMS lost geen gebrekkige governance op.</li>
        <li>Een VMS haalt weerstand bij managers niet vanzelf weg.</li>
        <li>Een VMS voorkomt geen geautomatiseerde chaos als het proces rommelig blijft.</li>
      </ul>

      <h2>Wanneer voegt een VMS waarde toe?</h2>

      <p>
        Naarmate je inhuurvolume stijgt, wordt centrale dossiervorming en historisch inzicht belangrijker. Zeker bij ontwikkelingen in regelgeving wil je personen en inzet over tijd kunnen volgen.
      </p>

      <p>
        Dat maakt een VMS niet alleen een operationeel hulpmiddel, maar ook een fundament voor bestuurbaarheid.
      </p>

      <h2>Waar moet je vooraf scherp op zijn bij een VMS?</h2>

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
    updated: '2026-08-18',
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
    chatSuggestions: [
      'Op welke KPI\'s stuur je leveranciers bij externe inhuur?',
      'Hoe voer je het gesprek als een manager vasthoudt aan een dure leverancier?',
      'Hoe werkt segmentatie in S1, S2 en S3 leveranciers?',
      'Wanneer neem je afscheid van een leverancier?',
    ],
    title: 'Leveranciersmanagement bij externe inhuur: sturen op feiten zonder de relatie te verliezen',
    excerpt:
      'Goed leveranciersmanagement combineert objectieve informatie over prestaties en tarieven met een goede relatie, zodat leveranciers graag voor je werken.',
    content: `
      <p class="lead">
        Leveranciersmanagement wordt vaak verward met contractmanagement. Het contract is getekend, de tarieven staan vast, dus het werk is gedaan. In een krappe arbeidsmarkt werkt dat niet. Een getekend contract is geen garantie dat je de juiste kandidaat tegen een passend tarief krijgt.
      </p>

      <p>
        De vraag die er volgens mij echt toe doet, is deze: waarom zou een leverancier zijn beste kandidaat naar jou sturen en niet naar een andere opdrachtgever? In dit artikel kijk ik naar hoe je een aantrekkelijke opdrachtgever wordt, hoe je objectief stuurt op prestaties en tarieven, en hoe je omgaat met de voorkeuren van inhurende managers.
      </p>

      <div class="callout">
        <p class="callout-title">In één zin</p>
        <p>
          Goed leveranciersmanagement combineert objectieve informatie over prestaties en tarieven met een goede relatie, zodat leveranciers graag voor je werken en je keuzes kunt onderbouwen.
        </p>
      </div>

      <h2>Een aantrekkelijke opdrachtgever zijn</h2>

      <p>
        De machtsbalans is in een schaarse markt verschoven. Je kunt als opdrachtgever niet meer afwachten tot de cv's binnenkomen. Leveranciers, en de professionals die zij vertegenwoordigen, hebben de keuze.
      </p>

      <p>
        Wat maakt dat een leverancier extra moeite voor je doet? In mijn ervaring vooral persoonlijk contact en transparantie. Leveranciers willen weten waar ze aan toe zijn. Aan welk project gaat de kandidaat werken? Waarom is iemand afgewezen? Wanneer vinden de gesprekken plaats?
      </p>

      <p>
        Technologie zoals een <a href="/kennis/artikelen/wat-doet-een-vms-wel-en-niet">Vendor Management Systeem (VMS)</a> moet dat ondersteunen, maar kan het contact niet vervangen. Een leverancier moet ook gewoon de inhuurdesk kunnen bellen om even te sparren. Daarnaast speelt eerlijke concurrentie een rol. Geen leverancier gaat zijn best doen als hij weet dat hij tegen tientallen andere bureaus concurreert. Houd de verdeellijst daarom beperkt.
      </p>

      <h2>Feedback werkt twee kanten op</h2>

      <p>
        Wat leveranciers het meest frustreert, is een kandidaat voorstellen en daarna niets meer horen. Reageert een manager pas na drie weken, dan is de kandidaat vaak al ergens anders aan de slag.
      </p>

      <p>
        Het is daarom waardevol om leveranciers ook naar jouw proces te laten kijken. Hoe snel reageren managers? Is de intake duidelijk? Worden facturen op tijd betaald? Een programmamanager of inhuurdesk kan die feedback intern terugkoppelen. Bijvoorbeeld door managers erop te wijzen dat de beste leveranciers afhaken als er niet binnen 48 uur wordt gereageerd.
      </p>

      <h2>Meten wat er gebeurt</h2>

      <p>
        Om objectief te kunnen sturen, meet je de prestaties van leveranciers. Ik kijk daarbij naar vier criteria:
      </p>

      <ol>
        <li><strong>Snelheid:</strong> de tijd tussen het uitzetten van een aanvraag en het eerste voorstel.</li>
        <li><strong>Kwaliteit:</strong> de mate waarin voorgestelde kandidaten voldoen aan de gestelde eisen.</li>
        <li><strong>Conversie:</strong> het percentage voorgestelde kandidaten dat op gesprek komt of wordt geplaatst.</li>
        <li><strong>Marktconformiteit:</strong> hoe het aangeboden tarief zich verhoudt tot de gangbare marktprijs voor die rol.</li>
      </ol>

      <p>
        Je kunt per criterium een score van 0 tot 4 geven en die vermenigvuldigen met een weging die past bij wat je organisatie op dat moment belangrijk vindt. Zo ontstaat een eindscore die je kwartaal op kwartaal kunt volgen.
      </p>

      <p>
        Kijk vooral naar de combinatie van de criteria. Een leverancier die iets duurder is maar in één keer de juiste persoon levert, kan meer waarde bieden dan een leverancier die goedkoper is maar veel voorstellen nodig heeft voordat er een match is.
      </p>

      <h2>Wanneer cijfers en ervaring niet hetzelfde zeggen</h2>

      <p>
        Toch ontstaat er regelmatig discussie. De cijfers laten zien dat een leverancier achterblijft, terwijl de inhurende manager juist tevreden is. Vaak is er een vaste contactpersoon die het team goed kent en snel schakelt. Dat is waardevol, en het is begrijpelijk dat een manager zo'n samenwerking niet zomaar wil opgeven.
      </p>

      <p>
        Ik zou dat gesprek daarom nooit aangaan om gelijk te krijgen. Begin met het erkennen van de waarde van die relatie. Leg daarna de cijfers ernaast. Bijvoorbeeld dat deze leverancier structureel boven de gangbare tariefbandbreedte zit, of dat er beduidend meer voorstellen nodig zijn voor één plaatsing. Vraag vervolgens wat de manager het belangrijkst vindt en kijk samen of het om een incident gaat of om een patroon.
      </p>

      <p>
        Door het gesprek te voeren op basis van feiten en trends, wordt het minder persoonlijk. Daarna kun je samen besluiten om met de leverancier aan verbetering te werken of om afscheid te nemen.
      </p>

      <h2>Niet elke leverancier vraagt dezelfde aandacht</h2>

      <p>
        Het helpt om leveranciers in te delen op basis van prestaties en volume. Ik werk zelf met drie segmenten:
      </p>

      <table>
        <thead>
          <tr>
            <th>Segment</th>
            <th>Type</th>
            <th>Kenmerken</th>
            <th>Overlegfrequentie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>S1</strong></td>
            <td>Strategische partners</td>
            <td>Hoge kwaliteit, leveren over meerdere domeinen</td>
            <td>Wekelijks operationeel, per kwartaal strategisch</td>
          </tr>
          <tr>
            <td><strong>S2</strong></td>
            <td>Preferred suppliers</td>
            <td>Goede prestaties, vaak nichespecialisten</td>
            <td>Maandelijks operationeel, halfjaarlijks strategisch</td>
          </tr>
          <tr>
            <td><strong>S3</strong></td>
            <td>Incidentele leveranciers</td>
            <td>Nieuwe of incidentele leveranciers, zo'n 75 tot 80% van het bestand</td>
            <td>Ad hoc, zoveel mogelijk geautomatiseerd</td>
          </tr>
        </tbody>
      </table>

      <p>
        Dit systeem is niet statisch. Leveranciers bewegen tussen de segmenten op basis van hun prestaties. Een leverancier in S3 die twee kwartalen achter elkaar goed presteert, verdient een gesprek over doorgroei naar S2.
      </p>

      <p>
        Het opschonen van het bestand hoort er ook bij. Is een leverancier zes maanden niet actief geweest, of presteert hij drie kwartalen achter elkaar onvoldoende, dan is het tijd om afscheid te nemen. Ik hanteer daarbij het principe: hard op de inhoud, zacht op de relatie. De markt is klein en je komt elkaar vaak later weer tegen.
      </p>

      <h2>Waar begin je?</h2>

      <p>
        Je hebt geen uitgebreid systeem nodig om vandaag al gerichter te sturen. Toets nieuwe offertes tegen onafhankelijke marktinformatie voordat je het gesprek met de leverancier voert. Houd per leverancier bij hoe vaak een voorstel leidt tot een plaatsing en hoe hun tarieven zich verhouden tot de markt. En spreek met je managers een vaste reactietermijn af.
      </p>

      <p>
        Goed leveranciersmanagement maakt van je flexibele schil geen kostenpost, maar een flexibele en strategische kracht.
      </p>

      <hr />

      <p>
        <strong>Wil je scherper krijgen hoe je leveranciers objectief en werkbaar kunt aansturen?</strong> We denken graag met je mee over de inrichting van jouw leveranciersbestand en prestatiesturing.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-04-07',
    updated: '2026-09-15',
    readTime: '7 min',
    category: 'Leveranciersmanagement',
    primaryServiceId: 'strategisch-inhuuradvies',
    relatedSlugs: [
      'wat-is-grip-op-externe-inhuur',
      'msp-broker-master-vendor-of-decentraal-model',
      'kostenmanagement-bij-externe-inhuur',
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
      'Op ProcureCon in Amsterdam bleek dat Total Talent Management niet meer om visie draait, maar om executie en samenwerking.',
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
      'Organisaties die zzp-samenwerking zuiver inrichten, worden juist aantrekkelijker voor schaars toptalent.',
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
    chatSuggestions: [
      'Wat zijn alternatieven voor een percentage-fee bij een MSP?',
      'Waarom stagneert een MSP-programma vaak na twee jaar?',
      'Hoe richt je prestatiebeloning of gainsharing bij een MSP in?',
      'Waarom is een nulmeting belangrijk bij een nieuw MSP-contract?',
    ],
    title: 'Het verdienmodel van je MSP: waarom het vaak niet deugt',
    excerpt:
      'Zolang de vergoeding van je MSP meebeweegt met je inhuurvolume, wordt besparen niet beloond. Zo richt je het verdienmodel in op resultaat.',
    content: `
      <p class="lead">
        De meeste organisaties in Nederland halen een Managed Service Provider (MSP) in huis om grip te krijgen op externe inhuur en om kosten te besparen. Tegelijkertijd is het standaard verdienmodel in de markt zo ingericht dat de MSP minder verdient naarmate jij als organisatie minder uitgeeft.
      </p>

      <p>
        Dat roept een voor de hand liggende vraag op. Waarom zou een MSP actief op zoek gaan naar besparingen als daarmee de eigen omzet daalt?
      </p>

      <div class="callout">
        <p class="callout-title">In één zin</p>
        <p>
          Zolang de vergoeding van je MSP meebeweegt met je inhuurvolume, wordt besparen niet beloond; wie echt wil sturen op resultaat, moet het verdienmodel daarop inrichten.
        </p>
      </div>

      <h2>Het standaardmodel</h2>

      <p>
        De meeste MSP's in Nederland werken op basis van een percentage van de beheerde inhuurwaarde. Is je inhuurprogramma &euro; 50 miljoen, dan ontvangt de MSP daar bijvoorbeeld 1 of 2% van.
      </p>

      <p>
        In aanbestedingen ziet dat er overzichtelijk uit. Inkoop waardeert dat de kosten meebewegen met het volume. Finance waardeert dat het eenvoudig te berekenen is. En voor de MSP geldt: hoe groter het programma, hoe groter de omzet.
      </p>

      <p>
        Het probleem is dat dit model kostenreductie niet beloont. Het werkt eerder andersom. Stel dat je MSP lagere tarieven afspreekt met leveranciers en de totale inhuurkosten met 15% dalen. Dat is winst voor je organisatie. Voor de MSP betekent het dat de eigen fee ook met 15% daalt.
      </p>

      <p>
        Zou je een besparingsadviseur inhuren van wie het tarief daalt bij iedere euro die hij voor je bespaart?
      </p>

      <h2>Waarom programma's een plafond bereiken</h2>

      <p>
        Dit verklaart volgens mij waarom veel MSP-programma's na een aantal jaar stilvallen. In het eerste jaar worden de eerste besparingen gerealiseerd door tariefharmonisatie en betere procescontrole. In het tweede jaar volgen nog wat aanpassingen en misschien een rationalisatie van het leveranciersbestand. Vanaf het derde jaar vlakken de besparingen af en blijft vernieuwing uit.
      </p>

      <p>
        Dat ligt niet aan de wil van de MSP. Het ligt aan het commerciële model, dat beide partijen vasthoudt. De organisatie wil besparen, de MSP heeft volume nodig.
      </p>

      <h2>Neutraliteit maakt het niet eenvoudiger</h2>

      <p>
        Veel Nederlandse opdrachtgevers eisen bovendien dat de MSP zelf geen kandidaten levert, om belangenverstrengeling te voorkomen. Dat is begrijpelijk, en als rechtmatigheid het belangrijkste doel is, ook verdedigbaar.
      </p>

      <p>
        Het gevolg is wel dat je de MSP een van de weinige mogelijkheden ontneemt om het model rendabel te houden. Je beloont besparingen niet en je haalt margekansen weg. Wat overblijft, is een programma dat draait maar niet vooruitkomt. Een beheerpartij in plaats van een strategische partner.
      </p>

      <h2>Meer dan alleen geld</h2>

      <p>
        Deze weeffout raakt meer dan de kosten alleen. Waarom zou een MSP investeren in nieuwe technologie of in direct sourcing als dat het inhuurvolume, en daarmee de eigen fee, verlaagt? Een model dat vooral stuurt op tariefreductie kan bovendien richting goedkope capaciteit duwen in plaats van naar de beste specialisten. En zonder prikkel om nieuwe, soms aanvankelijk duurdere partners aan te sluiten, blijft de leveranciersmix vaak hetzelfde.
      </p>

      <h2>Hoe het anders kan</h2>

      <p>
        Er zijn modellen die de belangen van opdrachtgever en MSP beter op één lijn brengen.
      </p>

      <p>
        Bij een <strong>vaste prijs</strong> betaal je voor het programma zoals je voor software of advies betaalt: op basis van de scope van de dienstverlening, niet op basis van hoeveel je toevallig inhuurt.
      </p>

      <p>
        Bij een <strong>resultaatgerichte vergoeding</strong> koppel je een deel van de fee aan meetbare resultaten, zoals time-to-fill, tevredenheid van inhurende managers, compliance of daadwerkelijke kostenbesparing.
      </p>

      <p>
        Bij <strong>prestatiebeloning</strong> ontvangt de MSP een percentage van de daadwerkelijk gerealiseerde besparing. Bespaart de MSP &euro; 1 miljoen, dan ontvangt hij daar een deel van. Wordt er niets bespaard, dan is er ook geen extra vergoeding.
      </p>

      <p>
        Voor de laatste twee modellen is één ding essentieel: spreek vooraf af hoe je besparingen berekent en voer een nulmeting uit. Zonder vastgelegde uitgangssituatie ontstaat later onvermijdelijk discussie. In mijn artikel over <a href="/kennis/artikelen/kostenmanagement-bij-externe-inhuur">kostenmanagement bij externe inhuur</a> ga ik daar verder op in.
      </p>

      <h2>De blik van de directie</h2>

      <p>
        Voor directies is dit geen detail voor Inkoop. De uitgaven aan externe inhuur blijven de komende jaren stijgen. Wie vasthoudt aan het percentagemodel, betaalt meer, bespaart minder en ziet de omzet van de MSP meegroeien terwijl de vernieuwing achterblijft. Als je MSP geen prikkel heeft om kosten te verlagen, heb je eerder een procesbewaker dan een partner.
      </p>

      <h2>Tijd voor een ander gesprek</h2>

      <p>
        MSP's vervullen een steeds belangrijkere rol en dat hoeft niet te veranderen. Maar je hoeft de commerciële status quo ook niet zomaar te accepteren. Stel bij de volgende contractherziening eens deze vragen:
      </p>

      <ol>
        <li>Welke prikkel heeft onze MSP om onze kosten te verlagen?</li>
        <li>Hoeveel vernieuwing brengt de MSP als dat ten koste gaat van de eigen marge?</li>
        <li>Wat zou er veranderen als we de MSP belonen voor resultaat in plaats van voor volume?</li>
      </ol>

      <p>
        Als je MSP beloond zou worden voor besparen in plaats van ervoor te worden afgestraft, hoeveel meer zou je programma dan opleveren?
      </p>

      <hr />

      <p>
        <strong>Wil je toetsen of het commerciële model van jouw MSP nog past bij wat je wilt bereiken?</strong> We kijken graag met je mee naar de logica achter de samenwerking.
      </p>
    `,
    author: 'Mathijs Duisdecker',
    date: '2026-02-08',
    updated: '2026-11-10',
    readTime: '6 min',
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
  return blogPosts
    .filter((post) => post.kind === kind)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
