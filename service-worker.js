importScripts("/billiard-score-board-online/precache-manifest.bd3932852d645acc2fb81a952bbcf662.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

