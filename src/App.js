import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';

import HomeScreen from './Common/HomeScreen';
import LoginScreen from './Common/LoginScreen';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootStack = createBottomTabNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
}, {
    initialRouteName: 'Home',
});

export default class App extends React.Component {


    render() {
        return <RootStack />;
    }
}
