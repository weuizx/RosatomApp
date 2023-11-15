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

export default function MainContainer() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = {stat1Name} component = {Statistic1}  //options = {{
          //     tabBarIcon : ({focused}) => (
          //         <View style = {{alignItems : 'center', justifyContent : 'center'}}>
          //             <Image
          //             source = {require('../assets/icons/stat1.png')}
          //             resizeMode = 'contain'/>
          //         </View>
          //     )
          //  }}
        />
        <Tab.Screen name = {stat2Name} component = {Statistic2}  //options = {{
          //     tabBarIcon : ({focused}) => (
          //         <View>
          //             <Image
          //             source = {require('../assets/icons/stat2.png')}
          //             resizeMode = 'contain'/>
          //         </View>
          //     )
          //  }}
        />
        <Tab.Screen name = {scannerName} component = {Scanner}  //options = {{
          //     tabBarIcon : ({focused}) => (
          //         <View>
          //             <Image
          //             source = {require('../assets/icons/scanner.png')}
          //             resizeMode = 'contain'/>
          //         </View>
          //     )
          //  }}
        />
        <Tab.Screen name = {profileName} component = {Profile}  //options = {{
                //     tabBarIcon : ({focused}) => (
                //         <View>
                //             <Image
                //             source = {require('../assets/icons/profile.png')}
                //             resizeMode = 'contain'/>
                //         </View>
                //     )
                //  }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

