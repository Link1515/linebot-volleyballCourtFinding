import type {
  MessageEvent,
  LocationEventMessage,
  FlexMessage
} from '@line/bot-sdk'
import { client } from '../linebot'
import { placeInfoList, PlaceInfo } from '../data/placeInfoList'
import { calculateDistance, Location } from '../utils'
import { createFlexPlaces } from '../template'

const amountOfPlaces = 5
/**
 * max place distance send to user (in km)
 */
const maxDistance = 15

export const locationHandler = (
  message: LocationEventMessage,
  replyToken: MessageEvent['replyToken']
) => {
  const userLocation: Location = {
    latitude: message.latitude,
    longitude: message.longitude
  }
  /**
   * five closest places around user
   */
  let resultPlaces: Required<PlaceInfo>[] = []

  placeInfoList.forEach((placeInfo, index) => {
    const targetLocation: Location = {
      latitude: +placeInfo.LatLng.split(',')[0],
      longitude: +placeInfo.LatLng.split(',')[1]
    }

    if (index < amountOfPlaces) {
      /**
       * if index less than amountOfPlace, then just push into resultPlaces
       */
      resultPlaces.push({
        ...placeInfo,
        distance: calculateDistance(userLocation, targetLocation, 'K')
      })

      resultPlaces.sort((a, b) => a.distance - b.distance)
    } else {
      /**
       * if index greater than amountOfPlace, then compare comparedDistance(next placeInfo distance) to farthestDistanceOfResultPlaces
       */
      const farthestDistanceOfResultPlaces =
        resultPlaces[amountOfPlaces - 1].distance
      const comparedDistance = calculateDistance(
        userLocation,
        targetLocation,
        'K'
      )

      if (comparedDistance < farthestDistanceOfResultPlaces) {
        resultPlaces.pop()
        resultPlaces.push({
          ...placeInfo,
          distance: calculateDistance(userLocation, targetLocation, 'K')
        })

        resultPlaces.sort((a, b) => a.distance - b.distance)
      }
    }
  })

  /**
   * remove place farer than minDistance
   */
  resultPlaces = resultPlaces.filter(place => place.distance < maxDistance)

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
