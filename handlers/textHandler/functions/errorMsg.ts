import { MessageEvent } from '@line/bot-sdk'
import { replyText } from '../../../utils'

const errorStr = '請再操作一次'

export const errorMsg = (replyToken:MessageEvent['replyToken']) => {
  replyText(replyToken, errorStr)
}
