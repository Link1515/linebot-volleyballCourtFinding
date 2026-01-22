import { messagingApi } from '@line/bot-sdk'
import { msgFollow } from './messages'

export function followHandler(): messagingApi.Message[] {
  return msgFollow()
}
