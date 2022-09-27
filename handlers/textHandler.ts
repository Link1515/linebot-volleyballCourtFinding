import { MessageEvent, TextEventMessage, EventSource } from '@line/bot-sdk'
import { client } from '../linebot'

export const textHandler =
  (
    message: TextEventMessage,
    replyToken: MessageEvent['replyToken'],
    source: EventSource
  ) => {
    switch (message.text) {
      case 'test':
        return client.replyMessage(replyToken, { type: 'text', text: 'suc!' })
    }
  }
