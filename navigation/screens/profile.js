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
            <Text>Profile</Text>
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
  