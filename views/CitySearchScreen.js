import React, {Component} from 'react'
import {View, TextInput} from 'react-native'
import Button from '../components/Button'
import Title from '../components/Title'

/**
 * @class CitySearchScreen
 * @extends React.Component
 * @classdesc Displays and handles a search for cities. Has a title, a searchbox and a search button
 */

class CitySearchScreen extends Component{
    /**
     * Initializes the states and binds the functions to this instance
     */
    constructor(props){
        super(props)
        this.state = {text: ''};
        this.onChange = this.onChange.bind(this);
    }

    /**
     * Stores and logs the text parameter. Used with text input
     * @param {string} text - the text that has been changed 
     */
    onChange(text){
        this.setState({text: text});
        console.log(text);
    }

    /**
     * Renders the view
     */
    render(){
        return(
            <View style = {{flex: 1}}>
                <View style = {{flex: 3, justifyContent:'center'}}>
                    <Title title = "CityPop"/>
                </View>
                <View style = {{flex: 5,  alignItems: 'stretch', justifyContent:'center'}}>

                    <TextInput
                     placeholder = "Enter a city"
                     onChangeText = {(text) => this.onChange(text)}
                     />               

                    <Button title = "SEARCH" onPress = {() => console.log('Search')}/>                
                </View>
            </View>
        )
    }
}

export default CitySearchScreen;