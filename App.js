import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Home from './screens/Home';
import Login from './screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const user = useSelector(state => state.user);
  console.log('user', user);
  try {
    const value = AsyncStorage.getItem('token-meem');
    if (value !== null) {
      console.log('val', value.json());
    }
  } catch (e) {
    console.log('err', e);
  }
  console.log('storage', AsyncStorage.getItem('token-meem'));

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
