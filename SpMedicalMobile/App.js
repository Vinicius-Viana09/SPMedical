import 'react-native-gesture-handler';

import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StatusBar, StyleSheet} from 'react-native';

//importando telas
import Login from './src/screens/login/login';

const AuthStack = createStackNavigator();

class App extends Component{
  render() {
    return(
      <NavigationContainer>
        <StatusBar
          hidden={true}
        />
        <AuthStack.Navigator>
          screenOptions={{
            headerShown: false,
          }}
          <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#8937F5',
  },

  tabBarIcon: {
    width: 22,
    height: 22,
  },
});

export default App;