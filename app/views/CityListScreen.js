import React, {Component} from 'react'
import {FlatList} from 'react-native'
import Button from '../components/stateless-components/Button'
import TitleContentDivider from '../components/partial_views/TitleContentDivider'


/**
 * @class CityListScreen
 * @extends React.Component
 * @classdesc Displays a list of buttons in a flatlist and has a title. 
 * The buttons are connected to cities and if pressed they will display that city and its population
 */

class CityListScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            /** Name of country the cities are in, type strin */
            country: this.props.navigation.getParam('country'),

            /** Array of cities to be displayed each element conaining a pair of city name and population */
            data: this.props.navigation.getParam('data')
        }
    }

    /**
     * Navigates to another screen to display the city and its population
     * @param {string} cityName - the name of the city
     * @param {number} population - number of people living in the city
     */
    dispCity(cityName, population){
        this.props.navigation.navigate("DisplayPopulation", {city: cityName.toUpperCase(), population: population})
    }

    render(){
        const data = this.state.data;
        console.log(data);
        return(
            <TitleContentDivider title = {this.state.country}>
               
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item[0] + item[1].toString()}
                    renderItem={
                        ({item}) => <Button title = {item[0]} onPress = {() => this.dispCity(item[0], item[1])}/>
                    }
                />
            </TitleContentDivider>
        )
    }
}

export default CityListScreen;