import type {
  TextEventMessage,
  MessageEvent,
  LocationMessage
} from '@line/bot-sdk'
import { client } from '../../../linebot'
import { placeInfoList } from '../../../data/placeInfoList'
import { weatherInfo } from '../../../data/weatherInfo'

export const showPlaceInfo = async (
  replyToken: MessageEvent['replyToken'],
  message: TextEventMessage
) => {
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

      // get weather info
      const weatherStr = (await weatherInfo(city)) as string

      // reply message
      return client.replyMessage(replyToken, [
        {
          type: 'location',
          title,
          address,
          latitude,
          longitude
        } as LocationMessage,
        {
          type: 'text',
          text: weatherStr
        }
      ])
    }
  }
}
