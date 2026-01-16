import type { FlexPlaces } from '@template/types'
import type { PlaceInfoWithDistance } from '@data/types'
import { createPlacesBubbles } from '@template/createPlacesBubbles'

export const createFlexPlaces = (placeInfoList: PlaceInfoWithDistance[]) => {
  const flexPlaces: FlexPlaces = {
    type: 'flex',
    altText: '距離您最近的球場',
    contents: {
      type: 'carousel',
      contents: createPlacesBubbles(placeInfoList)
    }
  }

  return flexPlaces
}
