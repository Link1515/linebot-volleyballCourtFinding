import type { webhook } from '@line/bot-sdk'
import { replyText } from '@utils/index'
import { textHandler } from '@handlers/textHandler'
import { locationHandler } from '@handlers/locationHandler'
import { postbackHanlder } from '@handlers/postbackHanlder'
import messages from '@data/messages.json'

export const eventHandler = (event: webhook.Event) => {
  const { type: eventType } = event
  switch (eventType) {
    case 'message':
      const { message } = event
      switch (message.type) {
        case 'text':
          return textHandler(message, event.replyToken, event.source)
        case 'location':
          return locationHandler(message, event.replyToken)
      }
      break

    case 'postback':
      const { postback } = event
      return postbackHanlder(postback, event.replyToken)

    case 'follow':
      return replyText(event.replyToken, messages.follow)

    case 'join':
      return replyText(event.replyToken, messages.join)
  }
}
