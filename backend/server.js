import express from 'express'
import webpush from 'web-push'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Configure web-push with your VAPID keys
webpush.setVapidDetails(
  process.env.VAPID_EMAIL,
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
)

// Store subscriptions (in memory for now)
let subscriptions = []

// Frontend hits this to save their push subscription
app.post('/subscribe', (req, res) => {
  const subscription = req.body
  subscriptions.push(subscription)
  res.status(201).json({ message: 'Subscribed!' })
})

// Hit this endpoint to send a push to all subscribers
app.post('/send-notification', async (req, res) => {
  const { title, body } = req.body

  const payload = JSON.stringify({ title, body })

  const results = await Promise.allSettled(
    subscriptions.map(sub => webpush.sendNotification(sub, payload))
  )

  res.json({ message: 'Notifications sent', results })
})

app.listen(3000, () => console.log('Server running on port 3000'))