import {Actionsheet, Box, Button, Divider, FlatList, HStack, Image, ScrollView, Slider, Spinner, StatusBar, Text, useDisclose, View, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {fetchProductDetails} from '../../redux/reducers/ProductDetailsReducer';
import {Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOURS} from '../../constant/Constant';
import { useNavigation } from '@react-navigation/native';
import ShoesCart from '../../component/ShoesCart';
import FastImage from 'react-native-fast-image';

const ProductDetailsScreen = ({route}) => {
  const {slug} = route.params;
  const dispath = useDispatch();
  const { loading,ProductDetails} = useSelector(state => state.ProductDetails);
  const navigation = useNavigation();
  const genders = ['Men', 'Women', 'Unisex'];
  const [selectedGender, setSelectedGender] = useState('Men');
  const [selectedSize, setSelectedSize] = useState('US 5.5');
  const sizes = ['UK 4.4', 'US 5.5', 'UK 6.5', 'EU 11.5'];
  const [priceRange, setPriceRange] = useState([16, 350]);
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  useEffect(() => {
    dispath(fetchProductDetails(slug));
    console.log('Route', slug);
    console.log('ProductDetails', ProductDetails);
  }, []);
  if(loading){
    return (
      <HStack flex={1} space={2} justifyContent="center" alignContent="center">
        <Spinner size="lg">Loading</Spinner>
      </HStack>
    );
  }
  return (

    <View p={2}>
       <StatusBar backgroundColor="transparent" barStyle="light" />
      <HStack justifyContent={'space-between'} >
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
            mt={2}
            >
            <AntDesign name="left" size={20} color="black"></AntDesign>
          </Box>
        </Pressable>
        <Text top={4} fontSize={20} fontFamily={'body'} fontWeight={'bold'}>
          {"Best Product"}
        </Text>
         <Pressable 
          onPress={onOpen}>
          <Box
            bg={COLOURS.white}
            p={3}
            shadow={2}
            borderRadius={20}
            mx={2}
            mt={2}
            >
           <Ionicons  name="filter" size={20} color="black"></Ionicons>
          </Box>
        </Pressable>
        {/* <Pressable  onPress={onOpen} style={{left: 80 , top: 20}}>
        <Ionicons  name="filter" size={20} color="black"></Ionicons>
        </Pressable> */}
        
       
       
      </HStack>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
        <Box width={"100%"} paddingX={4} paddingY={2}>
        <HStack justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">Filters</Text>
            <Button variant="ghost" colorScheme="coolGray">RESET</Button>
          </HStack>
          <VStack>
          <Text fontSize="md" fontWeight="medium">Gender</Text>
          <HStack space={2}>
              {genders.map((gender) => (
                <Button
                borderRadius={20}
                  key={gender}
                  variant={selectedGender === gender ? 'solid' : 'outline'}
                  colorScheme={selectedGender === gender ? 'primary' : 'gray'}
                  onPress={() => setSelectedGender(gender)}
                >
                  {gender}
                </Button>
              ))}
            </HStack>
            <Text fontSize="md" fontWeight="medium">Size</Text>
            <HStack space={2}>
              {sizes.map((size) => (
                <Button
                borderRadius={20}
                  key={size}
                  variant={selectedSize === size ? 'solid' : 'outline'}
                  colorScheme={selectedSize === size ? 'primary' : 'gray'}
                  onPress={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </HStack>
            <Text fontSize="md" fontWeight="medium">Price</Text>
            <HStack justifyContent="space-between">
              <Text>{priceRange[0]}</Text>
              <Text>{priceRange[1]}</Text>
            </HStack>
            <Slider
              min={16}
              max={350}
              defaultValue={[16, 350]}
              value={priceRange}
              onChangeEnd={(values) => setPriceRange(values)}
            >
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb index={0} />
              <Slider.Thumb index={1} />
            </Slider>
            
          </VStack>
          <Divider my={4} />
          <Button  borderRadius={50}
          bg={COLOURS.secondary}
          height={54} onPress={onClose} >
            Apply
          </Button>
        </Box>
          
        </Actionsheet.Content>
      </Actionsheet>
     
      <FlatList
        numColumns={2}
        margin={2}
      data={ProductDetails}
      keyExtractor={item=> item.id}
      renderItem={({item})=>{
        return(
           <ScrollView>
          <Box
          
            width={160}
            bg="white"
            borderRadius={15}
            // shadow={3}
            p={3}
            m={1}
            position="relative">
            <VStack >
            <FastImage
                        style={{height: 120, width: 100}}
                        source={{uri: `${item.thumbnail}`}}></FastImage>
              {/* <Image
                source={item.thumbnail}
                alt={'prod'}
                size={100}
                resizeMode="Cover"
                alignSelf="center"
                mb={3}
              /> */}
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
             
               
              </HStack>
             
            </VStack>

           
          </Box>
          </ScrollView>
        )
      }}
      ></FlatList>
    
     
      
    </View>
  );
};

export default ProductDetailsScreen;
