import React, {useEffect, useState} from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import LoadFonts from "../styles/fonts";

export default function SplashScreen({navigation}) {
  
  useEffect( () => {
    setTimeout(() => {
      navigation.navigate('Login');
    },3000)
  },[]);

  return (
    <SafeAreaView style={styles.container} >
      <LoadFonts/>
      <Text style={styles.text}>Добро пожаловать!</Text>
      <Image source={require('../assets/splash-screen-icon.svg')} style={styles.icon}/>      
    </SafeAreaView>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFEE91',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  icon: {
    width: '100%',
    height: '50%',
  },
  text:{
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 28,
    marginBottom: '25%',
    color: '#092A35'
  }
});

