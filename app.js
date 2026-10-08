// Movie Vibe — Interactive Application Logic with Ambient Soundscapes

// 9 Vibe Categories with Soundscape Descriptions
const VIBES = [
  { id: "all", name: "All Vibes", icon: "🌈", soundscape: "Ambient Cinema Mix" },
  { id: "comforting", name: "Comforting", icon: "🛋️", soundscape: "Warm Felt Piano" },
  { id: "high-energy", name: "High Energy", icon: "⚡", soundscape: "Driving Drum Beats" },
  { id: "low-energy", name: "Low Energy", icon: "🌙", soundscape: "Ocean Tides + Soft Piano" },
  { id: "family-time", name: "Family Time", icon: "👨‍👩‍👧‍👦", soundscape: "Acoustic Guitar Strumming" },
  { id: "love", name: "In the Mood for Love", icon: "💌", soundscape: "Light Rain on Roof" },
  { id: "hilarious", name: "Hilarious", icon: "😂", soundscape: "Upbeat Brass Horns" },
  { id: "weekend", name: "Weekend Vibe", icon: "🥂", soundscape: "Clean Electric Guitar" },
  { id: "refreshing", name: "Refreshing", icon: "🌿", soundscape: "Forest Breeze & Birds Chirping" },
  { id: "horror-thriller", name: "Horror / Thriller", icon: "🍿", soundscape: "Howling Night Wind + Heartbeat Percussion" }
];

// Languages & OTT Platforms
const LANGUAGES = ["All", "Telugu", "Hindi", "English", "Tamil", "Malayalam", "Korean"];
const OTTS = ["All", "Netflix", "Prime Video", "Aha", "Hotstar", "Zee5"];

