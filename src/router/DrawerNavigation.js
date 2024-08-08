import {createDrawerNavigator, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import React from 'react';


import {COLOURS} from '../constant/Constant';
import TabNavigation from './TabNavigation';
import ProFileScreen from '../screen/Profile/ProfileScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomDrawerContent from './CustomDrawer';
import { SafeAreaView } from 'react-native';
import { Image, Text, View } from 'native-base';

const MyDrawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <MyDrawer.Navigator
    drawerContent={(Props)=>
      <CustomDrawerContent {...Props}/>
      // return (
      //   <SafeAreaView>
      //     <View style={{
      //       height: '50%',
      //       width: "100%",
      //       justifyContent: "center",
      //       alignItems: "center",
            
      //     }}>
      //       <Image alt='phto' source={require('../../assets/images/photo1.png')} style={{marginBottom: 12, height: 100, width: 100, borderRadius: 50}}></Image>
      //     <Text style={{
      //       fontSize: 16,
      //       color: 'white'
            
      //     }}>Alison</Text>
      //     </View>
      //     <DrawerItemList {...Props}/>
      //     <DrawerItem icon={({color, size})=>{
      //       <MaterialIcons name='logout' color="white"></MaterialIcons>
      //     }}
      //     label="SignOut"
      //     labelStyle={COLOURS.white}
      //     />
      //   </SafeAreaView>
      // )
    }
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
        options={{headerShown: false, drawerLabel: "Home", drawerIcon: ()=>(
          <FontAwesome name="home" size={25} color={"white"} />
        )}}></MyDrawer.Screen>
      <MyDrawer.Screen
        name="Profile"
        component={ProFileScreen}
        options={{headerShown: false, 
        drawerIcon: ()=>(
          <Ionicons name="person-outline" size={25} color={"white"} />
        )
        }}></MyDrawer.Screen>
      
    </MyDrawer.Navigator>
  );
};

export default DrawerNavigation;
