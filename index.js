import 'dotenv/config'
import linebot from 'linebot'
import axios from 'axios'
// import fs from 'fs'

import { distance } from './distance.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

const url =
  'https://iplay.sa.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none&Keyword=排球場&City=新北市&GymType=排球場'

bot.on('message', async (event) => {
  try {
    if (event.message.latitude) {
      const myLatitude = event.message.latitude
      const myLongitude = event.message.longitude
      const { data } = await axios.get(encodeURI(url))

      const minDistanceData = []
      const replies = []

      for (let i = 0; i < data.length; i++) {
        const location = data[i].LatLng.split(',')

        if (i < 5) {
          minDistanceData.push({ index: i, distance: distance(myLatitude, myLongitude, location[0], location[1], 'K') })
          minDistanceData.sort((a, b) => a.distance - b.distance)
        } else {
          if (distance(myLatitude, myLongitude, location[0], location[1], 'K') < minDistanceData[4].distance) {
            minDistanceData.pop()
            minDistanceData.push({
              index: i,
              distance: distance(myLatitude, myLongitude, location[0], location[1], 'K')
            })
            minDistanceData.sort((a, b) => a.distance - b.distance)
          }
        }
      }

      for (let i = 0; i < minDistanceData.length; i++) {
        replies.push(data[minDistanceData[i].index].Name)
      }

      // console.log(minDistanceData)
      console.log(replies)
      event.reply(replies)
    }
  } catch (error) {
    console.log(error)
  }

  // const meg = event
  // fs.writeFileSync('./file.json', JSON.stringify(meg, null, 2))
})

bot.listen('/', 3000, () => {
  console.log('linebot 啟動中...')
})
