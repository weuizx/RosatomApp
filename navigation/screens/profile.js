import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    Button,
    TouchableOpacity,
  } from "react-native";

  export default function Profile() { 
    return(
        <SafeAreaView style = {styles.example}>
            <Text style = {styles.text}>Профиль</Text>
            <SafeAreaView style = {[styles.inner, styles.androidShadow, styles.iosShadow]}>

            </SafeAreaView>
        </SafeAreaView >
    );

  }

  const styles = StyleSheet.create({

    example : {
      flex : 1,
      alignItems : 'center',
      backgroundColor: "#fff",
    },
    
    text:{
      fontFamily: 'OpenSans-Regular',
      fontSize: 38,
      marginTop: '20%',
      color: '#092A35'
    },
    inner:{
      marginTop : '10%',
      backgroundColor: "#fff",
      width: '85%',
      paddingBottom: 25,
      marginLeft: 25,
      marginRight: 25,
      borderRadius: 25,
      alignItems: "center",
      height : '15%'
    },
    iosShadow : {
      shadowColor : '#333333',
      shadowOpacity : 0.6,
      shadowRadius : 4,
    },
    androidShadow : {
      shadowColor : '#333333',
      elevation : 10,
    }
  })
  