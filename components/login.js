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


export default function Login({navigation}) {

  const loadSceneApp = () => {
    navigation.navigate('MainContainer');
  }
  const loadSceneRegister = () => {
    navigation.navigate('Register');
  }

  const setIsLoggedIn = useContext(Context);
  const domain = useContext(Context);
  const setCredentials = useContext(Context);
  //const {setIsLoggedIn,domain,setCredentials} = globalContext;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");

  function handleLogin (){

    setError("");

    let body = JSON.stringify({
      //'username': email.toLowerCase(),
      //'password': password
      "username": ".ZKqg9kB6PjM1IA7BLDu5uHzZOEMAYj9n91Q2Z-S.3MUBr-S.K@a.pAhXpIeB+w3pMF4rKxsw86FmRNDV_M4i12p55htbrZXV",
      "password": "string",
      // "email": "user@example.com",
      // "first_name": "string",
      // "last_name": "string"
    })

    fetch(`http://127.0.0.1:8000/auth/login`,{
      method: 'POST',
      headers:{
        //'Access-Control-Allow-Origin' : '*',
        //'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
        'accept': 'application/json', 
        'Content-Type':'application/json',
      },
      body:body
      })
      .then(res => {
        if(res.status == 200){ //или res.code
          return res.json()
        }else if (res.status == 400) {
          setError("Username or password not provided")
          throw res.json()
        }else if (res.status == 401){
          setError("Wrong password")
          throw res.json()
        }else {
          setError("User not found")
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
          <Text style={styles.title} >Вход</Text>
        </SafeAreaView>

        <Text style = {styles.errorLabel}>{error}</Text>

        <SafeAreaView style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Электронная почта"
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

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Войти</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerBtn} onPress={loadSceneRegister}>
          <Text style={styles.registerBtnText}>Зарегестрироваться</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotBtn}>
          <Text style={styles.forgotBtnText}>Забыли пароль?</Text>
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
  loginBtn:{
    borderColor: '#4E9DDA',
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  loginBtnText:{
    fontFamily: 'Roboto-700',
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
    marginTop: 8
  },
  registerBtn:{
    marginTop: 10,
  },
  registerBtnText:{
    fontFamily: 'Roboto-400',
    fontSize: 12,
    color: '#000',
  },
  forgotBtn:{
    marginTop: 10,
    marginBottom: 25,
  },
  forgotBtnText:{
    fontFamily: 'Roboto-400',
    fontSize: 10,
    color: '#000',
  },
  errorLabel:{
    fontFamily: 'Roboto-400',
    fontSize: 14,
    color: '#333333',
  }
});

