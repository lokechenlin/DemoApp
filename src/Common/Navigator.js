import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const Navigator = createBottomTabNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
}, {
    initialRouteName: 'Home',
});

export default Navigator;
