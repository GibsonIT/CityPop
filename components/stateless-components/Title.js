import React from 'react'
import {Text, View} from 'react-native'
import panelStyles from '../../modules/Styles'


/**
 * Component to display a title on the screen
 * @param {string} title - the text to be displayed
 */
const Title = ({title}) => {
    const style = panelStyles
    return(
        <View style = {[style.container, style.standardAlignment]}>
            <Text style = {[style.title, style.standardAlignment]}>
                {title}
            </Text>
        </View>
    )
}

export default Title;