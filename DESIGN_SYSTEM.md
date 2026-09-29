# Movie Vibe — Phase 5: Visual Design System & Tokens

## 1. Color Palette & Dark Mode Tokens

The visual identity uses a **Cinematic Dark Mode** featuring deep midnight backdrops, neon accent glows, and polaroid contrast cards.

```css
:root {
  /* Surface Colors */
  --bg-primary: #0A0B10;         /* Deep Midnight Cinema Background */
  --bg-surface: #141622;         /* Movie Card Container */
  --bg-polaroid: #FBF9F5;       /* Classic Off-White Polaroid Card */
  --text-polaroid: #111111;     /* High-Contrast Dialogue Text */

  /* Text Colors */
  --text-primary: #F3F4F6;       /* Bright White Header */
  --text-secondary: #9CA3AF;     /* Muted Silver Metadata */
  --text-accent: #E5A93C;        /* Warm Gold Vibe Star */

  /* Glow Effects & Accents */
  --poster-glow: 0 10px 25px -5px rgba(229, 169, 60, 0.25);
  --neon-accent: #FF3366;        /* Vibe Highlight Accent */
  
  /* OTT Brand Badge Colors */
  --ott-netflix: #E50914;
  --ott-prime: #00A8E1;
  --ott-aha: #FF5200;
  --ott-hotstar: #0C57A2;
  --ott-zee5: #A21094;
}
```

---

## 2. Typography Hierarchy

Primary Editorial Font: **Playfair Display** / **Cinzel** (Serif)  
Secondary UI Font: **Plus Jakarta Sans** (Sans-Serif)

| Level | Font Family | Size / Weight | Usage |
| :--- | :--- | :--- | :--- |
| **Display Header** | Editorial Serif | `36px / Bold` | App Title ("Movie Vibe"), Gateway Question |
| **Movie Title** | Editorial Serif | `24px / SemiBold` | Movie Card Titles |
| **Dialogue Quote** | Editorial Serif (Italic) | `18px / Medium` | Community Polaroid Scene Quotes |
| **UI Labels & Tags** | Modern Sans | `14px / Medium` | Language Pills, Vibe Buttons |
| **OTT Badge Text** | Modern Sans | `12px / Bold` | Streaming Provider Tags |

---

## 3. Polaroid Review Component Token Spec

```css
.polaroid-card {
  background-color: var(--bg-polaroid);
  color: var(--text-polaroid);
  padding: 16px 16px 24px 16px;
  border-radius: 4px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.polaroid-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(255, 51, 102, 0.2);
}

.polaroid-quote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.5;
  margin-top: 12px;
}
```

---

## 4. Microcopy & Voice Guidelines

* **Gateway Prompt**: *"Are you in a specific mood today, or should we curate your night?"*
* **Top 5 Fallback**: *"No mood? No problem. Here are today's top 5 unmissable vibe picks."*
* **Vibe Rating**: *"Vibe Check: ★★★★★"*
* **Empty Watchlist**: *"Your watchlist is empty. Save movie posters to catch them later!"*
