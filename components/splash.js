import React, {useEffect, useState} from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import { Animated } from 'react-native';

export default function SplashScreen({navigation}) {
  const [fadeAnim] = useState(new Animated.Value(0));
  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }
    ).start();
  }, [])

  useEffect( () => {
    setTimeout(() => {
      navigation.navigate('Login');
    },5000)
  },[]);

  return (
    <Animated.View style={[styles.container,{opacity:fadeAnim}]}>
      <Image source={require('../assets/logo-atom.png')} style={styles.icon}/>    
      {/* <Text style={styles.text}>Добро пожаловать!</Text>   */}
    </Animated.View>
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

