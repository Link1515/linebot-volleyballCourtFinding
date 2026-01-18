import type { webhook } from '@line/bot-sdk'
import { showPlaceCarousel } from '@handlers/messages'

export const locationHandler = (message: webhook.LocationMessageContent) => {
  return showPlaceCarousel(message)
}
