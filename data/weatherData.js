import axios from 'axios'
import 'dotenv/config'

export let weatherData = []

const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=' + process.env.WEATHER_API_KEY + '&locationName=新北市'

axios
  .get(encodeURI(url))
  .then(({ data }) => {
    weatherData = data
  }).catch((error) => {
    console.log(error)
  })
