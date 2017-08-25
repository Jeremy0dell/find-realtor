import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import axios from 'axios'

const SERVER_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAsc823zMjgiOy9b1beWBvKUmysOVYRqu4&type=real_estate_agency&radius=5000&location='

/**
  This queries the Node.JS server, which in turn queries Google Places
 */
function fetchAgencies(lat, lng) {
  return axios.get('/places', {
    params: {
      lat: lat,
      lng: lng
    }
  })
  .then(res => res.data)
}

/**
  Runs fetchAgencies on the geolocated coordinates
*/
function fetchWrappedAgencies(coords) {
  return coords.map(coord => fetchAgencies(coord.lat, coord.lng))
}

/**
  Given an array or coordinates, gets information on nearby agencies
*/
function getAgencyInfo(coords) {
  return Promise.all(fetchWrappedAgencies(coords))
  .then((data) => {
    return data
  })
  .catch((err) => { console.log('There was an error gathering agency information:', err) })
}

/**
  Fetches coordinates from an address with geolocation
*/
const fetchCoords = function(adr) {
  return geocodeByAddress(adr).then(results => getLatLng(results[0]))
}

/**
  Runs fetchCoords on both inputted addresses
*/
function getWrappedCoords(adr0, adr1) {
  const addresses = [...arguments]
  return addresses.map(adr => fetchCoords(adr))
}

/**
  Given two addresses, returns coordinates via geolocation
*/
function getMapInfo(adr0, adr1) {
  return Promise.all(getWrappedCoords(adr0, adr1))
  .then((data) => {
    return data
  })
  .catch((err) => { console.log('There was an error gathering map information:', err) })
}


/**
  Removes duplicates from overlapping list of agencies
*/
function arrayUnique(arr) {
  let a = arr[0].results.concat(arr[1].results)
  for(let i=0; i<a.length; ++i) {
    for(let j=i+1; j<a.length; ++j) {
      if(a[i].id === a[j].id) {
        a.splice(j--, 1)
      }
    }
  }
  console.log(a)
  return a
}

/**
  Finds distance between two locations based on coordinates
  Uses fancy math ;)
*/
function getDistance(lat1,lon1,lat2,lon2) {
  let R = 6371 // Radius of the earth in km
  let dLat = deg2rad(lat2-lat1);  // deg2rad below
  let dLon = deg2rad(lon2-lon1)
  let a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)

  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  let d = R * c // Distance in km
  return d
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

/**
  Finds distance between an agency and two addresses
*/
function getTotalDist(element, coord0, coord1) {
  let arrLat = element.geometry.location.lat
  let arrLng = element.geometry.location.lng
  let dist0 = getDistance(arrLat, arrLng, coord0.lat, coord0.lng)
  let dist1 = getDistance(arrLat, arrLng, coord1.lat, coord1.lng)
  let totalDist = dist0 + dist1
  return totalDist
}

/**
  returns a list of agencies in ascending order, by the total
  (sum) distance between each agency and the two addresses.
*/
function sortByDistance(arr, coord0, coord1) {

  for (let i = 0; i < arr.length; i++) {
    arr[i]["distance"] = getTotalDist(arr[i], coord0, coord1)
  }

  arr.sort(function(a, b) {
    return a.distance - b.distance
  });

  return arr
}

export { getMapInfo, getAgencyInfo, arrayUnique, sortByDistance }
