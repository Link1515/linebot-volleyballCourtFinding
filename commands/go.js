import { placeData } from '../data.js'

export default (event, name) => {
  let address = ''
  const title = name
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
