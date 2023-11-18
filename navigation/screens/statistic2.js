import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    Modal,
    FlatList
  } from "react-native";

import InfoIcon from "../../assets/icons/info";
import CalendarIcon from "../../assets/icons/calendar";
//import ReplaceIcon from "../../assets/icons/replacement";

import PieChart from '../../assets/icons/pieChart2';
import ListItem from "./ListItem2";

export default function Statistic2() { 
  const dataChart = [
    {key:1,value:40,svg:{fill:'#FBBF00'}},
    {key:2,value:30,svg:{fill:"#019BE1"}},
    {key:3,value:30,svg:{fill:"#00CF63"}}
  ];
  const [infoWindow,setInfoWindow] = useState(false);
  const [calendarWindow,setCalendarWindow] = useState(false);
  let month = "Ноябрь";
  
  const [listOfItems,setListOfItems] = useState([
    {name: "Вода минеральная газированная S.Pellegrino", key: '1',recyclable:true, amount:'18',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '2',recyclable:false,amount:'19',replaceable:true,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '3',recyclable:false,amount:'36',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '4',recyclable:true,amount:'21',replaceable:true,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '5',recyclable:true,amount:'18',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '6',recyclable:true, amount:'18',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '7',recyclable:false,amount:'19',replaceable:true,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '8',recyclable:false,amount:'36',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '9',recyclable:true,amount:'21',replaceable:true,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '10',recyclable:true,amount:'18',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '11',recyclable:true, amount:'18',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '12',recyclable:false,amount:'19',replaceable:true,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '13',recyclable:false,amount:'36',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '14',recyclable:true,amount:'21',replaceable:true,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '15',recyclable:true,amount:'18',replaceable:false,index:1},
  ]);

  return(
    <SafeAreaView style = {styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView>
        <Text style={styles.title}>Рекомендации</Text>
      </SafeAreaView>

      <View style={styles.chartWindow}>

        <Modal transparent={true} visible={infoWindow} onRequestClose={() => setInfoWindow(false)}>
          <TouchableOpacity style={styles.modalContainer} onPress={ ()=>setInfoWindow(false)}>
            <TouchableOpacity style={styles.modal} activeOpacity={1}>
              <Text>Инфа</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      
        <TouchableOpacity style={{marginRight:48}} onPress={ ()=>setInfoWindow(true) }>
          <InfoIcon color="#4E9DDA"/>
        </TouchableOpacity>  

        <View>
          <PieChart dataPie={dataChart} value ="300 г"/>
          <Text style={styles.monthLabel} >{month}</Text>
        </View> 

        <TouchableOpacity style={{marginLeft:48}} onPress={ ()=>setInfoWindow(true) }>
          <CalendarIcon color="#4E9DDA"/>
        </TouchableOpacity> 

      </View>

      <View style={styles.dataTextContainer}>
        <Text style={styles.dataText}>Сегодня</Text>
      </View>

      {/* <AddItem addHandler = {addItem}/> */}
    
      <FlatList data={listOfItems} renderItem={({item}) => (
        <ListItem el = {item} />
      )} style={{width:"100%"}}/>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    backgroundColor: '#FFFFFF',
    //justifyContent : 'center'
  },
  title: {
    fontFamily: 'Roboto-700',
    fontSize: 28,
    color: "#15256D",
    marginTop: 25,
  },
  chartWindow:{
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#4E9DDA26",
    flexDirection: "row",
    borderRadius: 11,
    width: '90%',
    justifyContent: 'space-between',
  },
  monthLabel:{
    textAlign: 'center',
    marginTop: 5,
    color: '#333333',
    fontFamily: "Roboto-700",
    fontSize: 16
  },
  dataTextContainer:{
    paddingLeft: 25,
    marginTop: 15,
    marginBottom: 5,
    width: '100%'
  },
  dataText:{
    fontFamily: "Roboto-400",
    fontSize: 16,
    color: "#333333"
  },







  //пока не доделано (для модальных окон)
  list:{
    backgroundColor: 'red',
    alignItems: 'center',
    //position: 'absolute',
    //height: '100%', width: '100%',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  modal: {
    width: 155,
    height: 300,
    backgroundColor: "red",
  },


  
});
  