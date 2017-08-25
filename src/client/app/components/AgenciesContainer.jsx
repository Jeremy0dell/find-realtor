import React, { Component } from 'react'
import AgenciesList from './AgenciesList.jsx'
import AgenciesSearch from './AgenciesSearch.jsx'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import { getMapInfo, getAgencyInfo } from '../util.js'

import axios from 'axios'

class AgenciesContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      coordinates: [{}, {}],
      nearbyAgencies: []
    }

    // this.onSubmit = (agencies) => {
    //   this.setState({ nearbyAgencies: agencies })
    // }

    this.handleFormSubmit = (event) => {
      event.preventDefault()
      console.log(this.props)

      getMapInfo(this.props.addresses.address0, this.props.addresses.address1)
      .then((data) => {
        this.setState({ coordinates: data })
        return data
      })
      .then(getAgencyInfo)
      .then((res) => {
        console.log(res, 'WOW')
      })

      // geocodeByAddress(this.props.addresses.address0)
      //   .then(results => getLatLng(results[0]))
      //   .then(latLng => {
      //     this.setState({ coordinates: [ latLng, this.state.coordinates[1] ] })
      //   })
      //   .catch(error => console.error('Error', error))
      //
      // geocodeByAddress(this.props.addresses.address1)
      //   .then(results => getLatLng(results[0]))
      //   .then(latLng => {
      //     this.setState({ coordinates: [ this.state.coordinates[0], latLng ] })
      //   })
      //   .catch(error => console.error('Error', error))
    }
    //
    // this.fetchAgencies = (coordinates) => {
    //   let agencies0
    //   let agencies1
    //
    //   console.log(coordinates[0].lat)
    //   axios({
    //     method:'get',
    //     url:`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinates[0].lat},${coordinates[0].lng}&radius=500&type=real_estate_agency&key=AIzaSyAsc823zMjgiOy9b1beWBvKUmysOVYRqu4`
    //   })
    //   .then((result) => {
    //     agencies0 = result.data
    //   })
    //   .then(() => {
    //
    //   })
    // }
  }

  render() {
    return (
      <div>
        <AgenciesSearch handleFormSubmit={this.handleFormSubmit}/>
        <AgenciesList coordinates={this.state.coordinates} />
      </div>
    )
  }
}

export default AgenciesContainer
