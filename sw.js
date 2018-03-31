/* sw.js */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded `);
} else {
  console.log(`Boo! Workbox didn't load `);
}
workbox.routing.registerRoute(
        /background_sf_pano.jpg$|profile_photo.jpg$|background_sf_pano_300x300.jpg$|about_background.jpg/,
    workbox.strategies.cacheFirst({
        cacheName: 'speciffic_images',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    }),
); 

workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg|js|css)$|/,
    workbox.strategies.cacheFirst({
        cacheName: 'static-resources',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    }),
); 



// for Google Analytics
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');
workbox.googleAnalytics.initialize();

