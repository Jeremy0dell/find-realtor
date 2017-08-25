import React, { Component } from 'react'
import SimpleForm from './SimpleForm.jsx'

class AddressForm extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SimpleForm address={this.props.address} onChange={this.props.onChange} />
    )
  }
}

export default AddressForm
