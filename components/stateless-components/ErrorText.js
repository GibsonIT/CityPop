import React from 'react'
import {Text} from 'react-native'
import PropTypes from 'prop-types'

/** Text meant for error messages to be displayed on the screen */
const ErrorText = ({text}) => {
    return(
        <Text style = {{color: 'red'}}>{text}</Text>
    )
}

ErrorText.propTypes = { text: PropTypes.string } /** The text to be displayed */

export default ErrorText;