import {Box, HStack, Icon, Pressable, Text, View, VStack} from 'native-base';
import React from 'react';
import {COLOURS} from '../../constant/Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ShoesCart from '../../component/ShoesCart';
import {StyleSheet} from 'react-native';

const FavouriteScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Box
          height={10}
          width={50}
          bg={'white'}
          rounded={'full'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Pressable
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <Icon
              size={6}
              color={'black'}
              as={<AntDesign name="left"></AntDesign>}
            />
          </Pressable>
        </Box>

        <Text fontSize={20} fontFamily={'body'}>
          Favourite
        </Text>

        <Pressable
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <Box
            height={10}
            width={50}
            bg={'white'}
            rounded={'full'}
            //  shadow={1}
            alignItems={'center'}
            justifyContent={'center'}>
            <Icon
              size={6}
              color={'black'}
              as={<AntDesign name="hearto"></AntDesign>}
            />
          </Box>
        </Pressable>
      
      </View>
     
      <View flex={1}>
        <ShoesCart/>
        </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLOURS.bg,
  },
  header: {
    marginTop: 3,

    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 100,
  },
});

export default FavouriteScreen;
