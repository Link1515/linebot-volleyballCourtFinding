export default (event) => {
  const usageStr = `
歡迎使用 雙北打排球🏐 line機器人

🔺點選選單中央的 "球場資訊" 後，再點擊出現的 "傳送位置" 按鈕傳送自己所在的位置，機器人將會快速幫您找到附近最近的5個排球場!

接著點下想去的排球場，機器人就會傳送給您該球場的地圖

🔺點選選單左側的 "今日天氣"，機器人將會告訴您今天的最高溫、最低溫、以及降雨機率

github: 
https://github.com/Link1515/linebot-volleyballCourtFinding
如果有出現bug歡迎透過github跟我說!
`
  event.reply(usageStr)
}
