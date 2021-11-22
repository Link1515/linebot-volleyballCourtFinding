import express from 'express'
import axios from 'axios'
import https from 'https'
import 'dotenv/config'
import linebot from 'linebot'
// commands
import placeReturn from './commands/placeReturn.js'
import go from './commands/go.js'

const app = express()

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', (event) => {
  if (event.message.type === 'location') {
    placeReturn(event)
  } else if (event.message.text.startsWith('go ')) {
    go(event, event.message.text.replace('go ', ''))
  } else {
    event.reply('蛤?')
  }
})

const linebotParser = bot.parser()
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
app.post('/', linebotParser)
app.listen(process.env.PORT || 3000)
