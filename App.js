import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './views/HomeScreen'
import CitySearchScreen from './views/CitySearchScreen'
import CityPopulationScreen from './views/CityPopulationScreen'
import CountrySearchScreen from './views/CountrySearchScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},

  City: {screen: CitySearchScreen},

  Country: {screen: CountrySearchScreen},

  DisplayPopulation: {screen: CityPopulationScreen}    
})


const App = createAppContainer(MainNavigator);

export default App;