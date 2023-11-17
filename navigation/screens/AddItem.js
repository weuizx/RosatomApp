import React, { useState } from "react";
import { StyleSheet, TextInput,Text, View, Button } from "react-native";

export default function AddItem({addHandler}){
  const [name,setValue] = useState('');
  const onChange = (name) => {
    setValue(name);
  };

  return (
    <View>
      <TextInput style={styles.input} onChangeText={onChange} placeholder="Впишите товар"/>
      <Button onPress={() => addHandler(name)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});