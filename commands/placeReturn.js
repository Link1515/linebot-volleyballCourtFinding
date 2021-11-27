import { placeData } from '../data/placeData.js'
import template from '../template/placeFlex.js'
import { distance } from '../distance.js'
import { weatherData } from '../data/weatherData.js'

export default (event) => {
  const precipitation = weatherData[1].time[1].parameter.parameterName

  const myLatitude = event.message.latitude
  const myLongitude = event.message.longitude

  let minDistanceData = []

  const placeFlex = JSON.parse(JSON.stringify(template))

  for (let i = 0; i < placeData.length; i++) {
    const location = placeData[i].LatLng.split(',')

    if (i < 5) {
      minDistanceData.push({
        Name: placeData[i].Name,
        index: i,
        distance: distance(myLatitude, myLongitude, location[0], location[1], 'K')
      })
      minDistanceData.sort((a, b) => a.distance - b.distance)
    } else {
      if (distance(myLatitude, myLongitude, location[0], location[1], 'K') < minDistanceData[4].distance) {
        minDistanceData.pop()
        minDistanceData.push({
          Name: placeData[i].Name,
          index: i,
          distance: distance(myLatitude, myLongitude, location[0], location[1], 'K')
        })
        minDistanceData.sort((a, b) => a.distance - b.distance)
      }
    }
  }

  // 去除過遠球場
  minDistanceData = minDistanceData.filter(item => item.distance < 15)

  if (minDistanceData.length !== 0) {
    for (let i = 0; i < minDistanceData.length; i++) {
      placeFlex.contents.contents.push({
        type: 'bubble',
        size: 'micro',
        hero: {
          type: 'image',
          url: new URL(placeData[minDistanceData[i].index].Photo1.split('/').pop(), process.env.SERVICE_URL).toString(),
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '320:213'
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: placeData[minDistanceData[i].index].Name,
              weight: 'bold',
              size: 'sm',
              align: 'center',
              wrap: true
            },
            {
              type: 'text',
              text: `距離: 約${Math.round((minDistanceData[i].distance + Number.EPSILON) * 100) / 100}公里`,
              size: '12px',
              align: 'center',
              weight: 'bold'
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'baseline',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'text',
                      wrap: true,
                      color: '#8c8c8c',
                      size: 'xs',
                      flex: 5,
                      text: placeData[minDistanceData[i].index].Address
                    }
                  ]
                }
              ]
            }
          ],
          spacing: 'sm',
          paddingAll: '13px'
        },
        action: {
          type: 'message',
          label: 'action',
          text: `go ${placeData[minDistanceData[i].index].Name}`
        }
      })
    }
    console.log(minDistanceData)

    // 降雨機率小提醒
    if (+precipitation >= 60) {
      event.reply([placeFlex, '請點選您想去的球場', `小提醒: 今日的降雨機率為 ${precipitation}%`])
    } else {
      event.reply([placeFlex, '請點選您想去的球場'])
    }
  } else {
    event.reply('附近沒有球場')
  }
}
