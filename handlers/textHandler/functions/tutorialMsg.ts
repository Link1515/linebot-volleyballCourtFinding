import { replyText } from '@utils/index'
import messages from '@data/messages.json'

export const tutorialMsg = (replyToken: string) => {
  return replyText(replyToken, messages.tutorial)
}
