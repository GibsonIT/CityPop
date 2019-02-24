import React from 'react'
import {TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types'
import {searchButton} from '../../modules/ComponentStyles'


/**
 * Button class with an icon to show up as a search button
 * @param {function} onPress - parameterless callback function 
 */
const SearchButton = ({onPress}) => {

    return(
        <TouchableHighlight onPress = {onPress} style = {searchButton.container} underlayColor = {searchButton.color}>
            <Icon name = {"search"}  size={30} color = {searchButton.color} />
       </TouchableHighlight>
    )

};



SearchButton.propTypes = {
    /**
     * Callback function without parameters thats called when button is pressed
     */
    onPress: PropTypes.func.isRequired
}


export default SearchButton;