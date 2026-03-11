self.addEventListener('install', (e) => {
    self.skipWaiting();
});
self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});
self.addEventListener('fetch', (e) => {
    // Toto je zde naschvál prázdné, aby Chrome povolil instalaci
});
