import { placeData } from '../data/placeData.js'

export default (event) => {
  const title = event.message.text.replace('go ', '')
  let address = ''
  let pos = 0

  for (let i = 0; i < placeData.length; i++) {
    if (placeData[i].Name === title) {
      address = placeData[i].Address
      pos = placeData[i].LatLng
      break
    }
  }

  event.reply({
    type: 'location',
    title: title,
    address: address,
    latitude: pos.split(',')[0],
    longitude: pos.split(',')[1]
  })
}
