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
        <SafeAreaView style = {styles.example}>
            <Text>Scanner</Text>
        </SafeAreaView >
    );

  }

  const styles = StyleSheet.create({

    example : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center'
    }
     
  })