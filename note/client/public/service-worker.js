/* global workbox */

if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);

  workbox.routing.registerRoute(
    '/notes',
    new workbox.strategies.NetworkFirst({
      cacheName: 'note-cache',
    }),
  );

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
