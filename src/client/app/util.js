import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import axios from 'axios'

const SERVER_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAsc823zMjgiOy9b1beWBvKUmysOVYRqu4&type=real_estate_agency&radius=5000&location='

const fetchAgencies = function(lat, lng) {
  // return axios(`${SERVER_URL}${lat},${lng}`).then(res => res.data)
  return axios.get('/places', {
    params: {
      lat: lat,
      lng: lng
    }
  })
  .then(res => res.data)
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

function arrayUnique(arr) {
    var a = arr[0].results.concat(arr[1].results)
    console.log(a)
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i].id === a[j].id)
                a.splice(j--, 1)
        }
    }
    console.log(a)
    return a
}

function getDistance(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function getTotalDist(element, coord0, coord1) {
  let arrLat = element.geometry.location.lat
  let arrLng = element.geometry.location.lng
  let dist0 = getDistance(arrLat, arrLng, coord0.lat, coord0.lng)
  let dist1 = getDistance(arrLat, arrLng, coord1.lat, coord1.lng)
  let totalDist = dist0 + dist1
  return totalDist
}

function compare(a,b) {
  if (a.distance < b.distance)
     return -1;
  if (a.distance > b.distance)
    return 1;
  return 0;
}

function sortByDistance(arr, coord0, coord1) {

  for (let i = 0; i < arr.length; i++) {
    arr[i]["distance"] = getTotalDist(arr[i], coord0, coord1)
  }
  console.log(arr.map(x => x.distance), arr)
  arr.sort(function(a, b) {
    return a.distance - b.distance;
  });
  console.log(arr.map(x => x.distance),'now?', arr)
  // console.log(arr, 'hi')
  // var result = arr.sort((a, b) => {
  //   console.log(getTotalDist(a, coord0, coord1) - getTotalDist(b, coord0, coord1))
  //   return getTotalDist(a, coord0, coord1) - getTotalDist(b, coord0, coord1)
  // })
  //
  // console.log(result, 'ho')

  return arr
}

export { getMapInfo, getAgencyInfo, arrayUnique, sortByDistance }
