import React from 'react'
import {Text, View} from 'react-native'


/**
 * Component to display a title on the screen
 * @param {string} title - the text to be displayed
 */
const Title = ({title}) => {
    return(
        <View style = {{flex:1, justifyContent: 'center'}}>
            <Text style = {{fontSize: 35}}>
                {title}
            </Text>
        </View>
    )
}

export default Title;