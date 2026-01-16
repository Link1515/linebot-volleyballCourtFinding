import { MessageEvent } from '@line/bot-sdk'
import { replyText } from '@utils/index'
import messages from '@data/messages.json'

export const tutorialMsg = (replyToken: MessageEvent['replyToken']) => {
  replyText(replyToken, messages.tutorial)
}
