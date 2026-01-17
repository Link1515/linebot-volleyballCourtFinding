import type { webhook } from '@line/bot-sdk'
import { locationQuickReply, tutorialMsg, errorMsg } from '@handlers/textHandler/functions'

export const textHandler = (message: webhook.TextMessageContent, replyToken: string, source: webhook.Source) => {
  switch (message.text) {
    case '球場資訊':
      return locationQuickReply(replyToken)
    case '使用教學':
      return tutorialMsg(replyToken)
    default:
      return errorMsg(replyToken)
  }
}
