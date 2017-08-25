import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import axios from 'axios'

const SERVER_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAsc823zMjgiOy9b1beWBvKUmysOVYRqu4&type=real_estate_agency&radius=500&location='

const fetchAgencies = function(lat, lng) {
  return axios(`${SERVER_URL}${lat},${lng}`).then(res => res.data)
}

const fetchWrappedAgencies = function(coords) {
  console.log(coords, 'hihi')
  return coords.map(coord => fetchAgencies(coord.lat, coord.lng))
}

const getAgencyInfo = function(coords) {
  return Promise.all(fetchWrappedAgencies(coords))
  .then((data) => {
    console.log(data, 'h1h1')
    return data
  })
  .catch((err) => { console.log('There was an error gathering user information:', err) })
}

const fetchCoords = function(adr) {
  return geocodeByAddress(adr).then(results => getLatLng(results[0]))
}

function getWrappedCoords(adr0, adr1) {
  const addresses = [...arguments]
  return addresses.map(adr => fetchCoords(adr))
}

function getMapInfo(adr0, adr1) {
  console.log('hello')
  return Promise.all(getWrappedCoords(adr0, adr1))
  .then((data) => {
    console.log(data)
    return data
  })
  .catch((err) => { console.log('There was an error gathering user information:', err) })
}





function getUserData (id) {
  return Promise.all(fetchWrappedUrls(id))
  .then((data) => {
    console.log(`${data[0].username} has ${data[1].length} posts, ${data[2].length} todos, and ${data[3].length} albums.`);
    return data;
  })
  .catch((err) => { console.log('There was an error gathering user information:', err) });
}

export { getMapInfo, getAgencyInfo }
