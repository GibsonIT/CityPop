import React from 'react'
import {TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types'


/**
 * Button class with an icon to show up as a search button
 * @param {function} onPress - parameterless callback function 
 */
const SearchButton = ({onPress}) => {

    return(
        <TouchableHighlight onPress = {onPress} style = {containerStyle}>
            <Icon name={"search"}  size={30} color={"#000"} />
       </TouchableHighlight>
    )

};



SearchButton.propTypes = {
    /**
     * Callback function without parameters thats called when button is pressed
     */
    onPress: PropTypes.func.isRequired
}

const  containerStyle = {
      borderWidth:3,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:50,
       height:50,
       backgroundColor:'#fff',
       borderRadius:50
    }
export default SearchButton;