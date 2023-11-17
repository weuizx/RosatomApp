import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Statistic1 from './screens/statistic1';
import Statistic2 from './screens/statistic2';
import Scanner from './screens/scanner';
import Profile from './screens/profile';

const stat1Name = 'stat1';
const stat2Name = 'stat2';
const scannerName = 'scanner';
const profileName = 'profile';

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel : false,
    headerShown : false,
    tabBarStyle : {
        position : 'absolute',
        bottom : 0,
        right : 0,
        left : 0,
        elevation : 0,
        height : 60,
        backgroundColor : '#fff'
    }
}

import IconStat1 from "../assets/icons/stat1";
import IconStat2 from "../assets/icons/stat2";
import IconProfile from "../assets/icons/profile";
import IconScanner from "../assets/icons/scanner";

export default function MainContainer() {
  return(
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name = {stat1Name} component = {Statistic1}  options = {{
        tabBarIcon : ({focused}) => {
          let color = focused ? "#15256D" : "#8D8C8C";
          return(
            <View style = {styles.iconContainer}>
                <IconStat1 color={color} />
            </View>
          );
        }            
      }}/>
      <Tab.Screen name = {stat2Name} component = {Statistic2}  options = {{
        tabBarIcon : ({focused}) => {
          let color = focused ? "#15256D" : "#8D8C8C";
          return(
            <View style = {styles.iconContainer}>
                <IconStat2 color={color} />
            </View>
          );
        }             
      }}/>
      <Tab.Screen name = {scannerName} component = {Scanner}  options = {{
        tabBarIcon : ({focused}) => {
          let color = focused ? "#15256D" : "#8D8C8C";
          return(
            <View style = {styles.iconContainer}>
                <IconScanner color={color} />
            </View>
          );
        }
      }}/>
      <Tab.Screen name = {profileName} component = {Profile}  options = {{
        tabBarIcon : ({focused}) => {
          let color = focused ? "#15256D" : "#8D8C8C";
          return(
            <View style = {styles.iconContainer}>
                <IconProfile color={color} />
            </View>
          );
        }            
      }}/>
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
    iconContainer:{
      alignItems : 'center', 
      justifyContent : 'center'
    },
    icon: {
      width : 34,
      height : 34,
      backgroundColor : '#fff',
    },

  });