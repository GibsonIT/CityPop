import React, {Component} from 'react'
import SearchScreen from '../components/partial_views/SearchScreen'
import {searchCountry, searchCityInCountry} from '../modules/GeoSearch'


/**
 * @class CountrySearchScreen
 * @extend React.Component
 * @classdesc Displays and handles searches for countries. Has a title, searchbox and a button. 
 */
class CountrySearchScreen extends Component {

    /** Binds functions */
    constructor(props){
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }

    /** logs text when searchbutton is pressed */
    async onSearch(text){
        console.log(text);

        let data = await searchCountry(text);

        if(data == null) return;

        data = await searchCityInCountry(data);

        console.log(data);

        let dddd = data;
        this.props.navigation.navigate("DisplayCities", {country: text.toUpperCase(), data: dddd})

    }

    /** Renders the screen */
    render(){
        return(
            <SearchScreen title = 'SEARCH BY COUNTRY' placeholder = 'Enter a country' onPress = {this.onSearch}/>
        )
    }

}

export default CountrySearchScreen;