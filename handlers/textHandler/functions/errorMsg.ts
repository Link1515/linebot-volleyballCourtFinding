import { replyText } from '@utils/index'
import messages from '@data/messages.json'

export const errorMsg = (replyToken: string) => {
  return replyText(replyToken, messages.tryAgain)
}
