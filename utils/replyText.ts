import { MessageEvent } from '@line/bot-sdk'
import { client } from '@projectRoot/linebot'

export const replyText = (replyToken: MessageEvent['replyToken'], texts: string | string[]) => {
  texts = Array.isArray(texts) ? texts : [texts]
  return client.replyMessage(
    replyToken,
    texts.map(text => ({ type: 'text', text }))
  )
}
