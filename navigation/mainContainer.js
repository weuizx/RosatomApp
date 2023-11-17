import React from 'react';
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

export default function MainContainer() {
    return(
             <Tab.Navigator screenOptions={screenOptions}>
                
                 <Tab.Screen name = {stat1Name} component = {Statistic1}  options = {{
                    tabBarIcon : ({focused}) => (
                        <View style = {styles.iconContainer}>
                            <Image
                            source = {require('../assets/icons/stat1.png')}
                            resizeMode = 'contain'
                            style = {[styles.icon, {tintColor : focused ? '#15256D' : '#8D8C8C'}]} />
                        </View>
                    )
                 }}
                 />
                 <Tab.Screen name = {stat2Name} component = {Statistic2}  options = {{
                    tabBarIcon : ({focused}) => (
                        <View style = {styles.iconContainer}>
                            <Image
                            source = {require('../assets/icons/stat2.png')}
                            resizeMode = 'contain'
                            style = {[styles.icon, {tintColor : focused ? '#15256D' : '#8D8C8C'}]} />
                        </View>
                    )
                 }}
                 />
                 <Tab.Screen name = {scannerName} component = {Scanner}  options = {{
                    tabBarIcon : ({focused}) => (
                        <View style = {styles.iconContainer}>
                            <Image
                            source = {require('../assets/icons/scanner.png')}
                            resizeMode = 'contain'
                            style = {[styles.icon, {tintColor : focused ? '#15256D' : '#8D8C8C'}]} />
                        </View>
                    )
                 }}
                 />
                 <Tab.Screen name = {profileName} component = {Profile}  options = {{
                    tabBarIcon : ({focused}) => (
                        <View style = {styles.iconContainer}>
                            <Image
                            source = {require('../assets/icons/profile.png')}
                            resizeMode = 'contain'
                            style = {[styles.icon, {tintColor : focused ? '#15256D' : '#8D8C8C'}]} />
                        </View>
                    )
                 }}
                 />

                
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