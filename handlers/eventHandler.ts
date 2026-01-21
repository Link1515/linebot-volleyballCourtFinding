import type { webhook, messagingApi } from '@line/bot-sdk'
import { client } from '@projectRoot/linebot'
import { textHandler } from '@projectRoot/handlers/textHandler'
import { locationHandler } from '@handlers/locationHandler'
import { postbackHanlder } from '@handlers/postbackHanlder'
import { msgFollow } from '@handlers/messages'
import { msgJoin } from './messages/msgJoin'

type ReplyableEvent = Extract<webhook.Event, { replyToken?: unknown }> & { replyToken: string }

export async function eventHandler(event: webhook.Event) {
  let replyMessages: messagingApi.Message[]

  const { type: eventType } = event
  switch (eventType) {
    case 'message':
      switch (event.message.type) {
        case 'text':
          replyMessages = textHandler(event.message)
          break
        case 'location':
          replyMessages = locationHandler(event.message)
          break
      }
      break

    case 'postback':
      replyMessages = await postbackHanlder(event.postback)
      break

    case 'follow':
      replyMessages = msgFollow()
      break

    case 'join':
      replyMessages = msgJoin()
      break
  }

  if (!replyMessages || replyMessages.length === 0 || !isReplyableEvent(event)) return

  client.replyMessage({
    replyToken: event.replyToken,
    messages: replyMessages
  })
}

function isReplyableEvent(event: webhook.Event): event is ReplyableEvent {
  return 'replyToken' in event && typeof (event as any).replyToken === 'string'
}
