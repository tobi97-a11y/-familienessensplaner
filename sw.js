const CACHE='fep-v75';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const url=new URL(e.request.url);
  const isApp=url.pathname.endsWith('/')||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/sw.js')||url.pathname.includes('/images/');
  if(isApp){
    e.respondWith(fetch(e.request,{cache:'no-store'}).then(res=>{if(res.ok){caches.open(CACHE).then(c=>c.put(e.request,res.clone()));}return res;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
  } else {
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
  }
});
