import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './../screens/common/HomeScreen';
import LoginScreen from '../screens/common/LoginScreen';

const Navigator = createBottomTabNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
}, {
    initialRouteName: 'Home',
});

export default Navigator;
