import React, { Component } from 'react'
import AddressForm from './AddressForm.jsx'
import AgenciesList from './AgenciesList.jsx'
import AgenciesSearch from './AgenciesSearch.jsx'
import AgenciesContainer from './AgenciesContainer.jsx'

let address = '3009 washington Square, Austin, TX'
let searchTerm = 'real_estate_agency'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { address0: 'Austin, TX',
                   address1: 'Austin, TX' }

    this.onChange0 = (address) => {
      this.setState({ address0: address })
    }

    this.onChange1 = (address) => {
      this.setState({ address1: address })
    }
  }

  render() {
    return (
      <div className="container app-container">
        <h1>Find Real Estate Agencies near you!</h1>
        <div className="row form-container">
          <h3>Input Address #1</h3>
          <AddressForm address={this.state.address0} onChange={this.onChange0} />
          <h3>Input Address #2</h3>
          <AddressForm address={this.state.address1} onChange={this.onChange1} />
        </div>
        <AgenciesContainer addresses={this.state} />
      </div>
    )
  }
}

export default App
