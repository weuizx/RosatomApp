import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";


export default function Register({navigation}) {

  const loadSceneApp = () => {
    //navigation.navigate('SplashScreen');
  }
  const loadSceneLogin = () => {
    navigation.navigate('Login');
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.inner}>
        <SafeAreaView>
          <Text style={styles.title} >Регистрация</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Имя"
            onChangeText={(email) => setEmail(email)}
          />
        </SafeAreaView>

        <SafeAreaView style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Пароль"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </SafeAreaView>

        <SafeAreaView style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Электронная почта"
            onChangeText={(email) => setEmail(email)}
          />
        </SafeAreaView>

        <TouchableOpacity style={styles.registerBtn} onPress={loadSceneApp}>
          <Text style={styles.registerBtnText}>Зарегестрироваться</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={loadSceneLogin}>
          <Text style={styles.loginBtnText}>Уже есть аккаунт</Text>
        </TouchableOpacity>

      </SafeAreaView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4E9DDA",
    alignItems: "center",
    justifyContent: "center",
  },
  inner:{
    backgroundColor: "#fff",
    width: '85%',
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 25,
    alignItems: "center",
  },
  title:{
    fontFamily: 'Roboto-700',
    fontSize: 28,
    marginTop: 25,
    marginBottom:25,
    color: '#333333'
  },
  inputView: {
    marginBottom: 20,
    borderRadius: 25,
    borderColor: '#333333',
    borderWidth: 1,
    width: '84%',
    justifyContent:'center',
  },
  inputText:{
    fontFamily: 'Roboto-400',
    fontSize: 14,
    color: '#333333',
    marginLeft: 25,
    marginBottom: 10,
    marginTop: 10
  },
  registerBtn:{
    borderColor: '#4E9DDA',
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft:25,
    paddingRight:25,
    justifyContent:'center',
    alignItems:'center'
  },
  registerBtnText:{
    fontFamily: 'Roboto-700',
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
    marginTop: 10
  },
  loginBtn:{
    marginTop: 10,
    marginBottom: 25,
  },
  loginBtnText:{
    fontFamily: 'Roboto-400',
    fontSize: 12,
    color: '#000',
  },
});