// Enhanced Movie Database matching exact notebook sketches
let MOVIES = [
  {
    id: "m1",
    title: "Hi Nanna",
    year: 2023,
    language: ["Telugu", "Hindi"],
    vibe: "comforting",
    vibeTag: "#Comforting",
    genres: ["Drama", "Romance"],
    trendingRank: "#2 Trending in India",
    votesCount: "18k",
    summary: "A single father's quiet world is turned upside down when a mysterious, warm-hearted woman enters his daughter's life.",
    cast: ["Nani", "Mrunal Thakur", "Kiara Khanna"],
    topPick: true,
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    otts: [{ name: "Netflix", class: "netflix" }, { name: "Aha", class: "aha" }],
    rating: 5.0,
    reviews: [
      {
        id: "r1",
        author: "@ananya_",
        image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&q=80",
        quote: "Love isn't about how long you stay together, it's about how deeply you care even in silence.",
        comment: "Whenever I feel a little low, I'd watch this movie. Pure emotional warmth!",
        rating: 5,
        likes: 83
      }
    ]
  },
  {
    id: "m2",
    title: "RRR",
    year: 2022,
    language: ["Telugu", "Hindi", "Tamil"],
    vibe: "high-energy",
    vibeTag: "#HighEnergy",
    genres: ["Action", "Drama"],
    trendingRank: "#1 Trending in India",
    votesCount: "45k",
    summary: "A fearless warrior and a stealthy officer forge an unbreakable brotherhood during the roaring 1920s.",
    cast: ["NTR Jr.", "Ram Charan", "Alia Bhatt"],
    topPick: true,
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
    otts: [{ name: "Netflix", class: "netflix" }, { name: "Hotstar", class: "hotstar" }],
    rating: 5.0,
    reviews: [
      {
        id: "r2",
        author: "@action_cinephile",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&q=80",
        quote: "Dosti is thicker than blood. Fire and water set the screen ablaze!",
        comment: "Mind blowing, just watch it for the Naatu Naatu energy!",
        rating: 5,
        likes: 310
      }
    ]
  },
  {
    id: "m3",
    title: "3 Idiots",
    year: 2009,
    language: ["Hindi"],
    vibe: "hilarious",
    vibeTag: "#Hilarious",
    genres: ["Comedy", "Drama"],
    trendingRank: "#3 Classic in India",
    votesCount: "60k",
    summary: "Two friends search for their long-lost college roommate while reminiscing about his unconventional wisdom.",
    cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi"],
    topPick: true,
    poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&q=80",
    otts: [{ name: "Prime Video", class: "prime" }],
    rating: 4.9,
    reviews: [
      {
        id: "r3",
        author: "@rancho_vibes",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80",
        quote: "All Izz Well! Pursue excellence, and success will chase you.",
        comment: "The ultimate stressbuster movie for every student!",
        rating: 5,
        likes: 245
      }
    ]
  },
  {
    id: "m4",
    title: "Past Lives",
    year: 2023,
    language: ["Korean", "English"],
    vibe: "love",
    vibeTag: "#InTheMoodForLove",
    genres: ["Romance", "Drama"],
    trendingRank: "#5 Indie Highlight",
    votesCount: "14k",
    summary: "Two childhood sweethearts are reunited in New York for one fateful week as they confront destiny.",
    cast: ["Greta Lee", "Teo Yoo", "John Magaro"],
    topPick: true,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    otts: [{ name: "Prime Video", class: "prime" }],
    rating: 4.8,
    reviews: [
      {
        id: "r4",
        author: "@indie_soul",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
        quote: "If two people leave a connection behind, maybe they meet in another life called In-Yun.",
        comment: "Hauntingly beautiful and poetic.",
        rating: 5,
        likes: 198
      }
    ]
  },
  {
    id: "m5",
    title: "Manjummel Boys",
    year: 2024,
    language: ["Malayalam", "Telugu", "Tamil"],
    vibe: "horror-thriller",
    vibeTag: "#HorrorThriller",
    genres: ["Survival", "Thriller"],
    trendingRank: "#4 Trending in India",
    votesCount: "25k",
    summary: "A vacation turns into a desperate survival mission when a friend falls into the deadly Guna Caves.",
    cast: ["Soubin Shahir", "Sreenath Bhasi", "Balu Varghese"],
    topPick: true,
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    otts: [{ name: "Hotstar", class: "hotstar" }],
    rating: 4.9,
    reviews: [
      {
        id: "r5",
        author: "@survival_cinema",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
        quote: "Kanmani Anbodu Kadhlan... A song turned into the ultimate brotherly rescue anthem!",
        comment: "Edge of your seat thriller from start to finish.",
        rating: 5,
        likes: 412
      }
    ]
  },
  {
    id: "m6",
    title: "Premalu",
    year: 2024,
    language: ["Malayalam", "Telugu"],
    vibe: "weekend",
    vibeTag: "#WeekendVibe",
    genres: ["Comedy", "Romance"],
    trendingRank: "#6 Trending in India",
    votesCount: "19k",
    summary: "A carefree young man moves to Hyderabad for a gate course and stumbles into a chaotic love story.",
    cast: ["Naslen K. Gafoor", "Mamitha Baiju", "Shyam Mohan"],
    topPick: false,
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80",
    otts: [{ name: "Aha", class: "aha" }, { name: "Hotstar", class: "hotstar" }],
    rating: 4.7,
    reviews: [
      {
        id: "r6",
        author: "@hyderabad_diaries",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&q=80",
        quote: "Pure unadulterated chaotic romance set in Hyderabad!",
        comment: "Laugh out loud funny with great music.",
        rating: 4.8,
        likes: 156
      }
    ]
  }
];

// Application State
let activeVibe = "all";
let activeLanguages = ["All"];
let activeOtt = "All";
let isTopPicksMode = false;
let watchlist = [];
let soundscapeEnabled = false;

// Audio Synthesizer Context
let audioCtx = null;
let activeSynthNode = null;
let soundscapeInterval = null;

// DOM Element References
const gatewayHero = document.getElementById("gateway-hero");
const filtersSection = document.getElementById("filters-section");
const contentHeader = document.getElementById("content-header");
const movieGrid = document.getElementById("movie-grid");
const activeViewTitle = document.getElementById("active-view-title");
const resultsCount = document.getElementById("results-count");

