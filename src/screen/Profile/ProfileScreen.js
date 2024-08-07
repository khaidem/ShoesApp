import {Button, Image, View} from 'native-base';
import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/reducers/LoginReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';


const ProFileScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
   
  <View>
    
    <Button
      onPress={e => {
        dispatch(logout());
        AsyncStorage.removeItem('token');
        navigation.navigate('SigIn');
      }}>
      Logout
    </Button>
  </View>
   
    // <Image
    //       // size={30}
    //       // borderRadius={1}
    //       source={require('../../../assets/item/Group1.png')}
    //       alt="addidas"
    //     />
    
  );
};

export default ProFileScreen;
