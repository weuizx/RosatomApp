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

import PieChart from "../../assets/icons/pieChart";

import ListItem from "./ListItem";
import AddItem from "./AddItem"; //НЕ используется, это добавление элементов как у Дударя (функция в файле AddItem.js)

export default function Statistic1() { 
  const [infoWindow,setInfoWindow] = useState(false);
  const [calendarWindow,setCalendarWindow] = useState(false);
  const month9 = 'Сентябрь';
  const month10 = 'Октябрь';
  const month11 = 'Ноябрь';
  let month = month11;
  
  const [listOfItems11,setListOfItems11] = useState([
    {name: "Вода минеральная газированная S.Pellegrino", key: '1',recyclable:true, amount:'18',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '2',recyclable:false,amount:'19',replaceable:true,index:2},
    {name: "Вода минеральная газированная S.Pellegrino", key: '3',recyclable:false,amount:'36',replaceable:false,index:3},
    {name: "Вода минеральная газированная S.Pellegrino", key: '4',recyclable:true,amount:'21',replaceable:true,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '5',recyclable:true,amount:'18',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '6',recyclable:true, amount:'18',replaceable:false,index:3},
    {name: "Вода минеральная газированная S.Pellegrino", key: '7',recyclable:false,amount:'19',replaceable:true,index:2},
    {name: "Вода минеральная газированная S.Pellegrino", key: '8',recyclable:false,amount:'36',replaceable:false,index:2},
    {name: "Вода минеральная газированная S.Pellegrino", key: '9',recyclable:true,amount:'21',replaceable:true,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '10',recyclable:true,amount:'18',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '11',recyclable:true, amount:'18',replaceable:false,index:3},
    {name: "Вода минеральная газированная S.Pellegrino", key: '12',recyclable:false,amount:'19',replaceable:true,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '13',recyclable:false,amount:'36',replaceable:false,index:2},
    {name: "Вода минеральная газированная S.Pellegrino", key: '14',recyclable:true,amount:'21',replaceable:true,index:2},
    {name: "Вода минеральная газированная S.Pellegrino", key: '15',recyclable:true,amount:'18',replaceable:false,index:1},
  ])
  const [listOfItems10,setListOfItems10] = useState([
    {name: "Вода минеральная газированная S.Pellegrino", key: '9',recyclable:true,amount:'21',replaceable:true,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '10',recyclable:true,amount:'18',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '11',recyclable:true, amount:'18',replaceable:false,index:3},
    {name: "Вода минеральная газированная S.Pellegrino", key: '12',recyclable:false,amount:'19',replaceable:true,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '13',recyclable:false,amount:'36',replaceable:false,index:2},
    {name: "Вода минеральная газированная S.Pellegrino", key: '14',recyclable:true,amount:'21',replaceable:true,index:2},
    {name: "Вода минеральная газированная S.Pellegrino", key: '15',recyclable:true,amount:'18',replaceable:false,index:1},
  ])
  const [listOfItems9,setListOfItems9] = useState([
    {name: "Вода минеральная газированная S.Pellegrino", key: '5',recyclable:true,amount:'18',replaceable:false,index:1},
    {name: "Вода минеральная газированная S.Pellegrino", key: '6',recyclable:true, amount:'18',replaceable:false,index:3},
    {name: "Вода минеральная газированная S.Pellegrino", key: '7',recyclable:false,amount:'19',replaceable:true,index:2},
  ])  

  const [listOfItems,setListOfItems] = useState(listOfItems11);

  // const addItem = (text) => {
  //   setListOfItems((list) => {
  //     return[
  //       {name:text, key: Math.random().toString(36).substring(7)},
  //       ...list
  //     ]
  //   })
  // }

  return(
    <SafeAreaView style = {styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView>
        <Text style={styles.title}>Статистика</Text>
      </SafeAreaView>

      <View style={styles.chartWindow}>

        <Modal transparent={true} visible={infoWindow} onRequestClose={() => setInfoWindow(false)}>
          <TouchableOpacity style={styles.modalInfoContainer} onPress={ ()=>setInfoWindow(false)}>
            <TouchableOpacity style={[styles.modalInfo,styles.shadow]} activeOpacity={1}>  
              <View style={styles.lineInfo}>
                <View style={[styles.circleInfo,{backgroundColor:"#57B539"}]}/>
                <Text style={styles.textInfo} >200 г</Text>
              </View>
              <View style={styles.lineInfo}>
                <View style={[styles.circleInfo,{backgroundColor:"#B50827"}]}/>
                <Text style={styles.textInfo} >100 г</Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
        
        <TouchableOpacity style={{marginRight:48}} onPress={ ()=>setInfoWindow(true) }>
          <InfoIcon color="#4E9DDA"/>
        </TouchableOpacity>  

        <View>
          <PieChart percent={0.67} value ="300 г"/>
          <Text style={styles.monthLabel} >{month}</Text>
        </View> 

        <TouchableOpacity style={{marginLeft:48}} onPress={ ()=>setCalendarWindow(true) }>
          <CalendarIcon color="#4E9DDA"/>
        </TouchableOpacity> 

        <Modal transparent={true} visible={calendarWindow} onRequestClose={() => setCalendarWindow(false)}>
          <TouchableOpacity style={styles.modalCalendarContainer} onPress={ ()=>setCalendarWindow(false)}>
            <TouchableOpacity style={[styles.modalCalendar,styles.shadow]} activeOpacity={1}>  
              <TouchableOpacity onPress={()=>{
                month = month11
                setListOfItems(listOfItems11)
                setCalendarWindow(false)
              }}>
                <View style={styles.monthContainer}>
                  <Text style={styles.textCalendar}>{month11}</Text>
                  <Text style={styles.textCalendar}>300 г</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                month = month10
                setListOfItems(listOfItems10)
                setCalendarWindow(false)
              }}> 
                <View style={styles.monthContainer}>
                  <Text style={styles.textCalendar}>{month10}</Text>
                  <Text style={styles.textCalendar}>120 г</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                month = month9
                setListOfItems(listOfItems9)
                setCalendarWindow(false)
              }}>
                <View style={styles.monthContainer}>
                  <Text style={styles.textCalendar}>{month9}</Text>
                  <Text style={styles.textCalendar}>60 г</Text>
                </View>  
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>

      </View>

      <View style={styles.dataTextContainer}>
        <Text style={styles.dataText}>Список товаров за месяц</Text>
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
  modalInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  modalInfo: {
    width: 70,
    height: 58,
    backgroundColor: "#FFF",
    borderRadius: 5,
    position: 'absolute',
    top: 116,
    left: 25,
  },
  lineInfo:{
    flexDirection: 'row',
    height: 14,
    //justifyContent: 'space-around',
    marginTop: 10,
    marginLeft: 7,
  },
  circleInfo:{
    width: 14,
    height: 14,
    borderRadius: '50%'
  },
  shadow:{
    shadowColor : '#00000040',
    shadowOpacity : 0.6,
    shadowRadius : 6,
    elevation : 10
  },
  textInfo:{
    fontFamily: 'Roboto-400',
    fontSize: 12,
    marginLeft: 10,
    color: "#333333",
  },
  modalCalendarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  modalCalendar: {
    width: 76,
    height: 144,
    backgroundColor: "#FFF",
    borderRadius: 5,
    position: 'absolute',
    top: 116,
    right: 25,
    justifyContent: 'space-evenly'
  },
  textCalendar:{
    fontFamily: 'Roboto-400',
    fontSize: 12,
    color: "#333333",
  },
  monthContainer:{
    alignItems: 'center'
  },


});