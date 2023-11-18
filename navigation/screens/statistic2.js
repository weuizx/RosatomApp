import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    Button,
    TouchableOpacity,
  } from "react-native";

  import ChartPie from '../../assets/icons/pieChart2';

  export default function Statistic2() { 
    const dataChart = [
      {key:1,value:40,svg:{fill:'#FBBF00'}},
      {key:2,value:30,svg:{fill:"#019BE1"}},
      {key:3,value:30,svg:{fill:"#00CF63"}}
    ];


    return(
        <SafeAreaView style = {styles.example}>
            <Text>Statistic2</Text>
            <ChartPie dataPie={dataChart} value="300 г"/>
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

  