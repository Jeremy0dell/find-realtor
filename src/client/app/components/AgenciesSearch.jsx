import React, { Component } from 'react'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class AgenciesSearch extends Component {

  constructor(props) {
    super(props)
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.props.addresses.address0)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))

    geocodeByAddress(this.props.addresses.address1)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <button type="submit">Submit It</button>
      </form>
    )
  }
}

export default AgenciesSearch
