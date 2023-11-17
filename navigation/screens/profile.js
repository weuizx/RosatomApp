import React, { useState } from "react";
import * as Progress from 'react-native-progress';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Image,
    Button,
    TouchableOpacity,
  } from "react-native";

  export default function Profile() { 
    return(
        <SafeAreaView style = {styles.profile}>

          <View style = {{alignItems : 'center', justifyContent : 'center', backgroundColor : '#fff', height : 120}}>
            <Text style = {[styles.text, {marginTop : '0%'}]}>Профиль</Text>
          </View>

          <View style = {{alignItems : 'center', justifyContent : 'center', backgroundColor : '#fff', height : 180}}>
            <View style = {[styles.inner, styles.androidShadow, styles.iosShadow, {flexDirection : 'row', justifyContent : 'space-evenly'}]}>
               <View style = {{alignItems : 'center', justifyContent : 'center', backgroundColor : '#fff', flex : 2}}>
                <Image 
                  source={{
                    height : '62%',
                    width : '80%',
                    uri : 'https://instalook.ru/uploads/dakimakura/og-buda-3644.JPG',
                  }}
                  style = {{borderRadius : 25}}
                  />
                  <Image source = {require('../../assets/icons/camera.png')}/>
               </View>
               <View style = {{backgroundColor : '#fff', flex : 4, flexDirection : 'column', justifyContent : 'space-evenly'}}>

                <Text >Name</Text>
                <Text >Number</Text>
                <Text >Email</Text>
               </View >
               <View style = {{alignItems : 'center', justifyContent : 'center', backgroundColor : '#fff', flex : 1}}>

               </View >
            </View >
          </View>

          <View style = {{justifyContent : 'center',backgroundColor : '#fff', height : 100}}>
            <Text style = {[styles.text, {marginLeft : '7.5%'}]}>Прогресс</Text>
          </View>

          <View style = {{alignItems : 'center', justifyContent : 'center', backgroundColor : '#fff', height : 160}}>
            <View style = {[styles.inner, styles.androidShadow, styles.iosShadow, {flexDirection : 'column', justifyContent : 'space-evenly'}]}>
                  <View style = {{justifyContent : 'center', flex : 1}}>
                    <Text style = {{marginLeft : '10%'}}>Цель : Украсть ее сердце я бандит</Text>
                  </View>
                  <View style = {{justifyContent : 'center', flex : 1}}>
                    <Text style = {{marginLeft : '10%'}}>Время : ноябрь</Text>
                  </View>
                  <View style = {{alignItems : 'center', justifyContent : 'center', flex : 1.5}}>
                    <Progress.Bar progress={0.3} height = {10} width = {300} borderRadius={25} unfilledColor="grey" borderColor="#fff" />
                  </View>
            </View>
          </View>

          <View style = {{flexDirection : 'row', marginTop : 30, paddingBottom : 0, justifyContent : 'space-evenly', height : 200}}>
            <View style = {[styles.androidShadow, styles.iosShadow, {height : '65%', width : '40%', borderRadius: 25, backgroundColor : '#fff' }]}>

            </View>
            <View style = {[styles.androidShadow, styles.iosShadow, {height : '65%', width : '40%', borderRadius: 25, backgroundColor : '#fff'}]}>

            </View>
          </View>
        </SafeAreaView >
    );

  }

  const styles = StyleSheet.create({

    profile : {
      flex : 1,
      backgroundColor: "#fff",
    },
    
    text:{
      fontFamily: 'OpenSans-Regular',
      fontSize: 38,
      //marginTop: '10%',
      color: '#092A35'
    },
    inner:{
      marginTop : '0%',
      backgroundColor: "#fff",
      width: '85%',
     // paddingBottom: 25,
     // marginLeft: 25,
    //  marginRight: 25,
      borderRadius: 25,
     // alignItems: "center",
      height : '90%'
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
  