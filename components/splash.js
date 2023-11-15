import React, {useEffect, useState} from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';

export default function SplashScreen({navigation}) {
  
  useEffect( () => {
    setTimeout(() => {
      navigation.navigate('Login');
    },3000)
  },[]);

  return (
    <SafeAreaView style={styles.container} >
      <Image source={require('../assets/logo-atom.png')} style={styles.icon}/>    
      {/* <Text style={styles.text}>Добро пожаловать!</Text>   */}
    </SafeAreaView>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 320,
    height: 320,
  },
  text:{
    fontFamily: 'Roboto-900',
    marginTop: 10,
    fontSize: 32,
    color: '#333333'
  }
});

