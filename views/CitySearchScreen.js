import React, {Component} from 'react'
import {Text} from 'react-native'
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
        this.state = {
                isLoading: false,
                errorMsg: ''
        };
        this.onSearch = this.onSearch.bind(this);
    }

    /**
     * Searches for cities using the text parameter. Used with text input
     * @param {string} text - the text to be used for search 
     */
    async onSearch(text){
        this.setState({ isLoading: true})
        console.log(text);

        //fetch the data
        let data = await searchCity(text);

        this.setState({ isLoading: false})
        
        if(data == null){
            this.setState({ errorMsg: 'No results found'})
            return;
        }

        this.props.navigation.navigate("DisplayPopulation", {city: data[0].toUpperCase(), population: data[1]});       
    }

    /**
     * Renders the view
     */
    render(){
        return(
            <SearchScreen title = 'SEARCH BY CITY' placeholder = 'Enter a city' onPress = {this.onSearch} loading = {this.state.isLoading}>
                <Text>{this.state.errorMsg}</Text>
            </SearchScreen>
        )
    }
}

export default CitySearchScreen;