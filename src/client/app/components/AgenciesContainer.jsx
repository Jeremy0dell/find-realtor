import React, { Component } from 'react'
import AgenciesList from './AgenciesList.jsx'
import AgenciesSearch from './AgenciesSearch.jsx'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import { getMapInfo, getAgencyInfo, arrayUnique, sortByDistance } from '../util.js'

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
      .then(arrayUnique)
      .then((data) => {
        this.setState({ nearbyAgencies: sortByDistance(data, this.state.coordinates[0], this.state.coordinates[1]) })
      })
    }

  }

  render() {
    return (
      <div>
        <AgenciesSearch handleFormSubmit={this.handleFormSubmit}/>
        <AgenciesList nearbyAgencies={this.state.nearbyAgencies} />
      </div>
    )
  }
}

export default AgenciesContainer
