// Service worker minimo - no cachea el HTML para que siempre tome la version nueva
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
  self.clients.claim();
});
// No cachea nada - siempre va a la red
self.addEventListener('fetch', e => {});
