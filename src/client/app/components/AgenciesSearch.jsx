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
        <button type="submit">Submit It</button>
      </form>
    </div>
    )
  }
}

export default AgenciesSearch
