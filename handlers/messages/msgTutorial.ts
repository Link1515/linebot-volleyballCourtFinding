import type { messagingApi } from '@line/bot-sdk'
import messages from '@data/messages.json'

export function msgTutorial(): messagingApi.Message[] {
  return [{ type: 'text', text: messages.tutorial }]
}
