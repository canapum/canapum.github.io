self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('app-canapum-cache').then(function(cache) {
      return cache.addAll([
        'https://appcanapum.blogspot.com/',
        'https://canapum.github.io/service-worker.js',
        'https://canapum.github.io/manifest.json',
        'https://canapum.github.io/images/icons/icon-192x192.png',
        'https://canapum.github.io/images/icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
