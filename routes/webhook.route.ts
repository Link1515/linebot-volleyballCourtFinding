import express, { Request, Response } from 'express'
import { ClientConfig, Client, middleware, MiddlewareConfig, WebhookEvent, TextMessage, MessageAPIResponseBase } from '@line/bot-sdk'

// line bot config
const clientConfig: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET
}
const middlewareConfig: MiddlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET || ''
}

// Create a new LINE SDK client.
const client = new Client(clientConfig)

const router = express.Router()

const textEventHandler = async (event: WebhookEvent): Promise<MessageAPIResponseBase | undefined> => {
  console.log('hi')
  // Process all variables here.
  if (event.type !== 'message' || event.message.type !== 'text') {
    return
  }

  // Process all message related variables here.
  const { replyToken } = event
  // const { text } = event.message

  console.log(replyToken)

  // Create a new message.
  const response: TextMessage = {
    type: 'text',
    text: '123'
  }

  // Reply to the user.
  await client.replyMessage(replyToken, response)
}

router.use(middleware(middlewareConfig))
router.post('/', async (req: Request, res: Response): Promise<Response> => {
  const events: WebhookEvent[] = req.body.events

  // Process all of the received events asynchronously.
  const results = await Promise.all(
    events.map(async (event: WebhookEvent) => {
      try {
        await textEventHandler(event)
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