const btnYesVibe = document.getElementById("btn-yes-vibe");
const btnNoMood = document.getElementById("btn-no-mood");
const btnTopPicksNav = document.getElementById("btn-top-picks-nav");
const brandHome = document.getElementById("brand-home");

const btnSoundscapeToggle = document.getElementById("btn-soundscape-toggle");
const soundscapeIcon = document.getElementById("soundscape-icon");
const soundscapeStatus = document.getElementById("soundscape-status");
const soundscapeIndicatorBar = document.getElementById("soundscape-indicator-bar");
const activeSoundscapeTag = document.getElementById("active-soundscape-tag");

const watchlistDrawer = document.getElementById("watchlist-drawer");
const drawerOverlay = document.getElementById("drawer-overlay");
const btnOpenWatchlist = document.getElementById("btn-open-watchlist");
const btnCloseWatchlist = document.getElementById("btn-close-watchlist");
const watchlistCountBadge = document.getElementById("watchlist-count");
const watchlistItemsContainer = document.getElementById("watchlist-items-container");

const reviewModalOverlay = document.getElementById("review-modal-overlay");
const btnCloseReviewModal = document.getElementById("btn-close-review-modal");
const btnCancelReview = document.getElementById("btn-cancel-review");
const reviewForm = document.getElementById("review-form");
const modalMovieTitle = document.getElementById("modal-movie-title");
const modalMovieId = document.getElementById("modal-movie-id");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  renderVibePills();
  renderLanguagePills();
  renderOttPills();
  setupEventListeners();
});

// Render Vibe Category Pills
function renderVibePills() {
  const container = document.getElementById("vibe-pills-container");
  container.innerHTML = VIBES.map(vibe => `
    <button class="vibe-pill ${vibe.id === activeVibe ? 'active' : ''}" data-id="${vibe.id}">
      ${vibe.icon} ${vibe.name}
    </button>
  `).join("");
}

// Render Language Filter Pills
function renderLanguagePills() {
  const container = document.getElementById("language-pills-container");
  container.innerHTML = LANGUAGES.map(lang => {
    const isSelected = activeLanguages.includes(lang);
    return `
      <button class="filter-pill ${isSelected ? 'active' : ''}" data-lang="${lang}">
        ${isSelected && lang !== 'All' ? '✓ ' : ''}${lang}
      </button>
    `;
  }).join("");
}

// Render OTT Platform Pills
function renderOttPills() {
  const container = document.getElementById("ott-pills-container");
  container.innerHTML = OTTS.map(ott => `
    <button class="filter-pill ${ott === activeOtt ? 'active' : ''}" data-ott="${ott}">
      ${ott}
    </button>
  `).join("");
}

