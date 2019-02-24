import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './app/views/HomeScreen'
import CitySearchScreen from './app/views/CitySearchScreen'
import CityPopulationScreen from './app/views/CityPopulationScreen'
import CountrySearchScreen from './app/views/CountrySearchScreen';
import CityListScreen from './app/views/CityListScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import {colors} from './app/modules/StyleBase'

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
      <Icon name={"arrow-left"}  size={30} color={colors.primary} />),
      
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
    headerTitle: "CityPop",
    headerTitleStyle: {
      color: colors.primary
    }
  }
})


const App = createAppContainer(MainNavigator);

export default App;