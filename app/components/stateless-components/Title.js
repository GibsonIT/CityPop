import React from 'react'
import {Text, View} from 'react-native'
import PropTypes from 'prop-types'
import {titleStyle} from '../../modules/ComponentStyles'



/**
 * Component to display a title on the screen
 * @param {string} title - the text to be displayed
 */
const Title = ({title}) => {
    return(
        <View style = {titleStyle.container}>
            <Text style = {titleStyle.text}>
                {title}
            </Text>
        </View>
    )
}

Title.propTypes = {
    /**
     * The title that will be displayed
     */
    title: PropTypes.string.isRequired
}

export default Title;