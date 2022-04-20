const APP_PREFIX = "Budget-Tracker"; 
const VERSION = "version_01";
const CACHE_NAME = APP_PREFIEX + VERSION
const FILES_TO_CACHE = [




]; 

self.addEventListener('fetch', function (e) {
    console.log('fetch request:' + e.request.url)
    e.respondWith(
        caches.match(e.request).then(function (request){
            if (request) {
                console.log('responing with cache :' +e.request.url)
                return request
            } else{
                console.log('file is not cached, fetching;' + e.request.url)
                return fetch(e.request)
            }
        })
    )
} )

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache){
            console.log('installing cache:' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
})

