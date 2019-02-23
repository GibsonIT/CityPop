import React from 'react'
import {Text} from 'react-native'
import PropTypes from 'prop-types'

const ErrorText = ({text}) => {
    return(
        <Text style = {{color: 'red'}}>{text}</Text>
    )
}

ErrorText.propTypes = { text: PropTypes.string}

export default ErrorText;