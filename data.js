import axios from 'axios'
import https from 'https'
// import schedule from 'node-schedule'

export let placeData = []
export let placeDataHasHttps = true

const url =
  'https://iplay.sa.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none&Keyword=排球場&City=新北市&GymType=排球場'

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
      placeDataHasHttps = false
      return axios.get(encodeURI(url), {
        httpsAgent: agent
      })
    }
    return Promise.reject(error)
  }
)

axios
  .get(encodeURI(url))
  .then(({ data }) => {
    placeData = data
  })
  .catch((error) => {
    console.log(error)
  })
