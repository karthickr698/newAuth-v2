import React, {useState, useEffect} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Home from './screens/Home';
import Login from './screens/Login';
import {AsyncStorageHelper} from './service';
import UserAction from './Actions/user';
import {useDispatch} from 'react-redux';

const Stack = createStackNavigator();

export default function App() {
  const user = useSelector(state => state.user);
  console.log('user', user);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (!user.token) {
      const data = await AsyncStorageHelper.getItem('token-meem');
      console.log('data', data);
      if (data) {
        UserAction.set(data, dispatch);
      } else {
        UserAction.logout(dispatch);
      }
    }
  }, []);

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
