# Movie Vibe — Phase 3: Information Architecture & Taxonomy

## 1. Global Sitemap & Navigation Hierarchy

```
[ GLOBAL NAVBAR ]
  ├── 🎬 Movie Vibe Logo (Home Reset)
  ├── 🌈 Vibe Category Bar (9 Vibes — All Available)
  ├── 🌐 Multi-Select Language Filter Bar (Telugu, Hindi, English, Tamil, Malayalam, Korean — Choose multiple simultaneously)
  ├── 📺 OTT Availability Filter (Netflix, Prime, Hotstar, Aha, Zee5)
  ├── 🌟 Today's Top 5 Picks (Instant Spotlights)
  └── 🔖 My Watchlist (Slide-Out Side Panel / Drawer)
```

---

## 2. Information Taxonomy & Metadata Schema

### 2.1 Movie Entity Schema
Every movie card in the system contains structured attributes with **multi-language support**:

```json
{
  "id": "movie_001",
  "title": "Hi Nanna",
  "releaseYear": 2023,
  "posterUrl": "assets/posters/movie_001.jpg",
  "language": ["Telugu", "Hindi"],
  "vibe": "comforting",
  "ottPlatforms": [
    { "name": "Netflix", "class": "netflix" },
    { "name": "Aha", "class": "aha" }
  ],
  "topPick": true,
  "rating": 4.9,
  "reviews": []
}
```

---

## 3. Approved Phase 3 Architecture Choices
1. **Full Availability**: All options (9 Vibes, Multi-Languages, OTT Badges, Top 5 Picks, Watchlist) are readily accessible from the main interface.
2. **Slide-Out Side Panel**: The Watchlist operates as an overlay slide-out panel from the right side of the screen without interrupting the user's current browsing position.
3. **Multi-Select Language Filtering**: Users can toggle multiple languages at once (e.g. selecting both `Telugu` + `Hindi` to view movies available in either language).
