import type { webhook } from '@line/bot-sdk'
import { showCourtCarousel } from '@handlers/messages'

export function locationHandler(message: webhook.LocationMessageContent) {
  return showCourtCarousel(message)
}
