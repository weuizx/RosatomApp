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
          
          <View style = {styles.titleView}>
            <Text style = {[styles.title]}>Профиль</Text>
          </View>

          <View style = {styles.profileWindow}>
            <View style = {[styles.innerProfileWindow, {flexDirection : 'row', justifyContent : 'space-evenly'}]}>

               <View style = {styles.profilePhoto}>
                <Image 
                  source={{
                    height : 90,
                    width : 90,
                    uri : 'https://instalook.ru/uploads/dakimakura/og-buda-3644.JPG',
                  }}
                  style = {{borderRadius : 25}}
                  />
                  <Image source = {require('../../assets/icons/camera.png')}/>
               </View>

               <View style = {{flex : 4}}>
                <View style = {styles.userData}>

                  <Text style = {styles.text}>Дмитрий</Text>
                  <View style = {styles.line}/>
                  <Text style = {styles.text}>+7(902)314-08-30</Text>
                  <View style = {styles.line}/>
                  <Text style = {styles.text}>ddmngmnt@mail.ru</Text>
                  <View style = {styles.line}/>
                </View >
               </View >
               <View style = {styles.changeIcon}>
                 <Image 
                 source = {require('../../assets/icons/camera.png')}
                 style = {{marginBottom : '150%'}}/>
               </View >
            </View >
          </View>

          <View style = {styles.progressView}>
            <Text style = {styles.progress}>Прогресс</Text>
          </View>

          <View style = {styles.progressWindow}>
            <View style = {styles.innerProgressWindow}>
                  <View style = {{justifyContent : 'center', flex : 1}}>
                    <Text style = {styles.progressText}>Цель : Переработать 500г</Text>
                  </View>
                  <View style = {{justifyContent : 'center', flex : 1}}>
                    <Text style = {styles.progressText}>Время : ноябрь</Text>
                  </View>
                  <View style = {{alignItems : 'center', justifyContent : 'center', flex : 1}}>
                    <Progress.Bar progress={0.3} height = {10} width = {300} borderRadius={25} color='#4E9DDA' unfilledColor='#8D8C8C' borderColor="#fff" />
                  </View>
                  <View style = {styles.underProgressBar}>
                    <View style = {styles.underProgressBar}>
                      <Text style = {{fontFamily: 'Roboto-700', fontSize: 12, color: "#333333"}}>0</Text>
                    </View>
                    <View style = {styles.underProgressBar}>
                      <Text style = {{fontFamily: 'Roboto-700', fontSize: 12, color: "#333333"}}>250</Text>
                    </View>
                    <View style = {styles.underProgressBar}>
                      <Text style = {{fontFamily: 'Roboto-700', fontSize: 12, color: "#333333"}}>500</Text>
                    </View>
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

    titleView : {
      alignItems : 'center', 
      justifyContent : 'center', 
      height : 60
    },

    profileWindow : {
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : '#fff',
      height : 220,
    },

    profilePhoto : {
      alignItems : 'center', 
      justifyContent : 'center', 
      backgroundColor : '#fff', 
      flex : 2
    },

    userData : {
      flex : 1, 
      flexDirection : 'column', 
      justifyContent : 'space-evenly'
    },

    changeIcon : {
      alignItems : 'center', 
      justifyContent : 'center', 
      backgroundColor : '#fff', 
      flex : 1
    },

    progressView : {
    justifyContent : 'center', 
    height : 100
    },

    progressWindow : {
      alignItems : 'center', 
     // justifyContent : 'center', 
      backgroundColor : '#fff', 
      height : 160
    },
    
    underProgressBar : {
      backgroundColor : '#fff',
      flex :  1,
      alignItems : 'center',
      flexDirection : 'row', 
      justifyContent : 'space-evenly',
      marginTop: '-3%',
      marginLeft: 5,
      marginRight: 5,
    },

    title : {
      fontFamily: 'Roboto-700',
      fontSize: 28,
      color: "#15256D",
      marginTop: 25,
    },

    progress : {
      fontFamily: 'Roboto-700',
      fontSize: 24,
      color: "#333333",
      marginTop: 25,
      marginLeft : '7.5%'
    },

    text:{
      fontFamily: 'Roboto-400',
      fontSize: 12,
      color: "#000",
      marginTop: '7%',
      marginLeft : '10%'
    },

    progressText : {
      fontFamily: 'Roboto-700',
      fontSize: 12,
      color: "#333333",
      marginTop: '3%',
      marginLeft : '10%'
    },
    innerProfileWindow:{
      marginTop : '0%',
      backgroundColor: "#fff",
      width: '85%',
      paddingBottom: 25,
      marginLeft: 25,
      marginRight: 25,
      borderRadius: 25,
      alignItems: "center",
      height : '80%',
      shadowColor : '#333333',
      shadowOpacity : 0.6,
      shadowRadius : 4,
      elevation : 10
    },
    innerProgressWindow:{
      marginTop : '0%',
      backgroundColor: "#fff",
      width: '85%',
      paddingBottom: 10,
      marginLeft: 25,
      marginRight: 25,
      borderRadius: 25,
      height : '90%',
      flexDirection : 'column', 
      justifyContent : 'space-evenly',
      shadowColor : '#333333',
      shadowOpacity : 0.6,
      shadowRadius : 4,
      elevation : 10
    },
    iosShadow : {
      shadowColor : '#333333',
      shadowOpacity : 0.6,
      shadowRadius : 4,
    },
    androidShadow : {
      shadowColor : '#333333',
      elevation : 10,
    },
    line:{
      backgroundColor:"#4E9DDA",
      height: 1,
      width: '90%',
      alignSelf: "flex-end"
    }
  })
  