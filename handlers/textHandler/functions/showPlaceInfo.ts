import type { webhook } from '@line/bot-sdk'
import { client } from '@projectRoot/linebot'
import type { PlaceInfo } from '@data/types'
import rawPlaceInfoList from '@data/placeInfoList.json'
import messages from '@data/messages.json'
import { getWeatherInfo } from '@api/getWeatherInfo'
import { replyText } from '@projectRoot/utils'

const placeInfoList = rawPlaceInfoList as PlaceInfo[]

export const showPlaceInfo = async (replyToken: string, message: webhook.TextMessageContent) => {
  const title = message.text.replace('go ', '')

  // query place info
  let city: string
  let address: string
  let latitude: number
  let longitude: number

  for (const placeInfo of placeInfoList) {
    if (placeInfo.Name === title) {
      address = placeInfo.Address
      city = placeInfo.Address.slice(0, 3)
      latitude = +placeInfo.LatLng.split(',')[0]
      longitude = +placeInfo.LatLng.split(',')[1]

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
