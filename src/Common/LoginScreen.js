import React from 'react';
import { View, Text } from 'react-native';

var a = 'b';


export default class LoginScreen extends React.Component {

    on(a, b){


    }


    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Login Screen</Text>
        </View>
      );
    }
  }