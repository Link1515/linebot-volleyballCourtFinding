import { MessageEvent, TextEventMessage, EventSource } from '@line/bot-sdk'
import { replyText } from '../../utils/replyText'

export const textHandler =
  (
    message: TextEventMessage,
    replyToken: MessageEvent['replyToken'],
    source: EventSource
  ) => {
    switch (message.text) {
      // message start with "go "
      case message.text.match(/^go\s/)?.input:
        return replyText(replyToken, ['aaa', 'bbb'])
    }
  }
