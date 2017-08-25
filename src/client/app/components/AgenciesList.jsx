import React, { Component } from 'react'
import axios from 'axios'

class AgenciesList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { nearbyAgencies } = this.props

    return (
      <ul>
      {nearbyAgencies.map((agency) =>
        <li key={agency.distance}>{agency.name}</li>
      )}
    </ul>
    )
  }
}

export default AgenciesList
