import { replyText } from '@utils/index'
import messages from '@data/messages.json'

export const errorMsg = (replyToken: string) => {
  replyText(replyToken, messages.tryAgain)
}
