import {
  Box,
  Center,
  FlatList,
  HStack,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import {COLOURS, FONTSIZE} from '../constant/Constant';
import {Pressable, StyleSheet} from 'react-native';

export const first_img = require('../../assets/images/item/group3.png');
export const second_img = require('../../assets/images/item/group2.png');
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const ShoesCart = () => {
  const navigation = useNavigation();
  
  const numColumns = 2;
  const data = [
    {
      id: 1,
      name: 'Nike Jordan',
      price: 58.7,
      imageUrl: second_img,
      isFavorite: true,
    },
    {
      id: 2,
      name: 'Nike Air Max',
      price: 37.8,
      imageUrl: second_img,
      isFavorite: false,
    },
    {
      id: 3,
      name: 'Nike Club Max',
      price: 47.7,
      imageUrl: second_img,
      isFavorite: true,
    },
    {
      id: 4,
      name: 'Nike Air Max',
      price: 57.6,
      imageUrl: second_img,
      isFavorite: false,
    },
  ];
  const renderItem = ({item}) => (
    <Box
      borderWidth="1"
      bg={COLOURS.white}
      borderColor="gray.200"
      borderRadius="10"
      p="3"
      m="2"
      width="45%">
      <VStack space="2"  alignItems='start'>
     
     
        <Pressable>
        <AntDesign name="hearto" size={20}></AntDesign>
       
          <Image
            source={item.imageUrl}
            alt={item.name}
            width="100"
            height="70"
            resizeMode="contain"
          />
        </Pressable>
        <HStack justifyContent="space-between" alignItems="center" width="100%">
          <Text fontSize="xs" color="blue.500">
            BEST SELLER
          </Text>
          
        </HStack>
        <Text bold>{item.name}</Text>
        <HStack justifyContent={'space-between'}>
        <Text>${item.price.toFixed(2)}</Text>
        <HStack space={1} mt={2}>
          <Box size="2" bg="yellow.400" borderRadius="full" />
          <Box size="2" bg="blue.400" borderRadius="full" />
          {/* <Box size="2" bg="gray.400" borderRadius="full" /> */}
        </HStack>
        </HStack>
       
      </VStack>
    </Box>
  );

  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{paddingBottom: 20, paddingHorizontal: 10}}
    />
    
  );
};
export default ShoesCart;
