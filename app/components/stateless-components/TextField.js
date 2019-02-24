import React from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { textField } from '../../modules/ComponentStyles'

/**
 * Text field component for text input
 * @param {string} placeholder - placeholder text
 * @param {callback} onChange - callback function 
 */
const TextField = ({placeholder, onChange}) => {
  
    return(
        <TextInput
        style = {textField}
        placeholder = {placeholder}
        onChangeText = {(text) => onChange(text)}
        />
        )

};

TextField.propTypes = {
    /**
     * Placeholder in the textfield
     */
    placeholder: PropTypes.string,

    /**
     * Callback function when text in the textfield has changed.
     * Takes in a string parameter text
     */
    onChange: PropTypes.func.isRequired
}

/** 
 * @callback callback
 * @param {string} text - text that has changed
*/



export default TextField;