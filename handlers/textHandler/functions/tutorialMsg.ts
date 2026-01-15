import { MessageEvent } from '@line/bot-sdk'
import { replyText } from '@utils/index'

const tutorialStr = `歡迎使用 超級排🏐球場 line機器人

🔺點選選單中央的 "球場資訊" 後，再點擊出現的 "傳送位置" 按鈕傳送自己所在的位置，機器人將會快速幫您找到附近最近的5個排球場!

接著點下想去的排球場，機器人就會傳送給您該球場的地圖，並且會根據您要去的城市，提供天氣資訊!

github:
https://github.com/Link1515/linebot-volleyballCourtFinding

如果有出現 bug 歡迎透過 github 聯繫我!`

export const tutorialMsg = (replyToken: MessageEvent['replyToken']) => {
  replyText(replyToken, tutorialStr)
}
