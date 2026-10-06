// Movie Vibe — Interactive Application Logic

// 9 Vibe Categories
const VIBES = [
  { id: "all", name: "All Vibes", icon: "🌈" },
  { id: "comforting", name: "Comforting", icon: "🛋️" },
  { id: "high-energy", name: "High Energy", icon: "⚡" },
  { id: "low-energy", name: "Low Energy", icon: "🌙" },
  { id: "family-time", name: "Family Time", icon: "👨‍👩‍👧‍👦" },
  { id: "love", name: "In the Mood for Love", icon: "💌" },
  { id: "hilarious", name: "Hilarious", icon: "😂" },
  { id: "weekend", name: "Weekend Vibe", icon: "🥂" },
  { id: "refreshing", name: "Refreshing", icon: "🌿" },
  { id: "horror-thriller", name: "Horror / Thriller", icon: "🍿" }
];

// Languages & OTT Platforms
const LANGUAGES = ["All", "Telugu", "Hindi", "English", "Tamil", "Malayalam", "Korean"];
const OTTS = ["All", "Netflix", "Prime Video", "Aha", "Hotstar", "Zee5"];

// Mock Movie Database with Polaroid Quote Reviews & OTT Badges
let MOVIES = [
  {
    id: "m1",
    title: "Hi Nanna",
    year: 2023,
    language: "Telugu",
    vibe: "comforting",
    topPick: true,
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    otts: [{ name: "Netflix", class: "netflix" }, { name: "Aha", class: "aha" }],
    rating: 4.9,
    reviews: [
      {
        id: "r1",
        author: "@nani_fanatic",
        image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&q=80",
        dialogue: "Love isn't about how long you stay together, it's about how deeply you care even in silence.",
        rating: 5,
        likes: 184
      }
    ]
  },
  {
    id: "m2",
    title: "RRR",
    year: 2022,
    language: "Telugu",
    vibe: "high-energy",
    topPick: true,
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
    otts: [{ name: "Netflix", class: "netflix" }, { name: "Hotstar", class: "hotstar" }],
    rating: 5.0,
    reviews: [
      {
        id: "r2",
        author: "@action_cinephile",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&q=80",
        dialogue: "Dosti is thicker than blood. The fire and water duo made history!",
        rating: 5,
        likes: 310
      }
    ]
  },
  {
    id: "m3",
    title: "3 Idiots",
    year: 2009,
    language: "Hindi",
    vibe: "hilarious",
    topPick: true,
    poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&q=80",
    otts: [{ name: "Prime Video", class: "prime" }],
    rating: 4.9,
    reviews: [
      {
        id: "r3",
        author: "@rancho_vibes",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80",
        dialogue: "All Izz Well! Pursue excellence, and success will chase you.",
        rating: 5,
        likes: 245
      }
    ]
  },
  {
    id: "m4",
    title: "Past Lives",
    year: 2023,
    language: "Korean",
    vibe: "love",
    topPick: true,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    otts: [{ name: "Prime Video", class: "prime" }],
    rating: 4.8,
    reviews: [
      {
        id: "r4",
        author: "@indie_soul",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
        dialogue: "If two people leave a connection behind, maybe they meet in another life called In-Yun.",
        rating: 5,
        likes: 198
      }
    ]
  },
  {
    id: "m5",
    title: "Manjummel Boys",
    year: 2024,
    language: "Malayalam",
    vibe: "horror-thriller",
    topPick: true,
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    otts: [{ name: "Hotstar", class: "hotstar" }],
    rating: 4.9,
    reviews: [
      {
        id: "r5",
        author: "@survival_cinema",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
        dialogue: "Kanmani Anbodu Kadhlan... A song turned into the ultimate brotherly rescue anthem!",
        rating: 5,
        likes: 412
      }
    ]
  },
  {
    id: "m6",
    title: "Premalu",
    year: 2024,
    language: "Malayalam",
    vibe: "weekend",
    topPick: false,
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80",
    otts: [{ name: "Aha", class: "aha" }, { name: "Hotstar", class: "hotstar" }],
    rating: 4.7,
    reviews: [
      {
        id: "r6",
        author: "@hyderabad_diaries",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&q=80",
        dialogue: "Pure unadulterated chaotic romance set in Hyderabad. Pure weekend joy!",
        rating: 4.8,
        likes: 156
      }
    ]
  }
];

