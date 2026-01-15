import express, { Request, Response } from 'express'
import { middleware, WebhookEvent } from '@line/bot-sdk'
import { middlewareConfig } from '@projectRoot/linebot'
import { eventHandler } from '@handlers/eventHandler'

const router = express.Router()

router.use(middleware(middlewareConfig))

router.post('/', async (req: Request, res: Response): Promise<Response> => {
  const events: WebhookEvent[] = req.body.events

  // Process all of the received events asynchronously.
  const results = await Promise.all(
    events.map(async (event: WebhookEvent) => {
      try {
        eventHandler(event)
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err)
        }

        // Return an error message.
        return res.status(500).json({
          status: 'error'
        })
      }
    })
  )

  // Return a successfull message.
  return res.status(200).json({
    status: 'success',
    results
  })
})

export default router
