import { placeData } from '../data.js'
import placeFlex from '../template/placeFlex.js'
import { distance } from '../distance.js'

export default (event) => {
  const myLatitude = event.message.latitude
  const myLongitude = event.message.longitude

  const minDistanceData = []

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

  for (let i = 0; i < minDistanceData.length; i++) {
    placeFlex.contents.contents.push({
      type: 'bubble',
      size: 'micro',
      hero: {
        type: 'image',
        url: placeData[minDistanceData[i].index].Photo1,
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

  setTimeout(() => {
    placeFlex.contents.contents = []
  }, 100)

  console.log(minDistanceData)
  event.reply(placeFlex)
}
