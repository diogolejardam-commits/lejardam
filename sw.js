/* Motel Le Jardam — Service Worker
   Cache básico para melhorar performance e permitir funcionamento offline parcial */

const CACHE_NAME = 'lejardam-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/logo-lejardam.jpeg',
  '/manifest.json'
];

// Instala e faz cache dos assets principais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Limpa caches antigos quando atualizar
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Estratégia: Network-first, com fallback pro cache
self.addEventListener('fetch', (event) => {
  // Só cacheia requisições GET do mesmo origem
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clona a resposta pra cachear
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
