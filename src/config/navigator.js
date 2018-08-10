import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './../screens/common/HomeScreen';
import LoginScreen from '../screens/common/LoginScreen';
import ErrorScreen from '../screens/common/ErrorScreen';

const Navigator = createBottomTabNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
    Error: ErrorScreen,
}, {
    initialRouteName: 'Home',
});

export default Navigator;
