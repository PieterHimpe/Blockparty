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
        "./images/achtergrondbegin.jpg",  // 👈 nieuwe regel
      "./images/fig1.jpg",
      "./images/fig2.jpg",
      "./images/fig3.jpg",
      "./images/fig4.jpg",
      "./images/fig5.jpg",
      "./images/fig6.jpg",
      "./images/fig7.jpg",
      "./images/fig8.jpg",
      "./images/fig9.jpg",
      "./images/fig10.jpg",
      "./images/fig11.jpg",
      "./images/fig12.jpg",
      "./images/fig13.jpg",
      "./images/fig14.jpg",
      "./images/fig15.jpg",
      "./images/fig16.jpg",
      "./images/fig17.jpg",
      "./images/fig18.jpg",
      "./images/fig19.jpg",
      "./images/fig20.jpg",
      "./images/fig21.jpg",
      "./images/fig22.jpg",
      "./images/fig23.jpg",
      "./images/fig24.jpg",
      "./images/fig25.jpg",
      "./images/fig26.jpg",
      "./images/fig27.jpg",
      "./images/fig28.jpg",
      "./images/fig29.jpg",
      "./images/fig30.jpg",
      "./images/fig31.jpg",
      "./images/fig32.jpg",
      "./images/fig33.jpg",
      "./images/fig34.jpg",
      "./images/fig35.jpg",
      "./images/fig36.jpg",
      "./images/fig37.jpg",
      "./images/fig38.jpg",
      "./images/fig39.jpg",
      "./images/fig40.jpg",
      "./images/fig41.jpg",
      "./images/fig42.jpg",
      "./images/fig43.jpg",
      "./images/fig44.jpg",
      "./images/fig45.jpg",
      "./images/fig46.jpg",
      "./images/fig47.jpg",
      "./images/fig48.jpg",
      "./images/fig49.jpg",
      "./images/fig50.jpg",
      "./images/fig51.jpg",
      "./images/fig52.jpg",
      "./images/fig53.jpg",
       "./images/fig54.jpg", 
       "./images/fig55.jpg",
       "./images/fig56.jpg",
       "./images/fig57.jpg",
       "./images/fig58.jpg",
       "./images/fig59.jpg", 
       "./images/fig60.jpg", 
       "./images/fig61.jpg", 
       "./images/fig62.jpg", 
       "./images/fig63.jpg", 
       "./images/fig64.jpg", 
       "./images/fig65.jpg", 
       "./images/fig66.jpg", 
       "./images/fig67.jpg", 
       "./images/fig68.jpg", 
       "./images/fig69.jpg", 
       "./images/fig70.jpg", 
       "./images/fig71.jpg", 
       "./images/fig72.jpg", 
       "./images/fig73.jpg", 
       "./images/fig74.jpg", 
       "./images/fig75.jpg", 
       "./images/fig76.jpg", 
       "./images/fig77.jpg", 
       "./images/fig78.jpg", 
       "./images/fig79.jpg", 
       "./images/fig80.jpg", 
       "./images/fig81.jpg", 
       "./images/fig82.jpg", 
       "./images/fig83.jpg", 
       "./images/fig84.jpg", 
       "./images/fig85.jpg", 
       "./images/fig86.jpg", 
       "./images/fig87.jpg", 
       "./images/fig88.jpg", 
       "./images/fig89.jpg", 
       "./images/fig90.jpg", 
       "./images/fig91.jpg", 
       "./images/fig92.jpg", 
       "./images/fig93.jpg", 
       "./images/fig94.jpg", 
       "./images/fig95.jpg", 
       "./images/fig96.jpg", 
       "./images/fig97.jpg", 
       "./images/fig98.jpg", 
       "./images/fig99.jpg", 
       "./images/fig100.jpg", 
       "./images/fig101.jpg",
       "./images/fig102.jpg", 
       "./images/fig103.jpg", 
       "./images/fig104.jpg", 
       "./images/fig105.jpg", 
       "./images/fig106.jpg",
        "./icon-512.png"
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
