import axios from 'axios'
import type { TextEventMessage } from '@line/bot-sdk'
import { placeInfoList } from '../../../data/placeInfoList'
import { replyText } from '../../../utils/replyText'

export const showPlaceInfo = (message: TextEventMessage) => {
  const placeName = message.text.replace('go ', '')

  // query place info
  let city:string
  let address: string
  let latitude: string
  let longitude: string

  for (const placeInfo of placeInfoList) {
    if (placeInfo.Name === placeName) {
      address = placeInfo.Address
      city = placeInfo.Address.slice(0, 3)
      latitude = placeInfo.LatLng.split(',')[0]
      longitude = placeInfo.LatLng.split(',')[1]
      break
    }
  }

  // get weather info
}
