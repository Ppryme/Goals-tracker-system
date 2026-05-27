import express from 'express'
import webpush from 'web-push'
import cors from 'cors'
import dotenv from 'dotenv'
import cron from 'node-cron'
import mongoose from 'mongoose'

dotenv.config()

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log('MongoDB error:', err))

// Subscription model
const Subscription = mongoose.model('Subscription', new mongoose.Schema({
  endpoint: { type: String, unique: true },
  keys: { p256dh: String, auth: String }
}))

const app = express()
app.use(cors())
app.use(express.json())

webpush.setVapidDetails(
  process.env.VAPID_EMAIL,
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
)

app.get('/health', (req, res) => res.json({ status: 'ok' }))

// Save subscription — upsert so no duplicates
app.post('/subscribe', async (req, res) => {
  const { endpoint, keys } = req.body
  await Subscription.findOneAndUpdate(
    { endpoint },
    { endpoint, keys },
    { upsert: true, new: true }
  )
  console.log('Subscription saved!')
  res.status(201).json({ message: 'Subscribed!' })
})

// Send to all saved subscriptions
app.post('/send-notification', async (req, res) => {
  const { title, body } = req.body
  const subscriptions = await Subscription.find()
  const payload = JSON.stringify({ title, body })

  const results = await Promise.allSettled(
    subscriptions.map(sub => webpush.sendNotification({
      endpoint: sub.endpoint,
      keys: sub.keys
    }, payload))
  )

  res.json({ message: 'Notifications sent', results })
})

// 2:13pm daily cron
cron.schedule('16 14 * * *', async () => {
  const subscriptions = await Subscription.find()
  const payload = JSON.stringify({
    title: 'Embark on your goals for daily excellence',
    body: 'Good afternoon! Time to check in.'
  })

  await Promise.allSettled(
    subscriptions.map(sub => webpush.sendNotification({
      endpoint: sub.endpoint,
      keys: sub.keys
    }, payload))
  )
  console.log('afternoon notifications sent!')
})

app.listen(3000, () => console.log('Server running on port 3000'))