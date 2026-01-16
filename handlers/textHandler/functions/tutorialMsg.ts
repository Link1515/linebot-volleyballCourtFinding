import { replyText } from '@utils/index'
import messages from '@data/messages.json'

export const tutorialMsg = (replyToken: string) => {
  replyText(replyToken, messages.tutorial)
}
