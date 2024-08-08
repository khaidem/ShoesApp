import {HStack, Pressable, StatusBar, Text, View, } from 'native-base';
import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {COLOURS, FONTSIZE} from '../../constant/Constant';

import CarouselSlider from '../../component/CarouselSlider';
import BrandTypes from '../../component/BrandTypes';
import ShoesCart from '../../component/ShoesCart';
import SearchBar from '../../component/SearchBar';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const types = [];
  return (
    <View style={{backgroundColor: COLOURS.bg}} flex={1} padding={5}>
      <StatusBar backgroundColor={COLOURS.bg} barStyle="dark-content" />
      <HStack justifyContent={'space-around'}>
        {/* <Drawer></Drawer> */}
        <Pressable
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <MaterialCommunityIcons
            name="dots-grid"
            size={25}
            color="#900"></MaterialCommunityIcons>
        </Pressable>

        <HStack space={2} alignItems="center">
          <Icons style={{color: 'red'}} name="location-pin" size={25} />

          <Text fontSize={15}>Haobam Mark</Text>
        </HStack>

        <Icons name="shopping-bag" size={30}></Icons>
      </HStack>
      {/* <HStack  > */}
      <SearchBar />
      {/* </HStack> */}
      {/* <HStack> */}
      <BrandTypes />
      {/* </HStack> */}

      <HStack justifyContent={'space-between'}>
        <Text style={{fontSize: FONTSIZE.Size16}}>Popular Shoes</Text>
        <Text style={{color: 'blue'}}>Sell all</Text>
      </HStack>
      <ShoesCart />
      <HStack bottom={2} justifyContent={'space-between'}>
        <Text style={{fontSize: FONTSIZE.Size16}}>New Arrivals</Text>
        <Text style={{color: 'blue'}}>Sell all</Text>
      </HStack>
      <CarouselSlider />
    </View>
  );
};

export default HomeScreen;
