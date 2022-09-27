import axios from 'axios'
import https from 'https'
import schedule from 'node-schedule'

interface PlaceInfo {
  GymID: number
  Name: string
  OperationTel: string
  Address: string
  Rate: number
  RateCount: number
  Distance: number
  GymFuncList: string
  Photo1: string
  LatLng: string
  RentState: string
  OpenState: string
  Declaration: null | string
  LandAttrName: string
}

export let placeInfoList: PlaceInfo[] = []

const placeUrl =
  'https://iplay.sa.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none&Keyword=排球場'

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
    placeInfoList = data.filter((placeInfo:PlaceInfo) => placeInfo.OpenState !== 'N')
  } catch (error) {
    console.log(error)
  }
}

getPlaceData()

schedule.scheduleJob({ dayOfWeek: 3, hour: 0 }, getPlaceData)
