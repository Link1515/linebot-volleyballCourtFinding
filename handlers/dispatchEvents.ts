import type { webhook } from '@line/bot-sdk'
import { dispatchEvent } from '@handlers/dispatchEvent'

export async function dispatchEvents(events: webhook.Event[]) {
  await Promise.allSettled(
    events.map(async event => {
      try {
        await dispatchEvent(event)
      } catch (err) {
        console.error(err)
      }
    })
  )
}
