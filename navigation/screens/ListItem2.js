import React,{useState} from "react";
import { StyleSheet, Text, TouchableOpacity,View,Image,Modal} from "react-native";

import ReplacementIcon from '../../assets/icons/replacement';
import ArrowBack from '../../assets/icons/arrowBack';

export default function ListItem({el}){
  const clrItem1 = "#FBBF00";
  const clrItem2 = "#019BE1";
  const clrItem3 = "#00CF63";
  let clrItem = "";
  if(el.index == 1){
    clrItem = clrItem1;
  }else if(el.index == 2){
    clrItem = clrItem2;
  }else if(el.index == 3){
    clrItem = clrItem3;
  }
  const [replaceWindow,setReplaceWindow] = useState(false);

  if(el.replaceable){
    return (
      <View>
        <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
            <View style ={[styles.recycle,{backgroundColor: clrItem}]}/>
            <Image style={styles.img} source={require('../../assets/items/1.png')} />
            <Text style={styles.title} >{el.name}</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Modal transparent={true} visible={replaceWindow} onRequestClose={() => setReplaceWindow(false)}>
              <TouchableOpacity style={styles.modalReplaceContainer} onPress={ ()=> setReplaceWindow(false)}>
                <TouchableOpacity style={[styles.modalReplace,styles.shadow]} activeOpacity={1}> 
                    <Text style={styles.textTitleReplace}>Этот продукт можно заменить</Text>
                    <TouchableOpacity style={styles.arrow} onPress={ ()=> setReplaceWindow(false)}>
                      <ArrowBack color={"#8D8C8C"}/>
                    </TouchableOpacity>
                </TouchableOpacity>
              </TouchableOpacity>
            </Modal>
            <TouchableOpacity style ={styles.replace} onPress={ ()=> setReplaceWindow(true)}>
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
            <View style ={[styles.recycle,{backgroundColor: clrItem}]}/>
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
  },
  recycle:{
    width: 5,
    height: 52,
    borderRadius: 10,
    marginLeft: 5,
    alignSelf: "center"
  },
  shadow:{
    shadowColor : '#00000040',
    shadowOpacity : 0.2,
    shadowRadius : 6,
    elevation : 10
  },
  modalReplaceContainer:{
    flex: 1,
    //justifyContent: 'flex-end',
    //alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  modalReplace:{
    width: "100%",
    height: '60%',
    position: 'absolute',
    bottom: -25,
    backgroundColor: "#FFF",
    borderRadius: 25,
  },
  textTitleReplace:{
    fontFamily: 'Roboto-700',
    fontSize: 16,
    color: "#333333",
    marginTop: 20,
    alignSelf: 'center',
  },
  textReplace:{
    fontFamily: 'Roboto-400',
    fontSize: 12,
    color: "#333333",
  },
  arrow:{
    top: -18,
    left: 20,
    position: 'relative',
  },
});
