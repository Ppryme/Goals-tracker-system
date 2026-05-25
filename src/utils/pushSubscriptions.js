export async function subscribeToPush() {
  // Check if service worker and push is supported
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    console.warn('Push notifications not supported')
    return
  }

  const registration = await navigator.serviceWorker.ready

  // Check if already subscribed
  const existing = await registration.pushManager.getSubscription()
  if (existing) return existing

  // Subscribe using your VAPID public key
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: import.meta.env.VITE_VAPID_PUBLIC_KEY
  })

  // Send subscription to your backend
 await fetch(`${import.meta.env.VITE_BACKEND_URL}/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(subscription)
  })

  console.log('Push subscription successful!')
  return subscription
}