import type { webhook } from '@line/bot-sdk'
import { locationQuickReply, msgTutorial, msgTryAgain } from '@handlers/messages'

export const textHandler = (message: webhook.TextMessageContent) => {
  switch (message.text) {
    case '球場資訊':
      return locationQuickReply()
    case '使用教學':
      return msgTutorial()
    default:
      return msgTryAgain()
  }
}
