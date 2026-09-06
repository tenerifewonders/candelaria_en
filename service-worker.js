const CACHE_NAME = "candelaria-en-v11";

// 1. Core App Shell (Lightweight - installs in <300ms)
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
  "./Candelaria.geojson",
  "./EN-CANDELARIA.html",
  "./icon-192.png",
  "./icon-512.png"
];

const AUDIO_URLS = [
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/0.%20Candelaria-Intro.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/1.%20Candelaria.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/2.1.Candelaria.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/2.2.Candelaria.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/2.3.Candelaria.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/2.4.Candelaria.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/2.5.Candelaria.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/2.6.Candelaria.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/3.%20Candelaria.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/4.1.Candelaria.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/4.2.Candelaria.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/candelaria_en/4.3.Candelaria.mp3"
];

const TILE_URLS = [
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
  "./tiles/13/3721/3421.png",
  "./tiles/13/3721/3422.png",
  "./tiles/13/3721/3423.png",
  "./tiles/13/3721/3424.png",
  "./tiles/13/3722/3421.png",
  "./tiles/13/3722/3422.png",
  "./tiles/13/3722/3423.png",
  "./tiles/13/3722/3424.png",
  "./tiles/13/3723/3421.png",
  "./tiles/13/3723/3422.png",
  "./tiles/13/3723/3423.png",
  "./tiles/13/3723/3424.png",
  "./tiles/13/3724/3421.png",
  "./tiles/13/3724/3422.png",
  "./tiles/13/3724/3423.png",
  "./tiles/13/3724/3424.png",
  "./tiles/13/3725/3421.png",
  "./tiles/13/3725/3422.png",
  "./tiles/13/3725/3423.png",
  "./tiles/13/3725/3424.png",
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
  "./tiles/14/7449/6847.png",
  "./tiles/15/14892/13690.png",
  "./tiles/15/14892/13691.png",
  "./tiles/15/14892/13692.png",
  "./tiles/15/14893/13690.png",
  "./tiles/15/14893/13691.png",
  "./tiles/15/14893/13692.png",
  "./tiles/15/14894/13690.png",
  "./tiles/15/14894/13691.png",
  "./tiles/15/14894/13692.png",
  "./tiles/16/29786/27381.png",
  "./tiles/16/29786/27382.png",
  "./tiles/16/29786/27383.png",
  "./tiles/16/29787/27381.png",
  "./tiles/16/29787/27382.png",
  "./tiles/16/29787/27383.png",
  "./tiles/16/29788/27381.png",
  "./tiles/16/29788/27382.png",
  "./tiles/16/29788/27383.png",
  "./tiles/17/59573/54763.png",
  "./tiles/17/59573/54764.png",
  "./tiles/17/59573/54765.png",
  "./tiles/17/59573/54766.png",
  "./tiles/17/59574/54763.png",
  "./tiles/17/59574/54764.png",
  "./tiles/17/59574/54765.png",
  "./tiles/17/59574/54766.png",
  "./tiles/17/59575/54763.png",
  "./tiles/17/59575/54764.png",
  "./tiles/17/59575/54765.png",
  "./tiles/17/59575/54766.png",
  "./tiles/17/59576/54763.png",
  "./tiles/17/59576/54764.png",
  "./tiles/17/59576/54765.png",
  "./tiles/17/59576/54766.png",
  "./tiles/17/59577/54763.png",
  "./tiles/17/59577/54764.png",
  "./tiles/17/59577/54765.png",
  "./tiles/17/59577/54766.png",
  "./tiles/18/119147/109527.png",
  "./tiles/18/119147/109528.png",
  "./tiles/18/119147/109529.png",
  "./tiles/18/119147/109530.png",
  "./tiles/18/119147/109531.png",
  "./tiles/18/119148/109527.png",
  "./tiles/18/119148/109528.png",
  "./tiles/18/119148/109529.png",
  "./tiles/18/119148/109530.png",
  "./tiles/18/119148/109531.png",
  "./tiles/18/119149/109527.png",
  "./tiles/18/119149/109528.png",
  "./tiles/18/119149/109529.png",
  "./tiles/18/119149/109530.png",
  "./tiles/18/119149/109531.png",
  "./tiles/18/119150/109527.png",
  "./tiles/18/119150/109528.png",
  "./tiles/18/119150/109529.png",
  "./tiles/18/119150/109530.png",
  "./tiles/18/119150/109531.png",
  "./tiles/18/119151/109527.png",
  "./tiles/18/119151/109528.png",
  "./tiles/18/119151/109529.png",
  "./tiles/18/119151/109530.png",
  "./tiles/18/119151/109531.png",
  "./tiles/18/119152/109527.png",
  "./tiles/18/119152/109528.png",
  "./tiles/18/119152/109529.png",
  "./tiles/18/119152/109530.png",
  "./tiles/18/119152/109531.png",
  "./tiles/18/119153/109527.png",
  "./tiles/18/119153/109528.png",
  "./tiles/18/119153/109529.png",
  "./tiles/18/119153/109530.png",
  "./tiles/18/119153/109531.png",
  "./tiles/18/119154/109527.png",
  "./tiles/18/119154/109528.png",
  "./tiles/18/119154/109529.png",
  "./tiles/18/119154/109530.png",
  "./tiles/18/119154/109531.png"
];

