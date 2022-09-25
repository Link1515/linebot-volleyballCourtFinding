import express from 'express'
import axios from 'axios'
import https from 'https'
import 'dotenv/config'

import routerWebhook from './routes/webhook.route'

const app = express()
const PORT = process.env.PORT || 3000

app.use('/webhook', routerWebhook)

// handle image without ssl
app.get('/:file', (req, res) => {
  axios({
    method: 'get',
    url: encodeURI('https://iplay.sa.gov.tw/Upload/photogym/' + req.params.file),
    responseType: 'stream',
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  }).then((response) => {
    response.data.pipe(res)
  })
})

app.listen(PORT, () => {
  console.log(`linebot server running at port: ${PORT} ...`)
})
