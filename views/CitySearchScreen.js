import React, {Component} from 'react'
import SearchScreen from '../components/partial_views/SearchScreen'
import {searchCity} from '../modules/GeoSearch'

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
        this.onSearch = this.onSearch.bind(this);
    }

    /**
     * Searches for cities using the text parameter. Used with text input
     * @param {string} text - the text to be used for search 
     */
    async onSearch(text){
        this.setState({text: text});
        console.log(text);

        //fetch the data
        let data = await searchCity(text);

        if(data == null) return;
        this.props.navigation.navigate("DisplayPopulation", {city: data[0].toUpperCase(), population: data[1]});       

    }

    /**
     * Renders the view
     */
    render(){
        return(
            <SearchScreen title = 'SEARCH BY CITY' placeholder = 'Enter a city' onPress = {this.onSearch}/>
        )
    }
}

export default CitySearchScreen;