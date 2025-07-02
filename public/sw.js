const CACHE_NAME = 'mscodehub-v1.0.0';
const STATIC_CACHE = 'mscodehub-static-v1.0.0';
const RUNTIME_CACHE = 'mscodehub-runtime-v1.0.0';

// Cache Stratejileri
const STATIC_ASSETS = [
  '/',
  '/hakkimizda',
  '/projeler',
  '/iletisim',
  '/blog',
  '/manifest.json',
  '/favicon.ico',
  '/logo.svg',
  '/logo.png',
  '/favicon-192x192.png',
  '/favicon-512x512.png',
  '/apple-touch-icon.png'
];

const RUNTIME_ASSETS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com'
];

// Install Event - Cache Static Assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached successfully');
        return self.skipWaiting(); // Activate immediately
      })
      .catch(err => {
        console.error('Service Worker: Failed to cache static assets', err);
      })
  );
});

// Activate Event - Clean Old Caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== RUNTIME_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
        return self.clients.claim(); // Take control immediately
      })
  );
});

// Fetch Event - Cache Strategy
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Handle different types of requests
  if (STATIC_ASSETS.includes(url.pathname)) {
    // Cache First Strategy for static assets
    event.respondWith(cacheFirstStrategy(request));
  } else if (url.pathname.startsWith('/api/') || url.pathname.includes('/contact')) {
    // Network Only for API calls
    event.respondWith(networkOnlyStrategy(request));
  } else if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    // Stale While Revalidate for fonts
    event.respondWith(staleWhileRevalidateStrategy(request));
  } else {
    // Network First for pages
    event.respondWith(networkFirstStrategy(request));
  }
});

// Cache First Strategy
async function cacheFirstStrategy(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    const cache = await caches.open(STATIC_CACHE);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    console.error('Cache First Strategy failed:', error);
    return new Response('Offline fallback', { status: 503 });
  }
}

// Network First Strategy
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback page for navigation requests
    if (request.mode === 'navigate') {
      const fallbackResponse = await caches.match('/');
      if (fallbackResponse) {
        return fallbackResponse;
      }
    }
    
    return new Response('Offline - İnternet bağlantınızı kontrol edin', { 
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

// Network Only Strategy
async function networkOnlyStrategy(request) {
  try {
    return await fetch(request);
  } catch (error) {
    return new Response('Network required for this request', { status: 503 });
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    cache.put(request, networkResponse.clone());
    return networkResponse;
  });
  
  return cachedResponse || fetchPromise;
}

// Background Sync
self.addEventListener('sync', event => {
  console.log('Service Worker: Background sync triggered', event.tag);
  
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Handle offline form submissions
  try {
    const pendingForms = await getStoredContactForms();
    for (const formData of pendingForms) {
      await submitContactForm(formData);
      await removeStoredContactForm(formData.id);
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push Notifications
self.addEventListener('push', event => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'MSCodeHub\'dan yeni bir bildirim',
    icon: '/favicon-192x192.png',
    badge: '/favicon-192x192.png',
    tag: 'mscodehub-notification',
    renotify: true,
    actions: [
      {
        action: 'open',
        title: 'Aç'
      },
      {
        action: 'close',
        title: 'Kapat'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('MSCodeHub', options)
  );
});

// Notification Click
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message Handler
self.addEventListener('message', event => {
  console.log('Service Worker: Message received', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Helper Functions (would need to be implemented based on your storage solution)
async function getStoredContactForms() {
  // Implementation for retrieving stored forms
  return [];
}

async function submitContactForm(formData) {
  // Implementation for submitting forms
  console.log('Submitting form:', formData);
}

async function removeStoredContactForm(formId) {
  // Implementation for removing stored forms
  console.log('Removing form:', formId);
} 