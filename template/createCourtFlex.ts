import type { messagingApi } from '@line/bot-sdk'
import type { CourtWithDistance } from '@data/types'
import { createCourtBubbles } from '@projectRoot/template/createCourtBubbles'
import messages from '@data/messages.json'

export function createCourtFlex(courts: CourtWithDistance[]) {
  const courtFlex: messagingApi.FlexMessage = {
    type: 'flex',
    altText: messages.courtAround,
    contents: {
      type: 'carousel',
      contents: createCourtBubbles(courts)
    }
  }

  return courtFlex
}
