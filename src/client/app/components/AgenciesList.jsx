import React, { Component } from 'react'
import axios from 'axios'

class AgenciesList extends Component {

  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   // axios({
  //   //   method:'get',
  //   //   url:'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=real_estate_agency&key=AIzaSyAsc823zMjgiOy9b1beWBvKUmysOVYRqu4'
  //   // })
  //   // .then(function(response) {
  //   //   console.log(response)
  //   // })
  // }

  render() {
    return (
      <div>
        <li>
          <ul>{this.props.searchTerm}</ul>
          <ul>Example #2</ul>
          <ul>Example #3</ul>
        </li>
      </div>
    )
  }
}

export default AgenciesList
