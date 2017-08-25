import React, { Component } from 'react'
import axios from 'axios'

class AgenciesList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { nearbyAgencies } = this.props

    return (
      <table className="table">
        <tbody>
          <tr>
            <th>Company</th>
          </tr>
        {nearbyAgencies.map((agency) =>
          <tr key={agency.id}>
            <td>{agency.name}</td>
          </tr>
        )}
      </tbody>
    </table>
    )
  }
}

export default AgenciesList
