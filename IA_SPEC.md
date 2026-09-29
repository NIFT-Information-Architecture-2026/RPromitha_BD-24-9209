# Movie Vibe — Phase 3: Information Architecture & Taxonomy

## 1. Global Sitemap & Navigation Hierarchy

```
[ GLOBAL NAVBAR ]
  ├── 🎬 Movie Vibe Logo (Home Reset)
  ├── 🌈 Vibe Category Bar (9 Vibes)
  ├── 🌐 Language Filter Bar (Telugu, Hindi, English, Tamil, Malayalam, Korean, etc.)
  ├── 📺 OTT Availability Filter (Netflix, Prime, Hotstar, Aha, Zee5, etc.)
  ├── 🌟 Today's Top 5 Picks (Instant Spotlights)
  └── 🔖 My Watchlist (Slide-Out Side Drawer)
```

---

## 2. Information Taxonomy & Metadata Schema

### 2.1 Movie Entity Schema
Every movie card in the system contains the following structured attributes:

```json
{
  "id": "movie_001",
  "title": "Movie Title",
  "releaseYear": 2024,
  "posterUrl": "assets/posters/movie_001.jpg",
  "languages": ["Telugu", "Hindi"],
  "vibes": ["In the Mood for Love", "Weekend Vibe"],
  "ottPlatforms": [
    { "name": "Netflix", "badgeColor": "#E50914", "link": "https://netflix.com" },
    { "name": "Prime Video", "badgeColor": "#00A8E1", "link": "https://primevideo.com" }
  ],
  "topPickOfDay": true,
  "vibeCheckAverage": 4.8,
  "totalReviews": 34
}
```

### 2.2 Polaroid Community Review Entity Schema
Every community scene review contains:

```json
{
  "reviewId": "rev_101",
  "movieId": "movie_001",
  "authorHandle": "@cine_lover",
  "sceneImageUrl": "assets/scenes/scene_001.jpg",
  "famousDialogue": "Famous iconic dialogue line goes here...",
  "vibeRating": 5,
  "likesCount": 142,
  "createdAt": "2026-09-29"
}
```

---

## 3. UI Component Architecture

### Component 1: Movie Poster Card with OTT Badges
* **Poster Header**: Movie Poster Image + Bookmark Button (`+ Watchlist`).
* **Metadata Overlay**: Title, Year, Language Pills (`[Telugu] [Hindi]`).
* **OTT Availability Row**: Platform Badges (`[▶ Netflix] [▶ Prime Video] [▶ Aha]`).
* **Vibe Rating**: 5-Star Vibe Check indicator.

### Component 2: Polaroid Review Card
* **Header**: User `@handle` + Like Counter (`❤️ 142`).
* **Body**: High-Res Movie Still Photo.
* **Quote Box**: Styled famous dialogue in quote typography.
* **Footer**: Movie Title + OTT Badge + 5-Star Rating.

### Component 3: Watchlist Side Drawer
* **Header**: `My Watchlist (X Saved Movies)`.
* **Body**: Vertical list of saved movie cards with direct OTT streaming links.
* **Action**: Remove button or Mark as Watched.

---

## 4. Technical Feasibility Note on OTT Integration
* **Data Strategy**: In the prototype, OTT platform data will be structured via ready-to-use metadata objects (and can integrate with APIs like *JustWatch API* or TMDB provider endpoints).
* **User Value**: Users immediately see *where to watch* without leaving the app.
