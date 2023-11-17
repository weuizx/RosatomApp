import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, View,  Image} from 'react-native';
import MainStack from './navigate';
import MainContainer from './navigation/mainContainer';
//import * as Font from 'expo-font';
//import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// const fonts = () => Font.loadAsync({
//   'OpenSans-ExtraBold' : require('./assets/fonts/OpenSans/OpenSans-ExtraBold.ttf'),
//   'OpenSans-Regular' : require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
//   'OpenSans-SemiBold' : require('./assets/fonts/OpenSans/OpenSans-SemiBold.ttf'),
//   'OpenSans-Bold' : require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),

//   'Roboto-900' : require('./assets/fonts/Roboto/Roboto-Black.ttf'),
//   'Roboto-700' : require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
//   'Roboto-400' : require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
// });



export default function App() {
  //const [font,setFont] = useState(false);
  const [fontsLoaded] = useFonts({
    'OpenSans-ExtraBold' : require('./assets/fonts/OpenSans/OpenSans-ExtraBold.ttf'),
    'OpenSans-Regular' : require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold' : require('./assets/fonts/OpenSans/OpenSans-SemiBold.ttf'),
    'OpenSans-Bold' : require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
  
    'Roboto-900' : require('./assets/fonts/Roboto/Roboto-Black.ttf'),
    'Roboto-700' : require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-400' : require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[]);

  if (!fontsLoaded){
    return undefined;
  } else{
    SplashScreen.hideAsync();
  }
  return (
    <View style={styles.container}>
      <MainStack/>
    </View>
  );

  // if(font) {
  //   return (
  //       <View style={styles.container}>
  //         <MainStack/>
  //       </View>
  //   );
  // } else {
  //   return(
  //     <AppLoading startAsync = {fonts} onFinish = {() => setFont(true)} onError={console.warn} />
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

