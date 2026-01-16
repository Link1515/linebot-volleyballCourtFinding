import { WebhookEvent } from '@line/bot-sdk'
import { replyText } from '@utils/index'
import { textHandler } from '@handlers/textHandler'
import { locationHandler } from '@handlers/locationHandler'
import messages from '@data/messages.json'

export const eventHandler = (event: WebhookEvent) => {
  const { type: eventType } = event
  switch (eventType) {
    case 'message': {
      const { message } = event
      switch (message.type) {
        case 'text':
          return textHandler(message, event.replyToken, event.source)
        case 'location':
          return locationHandler(message, event.replyToken)
        // default:
        //   return console.log(`Unhandle event type: ${JSON.stringify(message)}`)
      }
    }

    case 'follow':
      return replyText(event.replyToken, messages.follow)

    // case 'unfollow':
    //   return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`)

    case 'join':
      return replyText(event.replyToken, messages.join)

    // case 'leave':
    //   return console.log(`Left: ${JSON.stringify(event)}`)

    // default:
    //   return console.log(`Unknown event: ${JSON.stringify(event)}`)
  }
}
