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

import ReservaScreen from './screens/Reserva';
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
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

        <Stack.Screen 
        name="Reserva" 
        component={ReservaScreen} 
          options={{
            title: 'Reservar salas'
          }}
       
          />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
