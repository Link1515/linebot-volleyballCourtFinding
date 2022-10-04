import express from 'express'
import 'dotenv/config'

import routeWebhook from './routes/webhook.route'
import routeImage from './routes/image.route'

const app = express()
const PORT = process.env.PORT || 3000

app.use('/webhook', routeWebhook)
app.use('/image', routeImage)

app.use('*', (_, res) => {
  res.status(404).send('not found')
})

app.listen(PORT, () => {
  console.log(`linebot server running at port: ${PORT} ...`)
})
