import { MessageEvent } from '@line/bot-sdk'
import { replyText } from '@utils/index'
import messages from '@data/messages.json'

export const errorMsg = (replyToken: MessageEvent['replyToken']) => {
  replyText(replyToken, messages.tryAgain)
}
