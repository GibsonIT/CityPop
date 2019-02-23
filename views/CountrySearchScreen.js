import React, {Component} from 'react'
import SearchScreen from '../components/partial_views/SearchScreen'

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
    onSearch(text){
        console.log(text);

    }

    /** Renders the screen */
    render(){
        return(
            <SearchScreen title = 'SEARCH BY COUNTRY' placeholder = 'Enter a country' onPress = {this.onSearch}/>
        )
    }

}

export default CountrySearchScreen;