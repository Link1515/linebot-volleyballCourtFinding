import axios from 'axios'
import https from 'https'
import { writeFile } from 'fs/promises'
import { resolve } from 'path'
import type { PlaceInfo } from '@data/types'

const GYM_API_URL = encodeURI(
  'https://iplay.sports.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none&Keyword=排球場'
)

const agent = new https.Agent({
  rejectUnauthorized: false
})

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    // 如果 https 過期，以 http 再次發送
    if (error.code === 'CERT_HAS_EXPIRED') {
      console.log('https expired')
      return axios.get(GYM_API_URL, {
        httpsAgent: agent
      })
    }
    return Promise.reject(error)
  }
)

async function getPlaceData() {
  try {
    const { data } = await axios.get(GYM_API_URL)
    const placeInfoList = data.filter((placeInfo: PlaceInfo) => placeInfo.OpenState !== 'N')
    await writeFile(resolve(__dirname, '../data/placeInfoList.json'), JSON.stringify(placeInfoList), 'utf-8')

    const updateTime = new Date()
    console.log('place data update - ' + updateTime.toLocaleString())
  } catch (error) {
    console.log(error)
  }
}

getPlaceData()
