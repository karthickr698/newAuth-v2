import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeStorage = () => {
  console.log('remove storage');
  try {
    AsyncStorage.clear();
  } catch (e) {
    console.log('setStorage error', e);
  }
};

export const setStorage = token => {
  console.log('set storage', token);
  try {
    AsyncStorage.setItem('token-meem', token);
  } catch (e) {
    console.log('setStorage error', e);
  }
};
