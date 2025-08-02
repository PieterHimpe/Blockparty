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
        "./images/achtergrondpag1.jpg"  // 👈 nieuwe regel
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
