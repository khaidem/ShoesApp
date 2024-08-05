import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React, { useEffect, useState } from 'react'
import HomeScreen from "../screen/Home/home";
import {  HStack, Icon, Spinner } from "native-base";
import ProFileScreen from "../screen/Profile/profile";


const Tab = createBottomTabNavigator();
const TabNavigation = () => {

  
    const [isLoading, setLoading] = useState(true);
  
    useEffect(()=> {
    setLoading(false)
    })
    if(isLoading){
        return <HStack flex={1} space={2} justifyContent="center" alignContent="center">
            <Spinner  size="lg">Loading</Spinner>
        </HStack>
    }
  return (
  
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen  name="HomeScreen" component={HomeScreen}
        ></Tab.Screen>
        <Tab.Screen name="Profile" component={ProFileScreen} options={{
            title: 'Profile',
            tabBarIcon: ({})=> {
                return <Icon name="person" color={'black'} size={20}></Icon>
            }
        }}></Tab.Screen>
    </Tab.Navigator>)

}

export default TabNavigation