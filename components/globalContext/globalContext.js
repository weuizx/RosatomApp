import React, {useState,useEffect,useRef,createContext} from 'react';
import * as SecureStore from 'expo-secure-store';

const Context = createContext()

const Provider = ( {children }) => {

  const [domain,setDomain] = useState("PetrVatrushkin.pythonanywhere.com");
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  //const [userObj,setUserObj] = useState();


  var jwt_decode = require('jwt-decode')

  async function getAccessUsingRefresh (refreshToken) {
    return fetch(`${domain}/auth/refresh/`, {
      method: 'POST',

      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(refreshToken)
    }).then(res => res.json())
  }

  function isTokenExpired (token) {
    var decoded = jwt_decode(token)

    if (decoded.exp < Date.now() / 1000) {
      return true
    } else {
      return false
    }
  }

  async function getVerifiedKeys (keys) {
    console.log('Loading keys from storage')

    if (keys) {
      console.log('checking access')

      if (!isTokenExpired(keys.access)) {
        console.log('returning access')

        return keys
      } else {
        console.log('access expired')

        console.log('checking refresh expiry')

        if (!isTokenExpired(keys.refresh)) {
          console.log('fetching access using refresh')

          const response = await getAccessUsingRefresh(keys.refresh)

          await SecureStore.setItemAsync('keys', JSON.stringify(response))

          console.log('UPDATED ONE')

          return response
        } else {
          console.log('refresh expired, please login')

          return null
        }
      }
    } else {
      console.log('access not available please login')

      return null
    }
  }

  const setCredentials = async keys => {
    try {
      await SecureStore.setItemAsync('keys', JSON.stringify(keys))
    } catch (e) {
      console.log(e)
    }
  }

  const getCredentials = async () => {
    try {
      let credentials = await SecureStore.getItemAsync('keys')

      let cred = await getVerifiedKeys(JSON.parse(credentials))

      if (credentials != null && cred != null) {
        return cred
      } else {
        return null
      }
    } catch (e) {
      console.log(e)
    }

    return null
  }



  const globalContext = {
    domain,
    isLoggedIn,
    setIsLoggedIn,
    //userObj,
    //setUserObj,
    setCredentials,
    getCredentials,
  }

  return <Context.Provider value={globalContext}>{children}</Context.Provider>
};

export {Context,Provider};
