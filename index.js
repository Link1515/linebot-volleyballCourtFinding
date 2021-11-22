import 'dotenv/config'
import linebot from 'linebot'

import placeReturn from './commands/placeReturn.js'
import go from './commands/go.js'

// import fs from 'fs'

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

bot.listen('/', 3000, () => {
  console.log('linebot 運作中...')
})