// Event Listeners setup
function setupEventListeners() {
  // Gateway Hero Actions
  btnYesVibe.addEventListener("click", () => {
    isTopPicksMode = false;
    gatewayHero.classList.add("hidden");
    filtersSection.classList.remove("hidden");
    contentHeader.classList.remove("hidden");
    movieGrid.classList.remove("hidden");
    activeViewTitle.textContent = "Browse by Your Vibe";
    filterAndRenderMovies();
    updateSoundscapeInfo();
  });

  btnNoMood.addEventListener("click", enableTopPicksMode);
  btnTopPicksNav.addEventListener("click", enableTopPicksMode);

  brandHome.addEventListener("click", () => {
    gatewayHero.classList.remove("hidden");
    filtersSection.classList.add("hidden");
    contentHeader.classList.add("hidden");
    movieGrid.classList.add("hidden");
  });

  // Soundscape Toggle
  btnSoundscapeToggle.addEventListener("click", () => {
    soundscapeEnabled = !soundscapeEnabled;
    soundscapeStatus.textContent = soundscapeEnabled ? "ON" : "OFF";
    soundscapeIcon.textContent = soundscapeEnabled ? "🔊" : "🔇";
    btnSoundscapeToggle.classList.toggle("active", soundscapeEnabled);

    if (soundscapeEnabled) {
      startAmbientSynth();
    } else {
      stopAmbientSynth();
    }
  });

  // Vibe Pill Clicks
  document.getElementById("vibe-pills-container").addEventListener("click", (e) => {
    const pill = e.target.closest(".vibe-pill");
    if (!pill) return;
    activeVibe = pill.dataset.id;
    renderVibePills();
    filterAndRenderMovies();
    updateSoundscapeInfo();
    if (soundscapeEnabled) {
      startAmbientSynth();
    }
  });

  // Multi-Select Language Pill Clicks
  document.getElementById("language-pills-container").addEventListener("click", (e) => {
    const pill = e.target.closest(".filter-pill");
    if (!pill) return;
    const clickedLang = pill.dataset.lang;

    if (clickedLang === "All") {
      activeLanguages = ["All"];
    } else {
      activeLanguages = activeLanguages.filter(l => l !== "All");

      if (activeLanguages.includes(clickedLang)) {
        activeLanguages = activeLanguages.filter(l => l !== clickedLang);
      } else {
        activeLanguages.push(clickedLang);
      }

      if (activeLanguages.length === 0) {
        activeLanguages = ["All"];
      }
    }

    renderLanguagePills();
    filterAndRenderMovies();
  });

  // OTT Pill Clicks
  document.getElementById("ott-pills-container").addEventListener("click", (e) => {
    const pill = e.target.closest(".filter-pill");
    if (!pill) return;
    activeOtt = pill.dataset.ott;
    renderOttPills();
    filterAndRenderMovies();
  });

  // Watchlist Slide-Out Drawer Controls
  btnOpenWatchlist.addEventListener("click", toggleWatchlistDrawer);
  btnCloseWatchlist.addEventListener("click", toggleWatchlistDrawer);
  drawerOverlay.addEventListener("click", toggleWatchlistDrawer);

  // Review Modal Controls
  btnCloseReviewModal.addEventListener("click", closeReviewModal);
  btnCancelReview.addEventListener("click", closeReviewModal);
  reviewForm.addEventListener("submit", handleReviewSubmission);

  // Star Rating Picker in Modal
  document.querySelectorAll(".star-rating-input .star-btn").forEach(star => {
    star.addEventListener("click", (e) => {
      const val = parseInt(e.target.dataset.value);
      document.getElementById("review-rating-value").value = val;
      document.querySelectorAll(".star-rating-input .star-btn").forEach(s => {
        s.classList.toggle("active", parseInt(s.dataset.value) <= val);
      });
    });
  });
}

function updateSoundscapeInfo() {
  const vibeObj = VIBES.find(v => v.id === activeVibe) || VIBES[0];
  activeSoundscapeTag.textContent = `🎵 Active Soundscape: ${vibeObj.name} — ${vibeObj.soundscape}`;
}

function enableTopPicksMode() {
  isTopPicksMode = true;
  gatewayHero.classList.add("hidden");
  filtersSection.classList.add("hidden");
  contentHeader.classList.remove("hidden");
  movieGrid.classList.remove("hidden");
  activeViewTitle.textContent = "🌟 Today's Top 5 Vibe Picks";
  filterAndRenderMovies();
}

