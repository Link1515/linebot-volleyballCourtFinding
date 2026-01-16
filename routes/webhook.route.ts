import express, { Request, Response } from 'express'
import { middleware, webhook } from '@line/bot-sdk'
import { middlewareConfig } from '@projectRoot/linebot'
import { eventHandler } from '@handlers/eventHandler'

const router = express.Router()

router.use(middleware(middlewareConfig))

router.post('/', async (req: Request, res: Response) => {
  const body = req.body as webhook.CallbackRequest

  if (!body?.events || !Array.isArray(body.events)) {
    res.status(400).json({ status: 'invalid_request' })
    return
  }

  res.status(200).json({ status: 'success' })

  void Promise.allSettled(
    body.events.map(async event => {
      try {
        await eventHandler(event)
      } catch (err) {
        console.error(err)
      }
    })
  )
})

export default router
