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
      <Image source={require('../assets/atom-logo.png')} style={styles.icon}/>    
      <Text style={styles.text}>Добро пожаловать, Дмитрий!</Text>  
    </SafeAreaView>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginTop : '30%',
    width: '100%',
  },
  text:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 38,
    marginTop: '20%',
    color: '#092A35'
  }
});