// Filter Movies & Render Cards matching notebook sketches
function filterAndRenderMovies() {
  let filtered = MOVIES;

  if (isTopPicksMode) {
    filtered = MOVIES.filter(m => m.topPick);
  } else {
    if (activeVibe !== "all") {
      filtered = filtered.filter(m => m.vibe === activeVibe);
    }
    if (!activeLanguages.includes("All")) {
      filtered = filtered.filter(m => {
        const movieLangs = Array.isArray(m.language) ? m.language : [m.language];
        return movieLangs.some(l => activeLanguages.includes(l));
      });
    }
    if (activeOtt !== "All") {
      filtered = filtered.filter(m => m.otts.some(o => o.name === activeOtt));
    }
  }

  const langText = activeLanguages.includes("All") ? "" : ` (${activeLanguages.join(", ")})`;
  resultsCount.textContent = `Showing ${filtered.length} movie${filtered.length === 1 ? '' : 's'}${langText}`;

  if (filtered.length === 0) {
    movieGrid.innerHTML = `<div class="empty-state">No movies match your selected vibe & filters. Try choosing another vibe!</div>`;
    return;
  }

  movieGrid.innerHTML = filtered.map(movie => {
    const isSaved = watchlist.some(w => w.id === movie.id);
    const langsDisplay = Array.isArray(movie.language) ? movie.language.join(", ") : movie.language;
    const genresDisplay = movie.genres ? movie.genres.map(g => `<span class="meta-pill">${g}</span>`).join(" ") : "";
    const castDisplay = movie.cast ? movie.cast.slice(0, 3).map(c => `<span class="cast-avatar" title="${c}">${c.charAt(0)}</span>`).join("") : "";

    return `
      <article class="movie-card" data-id="${movie.id}">
        <!-- Top Vibe Hashtag Pill (Sketch Image 2) -->
        <div class="card-vibe-header">
          <span class="vibe-hashtag">${movie.vibeTag || '#Vibe'}</span>
        </div>

        <div class="poster-wrapper">
          <img src="${movie.poster}" alt="${movie.title}" class="poster-img">
          ${movie.topPick ? `<span class="top-pick-badge">★ Top 5 Pick</span>` : ''}
        </div>

        <div class="movie-info">
          <h3 class="movie-title">${movie.title}</h3>
          
          <!-- Genres Row (Sketch Image 2: [Drama] [Crime]) -->
          <div class="movie-meta">
            ${genresDisplay} • <span class="meta-pill">${langsDisplay}</span> (${movie.year})
          </div>

          <!-- Rating & Ranking Line (Sketch Image 2: ★ 5.0 (18k) #2 Trending in India) -->
          <div class="ranking-line">
            <span class="stars">★ ${movie.rating}</span> <span class="votes">(${movie.votesCount})</span> • <span class="trending-tag">${movie.trendingRank}</span>
          </div>

          <!-- Action Buttons Row (Sketch Image 2: [+ Watchlist] [* Vibecheck]) -->
          <div class="action-buttons-row">
            <button class="watchlist-toggle-btn ${isSaved ? 'saved' : ''}" onclick="toggleWatchlist('${movie.id}')">
              ${isSaved ? '✓ Saved' : '+ Watchlist'}
            </button>
            <button class="write-review-btn" onclick="openReviewModal('${movie.id}')">
              ★ Vibecheck
            </button>
          </div>

          <!-- Summary Snippet (Sketch Image 2) -->
          <div class="summary-box">
            <div class="summary-label">Summary</div>
            <p class="summary-text">${movie.summary}</p>
          </div>

          <!-- Cast & OTT Row (Sketch Image 2) -->
          <div class="cast-ott-row">
            <div class="cast-group">
              <span class="cast-label">Cast:</span>
              <div class="cast-avatars">${castDisplay}</div>
            </div>
            <div class="ott-badges">
              ${movie.otts.map(o => `<span class="ott-badge ${o.class}">▶ ${o.name}</span>`).join('')}
            </div>
          </div>

          <!-- Drops & Reviews (Sketch Image 3) -->
          <div class="polaroid-stream">
            <div class="stream-heading">DROPS & REVIEWS</div>
            ${movie.reviews.map(rev => `
              <div class="polaroid-card">
                <div class="polaroid-author">${rev.author}</div>
                <img src="${rev.image}" class="polaroid-img" alt="Cinematic Still">
                <blockquote class="polaroid-quote">"${rev.quote}"</blockquote>
                
                <!-- Clapperboard Vibecheck Line (Sketch Image 3: 🎬 Vibecheck ★★★★★) -->
                <div class="clapper-vibecheck">
                  🎬 Vibecheck <span class="stars">${'★'.repeat(rev.rating)}</span>
                </div>

                <!-- Personal Comment Line (Sketch Image 3: 💬 "Whenever I feel a little low...") -->
                <div class="review-comment">
                  💬 ${rev.comment}
                </div>

                <div class="polaroid-footer">
                  <button class="like-btn" onclick="likeReview('${movie.id}', '${rev.id}')">
                    ❤️ ${rev.likes} Likes
                  </button>
                  <button class="watchlist-small-btn" onclick="toggleWatchlist('${movie.id}')">
                    + Add to watchlist
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Watchlist Logic
window.toggleWatchlist = function(movieId) {
  const movie = MOVIES.find(m => m.id === movieId);
  if (!movie) return;

  const index = watchlist.findIndex(w => w.id === movieId);
  if (index > -1) {
    watchlist.splice(index, 1);
  } else {
    watchlist.push(movie);
  }

  watchlistCountBadge.textContent = watchlist.length;
  renderWatchlistItems();
  filterAndRenderMovies();
};

function renderWatchlistItems() {
  if (watchlist.length === 0) {
    watchlistItemsContainer.innerHTML = `<p class="empty-state">No movies saved yet. Click "+ Watchlist" on any movie card to save it here!</p>`;
    return;
  }

  watchlistItemsContainer.innerHTML = watchlist.map(m => {
    const langs = Array.isArray(m.language) ? m.language.join(", ") : m.language;
    return `
      <div class="drawer-item">
        <img src="${m.poster}" class="drawer-img" alt="${m.title}">
        <div class="drawer-item-info">
          <h4 class="drawer-item-title">${m.title} (${m.year})</h4>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
            ${langs} • ${m.otts.map(o => o.name).join(', ')}
          </div>
          <button class="drawer-remove-btn" onclick="toggleWatchlist('${m.id}')">Remove</button>
        </div>
      </div>
    `;
  }).join("");
}

function toggleWatchlistDrawer() {
  watchlistDrawer.classList.toggle("hidden");
  drawerOverlay.classList.toggle("hidden");
}

// Review Modal Logic
window.openReviewModal = function(movieId) {
  const movie = MOVIES.find(m => m.id === movieId);
  if (!movie) return;

  modalMovieId.value = movie.id;
  modalMovieTitle.textContent = `Write Vibe Review for "${movie.title}"`;
  reviewModalOverlay.classList.remove("hidden");
};

function closeReviewModal() {
  reviewModalOverlay.classList.add("hidden");
  reviewForm.reset();
}

function handleReviewSubmission(e) {
  e.preventDefault();
  const movieId = modalMovieId.value;
  const imageUrl = document.getElementById("review-image-url").value;
  const dialogue = document.getElementById("review-dialogue").value;
  const comment = document.getElementById("review-comment").value || "A genuine scene pick by Creative Director.";
  const rating = parseInt(document.getElementById("review-rating-value").value);

  const movie = MOVIES.find(m => m.id === movieId);
  if (movie) {
    movie.reviews.unshift({
      id: "r_" + Date.now(),
      author: "@creative_director",
      image: imageUrl,
      quote: dialogue,
      comment: comment,
      rating: rating,
      likes: 1
    });

    filterAndRenderMovies();
    closeReviewModal();
  }
}

// Like Review
window.likeReview = function(movieId, reviewId) {
  const movie = MOVIES.find(m => m.id === movieId);
  if (movie) {
    const rev = movie.reviews.find(r => r.id === reviewId);
    if (rev) {
      rev.likes += 1;
      filterAndRenderMovies();
    }
  }
};

// --- Web Audio API Ambient Soundscape Synthesizer ---
function startAmbientSynth() {
  stopAmbientSynth();

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.15; // Soft ambient volume
    masterGain.connect(audioCtx.destination);
    activeSynthNode = masterGain;

    // Synthesize ambient tones matching the 9 vibes:
    if (activeVibe === "comforting") {
      // Warm Felt Piano Chords
      playPianoChords(audioCtx, masterGain, [261.63, 329.63, 392.00]); // C major chord
    } else if (activeVibe === "hilarious") {
      // Upbeat Brass Horns
      playBrassHorns(audioCtx, masterGain, [349.23, 440.00, 523.25]); // F major horn swell
    } else if (activeVibe === "family-time") {
      // Guitar Strumming
      playGuitarStrum(audioCtx, masterGain, [196.00, 246.94, 293.66, 392.00]); // G chord strum
    } else if (activeVibe === "high-energy") {
      // Driving Drum Beats
      playDrumBeats(audioCtx, masterGain);
    } else if (activeVibe === "low-energy") {
      // Ocean Tides + Soft Piano
      playOceanTides(audioCtx, masterGain);
      playPianoChords(audioCtx, masterGain, [220.00, 261.63, 329.63]); // A minor piano
    } else if (activeVibe === "horror-thriller") {
      // Howling Wind + Heartbeat
      playNightWind(audioCtx, masterGain);
      playHeartbeat(audioCtx, masterGain);
    } else if (activeVibe === "love") {
      // Light Rain on Roof
      playLightRain(audioCtx, masterGain);
    } else if (activeVibe === "refreshing") {
      // Forest Breeze & Birds Chirping
      playForestBreeze(audioCtx, masterGain);
    } else if (activeVibe === "weekend") {
      // Clean Electric Guitar
      playCleanElectricGuitar(audioCtx, masterGain, [293.66, 369.99, 440.00]); // D maj7 chord
    } else {
      // Default Ambient Cinema Mix
      playOceanTides(audioCtx, masterGain);
    }
  } catch (err) {
    console.log("Audio Context Synth:", err);
  }
}

function stopAmbientSynth() {
  if (soundscapeInterval) {
    clearInterval(soundscapeInterval);
    soundscapeInterval = null;
  }
  if (activeSynthNode) {
    try {
      activeSynthNode.disconnect();
    } catch(e) {}
    activeSynthNode = null;
  }
}

// Helper Audio Synth Generators
function playPianoChords(ctx, output, freqs) {
  freqs.forEach((f, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = f;
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    osc.connect(gain);
    gain.connect(output);
    osc.start();
  });
}

function playBrassHorns(ctx, output, freqs) {
  freqs.forEach(f => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.value = f;
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    osc.connect(gain);
    gain.connect(output);
    osc.start();
  });
}

function playGuitarStrum(ctx, output, freqs) {
  freqs.forEach((f, idx) => {
    setTimeout(() => {
      if (!soundscapeEnabled) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = f;
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(output);
      osc.start();
      osc.stop(ctx.currentTime + 1.3);
    }, idx * 120);
  });
}

function playDrumBeats(ctx, output) {
  soundscapeInterval = setInterval(() => {
    if (!soundscapeEnabled) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(120, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(output);
    osc.start();
    osc.stop(ctx.currentTime + 0.16);
  }, 500);
}

function playOceanTides(ctx, output) {
  const bufferSize = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  noise.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 400;

  noise.connect(filter);
  filter.connect(output);
  noise.start();
}

function playNightWind(ctx, output) {
  playOceanTides(ctx, output);
}

function playHeartbeat(ctx, output) {
  soundscapeInterval = setInterval(() => {
    if (!soundscapeEnabled) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(60, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(output);
    osc.start();
    osc.stop(ctx.currentTime + 0.22);
  }, 1000);
}

function playLightRain(ctx, output) {
  playOceanTides(ctx, output);
}

function playForestBreeze(ctx, output) {
  playOceanTides(ctx, output);
}

function playCleanElectricGuitar(ctx, output, freqs) {
  freqs.forEach(f => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = f;
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    osc.connect(gain);
    gain.connect(output);
    osc.start();
  });
}
