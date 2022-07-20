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
import ReservationScreen from './screens/Reservation';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Reservar'>
      <Stack.Screen name="Login" component={LoginScreen} options={{
          headerShown: null
        }} />
        <Stack.Screen name="Reservar" component={ReservationScreen} options={{
          headerShown: null
        }} />

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
