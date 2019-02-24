import React from 'react'
import {Text} from 'react-native'
import PropTypes from 'prop-types'
import {errorText} from '../../modules/ComponentStyles'

/** Text meant for error messages to be displayed on the screen */
const ErrorText = ({text}) => {
    return(
        <Text style = {errorText}>{text}</Text>
    )
}

ErrorText.propTypes = { text: PropTypes.string } /** The text to be displayed */

export default ErrorText;