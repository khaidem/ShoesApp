import {Button} from 'native-base';
import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/reducers/loginReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const ProFileScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Button
      onPress={e => {
        dispatch(logout());
        AsyncStorage.removeItem('token');
        navigation.navigate('SigIn');
      }}>
      Logout
    </Button>
  );
};

export default ProFileScreen;
