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
import React, {useState} from 'react';
import {COLOURS} from '../constant/Constant';

const BrandTypes = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const imageData = [
    {
      id: 1,
      image: require('../../assets/images/item/H.png'),
      name: 'Under Armour',
    },
    {
      id: 2,
      image: require('../../assets/images/item/nike.png'),
      name: 'Nike',
    },
    {
      id: 3,
      image: require('../../assets/images/item/puma.png'),
      name: 'Puma',
    },
    {
      id: 4,
      image: require('../../assets/images/item/adidas.png'),
      name: 'adidas',
    },
    {
      id: 5,
      image: require('../../assets/images/item/converse.png'),
      name: 'converse',
    },
    {
      id: 6,
      image: require('../../assets/images/item/puma.png'),
      name: 'Puma',
    },
  ];

  return (
    <View bottom={8}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <HStack  space={4} alignItems="center" p={2}>
        {imageData.map(brand => (
          <Pressable key={brand.id} onPress={() => setSelectedBrand(brand)}>
            <Center
              bg={
                selectedBrand?.name === brand.name ? 'blue.500' : 'white'
              }
              borderRadius="full"
              p={2}>
              <Image
                source={brand.image}
                alt={brand.name}
                size='10'
                resizeMode="contain"
                style={{
                  tintColor:
                    selectedBrand?.name === brand.name ? 'white' : 'black',
                }}></Image>
            </Center>
          </Pressable>
        ))}
      </HStack>
      </ScrollView>
     
      {/* {selectedBrand && (
        <VStack space={4} alignItems="center">
          <Text fontSize="xl" fontWeight="bold">{selectedBrand.name}</Text>
          <Image source={selectedBrand.image} alt='image'></Image>
        </VStack>
      )} */}
      {/* <FlatList
        showsHorizontalScrollIndicator={false}
        data={imageData}
        renderItem={({item}) => (
          <Pressable key={item.name} onPress={() => setSelected(item)}>
            <Box
              width={70}
              height={60}
              bg={COLOURS.white}
              borderRadius={50}
              overflow="hidden"
              justifyContent={'center'}
              alignItems={'center'}
              // shadow={5} // Adds elevation for iOS and Android
              elevation={1}>
              
              <Image
                source={item.image}
                alt="Round Image"
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  width: 50,
                  height: 30,
                  borderRadius: 40,
                  resizeMode: 'cover',
                  
                }}></Image>
            </Box>
          </Pressable>
          
        )}
        keyExtractor={item => item.id}
        horizontal
        // contentContainerStyle={styles.container}
      /> */}
    </View>
  );
};

export default BrandTypes;
