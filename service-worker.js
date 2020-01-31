importScripts("/billiard-score-board-online/precache-manifest.53a4f6223394f6491d89dc7cad98d4f9.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log(`Workbox is loaded`);
  self.__precacheManifest = [].concat(self.__precacheManifest || []);
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

  self.addEventListener("message", e => {
    if (e.data.action == "skipWaiting") self.skipWaiting();
  });
} else {
  console.log(`Workbox didn't load`);
}

