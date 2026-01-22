import type { messagingApi } from '@line/bot-sdk'
import type { Court } from '@data/types'
import messages from '@data/messages.json'

export function createCourtBubbles(courts: Court[]) {
  const courtBubbles: messagingApi.FlexBubble[] = courts.map(court => ({
    type: 'bubble',
    size: 'micro',
    hero: {
      type: 'image',
      url: encodeURI(court.Photo1),
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
          text: court.Name,
          weight: 'bold',
          size: 'sm',
          align: 'center',
          wrap: true
        },
        {
          type: 'text',
          text: messages.distance.replace('{distance}', formatDistance(court.Distance)),
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
                  text: '📍' + court.Address
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
      type: 'postback',
      data: `action=showCourt&id=${court.GymID}`,
      displayText: messages.userSelection.replace('{name}', court.Name)
    }
  }))

  return courtBubbles
}

function formatDistance(distance: number) {
  return distance > 1 ? `${distance} 公里` : `${distance * 1000} 公尺`
}
