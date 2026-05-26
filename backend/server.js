import express from 'express'
import webpush from 'web-push'
import cors from 'cors'
import dotenv from 'dotenv'
import cron from 'node-cron'

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
  console.log('New subscription! Total:', subscriptions.length)
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



// Runs every day at 6:00 AM
cron.schedule('0 6 * * *', async () => {
  const payload = JSON.stringify({
    title: 'Hero Dashboard',
    body: 'Good morning! Time to check in.'
  })

  await Promise.allSettled(
    subscriptions.map(sub => webpush.sendNotification(sub, payload))
  )
  console.log('Morning notifications sent!')
})

app.listen(3000, () => console.log('Server running on port 3000'))