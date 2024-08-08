import {NavigationContainer, TabRouter} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';

import OnbaordingScreen from '../screen/onbaording/OnbaordingScreen';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StatusBar } from 'native-base';


import DrawerNavigation from './DrawerNavigation';
import SigInScreen from '../screen/SignIn/SiginScreen';
import RegisterScreen from '../screen/registerScreen/RegisterScreen';

const Stack = createNativeStackNavigator();

const Root = () => {
  const [FirstLaunch, setFirstLaunch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#F8F9FA"}></StatusBar>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!FirstLaunch && (
          <Stack.Screen
            name={'Onbaording'}
            component={OnbaordingScreen}></Stack.Screen>
         )}  
      
       <Stack.Screen name="SigIn" component={SigInScreen}></Stack.Screen>
       <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
       <Stack.Screen name="DrawerNavigation" component={DrawerNavigation}></Stack.Screen>

       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Root;
