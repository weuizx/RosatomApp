import React, { useState, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity,View,Image,Modal} from "react-native";
import Carousel,  { Pagination } from "react-native-snap-carousel";

import {dataReplace} from "./dataReplace";

import ReplacementIcon from '../../assets/icons/replacement';
import ArrowBack from '../../assets/icons/arrowBack';

const renderItem1 = ({ item }) => {
  return (
    <View style={styles.renderItem1_parentView}>
      <Image source={require("../../assets/items/"+item.source+".png")} style={styles.renderItem1_img} />
      <View style={styles.renderItem1_view1}>
        <Text style={styles.renderItem1_text1}>{item.title}</Text>
      </View>
      <View style={styles.renderItem1_view2}>
        <Text style={styles.renderItem1_text2}>19 г</Text>
        <TouchableOpacity>
          <Text style={styles.renderItem1_text3}>16 г</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function ListItem({el}){
  const clrItem = el.recyclable ? "#57B539" : "#B50827";
  const [replaceWindow,setReplaceWindow] = useState(false);

  const [page, setPage] = useState(0);
  const isCarousel = useRef(null);

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
                    <View style={styles.containerCarousel}>
                      <Carousel
                        ref={isCarousel}
                        onSnapToItem={(page) => setPage(page)}
                        layout={"default"}
                        data={dataReplace}
                        renderItem={renderItem1}
                        sliderWidth={310}
                        itemWidth={100}
                        itemHeight={170}
                        sliderHeight={170}
                      />
                      <View style={{
                        //flex: 1,
                        alignItems: "center",
                        paddingBottom: 20,
                      }}>
                        <Pagination
                          activeDotIndex={page}
                          carouselRef={isCarousel}
                          tappableDots={true}
                          inactiveDotOpacity={0.4}
                          inactiveDotScale={0.6}
                          dotsLength={dataReplace.length}
                          dotStyle={{
                            height: 5,
                            width: 20,
                            borderRadius: 20,
                            backgroundColor: "#333333",
                          }}
                          inactiveDotStyle={{
                            backgroundColor: "grey",
                          }}
                        />
                      </View>
                    </View>
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
  recycle:{
    width: 5,
    height: 52,
    borderRadius: 10,
    marginLeft: 5,
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
    height: '50%',
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


  containerCarousel:{
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    //height: 170
  },
  renderItem1_parentView: {
    //height: 160,
    width: 310,
  },
  renderItem1_view1: {
    width: 100,
    marginBottom: 5,
    marginTop: 5,
  },
  renderItem1_view2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 100,
  },
  renderItem1_img: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  renderItem1_text1: {
    fontFamily: "Roboto-400",
    fontSize: 12,
    color: "#333333",
    textAlign: 'center',
  },
  renderItem1_text2: {
    fontSize: 12,
    fontFamily: "Roboto-700",
    color: "#8D8C8C",
    textDecorationLine: 'line-through',
  },
  renderItem1_text3: {
    fontSize: 12,
    fontFamily: "Roboto-700",
    color: "#4E9DDA",
  },

});

