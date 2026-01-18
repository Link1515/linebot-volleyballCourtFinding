import type { messagingApi } from '@line/bot-sdk'
import messages from '@data/messages.json'

export function msgFollow(): messagingApi.Message[] {
  return [{ type: 'text', text: messages.follow }]
}
