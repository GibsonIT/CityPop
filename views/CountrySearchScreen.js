import React, {Component} from 'react'
import SearchScreen from '../components/partial_views/SearchScreen'
import {searchCountry, searchCityInCountry} from '../modules/GeoSearch'
import ErrorText from '../components/stateless-components/ErrorText'



/**
 * @class CountrySearchScreen
 * @extend React.Component
 * @classdesc Displays and handles searches for countries. Has a title, searchbox and a button. 
 */
class CountrySearchScreen extends Component {

    /** Binds functions */
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            errorMsg: ''
        };
        this.onSearch = this.onSearch.bind(this);
    }

    /** Searches for cities in a country then displays the results */
    async onSearch(text){
        this.setState({ isLoading: true });
        console.log(text);

        let data = await searchCountry(text);

        if(data == null){
            this.setState({
                 errorMsg: 'No results found',
                 isLoading: false
                })
            return;
        }

        data = await searchCityInCountry(data);

        this.setState({ 
            isLoading: false,
            errorMsg: ''
        });

        this.props.navigation.navigate("DisplayCities", {country: text.toUpperCase(), data: data})

    }

    /** Renders the screen */
    render(){
        return(
            <SearchScreen title = 'SEARCH BY COUNTRY' 
                placeholder = 'Enter a country' 
                onPress = {this.onSearch} l
                oading = {this.state.isLoading}
            >
                <ErrorText text = {this.state.errorMsg}/>
            </SearchScreen>
        )
    }

}

export default CountrySearchScreen;