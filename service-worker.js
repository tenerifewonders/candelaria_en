const CACHE_NAME = "candelaria-en-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./Candelaria.geojson",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
];

const AUDIO_URLS = [
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/0.%20Candelaria-Intro.wav",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/1.%20Candelaria.wav",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/2.%20Candelaria.wav",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/3.%20Candelaria.wav",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/4.%20Candelaria.wav"
];

const TILES = [
  "./tiles/11/927/853.png",
  "./tiles/11/927/854.png",
  "./tiles/11/927/855.png",
  "./tiles/11/927/856.png",
  "./tiles/11/927/857.png",
  "./tiles/11/927/858.png",
  "./tiles/11/928/853.png",
  "./tiles/11/928/854.png",
  "./tiles/11/928/855.png",
  "./tiles/11/928/856.png",
  "./tiles/11/928/857.png",
  "./tiles/11/928/858.png",
  "./tiles/11/929/853.png",
  "./tiles/11/929/854.png",
  "./tiles/11/929/855.png",
  "./tiles/11/929/856.png",
  "./tiles/11/929/857.png",
  "./tiles/11/929/858.png",
  "./tiles/11/930/853.png",
  "./tiles/11/930/854.png",
  "./tiles/11/930/855.png",
  "./tiles/11/930/856.png",
  "./tiles/11/930/857.png",
  "./tiles/11/930/858.png",
  "./tiles/11/931/853.png",
  "./tiles/11/931/854.png",
  "./tiles/11/931/855.png",
  "./tiles/11/931/856.png",
  "./tiles/11/931/857.png",
  "./tiles/11/931/858.png",
  "./tiles/11/932/853.png",
  "./tiles/11/932/854.png",
  "./tiles/11/932/855.png",
  "./tiles/11/932/856.png",
  "./tiles/11/932/857.png",
  "./tiles/11/932/858.png",
  "./tiles/12/1854/1706.png",
  "./tiles/12/1854/1707.png",
  "./tiles/12/1854/1708.png",
  "./tiles/12/1854/1709.png",
  "./tiles/12/1854/1710.png",
  "./tiles/12/1854/1711.png",
  "./tiles/12/1854/1712.png",
  "./tiles/12/1854/1713.png",
  "./tiles/12/1854/1714.png",
  "./tiles/12/1854/1715.png",
  "./tiles/12/1854/1716.png",
  "./tiles/12/1855/1706.png",
  "./tiles/12/1855/1707.png",
  "./tiles/12/1855/1708.png",
  "./tiles/12/1855/1709.png",
  "./tiles/12/1855/1710.png",
  "./tiles/12/1855/1711.png",
  "./tiles/12/1855/1712.png",
  "./tiles/12/1855/1713.png",
  "./tiles/12/1855/1714.png",
  "./tiles/12/1855/1715.png",
  "./tiles/12/1855/1716.png",
  "./tiles/12/1856/1706.png",
  "./tiles/12/1856/1707.png",
  "./tiles/12/1856/1708.png",
  "./tiles/12/1856/1709.png",
  "./tiles/12/1856/1710.png",
  "./tiles/12/1856/1711.png",
  "./tiles/12/1856/1712.png",
  "./tiles/12/1856/1713.png",
  "./tiles/12/1856/1714.png",
  "./tiles/12/1856/1715.png",
  "./tiles/12/1856/1716.png",
  "./tiles/12/1857/1706.png",
  "./tiles/12/1857/1707.png",
  "./tiles/12/1857/1708.png",
  "./tiles/12/1857/1709.png",
  "./tiles/12/1857/1710.png",
  "./tiles/12/1857/1711.png",
  "./tiles/12/1857/1712.png",
  "./tiles/12/1857/1713.png",
  "./tiles/12/1857/1714.png",
  "./tiles/12/1857/1715.png",
  "./tiles/12/1857/1716.png",
  "./tiles/12/1858/1706.png",
  "./tiles/12/1858/1707.png",
  "./tiles/12/1858/1708.png",
  "./tiles/12/1858/1709.png",
  "./tiles/12/1858/1710.png",
  "./tiles/12/1858/1711.png",
  "./tiles/12/1858/1712.png",
  "./tiles/12/1858/1713.png",
  "./tiles/12/1858/1714.png",
  "./tiles/12/1858/1715.png",
  "./tiles/12/1858/1716.png",
  "./tiles/12/1859/1706.png",
  "./tiles/12/1859/1707.png",
  "./tiles/12/1859/1708.png",
  "./tiles/12/1859/1709.png",
  "./tiles/12/1859/1710.png",
  "./tiles/12/1859/1711.png",
  "./tiles/12/1859/1712.png",
  "./tiles/12/1859/1713.png",
  "./tiles/12/1859/1714.png",
  "./tiles/12/1859/1715.png",
  "./tiles/12/1859/1716.png",
  "./tiles/12/1860/1706.png",
  "./tiles/12/1860/1707.png",
  "./tiles/12/1860/1708.png",
  "./tiles/12/1860/1709.png",
  "./tiles/12/1860/1710.png",
  "./tiles/12/1860/1711.png",
  "./tiles/12/1860/1712.png",
  "./tiles/12/1860/1713.png",
  "./tiles/12/1860/1714.png",
  "./tiles/12/1860/1715.png",
  "./tiles/12/1860/1716.png",
  "./tiles/12/1861/1706.png",
  "./tiles/12/1861/1707.png",
  "./tiles/12/1861/1708.png",
  "./tiles/12/1861/1709.png",
  "./tiles/12/1861/1710.png",
  "./tiles/12/1861/1711.png",
  "./tiles/12/1861/1712.png",
  "./tiles/12/1861/1713.png",
  "./tiles/12/1861/1714.png",
  "./tiles/12/1861/1715.png",
  "./tiles/12/1861/1716.png",
  "./tiles/12/1862/1706.png",
  "./tiles/12/1862/1707.png",
  "./tiles/12/1862/1708.png",
  "./tiles/12/1862/1709.png",
  "./tiles/12/1862/1710.png",
  "./tiles/12/1862/1711.png",
  "./tiles/12/1862/1712.png",
  "./tiles/12/1862/1713.png",
  "./tiles/12/1862/1714.png",
  "./tiles/12/1862/1715.png",
  "./tiles/12/1862/1716.png",
  "./tiles/12/1863/1706.png",
  "./tiles/12/1863/1707.png",
  "./tiles/12/1863/1708.png",
  "./tiles/12/1863/1709.png",
  "./tiles/12/1863/1710.png",
  "./tiles/12/1863/1711.png",
  "./tiles/12/1863/1712.png",
  "./tiles/12/1863/1713.png",
  "./tiles/12/1863/1714.png",
  "./tiles/12/1863/1715.png",
  "./tiles/12/1863/1716.png",
  "./tiles/12/1864/1706.png",
  "./tiles/12/1864/1707.png",
  "./tiles/12/1864/1708.png",
  "./tiles/12/1864/1709.png",
  "./tiles/12/1864/1710.png",
  "./tiles/12/1864/1711.png",
  "./tiles/12/1864/1712.png",
  "./tiles/12/1864/1713.png",
  "./tiles/12/1864/1714.png",
  "./tiles/12/1864/1715.png",
  "./tiles/12/1864/1716.png",
  "./tiles/12/1865/1706.png",
  "./tiles/12/1865/1707.png",
  "./tiles/12/1865/1708.png",
  "./tiles/12/1865/1709.png",
  "./tiles/12/1865/1710.png",
  "./tiles/12/1865/1711.png",
  "./tiles/12/1865/1712.png",
  "./tiles/12/1865/1713.png",
  "./tiles/12/1865/1714.png",
  "./tiles/12/1865/1715.png",
  "./tiles/12/1865/1716.png",
  "./tiles/13/3722/3421.png",
  "./tiles/13/3722/3422.png",
  "./tiles/13/3722/3423.png",
  "./tiles/13/3723/3421.png",
  "./tiles/13/3723/3422.png",
  "./tiles/13/3723/3423.png",
  "./tiles/13/3724/3421.png",
  "./tiles/13/3724/3422.png",
  "./tiles/13/3724/3423.png",
  "./tiles/14/7444/6843.png",
  "./tiles/14/7444/6844.png",
  "./tiles/14/7444/6845.png",
  "./tiles/14/7444/6846.png",
  "./tiles/14/7444/6847.png",
  "./tiles/14/7445/6843.png",
  "./tiles/14/7445/6844.png",
  "./tiles/14/7445/6845.png",
  "./tiles/14/7445/6846.png",
  "./tiles/14/7445/6847.png",
  "./tiles/14/7446/6843.png",
  "./tiles/14/7446/6844.png",
  "./tiles/14/7446/6845.png",
  "./tiles/14/7446/6846.png",
  "./tiles/14/7446/6847.png",
  "./tiles/14/7447/6843.png",
  "./tiles/14/7447/6844.png",
  "./tiles/14/7447/6845.png",
  "./tiles/14/7447/6846.png",
  "./tiles/14/7447/6847.png",
  "./tiles/14/7448/6843.png",
  "./tiles/14/7448/6844.png",
  "./tiles/14/7448/6845.png",
  "./tiles/14/7448/6846.png",
  "./tiles/14/7448/6847.png",
  "./tiles/14/7449/6843.png",
  "./tiles/14/7449/6844.png",
  "./tiles/14/7449/6845.png",
  "./tiles/14/7449/6846.png",
  "./tiles/14/7449/6847.png"
];

