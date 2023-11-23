self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('my-cache').then(function(cache){
            return cache.add([
                '/',
                '/index.html',
                'styles.css'
                //'icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response ll fetch(event.request);
        })
    )
})