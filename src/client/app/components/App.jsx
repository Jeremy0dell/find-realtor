import React, { Component } from 'react'
import AddressForm from './AddressForm.jsx'
import AgenciesList from './AgenciesList.jsx'

let address = "3009 Washington Square, Austin, TX"
let searchTerm = "real estate agency"

class App extends Component {
  render() {
    return (
      <div>
        <AddressForm />
        <AddressForm />
        <AgenciesList address={address} searchTerm={searchTerm}/>
      </div>
    )
  }
}

export default App
