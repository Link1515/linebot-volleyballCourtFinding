import { MessageEvent, TextEventMessage, EventSource } from '@line/bot-sdk'
import {
  showPlaceInfo,
  locationQuickReply,
  tutorialMsg,
  errorMsg
} from './functions'

export const textHandler =
  (
    message: TextEventMessage,
    replyToken: MessageEvent['replyToken'],
    source: EventSource
  ) => {
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
