import React from 'react';
import { View, Text } from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';
import getFitScreen from './../../libs/Array';

import ScreenWrapper, { showGeneralError } from './ScreenWrapper';

export default class LoginScreen extends React.Component {

    componentDidMount() {
        //throw new Error('I crashed!');
        try {
            throw 'AAA';
        } catch (e) {
            showGeneralError({ errorPage: 'LoginScreen' });
        }
    }

    onRetry = () => {
        StackActions.reset();
    }

    render() {
        return (
            <ScreenWrapper errorPage="LoginScreen" onRetry={this.onRetry}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Login Screen</Text>
                </View>
            </ScreenWrapper>
        );
    }
}
