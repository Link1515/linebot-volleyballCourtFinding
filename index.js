import 'dotenv/config'
import linebot from 'linebot'
import axios from 'axios'
import fs from 'fs'

import { distance } from './distance.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

const url =
  'https://iplay.sa.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none&Keyword=排球場&City=新北市&GymType=排球場'

bot.on('message', async (event) => {
  if (event.message.latitude) {
    const myLatitude = event.message.latitude
    const myLongitude = event.message.longitude
    const { data } = await axios.get(encodeURI(url))

    let minDis = 99999999

    for (let i = 0; i < data.length; i++) {
      const location = data[i].LatLng.split(',')
      if (distance(myLatitude, myLongitude, location[0], location[1], 'K') < minDis) {
        minDis = distance(myLatitude, myLongitude, location[0], location[1], 'K')
      }
    }

    console.log(minDis)
  }

  // const meg = event
  // fs.writeFileSync('./file.json', JSON.stringify(meg, null, 2))
})

bot.listen('/', 3000, () => {
  console.log('linebot 啟動中...')
})
