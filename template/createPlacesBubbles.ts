import type { PlaceInfo } from '../data/placeInfoList'
import type { ContentsContent } from './types'

export const createPlacesBubbles = (placeInfoList: Required<PlaceInfo>[]) => {
  const contentBubbles: ContentsContent[] = placeInfoList.map(placeInfo => ({
    type: 'bubble',
    size: 'micro',
    hero: {
      type: 'image',
      // deal with img url without ssl
      // url: new URL(placeInfo.Photo1.split('/').pop() as string, process.env.SERVICE_URL).toString(),
      url: placeInfo.Photo1,
      size: 'full',
      aspectMode: 'cover',
      aspectRatio: '320:213'
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: placeInfo.Name,
          weight: 'bold',
          size: 'sm',
          align: 'center',
          wrap: true
        },
        {
          type: 'text',
          text: `距離: 約${Math.round((placeInfo.distance + Number.EPSILON) * 100) / 100}公里`,
          size: '12px',
          align: 'center',
          weight: 'bold'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  wrap: true,
                  color: '#8c8c8c',
                  size: 'xs',
                  flex: 5,
                  text: '📍' + placeInfo.Address
                }
              ]
            }
          ]
        }
      ],
      spacing: 'sm',
      paddingAll: '13px'
    },
    action: {
      type: 'message',
      label: 'action',
      text: `go ${placeInfo.Name}`
    }
  }))

  return contentBubbles
}
