import { ClientConfig, Client, MiddlewareConfig } from '@line/bot-sdk'

// line bot config
const clientConfig: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET
}
export const middlewareConfig: MiddlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET || ''
}

// Create a new LINE SDK client.
export const client = new Client(clientConfig)
