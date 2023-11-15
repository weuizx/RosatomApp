import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainContainer from './navigation/mainContainer';
import Login from './components/login';
import SplashScreen from './components/splash';
import Register from './components/register';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
  <NavigationContainer>
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
        <Stack.Screen
          name = "MainContainer"
          component = {MainContainer}
          options = {{title: 'Приложение', headerShown: false, headerLeft: null}}
        />
      </Stack.Navigator>
  </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
