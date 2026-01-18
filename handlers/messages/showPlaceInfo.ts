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
      const latLan = parseLatLng(placeInfo.LatLng)
      if (!latLan) return [{ type: 'text', text: messages.notFound }]
      const weatherStr = (await getWeatherInfo(city)) as string

      return [
        {
          type: 'location',
          title: placeInfo.Name,
          address: placeInfo.Address,
          latitude: latLan.latitude,
          longitude: latLan.longitude
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
