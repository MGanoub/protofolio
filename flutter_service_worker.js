'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c9b2269e3e9ad2667a206353a4d9c950",
"assets/AssetManifest.bin.json": "c2bc82e5b9efd03a967a8588fc5cd7f8",
"assets/AssetManifest.json": "dc42ccf9760300dce697a9a74d42a66d",
"assets/assets/animatedImages/Animated_welcome.json": "32c23644e5e2b4ee19befdfca683c978",
"assets/assets/animatedImages/Animation_loading.json": "b90bcb6ceb76c0b8d884749a00dc68e4",
"assets/assets/animatedImages/welcome_animated.json": "d1eff9d4a1e3af57a7166de2c925ce8b",
"assets/assets/fonts/Cookie-Regular.ttf": "a7d2f8c19f31471e38c936a06615f64c",
"assets/assets/fonts/MajorMonoDisplay-Regular.ttf": "e7acc228230d22332855765872b0a3bf",
"assets/assets/fonts/NotoSerifDisplay.ttf": "d682a64c938af0d4eb33f18bea94af5e",
"assets/assets/images/agile.png": "0c9bf67d44296717e34cc8c76fa22f17",
"assets/assets/images/airbnbC.mp4": "41d9cabc551506d5f16432faa6b67204",
"assets/assets/images/android.png": "d60a8731aec7ab6487df7b077a634e18",
"assets/assets/images/bitbucket.png": "9e8164e2fcfb93dd2c3957460d3d2632",
"assets/assets/images/c++.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/assets/images/dart.png": "c43efab451a1511dcb627e453cd58d49",
"assets/assets/images/datingApp.mp4": "bb019804947808e2abc5938db80b7937",
"assets/assets/images/desktop.png": "963fa733ed41143ef7edc8ee3fb1ca8b",
"assets/assets/images/flutter.png": "e55a2dd359de8648b93e80214230a66d",
"assets/assets/images/git.png": "964861c9b224efa8f63796e2c2b2bd65",
"assets/assets/images/imgs.jpeg": "53efa20f89b82d73719c482c075fe930",
"assets/assets/images/ios.png": "671cd61a346b8e679de2d8a6d4d44f4a",
"assets/assets/images/iphone14_mockuup.jpg": "09f1564eda0822d1a9eef4b14bbeb45c",
"assets/assets/images/jira.jpg": "0c6464b8ad616ee0ba52f4429fb5e0f3",
"assets/assets/images/js.png": "89acd7cac26c44467d225ffb21dad8e1",
"assets/assets/images/MG.png": "50986ba1832c87b1f79553a8fde77ccd",
"assets/assets/images/office.png": "facb227b880de3528ce5e5fcd343efe6",
"assets/assets/images/python.png": "b14f5c26314da87b188696cc228b6e75",
"assets/assets/images/qt.png": "2ae857f228ef4511942a51e8e184bdaf",
"assets/assets/images/web.png": "53a1d45198f240e5d1837b248b05c317",
"assets/assets/images/websiteVid.mp4": "571bef6582f514e519567592ec0883d9",
"assets/FontManifest.json": "ce45020344b46a0730a26f02a93a4e7e",
"assets/fonts/MaterialIcons-Regular.otf": "8d1f1f0d26a0ac9eb3a8de5d35b32e82",
"assets/NOTICES": "fe6e9f9f34c0e70996587655e967296b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2cae89fbc0ce5eb0d709f3a7ac42571b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "e05c89961034c7653ed3a3e6ffd81bf8",
"icons/Icon-512.png": "ec845a56c316b55bddf2b1f29915f159",
"icons/Icon-maskable-192.png": "e05c89961034c7653ed3a3e6ffd81bf8",
"icons/Icon-maskable-512.png": "ec845a56c316b55bddf2b1f29915f159",
"index.html": "25ae388b5dec0021adf1a5a2274af894",
"/": "25ae388b5dec0021adf1a5a2274af894",
"main.dart.js": "e1f78ef9f151f7f806e58bc7ffcead35",
"manifest.json": "5806a7cb47ff7d3270bf87e77af8470c",
"version.json": "08d0c7dcffe48b513f17d00e025db4fa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
