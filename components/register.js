import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import LoadFonts from "../styles/fonts";
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
      <LoadFonts/>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.inner}>
        <SafeAreaView>
          <Text style={styles.title} >Вход</Text>
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
    backgroundColor: "#658525",
    alignItems: "center",
    justifyContent: "center",
  },
  inner:{
    backgroundColor: "#fff",
    width: '85%',
    paddingBottom: 25,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 25,
    alignItems: "center",
  },
  title:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    marginTop: 25,
    marginBottom:25,
    color: '#092A35'
  },
  inputView: {
    marginBottom: 20,
    borderRadius: 25,
    borderColor: '#092A35',
    borderWidth: 1,
    width: '84%',
    justifyContent:'center',
  },
  inputText:{
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#092A35',
    marginLeft: 25,
    marginBottom: 10,
    marginTop: 10
  },
  registerBtn:{
    borderColor: '#22CA36',
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft:25,
    paddingRight:25,
    justifyContent:'center',
    alignItems:'center'
  },
  registerBtnText:{
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#092A35',
    marginBottom: 10,
    marginTop: 10
  },
  loginBtn:{
    marginTop: 10,
  },
  loginBtnText:{
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: '#000',
  },
});

