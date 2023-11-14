import React from 'react';
import Login from './components/login';
import SplashScreen from './components/splash';
import Register from './components/register';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "SplashScreen"
          component = {SplashScreen}
          options = {{title: 'Экран загрузки', headerShown: false}}
        />
        <Stack.Screen
          name = "Login"
          component = {Login}
          options = {{title: 'Вход', headerShown: false, headerLeft: null}}
        />
        <Stack.Screen
          name = "Register"
          component = {Register}
          options = {{title: 'Регистрация', headerShown: false, headerLeft: null}}
        />
      </Stack.Navigator>
  </NavigationContainer>;
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
