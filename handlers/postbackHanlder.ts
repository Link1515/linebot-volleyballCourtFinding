import { webhook } from '@line/bot-sdk'
import { showPlaceInfo } from '@handlers/messages'

interface PostbackData {
  action: string
  [key: string]: string
}

export function postbackHanlder(postback: webhook.PostbackContent) {
  const postbackData = Object.fromEntries(new URLSearchParams(postback.data)) as PostbackData

  switch (postbackData.action) {
    case 'showPlace':
      const id = parseInt(postbackData.id)
      if (isNaN(id)) return []
      return showPlaceInfo(id)
  }
}
