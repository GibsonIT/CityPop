import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './views/HomeScreen'
import CitySearchScreen from './views/CitySearchScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},

  City: {screen: CitySearchScreen}
      
})


const App = createAppContainer(MainNavigator);

export default App;