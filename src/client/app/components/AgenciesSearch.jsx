import React, { Component } from 'react'
import AgenciesList from './AgenciesList.jsx'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class AgenciesSearch extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.props.handleFormSubmit}>
        <button className="btn" type="submit">Find Nearby Agencies</button>
      </form>
    </div>
    )
  }
}

export default AgenciesSearch
