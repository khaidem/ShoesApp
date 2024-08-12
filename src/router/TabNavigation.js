import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React, { useEffect, useState } from 'react'

import {  HStack, Icon, Spinner } from "native-base";
import ProFileScreen from "../screen/Profile/ProfileScreen";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../screen/Home/HomeScreen";
import DetailsScreen from "../screen/Details/DetailsScreen";


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
  
    <Tab.Navigator  screenOptions={{headerShown: false}}>
        
        <Tab.Screen  name="HomeScreen" component={HomeScreen} options={{
            title: 'Home',
            tabBarIcon: ({color, size})=> (
                 <FontAwesome name="home" size={size} color={color} />
            )
        }}
        ></Tab.Screen>
        <Tab.Screen name="Profile" component={ProFileScreen} options={{
            title: 'profile',
            tabBarIcon: ({color, size})=> (
                 <Ionicons name="person-outline" size={size} color={color} />
            )
        }}></Tab.Screen>
       
    </Tab.Navigator>)

}

export default TabNavigation