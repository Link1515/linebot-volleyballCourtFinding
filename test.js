import axios from 'axios'
import fs from 'fs'

const url =
  'https://iplay.sa.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none&Keyword=排球場&City=新北市&GymType=排球場'

// axios
//   .get(encodeURI(url))
//   .then(({ data }) => {
//     fs.writeFileSync('./file.json', JSON.stringify(data, null, 2))

//     console.log(data.length)
//   })
//   .catch((error) => {
//     console.log(error)
// })

const str = '123,456'
console.log(str.split(','))
