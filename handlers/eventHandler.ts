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
          throw new Error(`Unknown message: ${JSON.stringify(message)}`)
      }
    }

    case 'follow':
      return replyText(event.replyToken, 'Got followed event')

    case 'unfollow':
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`)

    case 'join':
      return replyText(event.replyToken, `Joined ${event.source.type}`)

    case 'leave':
      return console.log(`Left: ${JSON.stringify(event)}`)

    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`)
  }
}
