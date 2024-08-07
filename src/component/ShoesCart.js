import {
  Box,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import {COLOURS, FONTSIZE} from '../constant/Constant';
import {StyleSheet} from 'react-native';

export const first_img = require('../../assets/images/item/group3.png');
export const second_img = require('../../assets/images/item/group2.png');
import Icons from 'react-native-vector-icons/MaterialIcons';
const ShoesCart = () => {
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

  const ShoesCard = ({title, subtitle, imageUrl, price}) => {
    return (
      <View style={styles.card}>
        <Image source={imageUrl} style={styles.image} alt="shoes" />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.subtitle}>{price}</Text>
      </View>
    );
  };

  return (
   
    <FlatList
    showsHorizontalScrollIndicator= {false}
      data={shoesData}
      renderItem={({item}) => (
        <Box
        width={160}
        bg="white"
        borderRadius={15}
        shadow={3}
        p={4}
        m={2}
        position="relative"
      >
        <VStack space={2}>
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
          <Text fontSize="md" fontWeight="bold">
            {item.price}
          </Text>
        </VStack>
        
        <Center
        borderTopLeftRadius={500}
        borderTopRightRadius={200}
        borderBottomLeftRadius={25}
        borderBottomRightRadius={300}
          position="absolute"
          bottom={0}
         
          right={0}
          bg="blue.500"
          borderRadius="full"
          size={8}
        >
          <Icons  name="add" size={20} color="white" />
        </Center>
      </Box>
        // <ShoesCard
        //   title={item.title}
        //   subtitle={item.subtitle}
        //   imageUrl={item.imageUrl}
        //   price={item.price}
        // />
        
      )}
      keyExtractor={item => item.id}
      horizontal
      contentContainerStyle={styles.container}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    height: 250,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    width: 180, // Adjust width as needed

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
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
