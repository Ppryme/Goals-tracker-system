import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)

// Listen for push notifications from the server
self.addEventListener('push', (event) => {
  const data = event.data?.json() ?? {}

  const title = data.title || 'Hero Dashboard'
  const options = {
    body: data.body || "Time to check in!",
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'hero-dashboard',           // ← add this (groups notifications)
    renotify: true,                   // ← add this (always shows even if same tag)
    requireInteraction: false,        // ← add this
  }

  event.waitUntil(
    self.registration.showNotification(title, options)
  )
})

// Handle notification click — opens the app
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil(
    clients.openWindow('/')
  )
})