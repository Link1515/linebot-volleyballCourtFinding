import axios from 'axios'
import https from 'https'
import schedule from 'node-schedule'

export let placeData = []

const placeUrl =
  'https://iplay.sa.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none&Keyword=排球場'

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
      return axios.get(encodeURI(placeUrl), {
        httpsAgent: agent
      })
    }
    return Promise.reject(error)
  }
)

async function getPlaceData () {
  try {
    const updateTime = new Date(Date.now())
    console.log('place data update - ' + updateTime.toLocaleString())

    const { data } = await axios.get(encodeURI(placeUrl))
    placeData = data.filter((item) => item.OpenState !== 'N')
  } catch (error) {
    console.log(error)
  }
}

getPlaceData()

schedule.scheduleJob({ dayOfWeek: 3, hour: 0 }, getPlaceData)
