import type { MessageEvent, LocationEventMessage, FlexMessage } from '@line/bot-sdk'
import { client } from '@projectRoot/linebot'
import { placeInfoList, PlaceInfo } from '@data/placeInfoList'
import { calculateDistance, Location, parseLatLng } from '@utils/index'
import { createFlexPlaces } from '@template/index'

type PlacesWithDistance = Required<PlaceInfo> & { distance: number }

const amountOfPlaces = 5
/**
 * max place distance send to user (in km)
 */
const maxDistance = 15

export const locationHandler = (message: LocationEventMessage, replyToken: MessageEvent['replyToken']) => {
  const userLocation: Location = {
    latitude: message.latitude,
    longitude: message.longitude
  }

  const amount = Math.max(1, amountOfPlaces)

  const placesWithDistance: PlacesWithDistance[] = []
  for (const placeInfo of placeInfoList) {
    const target = parseLatLng(placeInfo.LatLng)
    if (!target) continue

    const distance = calculateDistance(userLocation, target, 'K')
    if (distance > maxDistance) continue

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
      text: '附近沒有球場'
    })
  }

  const flexPlaces = createFlexPlaces(resultPlaces)

  return client.replyMessage(replyToken, [
    flexPlaces as FlexMessage,
    {
      type: 'text',
      text: '請點選您想去的球場'
    }
  ])
}
