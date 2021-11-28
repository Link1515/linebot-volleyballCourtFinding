import axios from 'axios'
import 'dotenv/config'
import schedule from 'node-schedule'

export let weatherData = []

const url =
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=' +
  process.env.WEATHER_API_KEY +
  '&locationName=新北市'

function getWeatherData () {
  const updateTime = new Date(Date.now())
  console.log('weather data update - ' + updateTime.toLocaleString())

  axios
    .get(encodeURI(url))
    .then(({ data }) => {
      weatherData = data.records.location[0].weatherElement
    })
    .catch((error) => {
      console.log(error)
    })
}

getWeatherData()

schedule.scheduleJob({ scheduleJobur: [6, 18], minute: 5 }, getWeatherData)
