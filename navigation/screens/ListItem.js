import React from "react";
import { StyleSheet, Text, TouchableOpacity,View,Image} from "react-native";

import ReplacementIcon from '../../assets/icons/replacement';

export default function ListItem({el}){
  const clrItem = el.recyclable ? "#57B539" : "#B50827";
  
  if(el.replaceable){
    return (
      <View style={styles.container}>
        <View style ={[styles.recycle,{backgroundColor: clrItem}]}/>
        <Image style={styles.img} source={require('../../assets/items/1.png')} />
        <Text style={styles.title} >{el.name}</Text>
        <TouchableOpacity style ={styles.replace}>
          <ReplacementIcon color={'#4E9DDA'}/>
        </TouchableOpacity>
        <Text style={styles.number}>{el.amount} г</Text>
      </View>
    );
  }else {
    return (
      <View style={styles.container}>
        <View style ={[styles.recycle,{backgroundColor: clrItem}]}/>
        <Image style={styles.img} source={require('../../assets/items/1.png')} />
        <Text style={styles.title} >{el.name}</Text>
        <View style ={styles.replace}/>
        <Text style={styles.number}>{el.amount} г</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 60,
    flexDirection: "row",
  },
  title:{
    fontFamily: "Roboto-400",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 13,
    width: 189,
    alignSelf: 'center'
  },
  number:{
    fontFamily: "Roboto-700",
    fontSize: 14,
    color: "#333333",
    marginTop: 19,
    marginRight: 25,
    marginBottom: 27,
  },
  img:{
    width:42,
    height:42,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 5,
    marginBottom: 13,
  },
  recycle:{
    width: 5,
    height: 52,
    borderRadius: 10,
    marginBottom: 8,
    marginLeft: 5,
  },
  replace:{
    width: 20,
    height: 20,
    marginVertical: 16,
    marginLeft: 25,
    marginRight: 13
  }
});

