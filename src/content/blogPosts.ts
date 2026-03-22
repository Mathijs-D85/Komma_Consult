// Blog posts data - Voeg hier nieuwe posts toe!
// De eerste post in de array is de nieuwste

export interface BlogPost {
  slug: string           // URL-vriendelijke naam (bijv. "mijn-eerste-blog")
  title: string          // Titel van het artikel
  excerpt: string        // Korte samenvatting (max ~150 tekens)
  content: string        // Volledige inhoud (ondersteunt HTML)
  author: string         // Auteursnaam
  date: string           // Datum in formaat "YYYY-MM-DD"
  readTime: string       // Geschatte leestijd (bijv. "5 min")
  category: string       // Categorie (bijv. "Inhuurstrategie", "Compliance", "Nieuws")
  image?: string         // Optionele header afbeelding
  featured?: boolean     // Markeer als uitgelicht artikel
}

export const blogPosts: BlogPost[] = [
  {
    slug: "procurecon-total-talent-management-amsterdam",
    title: "Van visie naar praktijk: De realiteit van Total Talent Management",
    excerpt: "Op uitnodiging van Net2Source was Komma Consult aanwezig bij ProcureCon Total Talent in Amsterdam. De conclusie? TTM is geen toekomstmuziek meer – koplopers als Unilever, Heineken en ING implementeren het actief.",
    content: `
      <p class="lead">
        "Stop met het maken van perfecte plannen. Het zit innovatie in de weg." Dit inzicht vormde de rode draad tijdens de afgelopen editie van ProcureCon Total Talent in Amsterdam. Op uitnodiging van Net2Source was Komma Consult aanwezig bij dit exclusieve congres. De belangrijkste conclusie? De integratie van vast en flexibel talent is allang geen toekomstmuziek meer; koplopers in de markt zijn het momenteel actief aan het implementeren.
      </p>

      <p>
        Total Talent Management (TTM) staat al jaren op de agenda, maar de kloof tussen strategie en executie blijkt in de praktijk vaak hardnekkig. Tijdens ProcureCon lieten multinationals als Unilever, Sanofi, Heineken, GE, Schneider Electric en KPN echter zien hoe zij deze kloof dichten. Zij doorbreken de traditionele silo's en transformeren hun talentstrategie.
      </p>

      <p>
        Op basis van de keynotes en paneldiscussies deel ik graag de drie belangrijkste pijlers die ten grondslag liggen aan een succesvolle Total Talent strategie.
      </p>

      <h2>1. Interne alignment: Data en mandaat boven 'politie spelen'</h2>

      <p>
        Een VMS of ATS is slechts een tool. De echte versnelling van een Total Talent strategie ontstaat pas bij naadloze interne samenwerking. Hoewel ProcureCon van oudsher de inkoopkant belicht, bleek uit vrijwel alle succesverhalen dat het eigenaarschap van Total Talent een gedeelde verantwoordelijkheid is tussen HR en Inkoop.
      </p>

      <p>
        Hoe organiseer je die samenwerking? Tijdens een paneldiscussie met onder meer Heineken, Wella, ING en GE kwam sterk naar voren dat het inrichten van een multidisciplinaire stuurgroep essentieel is. Deze stuurgroep heeft een helder mandaat en aantoonbare buy-in nodig vanaf C-level om afdelingen als HR, Inkoop, Finance en Legal succesvol te verbinden.
      </p>

      <p>
        Daarnaast gaf Schneider Electric een waardevol inzicht over de rol van inkoop binnen deze transitie: het heeft geen zin om 'politieagent' te spelen. De sleutel ligt in data. Door feitelijk te onderbouwen waarom een afwijking van de Total Talent strategie duurder is of niet het gewenste resultaat oplevert — wanneer inhurende managers bijvoorbeeld buiten het programma inhuren — creëer je eenvoudiger het nodige draagvlak en krijg je de neuzen dezelfde kant op.
      </p>

      <h2>2. Compliance als aanjager van urgentie</h2>

      <p>
        De wet- en regelgeving rondom talent wordt internationaal steeds complexer. Overheden introduceren continu nieuwe regels om grip te houden op de diversiteit aan contractvormen, van gig-werk en zzp'ers tot staffing, consultancy en inmiddels zelfs AI-agents.
      </p>

      <p>
        Toch hoeft deze complexiteit geen rem op innovatie te zijn; het kan juist dienen als katalysator. Een treffend voorbeeld werd gedeeld door ING rondom de recente invoering van de nieuwe CAO voor uitzendkrachten in Nederland (gelijke beloning). Deze strikte lokale wetgeving resoneerde direct op directieniveau. Het creëerde het benodigde urgentiebesef en de ruimte om het volledige talentprogramma onder de loep te nemen. Plotseling zaten HR, Inkoop, Legal en de operatie gezamenlijk aan tafel om dit op te lossen. Compliance vormde zo de directe aanleiding om de silo's af te breken.
      </p>

      <h2>3. De praktijk: Start small, scale fast</h2>

      <p>
        Trap niet in de valkuil van ellenlange implementatieplannen. Bedrijven die nu de vruchten plukken van TTM, begonnen klein. Een uitstekend voorbeeld hiervan is de aanpak van Sanofi (gepresenteerd in samenwerking met Talent Solutions TAPFIN) rondom de implementatie van <em>skills-based hiring</em>.
      </p>

      <p>
        In plaats van een wereldwijde 'big bang', startte Sanofi met een afgebakende pilot in één specifieke regio, gericht op één domein met een aantal kritische rollen. Binnen deze veilige omgeving konden zij sturen op de eerste successen en direct leren van gemaakte fouten. Pas nu deze pilot succesvol is afgerond, onderzoeken zij hoe ze deze methodiek gecontroleerd kunnen kopiëren en uitrollen naar andere regio's.
      </p>

      <h2>De technologische versneller: Skills-Based Organiseren</h2>

      <p>
        Wanneer de basis van samenwerking en compliance staat, vormt technologie de ultieme versneller. Hoewel specifieke tools minder de nadruk kregen, was de opmars van 'Skills-Based Organiseren' onmiskenbaar.
      </p>

      <p>
        Het opzetten van een taxonomie van vaardigheden stelt organisaties in staat om veel sneller en nauwkeuriger te matchen met beschikbaar talent, zowel intern als extern. Met name de integratie van Artificial Intelligence biedt hierin ongekende mogelijkheden. AI kan moeiteloos complexe factoren zoals beschikbaarheid, tijd en specifieke skills met elkaar verbinden om tot de optimale talentmix voor een project te komen. Vanuit onze eigen marktkennis bij Komma Consult zien we dat leveranciers zoals Beeline (VMS) momenteel grote stappen zetten om deze AI-gedreven skills-matching te faciliteren.
      </p>

      <h2>Conclusie</h2>

      <p>
        Total Talent Management is geen theoretisch concept meer. Het vereist lef om klein te beginnen, de noodzaak om afdelingsgrenzen te doorbreken en de visie om technologie in te zetten als versneller, niet als doel op zich.
      </p>

      <hr />

      <p>
        <strong>Benieuwd hoe Komma Consult jouw organisatie kan helpen bij de stap van TTM-visie naar TTM-praktijk?</strong> Neem gerust contact op voor een vrijblijvend gesprek.
      </p>
    `,
    author: "Mathijs Duisdecker",
    date: "2026-03-17",
    readTime: "6 min",
    category: "Inhuurstrategie",
    featured: true,
  },
  {
    slug: "veilige-haven-toptalent-zzp",
    title: "De veilige haven voor toptalent: Waarom de beste zzp'ers kiezen voor de strengste opdrachtgevers",
    excerpt: "De VBAR-criteria zijn gesneuveld, maar de vrijblijvendheid is definitief voorbij. Organisaties die hun zaken nú op orde brengen, winnen de strijd om schaars talent én bouwen aan een sterk employer brand voor zzp-inhuur.",
    content: `
      <p class="lead">
        Terwijl de krantenkoppen vorig jaar nog vol stonden over de 'strenge' Wet VBAR, is het stof in maart 2026 enigszins neergedaald. De VBAR-criteria zijn grotendeels gesneuveld en het kabinet werkt aan een nieuw wetsvoorstel voor de Zelfstandigenwet.
      </p>

      <p>
        Maar dit betekent niet dat organisaties achterover kunnen leunen dankzij de verlengde 'zachte landing' van de Belastingdienst. De vrijblijvendheid is definitief voorbij. Sinds 1 januari worden er weer vergrijpboetes opgelegd bij bewuste opzet (kwaadwillendheid).
      </p>

      <p>
        De reflex bij veel organisaties is angst. Maar de realiteit is dat de markt vooral behoefte heeft aan regie. Bedrijven die hun zaken <em>nu</em> fundamenteel op orde brengen, winnen de strijd om schaars talent.
      </p>

      <h2>De veilige haven voor toptalent</h2>

      <p>
        Een topspecialist – de echte ondernemer die organisaties juist willen aantrekken én behouden – heeft geen behoefte aan een opdrachtgever die 'maar wat doet'. Schijnzelfstandigheid is immers een risico voor <em>beide</em> partijen.
      </p>

      <p>
        Een organisatie die haar rol als opdrachtgever serieus neemt en beschikt over een strak ingericht proces, biedt wél zekerheid. Zeker wanneer een modelovereenkomst niet alleen op papier klopt, maar ook aantoonbaar wordt nageleefd in de praktijk.
      </p>

      <p>
        In 2026 is compliance daarmee uitgegroeid tot je employer brand voor zzp-inhuur.
      </p>

      <p>
        Wanneer je stopt met 'vinkjes zetten voor de fiscus' en begint met het bouwen van een volwassen inhuurstrategie, ontstaat er een vliegwiel:
      </p>

      <ol>
        <li><strong>Data-hygiëne als fundament:</strong> Handhaving dwingt je om inzicht te hebben: wie werkt er voor je organisatie, tegen welk tarief en onder welke voorwaarden? De (intussen) bekende grens van €38 per uur (in het kader van het rechtsvermoeden) maakt dit extra relevant.</li>
        <li><strong>Direct Sourcing &amp; Talentpools:</strong> Wanneer je als organisatie scherp stuurt op 'echt ondernemerschap', wil je deze experts zelf kunnen vinden en binden. Compliance zou vandaag de dag daarom een belangrijke overweging kunnen zijn om een eigen talentpool te bouwen in plaats van afhankelijk te zijn van een leverancier.</li>
        <li><strong>Resultaatgericht werken:</strong> Of je nu een Statement of Work (SoW) gebruikt of de werkafspraken binnen een modelovereenkomst aanscherpt; de focus verschuift van 'aanwezigheid' naar 'output'. Dat is niet alleen fiscaal veiliger, het maakt je projecten simpelweg effectiever.</li>
      </ol>

      <h2>Hoe maak je vandaag een begin?</h2>

      <p>
        De huidige 'halfzachte' landing in 2026 is geen uitstel van executie, maar een unieke kans. Maar hoe begin je?
      </p>

      <ul>
        <li><strong>De Inhuur-Audit:</strong> Scan je huidige populatie niet op 'angst', maar op 'zuiverheid'. Waar werken we met modelovereenkomsten die in de praktijk zijn verwaterd tot een verkapt dienstverband? Herstel dit nu de fiscus nog in de 'coachings-stand' staat.</li>
        <li><strong>Het Ondernemers-paspoort:</strong> Maak 'ondernemerschap' (KvK, meerdere opdrachtgevers, eigen middelen) onderdeel van je vaste onboarding. Zo bouw je proactief aan een dossier dat straks naadloos aansluit op het nieuwe wetsvoorstel voor de Zelfstandigenwet.</li>
        <li><strong>De Tarief-Check:</strong> Analyseer welke inhuur onder de €38,- per uur zit. Hier ligt het grootste juridische risico op een 'rechtsvermoeden'. Gebruik deze periode om voor deze groep alternatieven zoals detachering of loondienst serieus te verkennen.</li>
      </ul>

      <h2>Conclusie</h2>

      <p>
        Wachten op definitieve wetgeving is geen strategie.
      </p>

      <p>
        De winnaars van 2026 zijn de organisaties die de huidige relatieve luwte benutten om hun samenwerkingen met zelfstandigen bewuster en toekomstbestendig in te richten. Zij bouwen vandaag de veilige haven waar het beste talent van morgen bewust voor kiest.
      </p>

      <hr />

      <p>
        <strong>Wil je weten hoe jouw organisatie er nu voor staat?</strong> Bij Komma Consult helpen we je graag om de huidige inhuur te toetsen en een strategie te bouwen die klaar is voor wat er ook komen gaat.
      </p>
    `,
    author: "Mathijs Duisdecker",
    date: "2026-03-17",
    readTime: "5 min",
    category: "Compliance",
    featured: false,
  },
  {
    slug: "verdienmodel-msp-deugt-waarschijnlijk-niet",
    title: "Waarom het verdienmodel van je MSP waarschijnlijk niet deugt",
    excerpt: "De meeste organisaties halen een MSP in huis om grip te krijgen op externe inhuur én om kosten te besparen. Maar het standaard verdienmodel is zo ingericht dat hoe minder jij uitgeeft, hoe minder de MSP verdient.",
    content: `
      <p class="lead">
        De meeste organisaties in Nederland halen een Managed Service Provider (MSP) in huis om grip te krijgen op de externe inhuur én om kosten te besparen.
      </p>

      <p>
        Tegelijkertijd is het standaard verdienmodel in de markt zo ingericht, dat hoe minder jij als organisatie uitgeeft, hoe minder de MSP verdient.
      </p>

      <p>
        Laten we dus de voor de hand liggende vraag stellen: Waarom zou een MSP agressief op zoek gaan naar kostenbesparingen als ze daarmee hun eigen omzet zien teruglopen?
      </p>

      <h2>Het standaardmodel: Simpel, maar gebrekkig</h2>

      <p>
        De meeste MSP's in Nederland werken op basis van een percentage van de beheerde inhuurwaarde (spend). Stel dat je inhuurprogramma €50 miljoen is, dan pakt de MSP daar bijvoorbeeld 1% of 2% van.
      </p>

      <p>
        Op papier, in RFP's en aanbestedingen ziet dat er strak uit. Inkoop vindt het fijn omdat de kosten meebewegen met het volume. Finance vindt het fijn omdat het makkelijk rekent. En MSP's vinden het fijn, want: hoe groter het programma, hoe groter de taart.
      </p>

      <p>
        Maar hier wringt de schoen: dit model beloont geen kostenreductie. Het straft het zelfs af…
      </p>

      <h2>De 'Perverse Prikkel'</h2>

      <p>
        Stel, je MSP onderhandelt lagere tarieven bij je leveranciers en drukt de totale inhuurkosten met 15%. Dat is winst voor jouw organisatie. Maar voor de MSP? Die ziet zijn fee óók met 15% dalen.
      </p>

      <p>
        Zou jij een besparingsconsultant inhuren wiens tarief omlaag gaat bij elke euro die hij voor jou bespaart?
      </p>

      <p>
        Dit is precies waarom veel MSP-programma's na verloop van tijd een plafond bereiken.
      </p>

      <p>
        <strong>Jaar 1:</strong> De 'laaghangend fruit' besparingen door tariefharmonisatie en procescontrole.<br />
        <strong>Jaar 2:</strong> Wat kleine aanpassingen, misschien wat leveranciersrationalisatie.<br />
        <strong>Jaar 3:</strong> De boel stagneert. Innovatie blijft uit en de besparingen vlakken af.
      </p>

      <p>
        Niet omdat de MSP niet wil. Maar omdat het commerciële model beide partijen gevangen houdt. De organisatie wilt besparingen. De MSP heeft volume nodig. Niemand krijgt wat hij écht wil…
      </p>

      <h2>Het gevaar van neutraliteit</h2>

      <p>
        Om het nog ingewikkelder te maken: veel Nederlandse klanten eisen strikte onafhankelijkheid. De MSP mag zelf geen kandidaten leveren om "belangenverstrengeling te voorkomen".
      </p>

      <p>
        Dat klinkt logisch en zuiver en wordt door veel bedrijven als perfect model gezien. Maar in de praktijk ontneem je de MSP daarmee een van de weinige knoppen om hun model rendabel te houden. Je creëert een situatie waarin je besparingen bestraft én marge-kansen wegneemt.
      </p>

      <p>
        Wat blijft er over? Een programma dat wel draait, maar niet vooruitkomt. Een beheerpartij in plaats van een strategische partner.
      </p>

      <h2>Meer dan alleen geld</h2>

      <p>
        Deze weeffout raakt niet alleen je portemonnee. Het ondermijnt je strategie op andere vlakken:
      </p>

      <ul>
        <li><strong>Innovatie:</strong> Waarom zou een MSP nieuwe technologie introduceren die het inhuurvolume (en dus hun fee) verlaagt?</li>
        <li><strong>Kwaliteit van talent:</strong> Modellen die puur sturen op tariefreductie duwen je richting goedkope 'handjes' in plaats van de beste experts.</li>
        <li><strong>Leveranciersdiversiteit:</strong> Zonder prikkel om nieuwe (vaak aanvankelijk "duurdere") partnerschappen aan te gaan, blijft de leveranciersmix vaak statisch.</li>
      </ul>

      <h2>Hoe het wél kan</h2>

      <p>
        Er zijn alternatieven. Modellen die de belangen wél gelijktrekken:
      </p>

      <ul>
        <li><strong>Een vaste prijs:</strong> Betaal voor het programma zoals je voor software of consultancy betaalt - gebaseerd op de scope van de dienstverlening, niet op hoeveel jij toevallig inhuurt.</li>
        <li><strong>Gebaseerd op resultaat:</strong> Koppel de fee aan meetbare resultaten: time-to-fill, tevredenheid van inhurende managers, compliance (verlagen van inhuurrisico!) of daadwerkelijke kostenbesparing.</li>
        <li><strong>Prestatie beloning:</strong> De MSP krijgt een percentage van de daadwerkelijk gerealiseerde besparing. Besparen ze €1 miljoen voor jou? Dan krijgen zij een deel daarvan. Besparen ze niets? Dan krijgen ze niets extra's.</li>
      </ul>

      <p>
        Zo winnen (of verliezen) beide partijen samen.
      </p>

      <h2>De bril van de CFO</h2>

      <p>
        Voor directies is dit geen "inkoop-dingetje". Het is een kwestie van aandeelhouderswaarde. Als je MSP geen prikkel heeft om kosten te verlagen, heb je geen partner. Dan heb je een administrateur of procesbewaker. En dat beweegt de markt niet.
      </p>

      <p>
        De uitgaven aan externe inhuur zullen de komende jaren alleen maar stijgen. Als je vasthoudt aan het oude 'percentage-model', betaal je straks meer, bespaar je minder, en zie je de omzet van je MSP stijgen terwijl de innovatie stilvalt. Dat is niet houdbaar.
      </p>

      <h2>Tijd voor een nieuw gesprek</h2>

      <p>
        MSP's gaan niet weg. En dat hoeft ook niet, want ze vervullen in toenemende mate een belangrijke rol. Maar leiders hoeven de commerciële status quo niet te accepteren.
      </p>

      <p>
        Stel bij de volgende contractherziening eens de volgende vragen:
      </p>

      <ol>
        <li>Welke <strong>échte</strong> prikkel heeft mijn MSP om mijn kosten te verlagen?</li>
        <li>Hoeveel innovatie brengen ze, als dat ten koste gaat van hun eigen marge?</li>
        <li>Wat zou er veranderen als we ze zouden belonen voor resultaat in plaats van voor volume?</li>
      </ol>

      <p>
        <em>Laatste reflectie:</em> Als jouw MSP beloond zou worden voor het besparen van geld in plaats van gestraft, hoeveel meer waarde zou je programma dan opleveren?
      </p>

      <hr />

      <p>
        <strong>Benieuwd of jouw huidige MSP-contract nog wel van deze tijd is?</strong> Bij Komma Consult kijken we graag met je mee naar de commerciële inrichting van je inhuurprogramma.
      </p>
    `,
    author: "Mathijs Duisdecker",
    date: "2026-02-08",
    readTime: "7 min",
    category: "Inhuurstrategie",
    featured: false,
  },
  {
    slug: "verantwoordelijkheidsvacuum-flexibele-schil",
    title: "Het 'Verantwoordelijkheidsvacuüm': Waarom niemand écht eigenaar is van de flexibele schil",
    excerpt: "Als ik aan directieleden vraag wie er eindverantwoordelijk is voor externe inhuur, krijg ik vaak een interessant schouwspel. Die stilte? Dat is het geluid van het verantwoordelijkheidsvacuüm.",
    content: `
      <p class="lead">
        Als ik aan directieleden vraag wie er binnen hun organisatie eindverantwoordelijk is voor externe inhuur, krijg ik vaak een interessant schouwspel. Ik hoor zeven verschillende antwoorden voorbijvliegen, meestal gevolgd door een ongemakkelijk, zenuwachtig lachje.
      </p>

      <p>
        De een wijst naar HR. De ander zweert bij Inkoop. En soms zwaait er iemand vaag richting Finance of "die MSP-partij die we toch hebben?"
      </p>

      <p>
        Maar zodra ik doorvraag wie er <strong>écht</strong> eindverantwoordelijkheid draagt — voor de kosten, de compliance rondom de Wet DBA, maar ook de ervaring van het talent — dan valt de kamer stil.
      </p>

      <p>
        Die stilte? Dat is het geluid van het <em>verantwoordelijkheidsvacuüm</em>... en het is een van de duurste 'onzichtbare' problemen van dit moment.
      </p>

      <h2>De illusie van eigenaarschap</h2>

      <p>
        In de praktijk zie ik vaak dat het op papier prima geregeld lijkt. Iedere afdeling bewaakt zijn eigen kleine partje van de taart: HR gaat over de strategie, Inkoop over de kosten en Legal over de contracten.
      </p>

      <p>
        Maar hier gaat het vaak mis — niemand voelt zich verantwoordelijk voor het bakken van de taart zelf.
      </p>

      <p>
        Het voelt een beetje als een estafetterace waarbij iedereen keurig zijn stokje vasthoudt, maar niemand daadwerkelijk aan het rennen is. HR gaat ervan uit dat Inkoop de 'cultural fit' wel checkt. Inkoop denkt dat Legal de risico's rondom schijnzelfstandigheid afdekt. En ondertussen valt het resultaat tussen wal en schip.
      </p>

      <h2>De symptomen (en de verborgen rekening)</h2>

      <p>
        Het begint vaak subtiel met wat 'maverick buying' — managers die buiten de lijntjes om inhuren — maar al snel zie je de echte scheuren:
      </p>

      <ul>
        <li>Compliance-risico's die "ineens" opduiken (hallo Belastingdienst! 👋).</li>
        <li>Data die versnipperd is over tien verschillende Excel-lijstjes.</li>
        <li>Externen die zich totaal niet verbonden voelen met je organisatie.</li>
      </ul>

      <p>
        Dit gebrek aan regie is in feite een stille belasting op je bedrijf. Je betaalt de hoofdprijs voor middelmatige kwaliteit, simpelweg omdat er geen centraal brein is dat het overzicht bewaart.
      </p>

      <h2>Hoe ziet écht eigenaarschap eruit?</h2>

      <p>
        Volgens mij gaat eigenaarschap niet over macht, maar over het creëren van rust en duidelijkheid.
      </p>

      <p>
        Ik geloof sterk in een regiefunctie die precies op het snijvlak van HR, Inkoop en Finance opereert. Iemand (of een team) die de brug slaat. Zij concurreren niet met de andere afdelingen, maar verbinden ze. Zij zorgen dat de inhuurstrategie ook echt uitgevoerd wordt in de praktijk.
      </p>

      <h2>De blinde vlek</h2>

      <p>
        Ik stel bedrijven vaak deze vraag: "Als al je externe krachten morgen het werk neerleggen, hoeveel procent van je bedrijf staat dan stil?"
      </p>

      <p>
        Als het antwoord je een beetje onrustig maakt: geen zorgen, je bent niet de enige! Maar het is wel een teken dat er werk aan de winkel is. De toekomst van werk gaat namelijk niet over 'Vast vs. Flex', maar over hoe goed je alle vormen van talent kunt orkestreren richting één doel.
      </p>

      <h2>Zullen we samen de brug slaan?</h2>

      <p>
        Het verantwoordelijkheidsvacuüm is een keuze. Je kunt de chaos automatiseren met tools, maar zonder de juiste governance blijft het... nou ja, geautomatiseerde chaos.
      </p>

      <p>
        Ben jij benieuwd hoe je dit eigenaarschap binnen jouw organisatie slim kunt inrichten? Ik denk graag met je mee hoe we die brug kunnen slaan tussen HR, Inkoop en de rest van je organisatie.
      </p>

      <p>
        Laten we snel een kop koffie drinken om de mogelijkheden te bespreken! ☕🚀
      </p>
    `,
    author: "Mathijs Duisdecker",
    date: "2026-01-13",
    readTime: "4 min",
    category: "Inhuurstrategie",
    featured: false,
  },

  // === TEMPLATE VOOR NIEUWE POST ===
  // Kopieer dit en pas aan voor je volgende artikel:
  /*
  {
    slug: "jouw-artikel-slug",
    title: "Titel van je artikel",
    excerpt: "Korte samenvatting...",
    content: `
      <p class="lead">Introductie...</p>
      <h2>Sectie 1</h2>
      <p>Inhoud...</p>
    `,
    author: "Mathijs Duisdecker",
    date: "2026-01-15",
    readTime: "5 min",
    category: "Compliance",
    featured: false,
  },
  */
]

// Helper functies
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find(post => post.featured) || blogPosts[0]
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return blogPosts.slice(0, limit)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map(post => post.category))]
}
