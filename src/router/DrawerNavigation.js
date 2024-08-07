import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react';
import HomeScreen from '../screen/Home/HomeScreen';

import { COLOURS } from '../constant/Constant';
import ProFileScreen from '../screen/Profile/ProfileScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
    
   <MyDrawer.Screen name="Home" component={HomeScreen} options={{headerShown: false, drawerIcon: ()=>{
     
     <FontAwesome name="home" size={10} color='white' />
   }}}></MyDrawer.Screen>
   <MyDrawer.Screen name="Profile" component={ProFileScreen} options={{headerShown: false}}></MyDrawer.Screen>


   </MyDrawer.Navigator>
  )
}

export default DrawerNavigation