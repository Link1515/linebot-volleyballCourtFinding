import { weatherData } from '../data/weatherData.js'

export default (event) => {
  const precipitation = weatherData[1].time[1].parameter.parameterName
  const minTemperature = weatherData[2].time[1].parameter.parameterName
  const discription = weatherData[3].time[1].parameter.parameterName
  const maxTemperature = weatherData[4].time[1].parameter.parameterName

  const resultStr = `今日${discription}，最高溫${maxTemperature}度，最低溫${minTemperature}度，降雨機率${precipitation}%`

  event.reply(resultStr)
}
