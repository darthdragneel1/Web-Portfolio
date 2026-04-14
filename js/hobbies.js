/**
 * hobbies.js
 * ─────────────────────────────────────────────────────
 * Handles all interactive behaviour on the Hobbies page:
 *   - Accordion expand / collapse with smooth animation
 *   - Leaflet world map (lazy-initialised on first open)
 *   - Cinematic tab switching (Movies / Anime / Games)
 *   - Rendering books, crafts, and cinematic lists
 *     from hobbies-data.js
 * ─────────────────────────────────────────────────────
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Render content from data file ──────────────────────────
  renderCinematicTab('movies');
  renderCrafts();
  renderBooks();

  // ── Accordion ──────────────────────────────────────────────
  let mapInitialised = false;

  document.querySelectorAll('.hobby-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.hobby-item');
      const isActive = item.classList.contains('active');

      // Toggle this item (each card is independent)
      item.classList.toggle('active', !isActive);
      btn.setAttribute('aria-expanded', String(!isActive));

      // Lazy-init map on first open; re-validate size after transition
      if (!isActive && item.id === 'item-road') {
        if (!mapInitialised) {
          // Init immediately so Leaflet can attach, then re-draw after the
          // 550 ms max-height transition fully reveals the container.
          initMap();
          mapInitialised = true;
          setTimeout(() => {
            if (window._hobbyMap) window._hobbyMap.invalidateSize();
          }, 620);
        } else {
          // Panel was already initialised — just re-fit after re-open
          setTimeout(() => {
            if (window._hobbyMap) window._hobbyMap.invalidateSize();
          }, 620);
        }
      }
    });
  });

  // ── Cinematic tab switching ─────────────────────────────────
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Active button state
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Swap content into the single container
      renderCinematicTab(btn.dataset.tab);
    });
  });

});


// ── World Map (Leaflet) ───────────────────────────────────────
function initMap() {
  const map = L.map('travel-map', {
    center: [20, 10],
    zoom: 2,
    zoomControl: true,
    scrollWheelZoom: false,
  });

  // Store reference for later invalidateSize() calls
  window._hobbyMap = map;

  // Dark CartoDB tile — matches site theme
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ' +
      '&copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  // Accent-coloured pulse dot for each visited city
  VISITED_CITIES.forEach(city => {
    const icon = L.divIcon({
      className: '',
      html: `<div class="map-dot" title="${city.name}"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
      popupAnchor: [0, -10],
    });

    L.marker([city.lat, city.lng], { icon })
      .addTo(map)
      .bindPopup(`<strong>${city.name}</strong>`);
  });
}


// ── Cinematic Stories ─────────────────────────────────────────
// Renders items for the given tab key into the single content container.
function renderCinematicTab(tab) {
  const container = document.getElementById('cinematic-content');
  if (!container || !CINEMATIC_FAVORITES[tab]) return;

  container.innerHTML = CINEMATIC_FAVORITES[tab].map(item => `
    <div class="cinematic-item">
      <div class="cinematic-item-header">
        <span class="cinematic-title">${item.title}</span>
        <span class="cinematic-year">${item.year}</span>
      </div>
      <p class="cinematic-note">${item.note}</p>
    </div>
  `).join('');
}


// ── Digital Craft ─────────────────────────────────────────────
function renderCrafts() {
  const container = document.getElementById('crafts-grid');
  if (!container) return;

  if (!DIGITAL_CRAFTS.length) {
    container.innerHTML = '<p style="color:var(--text-dim);">No crafts added yet — update <code>js/hobbies-data.js</code> to add projects.</p>';
    return;
  }

  container.innerHTML = DIGITAL_CRAFTS.map(craft => `
    <a href="${craft.url}" target="_blank" rel="noopener noreferrer" class="craft-card">
      <div class="craft-card-icon">
        <i class="${craft.icon}"></i>
      </div>
      <h4>${craft.title}</h4>
      <p>${craft.description}</p>
      <span class="craft-link-label">
        View Project&nbsp;<i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.75rem;"></i>
      </span>
    </a>
  `).join('');
}


// ── Literary Worlds ───────────────────────────────────────────
function renderBooks() {
  const container = document.getElementById('books-grid');
  if (!container) return;

  container.innerHTML = FAVORITE_BOOKS.map(book => `
    <div class="book-card ${book.isFavorite ? 'book-card--fav' : ''}">
      <span class="tag ${book.isFavorite ? 'tag--fav' : ''}">${book.isFavorite ? '★ Favourite' : book.tag}</span>
      <h4>${book.title}</h4>
      <p class="book-author">by ${book.author}</p>
      <p>${book.note}</p>
    </div>
  `).join('');
}
