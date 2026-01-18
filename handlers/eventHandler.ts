import type { webhook, messagingApi } from '@line/bot-sdk'
import { client } from '@projectRoot/linebot'
import { textHandler } from '@projectRoot/handlers/textHandler'
import { locationHandler } from '@handlers/locationHandler'
import { postbackHanlder } from '@handlers/postbackHanlder'
import { msgFollow } from '@handlers/messages'
import { msgJoin } from './messages/msgJoin'

type ReplyableEvent = Extract<webhook.Event, { replyToken?: unknown }> & { replyToken: string }

export const eventHandler = async (event: webhook.Event) => {
  let replyMessages: messagingApi.Message[]

  const { type: eventType } = event
  switch (eventType) {
    case 'message':
      const { message } = event
      switch (message.type) {
        case 'text':
          replyMessages = textHandler(message)
          break
        case 'location':
          replyMessages = locationHandler(message)
          break
      }
      break

    case 'postback':
      const { postback } = event
      replyMessages = await postbackHanlder(postback)
      break

    case 'follow':
      replyMessages = msgFollow()
      break

    case 'join':
      replyMessages = msgJoin()
      break
  }

  if (replyMessages && isReplyableEvent(event)) {
    return client.replyMessage({
      replyToken: event.replyToken,
      messages: replyMessages
    })
  }
}

function isReplyableEvent(event: webhook.Event): event is ReplyableEvent {
  return 'replyToken' in event && typeof (event as any).replyToken === 'string'
}
