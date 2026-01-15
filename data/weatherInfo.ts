import axios from 'axios'

export interface Parameter {
  parameterName: string
  parameterValue?: string
  parameterUnit?: string
}

export interface Time {
  startTime: string
  endTime: string
  parameter: Parameter
}

export interface WeatherElement {
  elementName: string
  time: Time[]
}

export interface Location {
  locationName: string
  weatherElement: WeatherElement[]
}

export interface Records {
  datasetDescription: string
  location: Location[]
}

export interface Field {
  id: string
  type: string
}

export interface Result {
  resource_id: string
  fields: Field[]
}

export interface WeatherApiData {
  success: string
  result: Result
  records: Records
}

const WEATHER_API_BASE_URL = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001'

/**
 * Cities that cannot get weather info. It should be convert '市' to '縣'
 */
const cityConvertList = ['彰化市', '花蓮市']

export const weatherInfo = async (city: string) => {
  try {
    if (cityConvertList.includes(city)) {
      city = city.replace(/市/, '縣')
    }

    const apiUrl = new URL(WEATHER_API_BASE_URL)
    apiUrl.searchParams.set('Authorization', process.env.WEATHER_API_KEY)
    apiUrl.searchParams.set('locationName', city)

    const { data }: { data: WeatherApiData } = await axios.get(apiUrl.toString())

    const weather = data.records.location[0].weatherElement

    const precipitation = weather[1].time[0].parameter.parameterName
    const minTemperature = weather[2].time[0].parameter.parameterName
    const discription = weather[3].time[0].parameter.parameterName
    const maxTemperature = weather[4].time[0].parameter.parameterName

    return `${city}今日${discription}，最高溫${maxTemperature}度，最低溫${minTemperature}度，${+precipitation > 60 ? '⚠️' : ''}降雨機率${precipitation}%${+precipitation > 60 ? '⚠️' : ''}`
  } catch (error) {
    console.log(error)
  }
}
