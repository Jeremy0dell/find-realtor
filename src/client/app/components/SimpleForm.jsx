import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { address: this.props.address }
    // this.onChange = (address) => this.setState({ address })
  }

  // handleFormSubmit = (event) => {
  //   event.preventDefault()
  //
  //   geocodeByAddress(this.state.address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => console.log('Success', latLng))
  //     .catch(error => console.error('Error', error))
  // }

  render() {
    const inputProps = {
      value: this.props.address,
      onChange: this.props.onChange,
    }

    const cssClasses = {
      // root: 'form-group',
      input: 'Demo__search-input',
      autocompleteContainer: 'Demo__autocomplete-container',
    }

    const myStyles = {
      autocompleteItem: { color: 'black' },
      autocompleteItemActive: { color: 'blue' }
    }

    // return (
    //   <form onSubmit={this.props.handleFormSubmit}>
    //     <PlacesAutocomplete inputProps={inputProps} />
    //     <button type="submit">Submit</button>
    //   </form>
    // )
    return (
      <div className="col">
        <PlacesAutocomplete
          inputProps={inputProps}
          classNames={cssClasses}
          styles={myStyles}
        />
      </div>
    )
  }
}

export default SimpleForm
