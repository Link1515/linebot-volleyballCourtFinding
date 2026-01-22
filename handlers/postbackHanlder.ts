import { webhook } from '@line/bot-sdk'
import { showCourt } from '@handlers/messages'

interface PostbackData {
  action: string
  [key: string]: string
}

export async function postbackHanlder(postback: webhook.PostbackContent) {
  const postbackData = Object.fromEntries(new URLSearchParams(postback.data)) as PostbackData

  switch (postbackData.action) {
    case 'showCourt':
      const id = parseInt(postbackData.id)
      if (isNaN(id)) return []
      return await showCourt(id)
  }
}
