import React, {Component} from 'react'
import SearchScreen from '../components/partial_views/SearchScreen'

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
            <SearchScreen title = 'SEARCH BY CITY' placeholder = 'Enter a city' onPress = {this.onChange}/>
        )
    }
}

export default CitySearchScreen;