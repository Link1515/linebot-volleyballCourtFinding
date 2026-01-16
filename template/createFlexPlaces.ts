import type { FlexPlaces } from '@template/types'
import type { PlaceInfoWithDistance } from '@data/types'
import { createPlacesBubbles } from '@template/createPlacesBubbles'
import messages from '@data/messages.json'

export const createFlexPlaces = (placeInfoList: PlaceInfoWithDistance[]) => {
  const flexPlaces: FlexPlaces = {
    type: 'flex',
    altText: messages.courtAround,
    contents: {
      type: 'carousel',
      contents: createPlacesBubbles(placeInfoList)
    }
  }

  return flexPlaces
}
