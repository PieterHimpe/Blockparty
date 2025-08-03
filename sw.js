const CACHE_NAME = "block-party-cache-v2";

self.addEventListener("install", event => {
  self.skipWaiting(); // Activeer meteen
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./sw.js",
        "./icon-192.png",
        "./images/achtergrondbegin.jpg"  // 👈 nieuwe regel
        "./images/fig1.jpng"
      "./images/fig1.jpng"
      "./images/fig2.jpng"
      "./images/fig3.jpng"
      "./images/fig4.jpng"
      "./images/fig5.jpng"
      "./images/fig6.jpng"
      "./images/fig7.jpng"
      "./images/fig8.jpng"
      "./images/fig9.jpng"
      "./images/fig10.jpng"
      "./images/fig11.jpng"
      "./images/fig12.jpng"
      "./images/fig13.jpng"
      "./images/fig14.jpng"
      "./images/fig15.jpng"
      "./images/fig16.jpng"
      "./images/fig17.jpng"
      "./images/fig18.jpng"
      "./images/fig19.jpng"
      "./images/fig20.jpng"
      "./images/fig21.jpng"
      "./images/fig22.jpng"
      "./images/fig23.jpng"
      "./images/fig24.jpng"
      "./images/fig25.jpng"
      "./images/fig26.jpng"
      "./images/fig27.jpng"
      "./images/fig28.jpng"
      "./images/fig29.jpng"
      "./images/fig30.jpng"
      "./images/fig31.jpng"
      "./images/fig32.jpng"
      "./images/fig33.jpng"
      "./images/fig34.jpng"
      "./images/fig35.jpng"
      "./images/fig36.jpng"
      "./images/fig37.jpng"
      "./images/fig38.jpng"
      "./images/fig39.jpng"
      "./images/fig40.jpng"
      "./images/fig41.jpng"
      "./images/fig42.jpng"
      "./images/fig43.jpng"
      "./images/fig44.jpng"
      "./images/fig45.jpng"
      "./images/fig46.jpng"
      "./images/fig47.jpng"
      "./images/fig48.jpng"
      "./images/fig49.jpng"
      "./images/fig50.jpng"
      "./images/fig51.jpng"
      "./images/fig52.jpng"
      "./images/fig53.jpng"     
        "./icon-512.png"
        // voeg hier je andere bestanden toe: JS, CSS, afbeeldingen...
      ]);
    })
  );
});

self.addEventListener("activate", event => {
  // Verwijder oude caches
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request) // 🔄 Altijd eerst netwerk proberen
      .then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => caches.match(event.request)) // Als offline: gebruik cache
  );
});
