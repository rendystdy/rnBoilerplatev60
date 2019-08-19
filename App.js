import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: HomeStackNavigator,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default AppContainer = createAppContainer(AppSwitchNavigator);
