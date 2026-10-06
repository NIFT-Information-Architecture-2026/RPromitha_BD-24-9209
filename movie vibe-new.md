# Movie Vibe — Master Document of Accepted Decisions & Specifications

This document consolidates all creative choices, structural decisions, UX frameworks, and technical specifications accepted by the Creative Director across our working session.

---

## 1. Role & Project Contract
- **Creative Director & Product Lead**: Student of Fashion Communication, NIFT Hyderabad — sets creative vision, brand aesthetics, cultural context, and user experience decisions.
- **Technical Project Architect & UX Mentor**: Handles UX scaffolding, technical structuring, documentation, and clean code implementation.
- **Process Methodology**: 6-Phase Stage Gate Protocol (Narrative $\rightarrow$ UX Modeling $\rightarrow$ Information Architecture $\rightarrow$ Wireframes $\rightarrow$ Design System $\rightarrow$ Interactive Prototype).

---

## 2. Core Vision & Product Identity
- **App Name**: **Movie Vibe**
- **Core Concept**: Emotion-first movie discovery platform where users choose movies by current mood/vibe, filter by multi-selected languages & OTT availability, read/post polaroid reviews with famous dialogues, and curate watchlists.
- **Visual Aesthetic**: All-genre coverage wrapped in a **Cinematic Dark Mode** with glowing poster cards and **Polaroid Film-Strip Community Reviews**.

---

## 3. Approved Feature Specifications

### 3.1 Interactive Home Gateway Flow
- **Initial Prompt**: *"Are you in a specific mood today?"*
- **Option A (`YES, I HAVE A VIBE`)**: Unlocks the 9 Vibe categories, multi-select language filter pills, and OTT badges.
- **Option B (`NO, SHOW ME TOP 5 PICKS`)**: Bypasses mood selection to display today's 5 curated top recommendations.

### 3.2 The 9 Core Vibe Categories (All Available)
1. 🛋️ **Comforting**
2. ⚡ **High Energy**
3. 🌙 **Low Energy**
4. 👨‍👩‍👧‍👦 **Family Time**
5. 💌 **In the Mood for Love**
6. 😂 **Hilarious**
7. 🥂 **Weekend Vibe**
8. 🌿 **Refreshing**
9. 🍿 **Horror / Thriller**

### 3.3 Multi-Select Language Filtering
- Users can select multiple languages simultaneously (e.g. `[✓ Telugu] [✓ Hindi]` to view movies matching any selected language).

### 3.4 OTT Availability Badges
- Displayed directly on movie cards as visual indicators (`▶ Netflix`, `▶ Prime Video`, `▶ Aha`, `▶ Hotstar`, `▶ Zee5`).
- Visual badges on the card without external app linking.

### 3.5 Polaroid Community Review System
- **Visual Style**: Off-white polaroid card (`#FBF9F5`) containing a high-res movie scene still, famous dialogue quote in editorial italic serif typography, author handle, 5-star Vibe Check rating, and like counter.
- **Review Trigger**: A direct `[ ✍️ Write Vibe Review ]` button placed on each individual Movie Vibe Card (no floating bottom button).

### 3.6 Watchlist Slide-Out Side Panel
- Slide-out side drawer accessible via the navbar (`🔖 Watchlist`) for saving movie posters with quick item removal.

---

## 4. Visual Design System Specs

| Token Category | Value / Setting | Application |
| :--- | :--- | :--- |
| **Base Theme** | Cinematic Dark Mode (`#0A0B10`) | Background surface |
| **Card Surface** | Deep Charcoal (`#141622` / `#1C1F30`) | Movie Vibe containers |
| **Polaroid Surface** | Classic Off-White (`#FBF9F5`) | Community Review Cards |
| **Primary Typography** | Editorial Serif (**Playfair Display**) | Movie titles & famous dialogue quotes |
| **Secondary Typography** | Modern Sans (**Plus Jakarta Sans**) | UI buttons, language pills, OTT tags |
| **Poster FX** | Glowing Gold Shadow (`rgba(229, 169, 60, 0.25)`) | Card hover state |
| **Star Rating Color** | Warm Gold (`#FFC107`) | 5-Star Vibe Check |

---

## 5. Summary of Workspace Files

- **[Instructions.md](file:///Users/harshitha/Documents/RPromitha_BD-24-9209/Instructions.md)** — Role & Collaboration Contract.
- **[NARRATIVE_OBJECTIVES.md](file:///Users/harshitha/Documents/RPromitha_BD-24-9209/NARRATIVE_OBJECTIVES.md)** — Phase 1 Narrative & Positioning.
- **[UX_RESEARCH.md](file:///Users/harshitha/Documents/RPromitha_BD-24-9209/UX_RESEARCH.md)** — Phase 2 UX Personas & Vibe Taxonomy.
- **[IA_SPEC.md](file:///Users/harshitha/Documents/RPromitha_BD-24-9209/IA_SPEC.md)** — Phase 3 Information Architecture & Schemas.
- **[WIREFRAMES.md](file:///Users/harshitha/Documents/RPromitha_BD-24-9209/WIREFRAMES.md)** — Phase 4 Layout Wireframes & Gateway Flow.
- **[DESIGN_SYSTEM.md](file:///Users/harshitha/Documents/RPromitha_BD-24-9209/DESIGN_SYSTEM.md)** — Phase 5 Design System & Color Tokens.
- **[CASE_STUDY.md](file:///Users/harshitha/Documents/RPromitha_BD-24-9209/CASE_STUDY.md)** — Comprehensive Project Case Study.
- **[index.html](file:///Users/harshitha/Documents/RPromitha_BD-24-9209/index.html)**, **[styles.css](file:///Users/harshitha/Documents/RPromitha_BD-24-9209/styles.css)**, **[app.js](file:///Users/harshitha/Documents/RPromitha_BD-24-9209/app.js)** — Interactive Prototype.
