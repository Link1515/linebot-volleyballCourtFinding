import { MessageEvent } from '@line/bot-sdk'
import { client } from '@projectRoot/linebot'
import messages from '@data/messages.json'

export const locationQuickReply = (replyToken: MessageEvent['replyToken']) => {
  return client.replyMessage(replyToken, {
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
  })
}