// Helper to dynamically cache files with tolerance to single failures
async function cacheListTolerantly(cache, list) {
  for (const url of list) {
    try {
      await cache.add(url);
    } catch (err) {
      console.warn("Failed to pre-cache resource:", url, err);
    }
  }
}

// Install SW and cache assets
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      // 1) Critical resources (must succeed)
      await cache.addAll(ASSETS);
      // 2) Tolerant caching in the background
      cacheListTolerantly(cache, AUDIO_URLS);
      cacheListTolerantly(cache, TILES);
    })
  );
  self.skipWaiting();
});

// Activate SW and clean old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Helper for HTTP 206 Range Requests for audio streaming/seeking on iOS
async function handleRangeRequest(request, rangeHeader) {
  const cachedResponse = await caches.match(request.url);
  
  if (!cachedResponse) {
    // If not cached, do direct pass-through and download full response in background
    const cleanRequest = new Request(request.url);
    fetch(cleanRequest).then(networkResponse => {
      if (networkResponse.status === 200) {
        caches.open(CACHE_NAME).then(cache => cache.put(request.url, networkResponse));
      }
    }).catch(err => console.warn("Background fetch failed:", err));

    return fetch(request);
  }

  const arrayBuffer = await cachedResponse.arrayBuffer();
  const totalSize = arrayBuffer.byteLength;

  const bytes = /^bytes=(\d+)-(\d+)?$/.exec(rangeHeader);
  if (!bytes) {
    return cachedResponse;
  }

  const start = Number(bytes[1]);
  const end = bytes[2] ? Number(bytes[2]) : totalSize - 1;
  const chunk = arrayBuffer.slice(start, end + 1);

  return new Response(chunk, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Range': `bytes ${start}-${end}/${totalSize}`,
      'Content-Length': chunk.byteLength.toString(),
      'Content-Type': cachedResponse.headers.get('Content-Type') || 'audio/wav',
      'Accept-Ranges': 'bytes'
    }
  });
}

// Fetch interception
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  
  if (event.request.method !== 'GET' || (url.protocol !== 'http:' && url.protocol !== 'https:')) {
    return;
  }

  const rangeHeader = event.request.headers.get('range');

  // 1) Audio files (Supabase storage or .wav files)
  if (url.href.includes("supabase.co/storage") || url.pathname.endsWith(".wav")) {
    if (rangeHeader) {
      event.respondWith(handleRangeRequest(event.request, rangeHeader));
    } else {
      event.respondWith(
        caches.match(event.request.url).then(cached => {
          return cached || fetch(event.request).then(response => {
            if (response.status === 200) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(event.request.url, responseToCache));
            }
            return response;
          });
        })
      );
    }
    return;
  }

  // 2) JSON / GeoJSON (Network-first style)
  if (url.pathname.endsWith(".json") || url.pathname.endsWith(".geojson")) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // 3) Static assets (Cache-first)
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(networkResponse => {
        if (networkResponse.status === 200 || networkResponse.status === 0) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      });
    })
  );
});
