import React, {Component} from 'react'
import {Text} from 'react-native'
import TitleContentDivider from '../components/partial_views/TitleContentDivider';

/**
 * Displays the City name as a title then the population of the city below
 */
class CityPopulationScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            /** City name preferrably in the form of a string, displayed in the title*/
            city: this.props.navigation.getParam('city'),

            /** Population of the city displayed, formatted with spaces each three numbers (ex. 1 234 567) */
            population: this.props.navigation.getParam('population')
            }
    }

    /**
     * Takes in a number to format with spaces between every third number
     * Example: 12345678 returns 12 345 678
     * @param {Number} num - number to format
     * @returns {string} - formated number
     */
    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    }

    render(){
        return(
            <TitleContentDivider title = {this.state.city} contentAlignment = 'center'>
                <Text>POPULATION</Text>
                <Text>{this.formatNumber(this.state.population)}</Text>
            </TitleContentDivider>
        )

    }
}

export default CityPopulationScreen;