# Movie Vibe — Phase 4: User Flows & Low-Fidelity Wireframes

## 1. Home Screen Interactive Gateway Flow

```
+-----------------------------------------------------------------------------+
|  🎬 MOVIE VIBE                                       [ 🔖 Watchlist (3) ]   |
+-----------------------------------------------------------------------------+
|                                                                             |
|                 "Are you in a specific mood today?"                         |
|                                                                             |
|         [ YES, I HAVE A VIBE ]          [ NO, SHOW ME TOP 5 PICKS ]         |
|                                                                             |
+-----------------------------------------------------------------------------+
```

### Path A: User selects `YES, I HAVE A VIBE`
```
+-----------------------------------------------------------------------------+
|  SELECT YOUR VIBE:                                                          |
|  [🛋️ Comforting] [⚡ High Energy] [🌙 Low Energy] [👨‍👩‍👧‍👦 Family Time]        |
|  [💌 In the Mood for Love] [😂 Hilarious] [🥂 Weekend Vibe]                 |
|  [🌿 Refreshing] [🍿 Horror / Thriller]                                     |
|                                                                             |
|  FILTER BY LANGUAGE:                                                        |
|  [All] [Telugu] [Hindi] [English] [Tamil] [Malayalam] [Korean]              |
|                                                                             |
|  FILTER BY OTT:                                                             |
|  [All] [Netflix] [Prime Video] [Hotstar] [Aha] [Zee5]                       |
+-----------------------------------------------------------------------------+
```

### Path B: User selects `NO, SHOW ME TOP 5 PICKS`
```
+-----------------------------------------------------------------------------+
|  🌟 TODAY'S TOP 5 VIBE PICKS                                                |
|  Curated daily recommendations for when you can't decide                    |
+-----------------------------------------------------------------------------+
```

---

## 2. Movie Vibe Card Wireframe (with Direct Review Action & OTT Badges)

```
+-----------------------------------------------------------------------------+
|  +-----------------------+  MOVIE TITLE (2024)                              |
|  |                       |  Language: [Telugu] [Hindi]                      |
|  |  MOVIE POSTER         |  Vibe: 🛋️ Comforting                             |
|  |  IMAGE                |                                                  |
|  |                       |  AVAILABLE ON:                                   |
|  |                       |  [ ▶ Netflix ]  [ ▶ Aha ]                        |
|  |                       |  (Visual indicators only)                        |
|  +-----------------------+                                                  |
|  [ + Add to Watchlist ]     Vibe Rating: ★★★★★ (4.8/5)                      |
|                             ----------------------------------------------  |
|                             [ ✍️ Write Vibe Review for this Movie ]         |
+-----------------------------------------------------------------------------+
|  COMMUNITY POLAROID REVIEWS FOR THIS MOVIE:                                 |
|  +-----------------------------------------------------------------------+  |
|  | [ SCENE STILL ]  "Iconic dialogue quote line displayed here..."       |  |
|  |                  - @user_handle  | ★★★★★  | ❤️ 142 Likes              |  |
|  +-----------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------+
```

---

## 3. "Write Vibe Review" Modal Wireframe

Triggered directly from a Movie Vibe Card's `[ ✍️ Write Vibe Review ]` button:

```
+-----------------------------------------------------------------------------+
|  WRITE A VIBE REVIEW FOR: [ Movie Title ]                                   |
|  -------------------------------------------------------------------------  |
|                                                                             |
|  1. Upload / Select Scene Still (Photo):                                    |
|     [ 📷 Select Scene Image File / URL ]                                    |
|                                                                             |
|  2. Iconic Dialogue or Quote:                                               |
|     [ "Enter famous line or what you genuinely liked about the scene..." ]  |
|                                                                             |
|  3. Vibe Check Rating:                                                      |
|     [ ★ ] [ ★ ] [ ★ ] [ ★ ] [ ★ ] (5/5 Stars)                               |
|                                                                             |
|  [ CANCEL ]                                      [ 🚀 POST POLAROID REVIEW ] |
+-----------------------------------------------------------------------------+
```
