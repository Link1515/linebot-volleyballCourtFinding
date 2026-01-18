import type { messagingApi } from '@line/bot-sdk'
import messages from '@data/messages.json'

export const msgJoin = (): messagingApi.Message[] => {
  return [{ type: 'text', text: messages.join }]
}
