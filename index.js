import express from 'express'
import axios from 'axios'
import https from 'https'
import 'dotenv/config'
import linebot from 'linebot'
// commands
import placeReturn from './commands/placeReturn.js'
import go from './commands/go.js'
import loctionQuickReply from './commands/loctionQuickReply.js'

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
  } else if (event.message.text === '找球場') {
    loctionQuickReply(event)
  } else {
    event.reply('蛤?')
  }
})

const linebotParser = bot.parser()
// 為了解決圖檔沒有https問題
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
