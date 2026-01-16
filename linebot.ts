import { MiddlewareConfig, messagingApi } from '@line/bot-sdk'

export const middlewareConfig: MiddlewareConfig = {
  channelSecret: process.env.CHANNEL_SECRET
}

export const client = new messagingApi.MessagingApiClient({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})
