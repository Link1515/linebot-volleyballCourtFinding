import { WebhookEvent } from '@line/bot-sdk'
import { replyText } from '../utils/replyText'
import { textHandler } from './textHandler'

export const eventHandler = (event: WebhookEvent) => {
  const { type: eventType } = event
  switch (eventType) {
    case 'message': {
      const { message } = event
      switch (message.type) {
        case 'text':
          return textHandler(message, event.replyToken, event.source)
        // case 'location':
        //   return handleLocation(message, event.replyToken)
        default:
          return console.log(`Unhandle event type: ${JSON.stringify(message)}`)
      }
    }

    case 'follow':
      return replyText(event.replyToken, '感謝您的追蹤')

    case 'unfollow':
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`)

    case 'join':
      return replyText(event.replyToken, 'hi, 大家好，歡迎使用 超級排🏐球場 line機器人')

    case 'leave':
      return console.log(`Left: ${JSON.stringify(event)}`)

    default:
      return console.log(`Unknown event: ${JSON.stringify(event)}`)
  }
}
