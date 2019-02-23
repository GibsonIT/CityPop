import React from 'react'
import {Text, View} from 'react-native'
import PropTypes from 'prop-types'


/**
 * Displays a box with a title and content text
 * @param {string} title - the title text
 * @param {string} text - the main content text 
 */
const TextBox = ({title, text}) =>{

    return(
        <View style = {{borderColor: 'black', borderWidth: 3}}>
            <Text>{title}</Text> 
            <Text>{text}</Text>        
        </View>

    )

}

TextBox.propTypes = {

    /** Smaller displayed title of the content text */
    title: PropTypes.string,

    /** The content text to be displayed in the box */
    text: PropTypes.string
}

export default TextBox;