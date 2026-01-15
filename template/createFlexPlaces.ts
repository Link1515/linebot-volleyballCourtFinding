import type { FlexPlaces } from '@template/types'
import type { PlaceInfo } from '@data/placeInfoList'
import { createPlacesBubbles } from '@template/createPlacesBubbles'

export const createFlexPlaces = (placeInfoList: Required<PlaceInfo>[]) => {
  const flexPlaces: FlexPlaces = {
    type: 'flex',
    altText: '5 個最近的排球場',
    contents: {
      type: 'carousel',
      contents: createPlacesBubbles(placeInfoList)
    }
  }

  return flexPlaces
}
