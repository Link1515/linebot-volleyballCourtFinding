import axios from 'axios'
import https from 'https'
import schedule from 'node-schedule'

export let placeData = []

const urlNewTaipeiCity =
  'https://iplay.sa.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none&Keyword=排球場&City=新北市'
const urlTaipeiCity =
  'https://iplay.sa.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none&Keyword=排球場&City=臺北市'

const agent = new https.Agent({
  rejectUnauthorized: false
})

axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    if (error.code === 'CERT_HAS_EXPIRED') {
      console.log('https expired')
      return axios.get(encodeURI(urlNewTaipeiCity), {
        httpsAgent: agent
      })
    }
    return Promise.reject(error)
  }
)

async function getData () {
  try {
    const { data: placeDataNewTaipei } = await axios.get(encodeURI(urlNewTaipeiCity))
    const { data: placeDataTaipei } = await axios.get(encodeURI(urlTaipeiCity))
    placeData = [...placeDataNewTaipei, ...placeDataTaipei].filter(item => item.OpenState !== 'N')
  } catch (error) {
    console.log(error)
  }
}

getData()

schedule.scheduleJob({ dayOfWeek: 3 }, getData)
