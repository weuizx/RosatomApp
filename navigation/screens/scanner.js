import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";

  export default function Scanner() { 
    return(
        <SafeAreaView style = {styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.title}>Ввести вручную</Text>
          <SafeAreaView style={[styles.container, {justifyContent: "center",width: '100%'}]}>
            <SafeAreaView style={styles.inner}>

            <SafeAreaView style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Продукт"
              />
            </SafeAreaView>

            <SafeAreaView style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Время покупки"
              />
            </SafeAreaView>

            <SafeAreaView style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Место покупки"
              />
            </SafeAreaView>

            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Отправить</Text>
            </TouchableOpacity>

            </SafeAreaView >
            </SafeAreaView> 
  
          </SafeAreaView>
  );
  }

  const styles = StyleSheet.create({

    title:{
      color: '#15256D',
      fontFamily: 'Roboto-700',
      fontSize: 28,
      alignSelf: 'center',
      marginTop: 25,
    },

      container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        
      },
      inner:{
        backgroundColor: "#fff",
        width: '85%',
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
      },
      inputView: {
        marginBottom: 20,
        borderRadius: 25,
        borderColor: '#333333',
        borderWidth: 1,
        width: '84%',
        justifyContent:'center',
      },
      inputText:{
        fontFamily: 'Roboto-400',
        fontSize: 14,
        color: '#333333',
        marginLeft: 25,
        marginBottom: 10,
        marginTop: 10
      },
      loginBtn:{
        borderColor: '#4E9DDA',
        borderWidth: 2,
        borderRadius: 25,
        paddingLeft: 40,
        paddingRight: 40,
        justifyContent:'center',
        alignItems:'center'
      },
      loginBtnText:{
        fontFamily: 'Roboto-700',
        fontSize: 16,
        color: '#333333',
        marginBottom: 8,
        marginTop: 8
      },
     
  })