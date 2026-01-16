import { client } from '@projectRoot/linebot'

export const replyText = (replyToken: string, texts: string | string[]) => {
  texts = Array.isArray(texts) ? texts : [texts]
  return client.replyMessage({
    replyToken,
    messages: texts.map(text => ({ type: 'text', text }))
  })
}
