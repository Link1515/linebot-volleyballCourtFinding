import { MessageEvent } from '@line/bot-sdk'
import { replyText } from '@utils/index'

const tutorialStr = `歡迎使用 超級排🏐球場 line 機器人

🔺點擊選單的 "球場資訊" 後，再點擊出現的 "傳送位置" 按鈕傳送自己所在的位置，機器人將會快速幫您找到附近最近的 5 個排球場!

接著點下想去的排球場，機器人就會傳送給您該球場的地圖，並根據球場所在的城市，提供天氣資訊!

GitHub:
https://github.com/Link1515/linebot-volleyballCourtFinding

如果發現問題，歡迎透過 GitHub 聯繫我!`

export const tutorialMsg = (replyToken: MessageEvent['replyToken']) => {
  replyText(replyToken, tutorialStr)
}
