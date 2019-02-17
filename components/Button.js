import React from 'react'
import {TouchableHighlight, Text} from 'react-native'


/**
 * Button returns a component that is a pressable button that calls onPress when pressed
 * 
 * @param {string} title - text to be displayed on the button
 * @param {function} onPress - callback function without parameters to be called when button is pressed  
 */

const Button = ({title, onPress}) => {
    return(
        <TouchableHighlight onPress = {onPress} style = {{flex: 1}}>
            <Text style = {{fontSize: 25}}>{title}</Text>
        </TouchableHighlight>
    )
}

export default Button;