import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './views/HomeScreen'
import CitySearchScreen from './views/CitySearchScreen'
import CityPopulationScreen from './views/CityPopulationScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},

  City: {screen: CitySearchScreen},

  DisplayPopulation: {screen: CityPopulationScreen}    
})


const App = createAppContainer(MainNavigator);

export default App;