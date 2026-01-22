import { messagingApi } from '@line/bot-sdk'
import { msgJoin } from './messages'

export function joinHandler(): messagingApi.Message[] {
  return msgJoin()
}
