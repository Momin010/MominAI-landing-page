// public/sw.js

self.addEventListener('install', (event) => {
  // Activate the new service worker as soon as it's installed.
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  // Take control of all clients as soon as the service worker is activated.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'RELOAD') {
        event.ports[0].postMessage({ reloaded: true });
    }
});

self.addEventListener('fetch', (event) => {
  // For all navigation and sub-resource requests, do nothing.
  // The browser will handle them normally.
});