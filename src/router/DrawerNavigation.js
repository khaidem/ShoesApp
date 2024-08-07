import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react';
import HomeScreen from '../screen/Home/HomeScreen';

import { COLOURS } from '../constant/Constant';
import TabNavigation from './TabNavigation';

const MyDrawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
   <MyDrawer.Navigator screenOptions={{
  drawerStyle: {
    backgroundColor: COLOURS.drawerColor,
    
  },
  drawerLabelStyle: {
    color: COLOURS.white
  }
   }}>
    <MyDrawer.Screen name='TabNavigator' component={TabNavigation} options={{headerShown: false}}></MyDrawer.Screen>
   


   </MyDrawer.Navigator>
  )
}

export default DrawerNavigation