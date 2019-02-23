import React, {Component} from 'react'
import Button from '../components/stateless-components/Button'
import TitleContentDivider from '../components/partial_views/TitleContentDivider'

/**
 * @class
 * @classdesc Class that is a component that presents a screen with a title and two buttons 
 * @extends React.Component  
 */

class HomeScreen extends Component{
    /** Removes the title on the header */
    static navigationOptions = {
        headerTitle: null
    }

    render(){
        return(
    
            <TitleContentDivider title = "CityPop" contentAlignment = 'center'>
                <Button title = "SEARCH BY CITY" onPress = {() => this.props.navigation.navigate("City")}/>
                            
                <Button title = "SEARCH BY COUNTRY" onPress = {() => this.props.navigation.navigate('Country')}/>     
            </TitleContentDivider>
        )
    }

}

export default HomeScreen;