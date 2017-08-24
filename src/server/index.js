const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const app = express()

app.use('/public', express.static(path.join(__dirname, '../public/')))

app.use(bodyParser.json())

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