// 1. INSTALL: Instant installation of core app shell
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Pre-caching core app shell...");
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn("[SW] App shell pre-cache warning:", err);
      });
    })
  );
});

// 2. ACTIVATE: Clean old caches, claim clients & run parallel background pre-cache
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );

  // Background caching of all audio files & map tiles (non-blocking)
  preCacheOfflineContent();
});

// Message listener for skip waiting
self.addEventListener("message", (e) => {
  if (e.data && e.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Fast parallel batch precaching function
async function preCacheOfflineContent() {
  try {
    const cache = await caches.open(CACHE_NAME);
    console.log("[SW] Starting background precache for tiles and audio...");

    // Helper for fast parallel batch fetch
    async function fetchBatch(urls, batchSize) {
      for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        await Promise.all(
          batch.map(async (url) => {
            try {
              const req = url.endsWith(".mp3") ? new Request(url, { method: "GET" }) : url;
              const res = await fetch(req);
              if (res && res.status === 200) {
                await cache.put(url, res);
              }
            } catch (err) {
              // Silently ignore individual tile/audio network glitches
            }
          })
        );
      }
    }

    // Pre-cache all audio MP3 files (3 at a time)
    await fetchBatch(AUDIO_URLS, 3);
    // Pre-cache all map tile PNGs (15 at a time)
    await fetchBatch(TILE_URLS, 15);

    console.log("[SW] Background precache complete! Notifying app...");

    // Notify all open client tabs/windows
    const clientsList = await self.clients.matchAll();
    for (const client of clientsList) {
      client.postMessage({ type: "CACHE_COMPLETE" });
    }
  } catch (err) {
    console.warn("[SW] Background precache warning:", err);
  }
}

// 3. FETCH: Smart Cache-First for Assets/Tiles + HTTP Range Request Handler for Audios
self.addEventListener("fetch", (e) => {
  const url = e.request.url;

  // Audio Range Request Handler for HTML5 Audio (iOS & Android)
  if (url.endsWith(".mp3") || url.includes("supabase.co/storage/v1/object/public/")) {
    e.respondWith(handleAudioFetch(e.request));
    return;
  }

  // Cache-First strategy for Map Tiles & App Assets
  e.respondWith(
    caches.match(e.request).then((cachedRes) => {
      if (cachedRes) return cachedRes;
      return fetch(e.request).then((netRes) => {
        if (netRes && netRes.status === 200) {
          const resToCache = netRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resToCache));
        }
        return netRes;
      }).catch(() => {
        if (e.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});

// Helper: Handle HTTP Range Requests for cached audio files
async function handleAudioFetch(request) {
  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(request.url);

  if (!response) {
    try {
      const cleanReq = new Request(request.url, { method: "GET" });
      const netRes = await fetch(cleanReq);
      if (netRes && netRes.status === 200) {
        await cache.put(request.url, netRes.clone());
        response = netRes;
      } else {
        return netRes;
      }
    } catch (err) {
      console.error("[SW] Audio offline & not cached:", request.url);
      return new Response("Audio offline not available", { status: 503 });
    }
  }

  const rangeHeader = request.headers.get("range");
  if (rangeHeader && response) {
    const arrayBuffer = await response.clone().arrayBuffer();
    const bytes = rangeHeader.replace(/bytes=/, "").split("-");
    const start = parseInt(bytes[0], 10) || 0;
    const end = bytes[1] ? parseInt(bytes[1], 10) : arrayBuffer.byteLength - 1;
    const chunk = arrayBuffer.slice(start, end + 1);

    return new Response(chunk, {
      status: 206,
      statusText: "Partial Content",
      headers: new Headers({
        "Content-Range": `bytes ${start}-${end}/${arrayBuffer.byteLength}`,
        "Content-Length": chunk.byteLength,
        "Content-Type": "audio/mpeg",
        "Accept-Ranges": "bytes"
      })
    });
  }

  return response;
}
