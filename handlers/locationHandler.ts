import type { webhook } from '@line/bot-sdk'
import { showCourtCarousel } from '@handlers/messages'

export async function locationHandler(message: webhook.LocationMessageContent) {
  return await showCourtCarousel(message)
}
