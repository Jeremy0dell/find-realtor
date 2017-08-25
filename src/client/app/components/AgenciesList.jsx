import React, { Component } from 'react'
import axios from 'axios'

class AgenciesList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { nearbyAgencies } = this.props

    return (
      <div>
        <table className="table table-striped">
          <tbody>
            {nearbyAgencies.length ? <tr>
              <th>Company</th>
              <th>Address</th>
            </tr> : ""}
          {nearbyAgencies.map((agency) =>
            <tr key={agency.id}>
              <td>{agency.name}</td>
              <td>{agency.vicinity}</td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
    )
  }
}

export default AgenciesList
