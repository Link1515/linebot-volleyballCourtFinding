import { client } from '@projectRoot/linebot'
import type { PlaceInfo } from '@data/types'
import rawPlaceInfoList from '@data/placeInfoList.json'
import messages from '@data/messages.json'
import { getWeatherInfo } from '@api/getWeatherInfo'
import { parseLatLng, replyText } from '@projectRoot/utils'

const placeInfoList = rawPlaceInfoList as PlaceInfo[]

export const showPlaceInfo = async (id: number, replyToken: string) => {
  for (const placeInfo of placeInfoList) {
    if (placeInfo.GymID === id) {
      const city = placeInfo.Address.slice(0, 3)
      const { latitude, longitude } = parseLatLng(placeInfo.LatLng)
      const weatherStr = (await getWeatherInfo(city)) as string

      return client.replyMessage({
        replyToken,
        messages: [
          {
            type: 'location',
            title: placeInfo.Name,
            address: placeInfo.Address,
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
