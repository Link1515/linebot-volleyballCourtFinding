import type { FlexPlaces } from './types'
import type { PlaceInfo } from '../data/placeInfoList'
import { createPlacesBubbles } from './createPlacesBubbles'

export const createFlexPlaces = (placeInfoList: PlaceInfo[]) => {
  const flexPlaces: FlexPlaces = {
    type: 'flex',
    altText: '5 closest volleyball court',
    contents: {
      type: 'carousel',
      contents: createPlacesBubbles(placeInfoList)
    }
  }

  return flexPlaces
}
