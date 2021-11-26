import axios from 'axios'
// import fs from 'fs'
import https from 'https'

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
    console.log(data.length)
  })
  .catch((error) => {
    console.log(error)
  })

console.log([].length)
