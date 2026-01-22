import { messagingApi, webhook } from '@line/bot-sdk'
import rawCourts from '@data/courts.json'
import messages from '@data/messages.json'
import type { Court, CourtWithDistance } from '@data/types'
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

  const courtWithDistance: CourtWithDistance[] = []
  for (const court of courts) {
    const target = parseLatLng(court.LatLng)
    if (!target) continue

    const distance = calculateDistance(userLocation, target)
    if (distance > MAX_DISTANCE) continue

    courtWithDistance.push({
      ...court,
      distance
    })
  }

  courtWithDistance.sort((a, b) => a.distance - b.distance)
  const resultCourt = courtWithDistance.slice(0, amount)

  if (resultCourt.length === 0) {
    return [{ type: 'text', text: messages.noCourtAround }]
  }

  const flexCourts = createCourtFlex(resultCourt)

  return [flexCourts, { type: 'text', text: messages.selectCourt }]
}
