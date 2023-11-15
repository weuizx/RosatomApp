import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    Button,
    TouchableOpacity,
    Modal
  } from "react-native";

export default function Statistic1() { 
  const [infoWindow,setInfoWindow] = useState(false);

  return(
    <SafeAreaView style = {styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView>
        <Text style={styles.title}>Статистика</Text>
      </SafeAreaView>

      <SafeAreaView>

        <Modal transparent={true} visible={infoWindow} onRequestClose={() => setInfoWindow(false)}>
          <TouchableOpacity onPressOut={ ()=>setInfoWindow(false)}>

            <TouchableOpacity activeOpacity={1}>
              <SafeAreaView style={styles.list}>
                <Text>Инфа</Text>
              </SafeAreaView>
            </TouchableOpacity>

          </TouchableOpacity>
        </Modal>
        
        <TouchableOpacity onPress={ ()=>setInfoWindow(true) }>
          <Image style={{width:48,height:48}} source={require('/Users/dmitriykosolobov/VSCodeProjects/Project/assets/favicon.png')}/>
        </TouchableOpacity>  
        
      </SafeAreaView>



      {/* <Text>Statistic1</Text> */}
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  list:{
    backgroundColor: 'red',
    alignItems: 'center',
    //position: 'absolute',
    //height: '100%', width: '100%',
  }
});