const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const axios = require('axios')

const app = express()

const SERVER_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAsc823zMjgiOy9b1beWBvKUmysOVYRqu4&type=real_estate_agency&radius=16000&location='

app.use('/public', express.static(path.join(__dirname, '../public/')))

app.use(bodyParser.json())


/**
  Google Places API must be ran in the server
*/
app.get('/places', (req, res, next) => {
  axios(`${SERVER_URL}${req.query.lat},${req.query.lng}`)
  .then(result => {
    res.send(result.data)
  })
  .catch(err => {
    res.send('We have an error.')
  })
})

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})


app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
