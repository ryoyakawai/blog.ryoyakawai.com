/* sw.js */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

let VERSION = '2.0.0';

if (workbox) {
  console.log(`Yay! Workbox is loaded `);
} else {
  console.log(`Boo! Workbox didn't load `);
}
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images-' + VERSION,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 10 * 24 * 60 * 60, // 10 Days
      }),
    ],
  }),
);

/*
workbox.routing.registerRoute(
        /avatar.jpg$|profile_photo.jpg$|background_sf_pano_300x300.jpg$|about_background.jpg/,
    workbox.strategies.cacheFirst({
        cacheName: 'speciffic-images_' + VERSION,
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
            }),
        ],
    }),
); 

workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg|js|css)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'static-resources_'+ VERSION,
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
            }),
        ],
    }),
); 
*/

// for Google Analytics
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');
workbox.googleAnalytics.initialize();

/* https://qiita.com/k_7016/items/503fbb85c9dba80d23f7 */
/*
let VERSION = "1.0.2";
let CACHE_NAME = 'blog.ryoyakawai.com-' + VERSION;
let CACHE_MAX = 40;
let FILES_TO_CACHE = [
    './index.html',
];

self.addEventListener('install', function( event ) {
  event.waitUntil(
      caches.open( CACHE_NAME ).then( function( cache ) {
          return cache.addAll(FILES_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', function( event ) {
  event.respondWith(
      caches.match( event.request ).then( function( response ) {
          if (response) {
              return response;
          }
          
          let fetchRequest = event.request.clone();
          let request = new Request( fetchRequest.url, { cache: 'no-cache', mode: 'no-cors' } );

          return fetch( request ).then( function( response ) {
              // returns data from cache
              if (!response || response.status !== 200 || response.type !== 'basic') {
                  return response;
              }
              
              let responseToCache = response.clone();

              caches.open( CACHE_NAME ).then(function( cache ) {
                  cache.put(event.request, responseToCache);
              });
              
              return response;
          });
      })
  );
});
*/
