// sw.js - Service Worker для PWA
const CACHE_NAME = 'rosgvardia-v1';

self.addEventListener('install', function(event) {
    console.log('Service Worker установлен');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker активирован');
});