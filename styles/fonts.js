import React, { useState} from "react";
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";

const fonts = () => Font.loadAsync({
  'OpenSans-ExtraBold' : require('../assets/fonts/OpenSans-ExtraBold.ttf'),
  'OpenSans-Regular' : require('../assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-SemiBold' : require('../assets/fonts/OpenSans-SemiBold.ttf'),
  'OpenSans-Bold' : require('../assets/fonts/OpenSans-Bold.ttf')
});

export default function LoadFonts(){
  const [font,setFont] = useState(false);
  return(
    <AppLoading startAsync = {fonts} onFinish = {() => setFont(true)} onError={console.warn} />
  );
}
