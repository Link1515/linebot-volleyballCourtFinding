import type { webhook } from '@line/bot-sdk'
import { showPlaceInfo, locationQuickReply, tutorialMsg, errorMsg } from '@handlers/textHandler/functions'

export const textHandler = (message: webhook.TextMessageContent, replyToken: string, source: webhook.Source) => {
  switch (message.text) {
    // message start with "go "
    case message.text.match(/^go\s/)?.input:
      return showPlaceInfo(replyToken, message)
    case '球場資訊':
      return locationQuickReply(replyToken)
    case '使用教學':
      return tutorialMsg(replyToken)
    default:
      return errorMsg(replyToken)
  }
}
