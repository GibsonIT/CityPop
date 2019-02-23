import React, {Component} from 'react'
import Button from '../components/Button'
import TitleContentDivider from '../components/partial_views/TitleContentDivider'

/**
 * @class
 * @classdesc Class that is a component that presents a screen with a title and two buttons 
 * @extends React.Component  
 */

class HomeScreen extends Component{

    render(){
        return(
    
            <TitleContentDivider title = "cityPop" contentAlignment = 'center'>
                <Button title = "SEARCH BY CITY" onPress = {() => this.props.navigation.navigate("City")}/>
                            
                <Button title = "SEARCH BY COUNTRY" onPress = {() => console.log('Country')}/>     
            </TitleContentDivider>
        )
    }

}

export default HomeScreen;