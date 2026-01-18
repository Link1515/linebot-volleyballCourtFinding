import type { messagingApi } from '@line/bot-sdk'
import messages from '@data/messages.json'

export const locationQuickReply = (): messagingApi.Message[] => {
  return [
    {
      type: 'text',
      text: messages.sendLocationByButton,
      quickReply: {
        items: [
          {
            type: 'action',
            action: {
              type: 'location',
              label: messages.sendLocation
            }
          }
        ]
      }
    }
  ]
}
