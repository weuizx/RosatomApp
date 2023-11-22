import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Context } from "./globalContext/globalContext";


export default function Register({navigation}) {

  const loadSceneApp = () => {
    navigation.navigate('MainContainer');
  }
  const loadSceneLogin = () => {
    navigation.navigate('Login');
  }

  const setIsLoggedIn = useContext(Context);
  const domain = useContext(Context);
  const setCredentials = useContext(Context);
  //const {setIsLoggedIn,domain,setCredentials} = globalContext;


  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error,setError] = useState("");

  function handleReg (){

    setError("");

    let body = JSON.stringify({
      'email': email.toLowerCase(),
      'password': password,
      'username': name,
    })

    fetch(`${domain}/auth/register`,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:body
      })
      .then(res => {
        if(res.status == 201){ //или res.code
          return res.json()
        }else {
          setError("Invalid data provided")
          throw res.json()
        }
      })
      .then(json => {
        //setUserObj(json)
        setCredentials(json)
        setIsLoggedIn(true)
      })
      .catch(error =>{
        console.log(error)
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.inner}>
        <SafeAreaView>
          <Text style={styles.title} >Регистрация</Text>
        </SafeAreaView>

        <Text style = {styles.errorLabel}>{error}</Text>

        <SafeAreaView style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Имя"
            onChangeText={(name) => setName(name)}
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

        <TouchableOpacity style={styles.registerBtn} onPress={() => handleReg()}>
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
  errorLabel:{
    fontFamily: 'Roboto-400',
    fontSize: 14,
    color: '#333333',
  }
});

