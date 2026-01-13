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
    slug: "verantwoordelijkheidsvacuum-flexibele-schil",
    title: "Het 'Verantwoordelijkheidsvacuüm': Waarom niemand echt eigenaar is van de flexibele schil",
    excerpt: "Vraag vijf directieleden wie er eindverantwoordelijk is voor externe inhuur, en je krijgt zeven verschillende antwoorden. Die stilte? Dat is het geluid van het verantwoordelijkheidsvacuüm.",
    content: `
      <p class="lead">
        Vraag vijf directieleden wie er binnen de organisatie eindverantwoordelijk is voor externe inhuur, en je krijgt zeven verschillende antwoorden plus één zenuwachtig lachje.
      </p>

      <p>
        Sommigen wijzen naar HR. Anderen zweren dat het bij Inkoop ligt. Een enkeling zwaait vaag richting Finance, Legal of "die MSP-partij die we hebben ingeschakeld".
      </p>

      <p>
        Maar als je doorvraagt wie er <strong>écht</strong> verantwoordelijk is voor het totaalplaatje — de kosten, de compliance (zeker met de Wet DBA in het achterhoofd), de prestaties én de ervaring van de ingehuurde professional — dan valt de kamer stil.
      </p>

      <p>
        Die stilte? Dat is het geluid van het <em>verantwoordelijkheidsvacuüm</em>.
      </p>

      <p>
        Het is een van de duurste en meest onderschatte problemen in de hedendaagse bedrijfsvoering.
      </p>

      <blockquote>
        In Nederland bestaat gemiddeld zo'n 20% van het personeelsbestand uit externen (ZZP'ers, gedetacheerden, SOW). Als niemand die groep écht 'bezit', wie runt dan eigenlijk dat deel van je bedrijf?
      </blockquote>

      <h2>De illusie van eigenaarschap</h2>

      <p>Op papier lijkt het vaak prima geregeld:</p>

      <ul>
        <li>HR "bezit" de talentstrategie en cultuur.</li>
        <li>Inkoop "bezit" kostenbeheersing en contractmanagement.</li>
        <li>Legal "bezit" de juridische risico's.</li>
        <li>Finance "bezit" de budgetten.</li>
      </ul>

      <p>
        Maar in de praktijk? Niemand overziet het geheel. Iedere afdeling bewaakt zijn eigen partje van de taart, maar niemand is verantwoordelijk voor het bakken van de taart zelf.
      </p>

      <p>
        Het is de corporate versie van een estafetterace waarbij iedereen wel een stokje vastheeft, maar niemand aan het rennen is. HR denkt dat Inkoop let op de 'cultural fit'. Inkoop gaat ervan uit dat Legal de risico's rondom schijnzelfstandigheid afdekt. En Legal neemt aan dat HR toetst of iemand wel echt als ondernemer werkt.
      </p>

      <p>Helaas… dat gebeurt vaker niet dan wel.</p>

      <h2>De symptomen van het vacuüm</h2>

      <p>
        De signalen zijn in het begin subtiel. Een paar managers die 'buiten de lijntjes' inhuren (ook wel <em>maverick buying</em> of <em>rogue spend</em> genoemd). Tarieven die niet marktconform zijn. Maar al snel worden de scheuren zichtbaar:
      </p>

      <ul>
        <li>Compliance risico's die "niemand zag aankomen" (denk aan naheffingen of boetes in het kader van de Wet DBA/VBAR).</li>
        <li>Besparingen die op papier mooi lijken, maar nooit terug te vinden zijn in de P&L.</li>
        <li>Data chaos — gegevens versnipperd over tien systemen die niet met elkaar praten.</li>
        <li>Hiring managers die het officiële proces omzeilen omdat het "te traag" is.</li>
      </ul>

      <p>
        Zo ontstaat er langzaam een schaduworganisatie. Onzichtbaar, ongemeten, maar cruciaal voor de dagelijkse operatie. Het is niet dat leiders het niet interesseert. Het probleem is dat ze een governance-model missen dat duidelijke bevoegdheden toewijst over de afdelingsgrenzen heen.
      </p>

      <h2>De verborgen kosten</h2>

      <p>
        Laten we het even over cijfers hebben. Gebrek aan eigenaarschap kost geld. Zonder duidelijke sturing krijg je:
      </p>

      <ol>
        <li><strong>Inefficiëntie:</strong> Dubbele processen en onsamenhangende onboarding.</li>
        <li><strong>Werkgeverschap versus opdrachtgeverschap:</strong> Externen ervaren een totaal ander bedrijf dan vaste medewerkers.</li>
        <li><strong>Inhuurrisico's:</strong> Schijnzelfstandigheid en ketenaansprakelijkheid vormen in de huidige Nederlandse markt een serieus risico.</li>
        <li><strong>Verspilling van middelen:</strong> Hoofdprijzen betalen voor middelmatige kwaliteit.</li>
      </ol>

      <p>
        Elk van deze punten is pijnlijk. Samen vormen ze een stille belasting op je organisatie. Betaald in herstelwerk, vertraging en/of reputatieschade.
      </p>

      <h2>Hoe dit kan gebeuren (By Design)</h2>

      <p>Dit vacuüm ontstaat niet door luiheid of incompetentie. Het is een ontwerpfout.</p>

      <p>De meeste organisatiestructuren zijn simpelweg niet gebouwd voor een hybride wereld.</p>

      <ul>
        <li>HR is geoptimaliseerd voor vaste medewerkers (FTE's).</li>
        <li>Inkoop is geoptimaliseerd voor goederen en contracten.</li>
      </ul>

      <p>
        Geen van beide is ingericht om een samenhangend ecosysteem van uitzendkrachten, zzp'ers, gedetacheerden en 'Statement of Work' projecten integraal te managen. De flexibele schil wordt zo een speelbal die continu heen en weer wordt gekaatst tussen HR, Inkoop en de business.
      </p>

      <h2>Hoe ziet écht eigenaarschap eruit?</h2>

      <p>Eigenaarschap gaat niet over macht grijpen, maar over duidelijkheid creëren.</p>

      <p>
        Stel je een model voor waarbij een regiefunctie (bijvoorbeeld een Contingent Workforce Manager of een multidisciplinair team) op het snijvlak van HR, Inkoop en Finance opereert.
      </p>

      <p>
        Hun missie? Simpel: alle externe medewerkers en contracten managen met verantwoordelijkheid voor resultaat, kosten én compliance. Dit team concurreert niet met HR of Inkoop, maar verbindt ze.
      </p>

      <p>Zij zijn eigenaar van:</p>

      <ul>
        <li>Programmabesturing (Governance)</li>
        <li>Leveranciersstrategie</li>
        <li>Data-integriteit</li>
        <li>Talentervaring (ook voor de externe)</li>
        <li>Risicobeheersing</li>
      </ul>

      <h2>De Tech-Mythe</h2>

      <p>Veel organisaties lopen tegen dezelfde muur: "We lossen het wel op met technologie."</p>

      <p>
        Dan wordt er een Vendor Management System (VMS) geïmplementeerd. En eerlijk is eerlijk: die systemen leveren waarde. Maar alleen als de governance erachter klopt. Zonder eigenaarschap automatiseer je slechts de chaos. Je krijgt mooiere dashboards, maar de data erachter klopt nog steeds niet.
      </p>

      <blockquote>
        Pro tip: Technologie moet de strategie volgen, niet andersom.
      </blockquote>

      <h2>De blinde vlek van de CEO</h2>

      <p>
        Hier wordt het ongemakkelijk. De meeste CEO's kunnen je exact vertellen wat het verloop is onder vast personeel of wat de omzet per medewerker is.
      </p>

      <p>
        Maar vraag ze hoeveel externe krachten er op dit moment rondlopen, wat ze precies kosten en hoe ze worden aangestuurd — en je krijgt vaak een beleefd schouderophalen.
      </p>

      <blockquote>
        Als al je externe krachten morgen het werk neerleggen, hoeveel procent van je bedrijf staat dan stil? Als dat antwoord je onrustig maakt, gefeliciteerd! Dan heb je zojuist je volgende prioriteit gevonden.
      </blockquote>

      <h2>De toekomst: van 'Inhuur' naar 'Total Talent'</h2>

      <p>
        De toekomst van werk gaat niet over 'Vast vs. Flex'. Het gaat over hoe goed organisaties alle vormen van talent kunnen orkestreren richting één doel.
      </p>

      <p>Vooruitstrevende bedrijven bouwen nu al aan:</p>

      <ul>
        <li><strong>Unified data:</strong> HRIS en VMS-systemen die gekoppeld zijn.</li>
        <li><strong>Cross-functionele stuurgroepen</strong> met gedeelde KPI's.</li>
        <li><strong>Governance-modellen</strong> die flexibele arbeid zien als integraal onderdeel van Total Talent Management.</li>
      </ul>

      <h2>Conclusie: Het vacuüm is een keuze</h2>

      <p>
        Het verantwoordelijkheidsvacuüm bestaat alleen omdat niemand heeft besloten het op te vullen. Bedrijven die dit wel doen, winnen aan wendbaarheid en controle.
      </p>

      <p>Dus stel jezelf de volgende vragen:</p>

      <ol>
        <li>Als de Belastingdienst morgen aanklopt voor een controle, wie belt de CEO dan als eerste?</li>
        <li>Als je inhuurprogramma vandaag verdwijnt, zou de business het merken?</li>
      </ol>

      <p>
        De antwoorden op die vragen onthullen of je een echte workforce-strategie hebt gebouwd — of slechts een dure spreadsheet beheert.
      </p>

      <hr />

      <p>
        <strong>Wil je sparren over hoe je dit eigenaarschap binnen jouw organisatie kunt inrichten?</strong> Bij Komma Consult helpen we je graag om de brug te slaan tussen HR, Inkoop en de Business.
      </p>
    `,
    author: "Mathijs Duisdecker",
    date: "2026-01-13",
    readTime: "8 min",
    category: "Inhuurstrategie",
    featured: true,
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
