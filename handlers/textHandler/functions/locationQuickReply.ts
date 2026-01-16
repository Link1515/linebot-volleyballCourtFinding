import { client } from '@projectRoot/linebot'
import messages from '@data/messages.json'

export const locationQuickReply = (replyToken: string) => {
  return client.replyMessage({
    replyToken,
    messages: [
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
  })
}
