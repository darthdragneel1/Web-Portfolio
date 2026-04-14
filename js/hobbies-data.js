/**
 * hobbies-data.js
 * ─────────────────────────────────────────────────────
 * Central data file for the Hobbies page.
 * Edit the arrays/objects below to add or update
 * cities, movies, anime, games, crafts, and books.
 * No HTML changes are needed after editing this file.
 * ─────────────────────────────────────────────────────
 */


// ── THE OPEN ROAD ──────────────────────────────────────────────
// Add cities you have visited as { name, lat, lng }
// Tip: Search "[City Name] lat lng" on Google for coordinates.
const VISITED_CITIES = [
  // ── India ────────────────────────────────────────────────────
  { name: "Hyderabad, India",       lat:  17.3850, lng:  78.4867 },
  { name: "Guntur, India",          lat:  16.3067, lng:  80.4365 },
  { name: "Visakhapatnam, India",   lat:  17.6868, lng:  83.2185 },
  { name: "Delhi, India",           lat:  28.6139, lng:  77.2090 },
  { name: "Mumbai, India",          lat:  19.0760, lng:  72.8777 },
  { name: "Chennai, India",         lat:  13.0827, lng:  80.2707 },

  // ── Europe & Middle East ──────────────────────────────────────
  { name: "Paris, France",          lat:  48.8566, lng:   2.3522 },
  { name: "Abu Dhabi, UAE",         lat:  24.4539, lng:  54.3773 },
  { name: "Riyadh, Saudi Arabia",   lat:  24.7136, lng:  46.6753 },

  // ── United States ─────────────────────────────────────────────
  { name: "Detroit, MI",            lat:  42.3314, lng: -83.0458 },
  { name: "Ann Arbor, MI",          lat:  42.2808, lng: -83.7430 },
  { name: "Holland, MI",            lat:  42.7876, lng: -86.1089 },
  { name: "Hell, MI",               lat:  42.4356, lng: -84.0999 },
  { name: "Lansing, MI",            lat:  42.7325, lng: -84.5555 },
  { name: "St. Louis, MO",          lat:  38.6270, lng: -90.1994 },
  { name: "Cincinnati, OH",         lat:  39.1031, lng: -84.5120 },
  { name: "New York, NY",           lat:  40.7128, lng: -74.0060 },
  { name: "Washington D.C.",        lat:  38.9072, lng: -77.0369 },
  { name: "Fredericksburg, VA",     lat:  38.3032, lng: -77.4605 },
  { name: "Wilmington, DE",         lat:  39.7447, lng: -75.5484 },
  // ↓ Add more cities here
];


// ── CINEMATIC STORIES ──────────────────────────────────────────
// Add entries to movies, anime, or games arrays.
// Fields: title (string), year (string), note (string)
const CINEMATIC_FAVORITES = {
  movies: [
    { title: "Interstellar",       year: "2014",      note: "The most scientifically ambitious blockbuster ever made. Nolan at his absolute peak." },
    { title: "The Dark Knight",    year: "2008",      note: "Ledger's Joker redefined screen villainy. A masterclass in tension and moral complexity." },
    { title: "Dune",               year: "2021",      note: "Villeneuve's world-building is unmatched. Epic in every sense of the word." },
    { title: "Avengers: Endgame",  year: "2019",      note: "A decade of storytelling, perfectly concluded. The payoff was everything." },
    { title: "Spirited Away",      year: "2001",      note: "Miyazaki's magnum opus. Imagination without limits." },
    // ↓ Add movies here
  ],
  anime: [
    { title: "Attack on Titan",                   year: "2013 – 2023", note: "A generational masterpiece. The final arc is unlike anything else in the medium." },
    { title: "Fullmetal Alchemist: Brotherhood",  year: "2009",        note: "Near-perfect storytelling from the first episode to the last." },
    { title: "Steins;Gate",                       year: "2011",        note: "The best time-travel narrative in any medium. Period." },
    { title: "Re:Zero",                           year: "2016 –",      note: "Subverts every isekai trope intelligently. Emotionally brutal." },
    { title: "Demon Slayer",                      year: "2019 –",      note: "Ufotable's animation sets a new industry standard every arc." },
    { title: "One Piece", year:"1999-", note: "Do I need to say more, Nakama?"}
    // ↓ Add anime here
  ],
  games: [
    { title: "Elden Ring",      year: "2022", note: "FromSoftware's magnum opus. An open world that demands and rewards patience." },
    { title: "The Last of Us",  year: "2013", note: "Raised the bar for narrative in gaming permanently." },
    { title: "Minecraft",       year: "2011", note: "The original creative sandbox. Infinite replayability across every age group." },
    { title: "Hollow Knight",   year: "2017", note: "Immaculate atmosphere and responsive combat. An indie masterpiece." },
    // ↓ Add games here
  ],
};


// ── DIGITAL CRAFT ──────────────────────────────────────────────
// Add coding experiments, tools, or side projects.
// Fields: title, description, url, icon (Font Awesome class)
const DIGITAL_CRAFTS = [
  {
    title:       "Notular",
    description: "AI-powered medical documentation platform. HIPAA-compliant, multi-tenant SaaS built with React (TypeScript) and Python (FastAPI).",
    url:         "https://notular.net",
    icon:        "fa-solid fa-hospital-user",
  },
  // ↓ Add more projects here
  // {
  //   title:       "Your Project Name",
  //   description: "Short description of what it does and why it's interesting.",
  //   url:         "https://your-link.com",
  //   icon:        "fa-solid fa-code",
  // },
];


// ── LITERARY WORLDS ────────────────────────────────────────────
// Add books, novels, or literary works.
// Fields: tag, title, author, note, isFavorite (true/false)
const FAVORITE_BOOKS = [
  { tag: "Science Fiction",     title: "Project Hail Mary",           author: "Andy Weir",          note: "A thrilling deep-dive into scientific problem-solving and cosmic exploration.",                                      isFavorite: false },
  { tag: "Fantasy Series",      title: "A Song of Ice and Fire",      author: "George R.R. Martin",  note: "Unmatched political intrigue and complex world-building across an entire continent.",                              isFavorite: false },
  { tag: "Hard Sci-Fi",         title: "Remembrance of Earth's Past", author: "Liu Cixin",           note: "A grand, philosophical journey through space and time, starting with The Three-Body Problem.",                    isFavorite: false },
  { tag: "Literature",          title: "Light Novel Series",          author: "Various",             note: "Exploring diverse narratives and artistic styles within modern Japanese literature.",                             isFavorite: false },
  { tag: "Biography",           title: "Leonardo da Vinci",           author: "Walter Isaacson",     note: "A profound look at the ultimate polymath, blending art, science, and relentless curiosity.",                      isFavorite: true  },
  { tag: "Theoretical Physics", title: "The Theory of Everything",    author: "Stephen Hawking",     note: "Exploring the fundamental nature of the universe and the origin of existence in accessible language.",            isFavorite: false },
  // ↓ Add books here
];
