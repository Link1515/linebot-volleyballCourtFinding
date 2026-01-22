import { messagingApi, webhook } from '@line/bot-sdk'
import messages from '@data/messages.json'
import type { Court } from '@data/types'
import { calculateDistance, LatLng, parseLatLng, getCourts } from '@utils/index'
import { createCourtFlex } from '@template/index'

const AMOUNT_OF_COURT = 5
// in km
const MAX_DISTANCE = 15

export async function showCourtCarousel(message: webhook.LocationMessageContent): Promise<messagingApi.Message[]> {
  const courts = await getCourts()

  const userLocation: LatLng = {
    latitude: message.latitude,
    longitude: message.longitude
  }

  const amount = Math.max(1, AMOUNT_OF_COURT)

  let nearbyCourts: Court[] = []
  for (const court of courts) {
    const target = parseLatLng(court.LatLng)
    if (!target) continue

    const d = calculateDistance(userLocation, target)
    if (d > MAX_DISTANCE) continue

    court.Distance = Math.round(d * 100) / 100
    nearbyCourts.push(court)
  }

  nearbyCourts.sort((a, b) => a.Distance - b.Distance)
  nearbyCourts = nearbyCourts.slice(0, amount)

  if (nearbyCourts.length === 0) {
    return [{ type: 'text', text: messages.noCourtAround }]
  }

  const flexCourts = createCourtFlex(nearbyCourts)

  return [flexCourts, { type: 'text', text: messages.selectCourt }]
}
