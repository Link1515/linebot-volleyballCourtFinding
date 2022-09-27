import axios from 'axios'
import { placeInfoList } from '../data/placeInfoList'

export default (event) => {
  let weatherStr = ''
  let city = ''

  const title = event.message.text.replace('go ', '')
  let address = ''
  let pos = 0

  for (let i = 0; i < placeInfoList.length; i++) {
    if (placeInfoList[i].Name === title) {
      address = placeInfoList[i].Address
      pos = placeInfoList[i].LatLng
      city = address.slice(0, 3)
      break
    }
  }

  getWeather()

  async function getWeather () {
    const weatherData = await axios
      .get(encodeURI('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=' +
      process.env.WEATHER_API_KEY +
      '&locationName=' + city))
      .then(({ data }) => {
        return data.records.location[0].weatherElement
      })
      .catch((error) => {
        console.log(error)
      })

    const precipitation = weatherData[1].time[0].parameter.parameterName
    const minTemperature = weatherData[2].time[0].parameter.parameterName
    const discription = weatherData[3].time[0].parameter.parameterName
    const maxTemperature = weatherData[4].time[0].parameter.parameterName

    weatherStr = `${city}今日${discription}，最高溫${maxTemperature}度，最低溫${minTemperature}度，${precipitation > 60 ? '⚠️' : ''}降雨機率${precipitation}%${precipitation > 60 ? '⚠️' : ''}`

    event.reply([
      weatherStr,
      {
        type: 'location',
        title,
        address,
        latitude: pos.split(',')[0],
        longitude: pos.split(',')[1]
      }
    ])
  }
}
