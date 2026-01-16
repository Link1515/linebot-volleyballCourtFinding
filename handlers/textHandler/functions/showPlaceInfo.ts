import type { webhook } from '@line/bot-sdk'
import { client } from '@projectRoot/linebot'
import type { PlaceInfo } from '@data/types'
import rawPlaceInfoList from '@data/placeInfoList.json'
import messages from '@data/messages.json'
import { getWeatherInfo } from '@api/getWeatherInfo'
import { parseLatLng, replyText } from '@projectRoot/utils'

const placeInfoList = rawPlaceInfoList as PlaceInfo[]

export const showPlaceInfo = async (replyToken: string, message: webhook.TextMessageContent) => {
  const title = message.text.replace('go ', '')

  for (const placeInfo of placeInfoList) {
    if (placeInfo.Name === title) {
      const address = placeInfo.Address
      const city = placeInfo.Address.slice(0, 3)
      const { latitude, longitude } = parseLatLng(placeInfo.LatLng)

      const weatherStr = (await getWeatherInfo(city)) as string

      return client.replyMessage({
        replyToken,
        messages: [
          {
            type: 'location',
            title,
            address,
            latitude,
            longitude
          },
          {
            type: 'text',
            text: weatherStr
          }
        ]
      })
    }
  }

  return replyText(replyToken, messages.notFound)
}
