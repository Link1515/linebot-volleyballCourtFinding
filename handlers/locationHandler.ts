import type { MessageEvent, LocationEventMessage, FlexMessage } from '@line/bot-sdk'
import { client } from '@projectRoot/linebot'
import rawPlaceInfoList from '@data/placeInfoList.json'
import messages from '@data/messages.json'
import type { PlaceInfo, PlaceInfoWithDistance } from '@data/types'
import { calculateDistance, Location, parseLatLng } from '@utils/index'
import { createFlexPlaces } from '@template/index'

const AMOUNT_OF_PLACE = 5
// in km
const MAX_DISTANCE = 15
const placeInfoList = rawPlaceInfoList as PlaceInfo[]

export const locationHandler = (message: LocationEventMessage, replyToken: MessageEvent['replyToken']) => {
  const userLocation: Location = {
    latitude: message.latitude,
    longitude: message.longitude
  }

  const amount = Math.max(1, AMOUNT_OF_PLACE)

  const placesWithDistance: PlaceInfoWithDistance[] = []
  for (const placeInfo of placeInfoList) {
    const target = parseLatLng(placeInfo.LatLng)
    if (!target) continue

    const distance = calculateDistance(userLocation, target, 'K')
    if (distance > MAX_DISTANCE) continue

    placesWithDistance.push({
      ...placeInfo,
      distance
    })
  }

  placesWithDistance.sort((a, b) => a.distance - b.distance)
  const resultPlaces = placesWithDistance.slice(0, amount)

  if (resultPlaces.length === 0) {
    return client.replyMessage(replyToken, {
      type: 'text',
      text: messages.noCourtAround
    })
  }

  const flexPlaces = createFlexPlaces(resultPlaces)

  return client.replyMessage(replyToken, [
    flexPlaces as FlexMessage,
    {
      type: 'text',
      text: messages.selectCourt
    }
  ])
}
