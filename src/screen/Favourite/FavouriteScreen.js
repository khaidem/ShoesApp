import { Box, HStack, Pressable, Text, VStack } from 'native-base'
import React from 'react'
import { COLOURS } from '../../constant/Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ShoesCart from '../../component/ShoesCart';

const FavouriteScreen = ({navigation}) => {
  return (
    <VStack background={COLOURS.secondary} p={2} flex={1} bg={COLOURS.bg}>
      <HStack justifyContent={"space-between"}>
      <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Box
            bg={COLOURS.white}
            p={3}
            shadow={2}
            borderRadius={20}
            mx={2}
            mt={2}>
            <AntDesign name="left" size={20} color="black"></AntDesign>
          </Box>
        </Pressable>

        <Text fontSize={20} fontFamily={'body'}>
          {'Favourite'}
        </Text>
        <Box
          bg={COLOURS.white}
          p={3}
          shadow={2}
          borderRadius={20}
          mx={2}
          mt={2}>
          <AntDesign name="hearto" size={20}color="black"></AntDesign>
        </Box>
      </HStack>
      <ShoesCart/>
    </VStack>
  )
}

export default FavouriteScreen