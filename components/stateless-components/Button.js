import React from 'react'
import {TouchableHighlight, Text} from 'react-native'
import PropTypes from 'prop-types'
import panelStyles from '../../modules/Styles'
import {colors} from '../../modules/StyleBase'


/**
 * Button returns a stateless component that is a pressable button that calls onPress when pressed
 */

const Button = ({title, onPress}) => {
    return(
        <TouchableHighlight onPress = {onPress} 
        style = {[panelStyles.button, panelStyles.container]}
        underlayColor = {colors.primary_dark}
        >
            <Text style = {[panelStyles.standardText, panelStyles.standardAlignment]}>{title}</Text>
        </TouchableHighlight>
    )
}

Button.propTypes = {
    /** title - text to be displayed on the button*/ 
    title: PropTypes.string, 
    /** onPress - required function with no parameters to be called when button is pressed */
    onPress: PropTypes.func.isRequired 
}


export default Button;