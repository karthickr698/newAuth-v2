import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Home from './screens/Home';
import Login from './screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageHelper } from './service';
// import { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {
  const [usertoken, setUsertoken] = useState("")
  const user = useSelector(state => state.user);
  console.log('user', user);
  try {
    // const value = AsyncStorage.getItem('token-meem');
    AsyncStorageHelper.getItem('token-meem', setUsertoken)
    if (usertoken !== null) {
      console.log('val', usertoken);
    }
  } catch (e) {
    console.log('err', e);
  }
  console.log('storage', usertoken);

  const {isAuthenticated} = user;

  console.log('isAuthenticated', isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen name="Home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
