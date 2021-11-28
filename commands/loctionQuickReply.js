export default (event) => {
  event.reply({
    type: 'text',
    text: '請點下方的按鈕，傳送您的位置',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'location',
            label: '傳送位置'
          }
        }
      ]
    }
  })
}
