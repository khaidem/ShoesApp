import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React, { useEffect, useState } from 'react'
import HomeScreen from "../screen/Home/home";
import {  HStack, Icon, Spinner } from "native-base";
import ProFileScreen from "../screen/Profile/profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SigInScreen from "../screen/SignIn/sigIn";
import { ActivityIndicator } from "react-native";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {

    const [isLogged, setIsLogged] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const _retriveData = async ()=> {
        try {
            const data = await AsyncStorage.getItem('token');
            setIsLogged(data);
            setLoading(false);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(()=> {
        _retriveData();
    })
    if(isLoading){
        return <HStack flex={1} space={2} justifyContent="center" alignContent="center">
            <Spinner  size="lg">Loading</Spinner>
        </HStack>
    }
  return (
    isLogged? 
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen  name="HomeScreen" component={HomeScreen}
        ></Tab.Screen>
        <Tab.Screen name="Profile" component={ProFileScreen} options={{
            title: 'Profile',
            tabBarIcon: ({})=> {
                return <Icon name="person" color={'black'} size={20}></Icon>
            }
        }}></Tab.Screen>
    </Tab.Navigator>
 : <SigInScreen></SigInScreen> ) 
}

export default TabNavigation