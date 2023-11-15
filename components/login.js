import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";


export default function Login({navigation}) {

  const loadSceneApp = () => {
    navigation.navigate('MainContainer');
  }
  const loadSceneRegister = () => {
    navigation.navigate('Register');
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.inner}>
        <SafeAreaView>
          <Text style={styles.title} >Вход</Text>
        </SafeAreaView>

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

        <TouchableOpacity style={styles.loginBtn} onPress={loadSceneApp}>
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
  loginBtn:{
    borderColor: '#22CA36',
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  loginBtnText:{
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#092A35',
    marginBottom: 8,
    marginTop: 8
  },
  registerBtn:{
    marginTop: 10,
  },
  registerBtnText:{
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: '#000',
  },
  forgotBtn:{
    marginTop: 10,
  },
  forgotBtnText:{
    fontFamily: 'OpenSans-Regular',
    fontSize: 10,
    color: '#000',
  }
});

