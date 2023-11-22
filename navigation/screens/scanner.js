import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    Button,
    TouchableOpacity,
  } from "react-native";

  export default function Scanner() { 
    return(
        <SafeAreaView style = {styles.container}>
            <Text style={styles.title}>Ввести вручную</Text>
        </SafeAreaView >
    );

  }

  const styles = StyleSheet.create({

    container : {
      flex : 1,
      alignItems : 'center',
      //justifyContent : 'center',
      backgroundColor: '#FFF',
    },
    title:{
      color: '#15256D',
      fontFamily: 'Roboto-700',
      fontSize: 28,
      alignSelf: 'center',
      marginTop: 25,
    },

  })