// Application State
let activeVibe = "all";
let activeLanguage = "All";
let activeOtt = "All";
let isTopPicksMode = false;
let watchlist = [];

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
  container.innerHTML = LANGUAGES.map(lang => `
    <button class="filter-pill ${lang === activeLanguage ? 'active' : ''}" data-lang="${lang}">
      ${lang}
    </button>
  `).join("");
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
  });

  btnNoMood.addEventListener("click", enableTopPicksMode);
  btnTopPicksNav.addEventListener("click", enableTopPicksMode);

  brandHome.addEventListener("click", () => {
    gatewayHero.classList.remove("hidden");
    filtersSection.classList.add("hidden");
    contentHeader.classList.add("hidden");
    movieGrid.classList.add("hidden");
  });

  // Vibe Pill Clicks
  document.getElementById("vibe-pills-container").addEventListener("click", (e) => {
    const pill = e.target.closest(".vibe-pill");
    if (!pill) return;
    activeVibe = pill.dataset.id;
    renderVibePills();
    filterAndRenderMovies();
  });

  // Language Pill Clicks
  document.getElementById("language-pills-container").addEventListener("click", (e) => {
    const pill = e.target.closest(".filter-pill");
    if (!pill) return;
    activeLanguage = pill.dataset.lang;
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

  // Watchlist Drawer Controls
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

function enableTopPicksMode() {
  isTopPicksMode = true;
  gatewayHero.classList.add("hidden");
  filtersSection.classList.add("hidden");
  contentHeader.classList.remove("hidden");
  movieGrid.classList.remove("hidden");
  activeViewTitle.textContent = "🌟 Today's Top 5 Vibe Picks";
  filterAndRenderMovies();
}

// Filter Movies & Render Cards
function filterAndRenderMovies() {
  let filtered = MOVIES;

  if (isTopPicksMode) {
    filtered = MOVIES.filter(m => m.topPick);
  } else {
    if (activeVibe !== "all") {
      filtered = filtered.filter(m => m.vibe === activeVibe);
    }
    if (activeLanguage !== "All") {
      filtered = filtered.filter(m => m.language === activeLanguage);
    }
    if (activeOtt !== "All") {
      filtered = filtered.filter(m => m.otts.some(o => o.name === activeOtt));
    }
  }

  resultsCount.textContent = `Showing ${filtered.length} movie${filtered.length === 1 ? '' : 's'}`;

  if (filtered.length === 0) {
    movieGrid.innerHTML = `<div class="empty-state">No movies match your selected vibe & filters. Try choosing another vibe!</div>`;
    return;
  }

  movieGrid.innerHTML = filtered.map(movie => {
    const isSaved = watchlist.some(w => w.id === movie.id);
    return `
      <article class="movie-card" data-id="${movie.id}">
        <div class="poster-wrapper">
          <img src="${movie.poster}" alt="${movie.title}" class="poster-img">
          ${movie.topPick ? `<span class="top-pick-badge">★ Top 5 Pick</span>` : ''}
          <button class="watchlist-toggle-btn ${isSaved ? 'saved' : ''}" onclick="toggleWatchlist('${movie.id}')">
            ${isSaved ? '✓ Saved' : '+ Watchlist'}
          </button>
        </div>

        <div class="movie-info">
          <h3 class="movie-title">${movie.title}</h3>
          <div class="movie-meta">
            <span>${movie.year}</span> • 
            <span class="meta-pill">${movie.language}</span>
          </div>

          <div class="ott-section">
            <span class="ott-label">Available On</span>
            <div class="ott-badges">
              ${movie.otts.map(o => `<span class="ott-badge ${o.class}">▶ ${o.name}</span>`).join('')}
            </div>
          </div>

          <div class="rating-row">
            <span class="stars">★ ${movie.rating} / 5</span>
            <span style="color: var(--text-muted); font-size: 0.8rem;">${movie.reviews.length} Polaroid Reviews</span>
          </div>

          <button class="write-review-btn" onclick="openReviewModal('${movie.id}')">
            ✍️ Write Vibe Review
          </button>

          <div class="polaroid-stream">
            <div class="stream-heading">Community Scene Reviews</div>
            ${movie.reviews.map(rev => `
              <div class="polaroid-card">
                <img src="${rev.image}" class="polaroid-img" alt="Scene Still">
                <blockquote class="polaroid-quote">"${rev.dialogue}"</blockquote>
                <div class="polaroid-footer">
                  <span>${rev.author} • ★ ${rev.rating}/5</span>
                  <button class="like-btn" onclick="likeReview('${movie.id}', '${rev.id}')">
                    ❤️ <span>${rev.likes}</span>
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

  watchlistItemsContainer.innerHTML = watchlist.map(m => `
    <div class="drawer-item">
      <img src="${m.poster}" class="drawer-img" alt="${m.title}">
      <div class="drawer-item-info">
        <h4 class="drawer-item-title">${m.title} (${m.year})</h4>
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
          ${m.language} • ${m.otts.map(o => o.name).join(', ')}
        </div>
        <button class="drawer-remove-btn" onclick="toggleWatchlist('${m.id}')">Remove</button>
      </div>
    </div>
  `).join("");
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
  const rating = parseInt(document.getElementById("review-rating-value").value);

  const movie = MOVIES.find(m => m.id === movieId);
  if (movie) {
    movie.reviews.unshift({
      id: "r_" + Date.now(),
      author: "@creative_director",
      image: imageUrl,
      dialogue: dialogue,
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
