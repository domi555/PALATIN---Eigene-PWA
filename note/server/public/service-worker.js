importScripts("/precache-manifest.c8db0a53a3b578944682144e19ac8e60.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* global workbox */

if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);

  // workbox.routing.registerRoute(
  //   '/notes',
  //   new workbox.strategies.StaleWhileRevalidate({
  //     cacheName: 'note-cache',
  //   }),
  // );

  workbox.routing.registerRoute(
    '/fields',
    new workbox.strategies.NetworkFirst({
      cacheName: 'field-cache',
    }),
  );
  workbox.routing.registerRoute(
    new RegExp('/fields/*'),
    new workbox.strategies.NetworkFirst({
      cacheName: 'field-number-cache',
    }),
  );
} else {
  console.log(`Workbox didn't load`);
}

