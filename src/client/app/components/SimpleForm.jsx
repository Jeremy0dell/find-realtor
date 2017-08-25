import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const inputProps = {
      value: this.props.address,
      onChange: this.props.onChange,
    }

    const cssClasses = {
      input: 'Demo__search-input',
      autocompleteContainer: 'Demo__autocomplete-container',
    }

    const myStyles = {
      autocompleteItem: { color: 'black' },
      autocompleteItemActive: { color: 'blue' }
    }

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
