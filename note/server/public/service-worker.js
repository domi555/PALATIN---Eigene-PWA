importScripts("/precache-manifest.2ad5011e3307f326a4172f9511e3f6bb.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* global workbox */

if (workbox) {
  console.log(`Workbox is loaded`);
  
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
} else {
  console.log(`Workbox didn't load`);
}

