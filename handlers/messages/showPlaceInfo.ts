import { messagingApi } from '@line/bot-sdk'
import type { PlaceInfo } from '@data/types'
import rawPlaceInfoList from '@data/placeInfoList.json'
import messages from '@data/messages.json'
import { getWeatherInfo } from '@api/getWeatherInfo'
import { parseLatLng } from '@projectRoot/utils'

const placeInfoList = rawPlaceInfoList as PlaceInfo[]

export const showPlaceInfo = async (id: number): Promise<messagingApi.Message[]> => {
  for (const placeInfo of placeInfoList) {
    if (placeInfo.GymID === id) {
      const city = placeInfo.Address.slice(0, 3)
      const { latitude, longitude } = parseLatLng(placeInfo.LatLng)
      const weatherStr = (await getWeatherInfo(city)) as string

      return [
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
    }
  }

  return [{ type: 'text', text: messages.notFound }]
}
