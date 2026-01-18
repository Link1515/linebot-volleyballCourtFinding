import type { webhook } from '@line/bot-sdk'
import { showPlaceCarousel } from '@handlers/messages'

export function locationHandler(message: webhook.LocationMessageContent) {
  return showPlaceCarousel(message)
}
