importScripts("/billiard-score-board-online/precache-manifest.3911ef95c52fca325358a0426fd0ae72.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

