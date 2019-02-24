import React, {Component} from 'react'
import SearchScreen from '../components/partial_views/SearchScreen'
import {searchCity} from '../services/GeoSearch'
import ErrorText from '../components/stateless-components/ErrorText'

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

     titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        // Directly return the joined string
        return splitStr.join(' '); 
     }
     
     
    /**
     * Searches for cities using the text parameter. Used with text input
     * @param {string} text - the text to be used for search 
     */
    async onSearch(text){
        this.setState({ isLoading: true})
        console.log(text);
        text = this.titleCase(text);

        //fetch the data
        let data = await searchCity(text);

        this.setState({
             isLoading: false,
             errorMsg: ''
        })
        
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
            <SearchScreen title = 'SEARCH BY CITY' 
                placeholder = 'Enter a city' 
                onPress = {this.onSearch} 
                loading = {this.state.isLoading}
            >
                <ErrorText text = {this.state.errorMsg}/>
            </SearchScreen>
        )
    }
}

export default CitySearchScreen;