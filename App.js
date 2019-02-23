import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './views/HomeScreen'
import CitySearchScreen from './views/CitySearchScreen'
import CityPopulationScreen from './views/CityPopulationScreen'
import CountrySearchScreen from './views/CountrySearchScreen';
import CityListScreen from './views/CityListScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

/**
 * Handles the logic of switching between screens
 */
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},

  City: {screen: CitySearchScreen},

  Country: {screen: CountrySearchScreen},

  DisplayCities: {screen: CityListScreen},

  DisplayPopulation: {screen: CityPopulationScreen}    
},
{
  initialRouteName: 'Home',

  defaultNavigationOptions: {
    headerBackImage: ( 
      <Icon name={"arrow-left"}  size={30} color={"#000"} />),
      
    // Removes the shadow of the header  
     headerStyle: {
        backgroundColor: '#fff',
        shadowColor: 'transparent',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0
        },
        shadowRadius: 0,
        borderBottomWidth: 0,
        elevation: 0
      }
  
    ,
    headerTitle: "CityPop"
  }
})


const App = createAppContainer(MainNavigator);

export default App;