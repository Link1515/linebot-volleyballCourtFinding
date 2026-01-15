import { MessageEvent } from '@line/bot-sdk'
import { client } from '../../../linebot'

export const locationQuickReply = (replyToken: MessageEvent['replyToken']) => {
  return client.replyMessage(replyToken, {
    type: 'text',
    text: '請點下方的按鈕，傳送您的位置',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'location',
            label: '傳送位置'
          }
        }
      ]
    }
  })
}
