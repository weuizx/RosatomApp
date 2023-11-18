import React from "react";
import { StyleSheet, Text, TouchableOpacity,View,Image} from "react-native";

import ReplacementIcon from '../../assets/icons/replacement';

export default function ListItem({el}){
  const clrItem = el.recyclable ? "#57B539" : "#B50827";
  
  if(el.replaceable){
    return (
      <View>
        <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.img} source={require('../../assets/items/1.png')} />
            <Text style={styles.title} >{el.name}</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style ={styles.replace}>
              <ReplacementIcon color={'#4E9DDA'}/>
            </TouchableOpacity>
            <Text style={styles.number}>{el.amount} г</Text>
          </View>
        </View>
        <View style={styles.line} />
      </View>
    );
  }else {
    return (
      <View>
        <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.img} source={require('../../assets/items/1.png')} />
            <Text style={styles.title} >{el.name}</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <View style ={styles.replace}/>
            <Text style={styles.number}>{el.amount} г</Text>
          </View>
        </View>
        <View style={styles.line} />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 60,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  title:{
    fontFamily: "Roboto-400",
    fontSize: 12,
    width: 190,
    alignSelf: "center"
  },
  number:{
    fontFamily: "Roboto-700",
    fontSize: 14,
    color: "#333333",
    marginRight: 25,
    alignSelf: "center"
  },
  img:{
    width:42,
    height:42,
    borderRadius: 5,
    marginHorizontal: 5,
    alignSelf: "center"
  },
  replace:{
    width: 20,
    height: 20,
    marginLeft: 25,
    marginRight: 13,
    alignSelf: "center"
  },
  line:{
    backgroundColor:"#8D8C8CA6",
    height: 1,
    width: '90%',
    alignSelf: "flex-end"
  }
});
