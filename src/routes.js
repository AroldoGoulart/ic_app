import React from 'react';

import {View, Text} from 'react-native';

import {
  CommonActions,
  NavigationContainer,
  NavigationContainerRef,
  NavigationProp,
} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs,
} from '@react-navigation/stack';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            headerShown:null            
          }}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
