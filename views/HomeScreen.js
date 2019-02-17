import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Button from '../components/Button'

/**
 * @class
 * @classdesc Class that is a component that presents a screen with a title and two buttons 
 * @extends React.Component  
 */

class HomeScreen extends Component{

    render(){
        return(
            <View style = {{flex: 1}}>
                <View style = {{flex: 3, justifyContent:'center'}}>
                    <Text>CityPop</Text>
                </View>
                <View style = {{flex: 5,  alignItems: 'stretch', justifyContent:'center'}}>
                    <Button title = "SEARCH BY CITY" onPress = {() => console.log('City')}/>
                            
                    <Button title = "SEARCH BY COUNTRY" onPress = {() => console.log('Country')}/>                
                </View>
            </View>
        )
    }

}

export default HomeScreen;