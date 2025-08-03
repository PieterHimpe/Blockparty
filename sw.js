const CACHE_NAME = "block-party-cache-v3";

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
    "./images/fig1.png",
"./images/fig2.png",
"./images/fig3.png",
"./images/fig4.png",
"./images/fig5.png",
"./images/fig6.png",
"./images/fig7.png",
"./images/fig8.png",
"./images/fig9.png",
"./images/fig10.png",
"./images/fig11.png",
"./images/fig12.png",
"./images/fig13.png",
"./images/fig14.png",
"./images/fig15.png",
"./images/fig16.png",
"./images/fig17.png",
"./images/fig18.png",
"./images/fig19.png",
"./images/fig20.png",
"./images/fig21.png",
"./images/fig22.png",
"./images/fig23.png",
"./images/fig24.png",
"./images/fig25.png",
"./images/fig26.png",
"./images/fig27.png",
"./images/fig28.png",
"./images/fig29.png",
"./images/fig30.png",
"./images/fig31.png",
"./images/fig32.png",
"./images/fig33.png",
"./images/fig34.png",
"./images/fig35.png",
"./images/fig36.png",
"./images/fig37.png",
"./images/fig38.png",
"./images/fig39.png",
"./images/fig40.png",
"./images/fig41.png",
"./images/fig42.png",
"./images/fig43.png",
"./images/fig44.png",
"./images/fig45.png",
"./images/fig46.png",
"./images/fig47.png",
"./images/fig48.png",
"./images/fig49.png",
"./images/fig50.png",
"./images/fig51.png",
"./images/fig52.png",
"./images/fig53.png",
"./images/fig54.png", 
"./images/fig55.png",
"./images/fig56.png",
"./images/fig57.png",
"./images/fig58.png",
"./images/fig59.png", 
"./images/fig60.png", 
"./images/fig61.png", 
"./images/fig62.png", 
"./images/fig63.png", 
"./images/fig64.png", 
"./images/fig65.png", 
"./images/fig66.png", 
"./images/fig67.png", 
"./images/fig68.png", 
"./images/fig69.png", 
"./images/fig70.png", 
"./images/fig71.png", 
"./images/fig72.png", 
"./images/fig73.png", 
"./images/fig74.png", 
"./images/fig75.png", 
"./images/fig76.png", 
"./images/fig77.png", 
"./images/fig78.png", 
"./images/fig79.png", 
"./images/fig80.png", 
"./images/fig81.png", 
"./images/fig82.png", 
"./images/fig83.png", 
"./images/fig84.png", 
"./images/fig85.png", 
"./images/fig86.png", 
"./images/fig87.png", 
"./images/fig88.png", 
"./images/fig89.png", 
"./images/fig90.png", 
"./images/fig91.png", 
"./images/fig92.png", 
"./images/fig93.png", 
"./images/fig94.png", 
"./images/fig95.png", 
"./images/fig96.png", 
"./images/fig97.png", 
"./images/fig98.png", 
"./images/fig99.png", 
"./images/fig100.png", 
"./images/fig101.png",
"./images/fig102.png", 
"./images/fig103.png", 
"./images/fig104.png", 
"./images/fig105.png", 
"./images/fig106.png",
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
