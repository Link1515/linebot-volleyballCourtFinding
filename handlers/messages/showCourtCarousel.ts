import { messagingApi, webhook } from '@line/bot-sdk'
import rawCourts from '@data/courts.json'
import messages from '@data/messages.json'
import type { Court } from '@data/types'
import { calculateDistance, LatLng, parseLatLng } from '@utils/index'
import { createCourtFlex } from '@template/index'

const AMOUNT_OF_COURT = 5
// in km
const MAX_DISTANCE = 15
const courts = rawCourts as Court[]

export function showCourtCarousel(message: webhook.LocationMessageContent): messagingApi.Message[] {
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

    court.Distance = d
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
