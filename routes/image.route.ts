import express from 'express'
import axios from 'axios'
import https from 'https'

const router = express.Router()

// deal with img url without ssl
router.get('/:file', (req, res) => {
  axios({
    method: 'get',
    url: encodeURI('https://iplay.sa.gov.tw/Upload/photogym/' + req.params.file),
    responseType: 'stream',
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  }).then(response => {
    response.data.pipe(res)
  })
})

export default router
