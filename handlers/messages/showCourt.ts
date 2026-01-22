import { messagingApi } from '@line/bot-sdk'
import type { Court } from '@data/types'
import rawCourts from '@data/courts.json'
import messages from '@data/messages.json'
import { getWeatherInfo } from '@api/getWeatherInfo'
import { parseLatLng } from '@projectRoot/utils'

const courts = rawCourts as Court[]

export async function showCourt(id: number): Promise<messagingApi.Message[]> {
  for (const court of courts) {
    if (court.GymID === id) {
      const city = court.Address.slice(0, 3)
      const latLan = parseLatLng(court.LatLng)
      if (!latLan) return [{ type: 'text', text: messages.notFound }]
      const weatherStr = (await getWeatherInfo(city)) as string

      return [
        {
          type: 'location',
          title: court.Name,
          address: court.Address,
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
