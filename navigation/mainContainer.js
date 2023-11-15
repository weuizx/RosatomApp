import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
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
        position : 'abcolute',
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
         <NavigationContainer>
             <Tab.Navigator screenOptions={screenOptions}>
                
                 <Tab.Screen name = {stat1Name} component = {Statistic1}  options = {{
                    tabBarIcon : ({focused}) => (
                        <View style = {{alignItems : 'center', justifyContent : 'center'}}>
                            <Image
                            source = {require('../assets/icons/stat1.png')}
                            resizeMode = 'contain'
                            style = {[styles.icon, {tintColor : focused ? '#4E9DDA' : '#8D8C8C'}]} />
                        </View>
                    )
                 }}
                 />
                 <Tab.Screen name = {stat2Name} component = {Statistic2}  options = {{
                    tabBarIcon : ({focused}) => (
                        <View>
                            <Image
                            source = {require('../assets/icons/stat2.png')}
                            resizeMode = 'contain'
                            style = {[styles.icon, {tintColor : focused ? '#4E9DDA' : '#8D8C8C'}]} />
                        </View>
                    )
                 }}
                 />
                 <Tab.Screen name = {scannerName} component = {Scanner}  options = {{
                    tabBarIcon : ({focused}) => (
                        <View>
                            <Image
                            source = {require('../assets/icons/scanner.png')}
                            resizeMode = 'contain'
                            style = {[styles.icon, {tintColor : focused ? '#4E9DDA' : '#8D8C8C'}]} />
                        </View>
                    )
                 }}
                 />
                 <Tab.Screen name = {profileName} component = {Profile}  options = {{
                    tabBarIcon : ({focused}) => (
                        <View>
                            <Image
                            source = {require('../assets/icons/profile.png')}
                            resizeMode = 'contain'
                            style = {[styles.icon, {tintColor : focused ? '#4E9DDA' : '#8D8C8C'}]} />
                        </View>
                    )
                 }}
                 />

                
             </Tab.Navigator>
         </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    icon: {
      width : 25,
      height : 25,
      backgroundColor : '#fff',
    },

  });