import {
  Box,
  Center,
  FlatList,
  HStack,
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
  const shoesData = [
    {
      id: '1',
      title: 'Best Seller',
      subtitle: 'Nike Jordan',
      price: '345',
      imageUrl: first_img,
    },
    {
      id: '2',
      title: 'Best Seller',
      subtitle: 'Nike Jordan',
      price: '345',
      imageUrl: second_img,
    },
    {
      id: '3',
      title: 'Best Seller',
      subtitle: 'Nike Jordan',
      price: '345',
      imageUrl: second_img,
    },
  ];

  return (
    <FlatList
      // showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      numColumns={2}
      top={5}
      contentContainerStyle={styles.container}
      data={shoesData}
      renderItem={({item}) => (
        <Pressable
          onPress={() => {
            // navigation.navigate('Details')
          }}>
          <Box
            width={160}
            bg="white"
            borderRadius={15}
            // shadow={3}
            p={3}
            m={1}
            position="relative">
            <VStack >
              <Box width={5} height={5} bg={COLOURS.bg}>
                <AntDesign name="hearto" size={20}></AntDesign>
              </Box>
              <Image
                source={item.imageUrl}
                alt={''}
                size={100}
                resizeMode="contain"
                alignSelf="center"
                mb={3}
              />
              <Text fontSize="xs" color="blue.500" fontWeight="bold">
                BEST SELLER
              </Text>
              <Text fontSize="md" fontWeight="bold">
                {item.title}
              </Text>
              <HStack space={2} marginTop="2" justifyContent={'space-between'}>
              <Text fontSize="md" fontWeight="bold">
                {item.price}
              </Text>
              <HStack space={2}>
              <Box
                  width="16px"
                  height="16px"
                  borderRadius="8px"
                  backgroundColor="yellow.300"
                  borderWidth={1}
                  borderColor="coolGray.300"
                />
                <Box
                  width="16px"
                  height="16px"
                  borderRadius="8px"
                  backgroundColor="teal.400"
                  borderWidth={1}
                  borderColor="coolGray.300"
                />
              </HStack>
               
              </HStack>
             
            </VStack>

            {/* <Center
            borderTopLeftRadius={500}
            borderTopRightRadius={300}
            borderBottomLeftRadius={25}
            borderBottomRightRadius={300}
            position="absolute"
            bottom={0}
            right={0}
            bg="blue.500"
            borderRadius="full"
            size={8}>
            <Icons name="add" size={20} color="white" />
          </Center> */}
          </Box>
        </Pressable>
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    // height: 250,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    width: 180, // Adjust width as needed

    alignItems: 'center',
    shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: FONTSIZE.Size16,
    fontWeight: 'bold',
    color: COLOURS.secondary,

    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: FONTSIZE.Size14,
    color: '#666',
    alignSelf: 'flex-start',
  },
});
export default ShoesCart;
