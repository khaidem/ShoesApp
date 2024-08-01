import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import SigInScreen from '../screen/SignIn/sigIn';
import RegisterScreen from '../screen/registerScreen/RegisterScreen';
import OnbaordingScreen from '../screen/onbaording/OnbaordingScreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'Onbaording'} component={OnbaordingScreen}></Stack.Screen>
            <Stack.Screen  name= {'SigIn'} component={SigInScreen}></Stack.Screen>
            <Stack.Screen  name= {'Register'} component={RegisterScreen}></Stack.Screen>
        
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation