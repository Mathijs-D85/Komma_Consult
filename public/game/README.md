# 🏁 Komma Consult Racing - README

Een retro jaren 80 stijl racegame speciaal gemaakt voor de Komma Consult website. Ontwijkt zakelijke obstakels en leer wat Komma Consult voor jouw bedrijf kan betekenen!

## 🎮 Over het Spel

Komma Racing is een nostalgische throwback naar de klassieke arcade racegames van de jaren 80, maar dan met een moderne twist. De obstakels die je ontwijkt vertegenwoordigen echte zakelijke uitdagingen waar bedrijven tegenaan lopen:

- 🏛️ **Nieuwe Wetgeving** (WAS, DBA)
- 💸 **Stijgende Kosten**
- 📋 **Administratie Chaos**
- ⚠️ **Schijnzelfstandigheid**
- 📊 **Complexe Compliance**
- 💰 **Budget Druk**
- 🔍 **Onverwachte Audits**
- 📄 **Contract Chaos**

## 🎨 Features

### Visueel Design
- **Jaren 80 Retro Esthetiek** met neon kleuren en pixel fonts
- **CRT Scanline Effecten** voor authentieke oude monitor uitstraling
- **Komma Consult Branding** met bedrijfskleuren (donkerblauw #2C3E73 en magenta #E91E8C)
- **Neon Glow Effecten** en glassmorphism voor moderne touch
- **Responsive Design** werkt op desktop, tablet en mobiel

### Gameplay
- **Smooth Controls** met pijltjestoetsen (← en →)
- **Progressieve Moeilijkheidsgraad** - snelheid neemt toe met je score
- **Score Systeem** met high score opslag in localStorage
- **Collision Detection** met pixel-perfect obstakelvermijding
- **3-Lane Systeem** voor strategisch gameplay

### Audio
- **8-bit Geluideffecten** programmatisch gegenereerd met Web Audio API
- **Retro Sound Design** inclusief motor geluiden, beweging, scoring en crash effecten
- **Mute Optie** voor flexibele gebruikerservaring
- **Achtergrond Melodie** met klassieke 8-bit tonen

### Business Integratie
- **Zakelijke Obstakels** die resoneren met de doelgroep
- **Call-to-Action** op game over scherm
- **Komma Consult Branding** subtiel maar zichtbaar
- **Link naar Website** voor conversie

## 🚀 Installatie & Gebruik

### Lokaal Testen

1. Open de game in een browser:
   ```
   file:///C:/Users/komma/.gemini/antigravity/scratch/komma-racing-game/index.html
   ```

2. Of gebruik een lokale webserver (aanbevolen):
   ```powershell
   cd C:\Users\komma\.gemini\antigravity\scratch\komma-racing-game
   python -m http.server 8000
   ```
   Dan open: `http://localhost:8000`

### Integratie op Website

Er zijn meerdere manieren om de game op je website te integreren:

#### Optie 1: iFrame (Eenvoudigst)
```html
<iframe 
    src="https://jouwwebsite.nl/games/komma-racing/" 
    width="900" 
    height="700" 
    frameborder="0"
    title="Komma Racing Game">
</iframe>
```

#### Optie 2: Dedicated Pagina
Upload de bestanden naar een subfolder op je website:
```
/games/komma-racing/
  ├── index.html
  ├── styles.css
  └── game.js
```

#### Optie 3: Embed op Bestaande Pagina
Integreer de HTML, CSS en JS direct in een bestaande pagina als onderdeel van je content.

## 📁 Project Structuur

```
komma-racing-game/
├── index.html      # Hoofd HTML bestand met canvas en UI
├── styles.css      # Alle styling: branding, retro effecten, responsive design
├── game.js         # Game engine: logica, audio, collision detection
└── README.md       # Deze documentatie
```

## 🎯 Technische Details

### Technologieën
- **HTML5 Canvas** voor game rendering
- **Vanilla JavaScript** (ES6+) voor game logica
- **Web Audio API** voor 8-bit sound synthesis
- **CSS3** met animaties en effecten
- **LocalStorage** voor high score persistentie

### Browser Compatibiliteit
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ⚠️ Vereist moderne browser met Canvas en Web Audio API support

### Performance
- 60 FPS game loop met `requestAnimationFrame`
- Geoptimaliseerde rendering
- Efficient obstakel management
- Pixel-perfect collision detection

## 🎨 Kleuren Palet

```css
/* Komma Consult Brand */
--komma-blue: #2C3E73       /* Primaire merk kleur */
--komma-magenta: #E91E8C    /* Accent kleur */

/* Retro 80s Neon */
--neon-cyan: #00FFFF        /* Weg markeringen */
--neon-yellow: #FFFF00      /* Obstakels */
--neon-pink: #FF00FF        /* Accenten */
--neon-green: #00FF00       /* High score */
```

## 🎮 Controls

| Toets | Actie |
|-------|-------|
| ← (Left Arrow) | Beweeg auto naar links |
| → (Right Arrow) | Beweeg auto naar rechts |
| 🔊 Button | Toggle audio aan/uit |

## 📊 Game Mechanics

### Scoring
- **+1 punt** voor elk ontwijkt obstakel
- **High Score** wordt automatisch opgeslagen
- **Moeilijkheidsgraad** stijgt elke 10 punten

### Difficulty Progression
- **Start snelheid**: 3 pixels/frame
- **Snelheidstoename**: +0.3 pixels elke 10 punten
- **Spawn rate**: Nieuw obstakel elke 120 frames (~2 seconden)

## 🔧 Aanpassingen

### Obstakels Wijzigen
Bewerk de `OBSTACLES` array in `game.js`:
```javascript
const OBSTACLES = [
    { emoji: '🏛️', text: 'Nieuwe\nWetgeving' },
    // Voeg je eigen obstakels toe...
];
```

### Kleuren Aanpassen
Wijzig CSS variabelen in `styles.css`:
```css
:root {
    --komma-blue: #2C3E73;
    --komma-magenta: #E91E8C;
    /* Pas naar wens aan */
}
```

### Moeilijkheidsgraad Tweaken
Bewerk `CONFIG` object in `game.js`:
```javascript
const CONFIG = {
    obstacle: {
        initialSpeed: 3,        // Start snelheid
        speedIncrement: 0.3,    // Snelheidstoename
        spawnRate: 120          // Spawn frequentie
    }
};
```

## 📱 SEO & Metadata

De game bevat geoptimaliseerde meta tags:
- Title: "Komma Consult Racing | Retro 80s Game"
- Description voor zoekmachines
- Keywords voor vindbaarheid
- Social media ready

## 🌟 Engagement Tips

1. **Leaderboard**: Voeg een server-side high score lijst toe
2. **Social Sharing**: "Deel je score!" functionaliteit
3. **Rewards**: Korting codes bij bepaalde scores
4. **Challenges**: Weekelijkse high score competities

## 💼 Business Impact

Deze mini-game helpt met:
- ✅ **Verhoogde dwell time** op de website
- ✅ **Merkbeleving** door interactieve content
- ✅ **Lead generatie** via call-to-action op game over
- ✅ **Brand awareness** door deelbare content
- ✅ **Zakelijke boodschap** op speelse manier overbrengen

## 📞 Support & Contact

Voor vragen over de game of Komma Consult diensten:
- **Website**: https://kommaconsult.nl
- **Call-to-Action**: "Plan een gesprek" button in game

## 📄 Licentie

© 2026 Komma Consult - Waar passies, ambities en mogelijkheden ontstaan

---

**Veel plezier met racen! 🏁**
