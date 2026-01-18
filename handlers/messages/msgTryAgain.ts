import type { messagingApi } from '@line/bot-sdk'
import messages from '@data/messages.json'

export const msgTryAgain = (): messagingApi.Message[] => {
  return [{ type: 'text', text: messages.tryAgain }]
}
