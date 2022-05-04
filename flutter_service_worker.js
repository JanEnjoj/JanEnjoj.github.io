'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d5c9d33c0d5e88cd7c4452e5f8de92e9",
"index.html": "e6d0fce8e31ddf01a964093279b61b69",
"/": "e6d0fce8e31ddf01a964093279b61b69",
"css/styles.css": "6f14dd58fdab842b4e69995be5303db2",
"js/app.js": "69b0dc023f2ee47660cbd297eecad3d4",
"main.dart.js": "ae7090110016378d058e81f6232b9cd4",
"img/splash.png": "ffae877fd4296504f40c38a9a1282242",
"favicon.png": "6be98e1d3eb30c0f77fda0eef474305e",
"icons/Icon-192.png": "f00a718546227a41c0995d830dfb6a35",
"icons/Icon-maskable-192.png": "93839286842bd7c949cfe54946a90ffe",
"icons/Icon-maskable-512.png": "243d2544462d5d2c46f215c8a9069c86",
"icons/Icon-512.png": "2e2ca1c4fa9bc49212f2d9f619c44e7b",
"manifest.json": "b32bba193871ceef434e999580702686",
"assets/AssetManifest.json": "1097eb35cc5eb2149669769c9b55ca08",
"assets/NOTICES": "6bcea28c4502d573eb184cb046bc5858",
"assets/FontManifest.json": "6a7ae1c8402c86465311d4928d419b3f",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4fc935dad351697db8e181de23cfec50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6ffb39c8cb9e8d35ebbc2e35d2c34da5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ada3c4c2aaf5beada1fd8e25ad6ad09",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/img/nieuwsnl/banner_logo.png": "756202a72be6aeee94b0f77776d676d9",
"assets/assets/img/BBQ%2520pakket.jpg": "2282b410fdb7fb606202c8816426139d",
"assets/assets/img/Checkmark.png": "fa4c30272f1a96ec523b7885af751f2f",
"assets/assets/img/gemalen-volkoren-sesam.jpg": "7a8e81dfaead8667411c8fd48b147d75",
"assets/assets/img/Valentijnsdiner.png": "be86a3a7577a6c1829fc40e2f54c06fa",
"assets/assets/img/Keune.jpg": "ad8058c7b1ddfcaf71e33ae3677300e8",
"assets/assets/styles/map_style.txt": "be5575e6fb7c32478c9b30933bf806be",
"assets/assets/icons/Search.svg": "373f8209a2d0483d0e2419c0f8aab76e",
"assets/assets/icons/Checkmark.svg": "234fd327768e771c4f3c421681ed6b91",
"assets/assets/icons/LocationPin.svg": "c117cb719c0dd9f4dd335b93ffb1d85d",
"assets/assets/icons/ShoppingCart.svg": "c8d02ae9cdb8a4a061830d5e6e3b54d5",
"assets/assets/icons/Person.svg": "d013af5777173256dadff42ad3ba9c28",
"assets/assets/icons/Shop.svg": "53f83e5fde08147beecfe1d1c9bb1f96",
"assets/assets/icons/EventQuestion.svg": "f980b03eea0f02607d7acfcabbeef841",
"assets/assets/icons/BranchIconBackground.svg": "f8d8c0ce6666caad21a2d30cf5702048",
"assets/assets/icons/EventDiscount.svg": "937a9abe5c585d19330eb22d6f12fcef",
"assets/assets/icons/LocationPinGps.svg": "001159dc7f93d2a97230bdb55f83b850",
"assets/assets/icons/nieuwsnl/MapDestinationPin.svg": "f67978a57ff4be1d1d67311e49164091",
"assets/assets/icons/nieuwsnl/MapOriginDot.svg": "0ee1b4d96aa8270767683adb5c7413b5",
"assets/assets/icons/CrossClose.svg": "ce04d21811483738b0a1b85c0fb11ce6",
"assets/assets/icons/Guide.svg": "5243d0d8575f66f91305d9275d8dfdf8",
"assets/assets/icons/HebbesPerson.svg": "18fd8472b952edaa34ab49b7f40cefce",
"assets/assets/icons/HeartFilled.svg": "96ee88d1d99f4e070d2247ae84560512",
"assets/assets/icons/ExternalLink.svg": "ab2f5ce6e5d65a001e335c8492a674c8",
"assets/assets/icons/HebbesShoppingCart.svg": "46e92fbabf849f825e8fe9b198c842e3",
"assets/assets/icons/HebbesDiscount.svg": "e2efd777e1ff29286d3724b0d1ef04b6",
"assets/assets/icons/News.svg": "ede9a34dfb059e6b2ab34ff11733495e",
"assets/assets/icons/MapDestinationPin.svg": "865c23f31f6f90c2b21f8bce7604ef5d",
"assets/assets/icons/Send.svg": "8a5f78344b0f64372e94cc1ea9daf816",
"assets/assets/icons/BackArrow.svg": "9dd6c0c71bcef9dbf743a129b55edab7",
"assets/assets/icons/HeartOutline.svg": "5c06a895ee50ca170d81df4bcb291752",
"assets/assets/icons/LocationArrow.svg": "9704a1a0410c60fd6ed2e14207495165",
"assets/assets/icons/CrossCloseRound.svg": "293c466519f815cf22b667a2f1f574ad",
"assets/assets/icons/Car.svg": "8bcb1803c3187a1192eb80c55a09050a",
"assets/assets/icons/MapOriginDot.svg": "5e7c89cca88fe1ef7ac5cacf8e145e55",
"assets/assets/icons/ShopBranch.svg": "9fe91fb61e01beaa9cfce56c2e952110",
"assets/assets/icons/HebbesNotification.svg": "e583d04c664c83df816f109dc012b50d",
"assets/assets/icons/LocationPinHome.svg": "e15cf763154fa7285e7597a9ea4e036c",
"assets/assets/icon/nieuwsnl/app_icon.png": "cd1107b25c662f2071db0cfc40da86f9",
"assets/assets/icon/nieuwsnl/app_icon.svg": "3d4d27b70598d6d630f2341e0edf22e1",
"assets/assets/icon/hiir/app_icon.png": "c4d3f18a1dae66d9608c7b808ca76fe1",
"assets/assets/icon/hiir/app_icon.svg": "b5f7be4356dfe565b14bb2b83170eefe",
"assets/assets/icon/hiir/app_icon_old.jpg": "41b47a04e62e1569dece234afbffc7ec",
"assets/assets/icon/hebbes/app_icon.png": "369adcc795cfdf9c836bae6e8045c641",
"assets/assets/icon/hebbes/app_icon.svg": "34a0dd61c0eed5c764f89b05ea482bf9",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/Charter-Regular.ttf": "b0aa8c930355fc3f890f69b7207a6b07",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/HebbesIcons.ttf": "ca62b2bdc2a1960947a0f1a34c534732",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/fonts/Charter-Bold.ttf": "28752e29a71d16fb1571da41f5fbf977",
"assets/assets/fonts/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/assets/fonts/CreteRound-Regular.ttf": "cb7a850d82e9bb099b1b994c7d64b4f0",
"assets/assets/fonts/Charter-Italic.ttf": "d58d0757718d5954da4220e28ed9b69e",
"assets/assets/translations/nl.json": "3dc45b26299b2396f157a6989f7db5d5",
"assets/assets/translations/en.json": "2b2d22b7eaacb01ff0b62dc101e5f78a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
