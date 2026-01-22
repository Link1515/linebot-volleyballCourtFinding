import { messagingApi } from '@line/bot-sdk'
import messages from '@data/messages.json'
import { getWeatherInfo } from '@api/getWeatherInfo'
import { parseLatLng, getCourts } from '@utils/index'

export async function showCourt(id: number): Promise<messagingApi.Message[]> {
  const courts = await getCourts()

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
