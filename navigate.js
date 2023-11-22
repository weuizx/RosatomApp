import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainContainer from './navigation/mainContainer';
import Login from './components/login';
import SplashScreen from './components/splash';
import Register from './components/register';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Context } from './components/globalContext/globalContext';

const Stack = createStackNavigator();

export default function Navigate(props) {

  const isLoggedIn = useContext(Context)
  const getCredentials = useContext(Context)
  //const {isLoggedIn, getCredentials} = globalContext;

  return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "SplashScreen"
          component = {SplashScreen}
          options = {{title: 'Экран загрузки', headerShown: false}}
        />

        {(!isLoggedIn || getCredentials == null) ?      //setIsLoggedIn гденибудь надо ли вызывать?
          <>
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
          </>
          :
          <Stack.Screen
            name = "MainContainer"
            component = {MainContainer}
            options = {{title: 'Приложение', headerShown: false, headerLeft: null}}
          />
        }

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
