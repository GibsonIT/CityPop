import React, {Component} from 'react'
import TitleContentDivider from '../components/partial_views/TitleContentDivider'
import DisplayBox from '../components/stateless-components/DisplayBox'
import {formatNumber} from '../services/StringFormatter'

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

    render(){
        return(
            <TitleContentDivider title = {this.state.city} contentAlignment = 'center'>
               
                <DisplayBox title = 'POPULATION' text = {formatNumber(this.state.population)}/>
            </TitleContentDivider>
        )

    }
}

export default CityPopulationScreen;