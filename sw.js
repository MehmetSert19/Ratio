/* Ratio service worker: uygulamanın tamamını (paketler dahil) önbelleğe alır; internetsiz çalışır. */
const SURUM = 'ratio-1a647976d7ee';
const DOSYALAR = ["./", "firebase-config.js", "fonts.css", "fonts/ibm-plex-mono-latin-400-normal.woff2", "fonts/ibm-plex-mono-latin-500-normal.woff2", "fonts/ibm-plex-mono-latin-ext-400-normal.woff2", "fonts/ibm-plex-mono-latin-ext-500-normal.woff2", "fonts/ibm-plex-sans-latin-400-italic.woff2", "fonts/ibm-plex-sans-latin-400-normal.woff2", "fonts/ibm-plex-sans-latin-500-normal.woff2", "fonts/ibm-plex-sans-latin-600-normal.woff2", "fonts/ibm-plex-sans-latin-ext-400-italic.woff2", "fonts/ibm-plex-sans-latin-ext-400-normal.woff2", "fonts/ibm-plex-sans-latin-ext-500-normal.woff2", "fonts/ibm-plex-sans-latin-ext-600-normal.woff2", "fonts/source-serif-4-latin-400-italic.woff2", "fonts/source-serif-4-latin-400-normal.woff2", "fonts/source-serif-4-latin-600-italic.woff2", "fonts/source-serif-4-latin-600-normal.woff2", "fonts/source-serif-4-latin-ext-400-italic.woff2", "fonts/source-serif-4-latin-ext-400-normal.woff2", "fonts/source-serif-4-latin-ext-600-italic.woff2", "fonts/source-serif-4-latin-ext-600-normal.woff2", "icons/apple-touch-icon.png", "icons/favicon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "manifest.webmanifest", "paket/anayasa-a1.json", "paket/anayasa-a10.json", "paket/anayasa-a11.json", "paket/anayasa-a12.json", "paket/anayasa-a13.json", "paket/anayasa-a14.json", "paket/anayasa-a2.json", "paket/anayasa-a3.json", "paket/anayasa-a4.json", "paket/anayasa-a5.json", "paket/anayasa-a6.json", "paket/anayasa-a7.json", "paket/anayasa-a8.json", "paket/anayasa-a9.json", "paket/anayasa-k10.json", "paket/anayasa-k12.json", "paket/anayasa-k13.json", "paket/anayasa-k8.json", "paket/borclar-b1.json", "paket/borclar-b10.json", "paket/borclar-b11.json", "paket/borclar-b12.json", "paket/borclar-b13.json", "paket/borclar-b14.json", "paket/borclar-b15.json", "paket/borclar-b16.json", "paket/borclar-b17.json", "paket/borclar-b18.json", "paket/borclar-b19.json", "paket/borclar-b2.json", "paket/borclar-b20.json", "paket/borclar-b21.json", "paket/borclar-b22.json", "paket/borclar-b3.json", "paket/borclar-b4.json", "paket/borclar-b5.json", "paket/borclar-b6.json", "paket/borclar-b7.json", "paket/borclar-b8.json", "paket/borclar-b9.json", "paket/borclar-b99.json", "paket/borclar-k41.json", "paket/borclar-k42.json", "paket/borclar-k43.json", "paket/borclar-k44.json", "paket/borclar-k45.json", "paket/borclar-k5.json", "paket/borclar-k6.json", "paket/borclar-k7.json", "paket/borclar-p1.json", "paket/borclar-p2.json", "paket/borclar-p3.json", "paket/borclar-p4.json", "paket/borclar-p5.json", "paket/borclar-p6.json", "paket/ceza-k1.json", "paket/ceza-k2.json", "paket/ceza-k3_1.json", "paket/ceza-k3_10.json", "paket/ceza-k3_11.json", "paket/ceza-k3_12.json", "paket/ceza-k3_13.json", "paket/ceza-k3_14.json", "paket/ceza-k3_15.json", "paket/ceza-k3_16.json", "paket/ceza-k3_17.json", "paket/ceza-k3_18.json", "paket/ceza-k3_19.json", "paket/ceza-k3_2.json", "paket/ceza-k3_3.json", "paket/ceza-k3_4.json", "paket/ceza-k3_5.json", "paket/ceza-k3_6.json", "paket/ceza-k3_7.json", "paket/ceza-k3_8.json", "paket/ceza-k3_9.json", "paket/ceza-k4_1.json", "paket/ceza-k4_2.json", "paket/ceza-k4_3.json", "paket/ceza-k4_4.json", "paket/ceza-k4_5.json", "paket/ceza-k4_6.json", "paket/deniz-k1.json", "paket/deniz-k10.json", "paket/deniz-k2.json", "paket/deniz-k3a.json", "paket/deniz-k3b.json", "paket/deniz-k3c.json", "paket/deniz-k3d.json", "paket/deniz-k3e.json", "paket/deniz-k45.json", "paket/deniz-k6.json", "paket/deniz-k7.json", "paket/deniz-k89.json", "paket/deniz-k99.json", "paket/genel-kamu-g.json", "paket/genel-kamu-k11.json", "paket/genel-kamu-k12.json", "paket/genel-kamu-k13.json", "paket/genel-kamu-k14.json", "paket/genel-kamu-k15.json", "paket/genel-kamu-k21.json", "paket/genel-kamu-k22.json", "paket/genel-kamu-k23.json", "paket/genel-kamu-k24.json", "paket/hukuk-felsefesi-u1.json", "paket/hukuk-felsefesi-u10.json", "paket/hukuk-felsefesi-u11.json", "paket/hukuk-felsefesi-u2.json", "paket/hukuk-felsefesi-u3.json", "paket/hukuk-felsefesi-u4.json", "paket/hukuk-felsefesi-u5.json", "paket/hukuk-felsefesi-u6.json", "paket/hukuk-felsefesi-u7.json", "paket/hukuk-felsefesi-u8.json", "paket/hukuk-felsefesi-u9.json", "paket/idare-g0.json", "paket/idare-k1.json", "paket/idare-k2.json", "paket/idare-k3.json", "paket/idare-k4.json", "paket/idare-k5.json", "paket/idare-k6.json", "paket/idare-k7.json", "paket/idare-k8.json", "paket/idare-k9.json", "paket/katalog.json", "paket/medeni-k1.json", "paket/medeni-k10.json", "paket/medeni-k11.json", "paket/medeni-k12.json", "paket/medeni-k2.json", "paket/medeni-k3.json", "paket/medeni-k4.json", "paket/medeni-k5.json", "paket/medeni-k6.json", "paket/medeni-k7.json", "paket/medeni-k8.json", "paket/medeni-k9.json", "vendor/firebase-app-compat.js", "vendor/firebase-auth-compat.js", "vendor/firebase-firestore-compat.js", "vendor/mermaid.min.js"];
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(SURUM);
    // ayrı ayrı: biri başarısız olursa diğerleri kalsın; config hep ağdan taze
    await Promise.all(DOSYALAR.map(u => fetch(u, { cache: 'reload' }).then(r => { if (r.ok) return c.put(u, r); }).catch(() => {})));
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== SURUM && k.startsWith('ratio-')) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('message', e => { if (e.data === 'atla') self.skipWaiting(); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // Firebase ve diğerleri: doğrudan ağ
  e.respondWith((async () => {
    const c = await caches.open(SURUM);
    if (req.mode === 'navigate') {
      return (await c.match('./')) || fetch(req);
    }
    const yol = url.pathname.endsWith('firebase-config.js');
    if (yol) { try { const r = await fetch(req, { cache: 'no-cache' }); if (r.ok) { c.put(req, r.clone()); return r; } } catch (er) { /* çevrimdışı */ } }
    const hit = await c.match(req, { ignoreSearch: true });
    if (hit) return hit;
    try { const r = await fetch(req); if (r.ok && url.pathname.includes('/paket/')) c.put(req, r.clone()); return r; }
    catch (er) { return new Response('Çevrimdışı', { status: 503 }); }
  })());
});
