import type { messagingApi } from '@line/bot-sdk'
import type { PlaceInfoWithDistance } from '@data/types'
import { createPlacesBubbles } from '@template/createPlacesBubbles'
import messages from '@data/messages.json'

export function createFlexPlaces(placeInfoList: PlaceInfoWithDistance[]) {
  const flexPlaces: messagingApi.FlexMessage = {
    type: 'flex',
    altText: messages.courtAround,
    contents: {
      type: 'carousel',
      contents: createPlacesBubbles(placeInfoList)
    }
  }

  return flexPlaces
}
