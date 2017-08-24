import React, { Component } from 'react'
import AddressForm from './AddressForm.jsx'
import AgenciesList from './AgenciesList.jsx'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

let address = '3009 washington Square, Austin, TX'
let searchTerm = 'real_estate_agency'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { address0: 'San Francisco, CA',
                   address1: 'San Francisco, CA' }

    this.onChange0 = (address) => {
      this.setState({ address0: address })
      console.log(this.state)
    }

    this.onChange1 = (address) => {
      this.setState({ address1: address })
      console.log(this.state)
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(event)

    geocodeByAddress(this.state.address0)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))

    geocodeByAddress(this.state.address1)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    return (
      <div>
        <AddressForm address={this.state.address0} onChange={this.onChange0} />
        <AddressForm address={this.state.address1} onChange={this.onChange1} />
        <AgenciesList address={address} searchTerm={searchTerm} />
      </div>
    )
  }
}

export default App
