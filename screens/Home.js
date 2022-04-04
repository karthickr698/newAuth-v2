import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import UserAction from '../Actions/user';
import {useDispatch} from 'react-redux';
import {AsyncStorageHelper} from '../service';

export default function Home(props) {
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#CE92FA',
      }}
    >
      <View>
        <Text>Home</Text>
        <View>
          <Button
            mode="contained"
            style={{borderRadius: 10, backgroundColor: 'purple'}}
            onPress={() => {
              console.log('call logout');
              AsyncStorageHelper.removeToken('token-meem');
              UserAction.logout(dispatch);
            }}
          >
            <Text style={{fontSize: 18}}>Logout</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
