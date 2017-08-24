const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use('/public', express.static(path.join(__dirname, '../public/')))

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
