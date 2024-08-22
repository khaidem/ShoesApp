import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';

import {COLOURS} from '../constant/Constant';
import TabNavigation from './TabNavigation';
import ProFileScreen from '../screen/Profile/ProfileScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomDrawerContent from './CustomDrawer';

import FavouriteScreen from '../screen/Favourite/FavouriteScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MyCartScreen from '../screen/MyCart/MyCartScreen';
import NotificationScreen from '../screen/Notification/NotificationScreen';

const MyDrawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <MyDrawer.Navigator
      drawerContent={Props => <CustomDrawerContent {...Props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLOURS.drawerColor,
        },
        drawerLabelStyle: {
          color: COLOURS.white,
        },
      }}>
      <MyDrawer.Screen
        name="Home"
        component={TabNavigation}
        options={{
          headerShown: false,
          drawerLabel: 'Home',
          drawerIcon: () => (
            <FontAwesome name="home" size={25} color={'white'} />
          ),
        }}></MyDrawer.Screen>
      <MyDrawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <AntDesign name="hearto" size={25} color={'white'} />
          ),
        }}></MyDrawer.Screen>
      <MyDrawer.Screen
        name="MyCart"
        component={MyCartScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <MaterialIcons name="shopping-bag" size={20}color={'white'}></MaterialIcons>
          ),
        }}></MyDrawer.Screen>
      <MyDrawer.Screen
        name="Profile"
        component={ProFileScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Ionicons name="person-outline" size={25} color={'white'} />
          ),
        }}></MyDrawer.Screen>
         <MyDrawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <MaterialIcons name="notifications-active" size={25} color={'white'} />
          ),
        }}></MyDrawer.Screen>
    </MyDrawer.Navigator>
  );
};

export default DrawerNavigation;
