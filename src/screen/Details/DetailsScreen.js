import {
  Box,
  Button,
  FlatList,
  HStack,
 
  Spinner,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLOURS, FONTSIZE} from '../../constant/Constant';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSingleProduct} from '../../redux/reducers/SingleProductReducer';

import FastImage from 'react-native-fast-image';

const DetailsScreen = ({route}) => {


  const sizes = [38, 39, 40, 41, 42, 43];
  const [selectedSize, setSelectedSize] = useState(null);
  const navigation = useNavigation();

  const {itemId} = route.params;
  const dispath = useDispatch();
  const {SingleProduct, loading} = useSelector(state => state.SingleProduct);

  useEffect(() => {
    dispath(fetchSingleProduct(itemId));

    console.log('ItemId', SingleProduct);
  }, []);
  if (loading) {
    return (
      <HStack flex={1} space={2} justifyContent="center" alignContent="center">
        <Spinner size="lg">Loading</Spinner>
      </HStack>
    );
  }
  return (
    <View style={styles.container}>
      <HStack padding={2} justifyContent={'space-between'}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Box
            bg={COLOURS.white}
            p={2}
            shadow={2}
            borderRadius={20}
            mx={2}
            mt={2}>
            <AntDesign name="left" size={20} color="black"></AntDesign>
          </Box>
        </Pressable>

        <Text fontSize={20} fontFamily={'body'}>
          {SingleProduct?.title}
        </Text>
        <Box
          bg={COLOURS.white}
          p={2}
          shadow={2}
          borderRadius={20}
          mx={2}
          mt={2}>
          <Icons name="shopping-bag" size={20} color="black"></Icons>
        </Box>
      </HStack>

      {/* // For Item Image Show */}
      <HStack justifyContent={'space-around'}>
        <Pressable style={{top: 10,left: 40}}>
          {/* <AntDesign name="left" size={20} color="black"></AntDesign> */}
        </Pressable>

        <FlatList
          data={SingleProduct.images}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.header}>
                <FastImage
                 resizeMode={FastImage.resizeMode.cover}
                  style={{height: 170, width: 100}}
                  source={{uri: item}}></FastImage>

              
              </View>
            );
          }}></FlatList>
          <Pressable style={{top: 10,right: 40}}>
          {/* <AntDesign name="right" size={20} color="black"></AntDesign> */}
          </Pressable>
      
      </HStack>

      <View style={styles.menu}>
        <VStack>
          <Text fontSize={20} fontFamily={'body'} color={COLOURS.secondary} fontWeight={'bold'}>
            BEST SELLER
          </Text>
          <Text fontFamily={'body'} fontSize={25}>
            {SingleProduct?.title}
          </Text>
          {/* <Text fontSize={25} fontFamily={'body'}>
            {"Rating" +SingleProduct.rating}
          </Text> */}
          <Text fontSize={FONTSIZE.Size16} fontFamily={'body'} color={'gray.500'}>
            {SingleProduct?.description}
          </Text>

          <VStack top={1}>
            <Text fontSize={20} fontFamily={'body'}>
              Gallery
            </Text>

            {/* //For Gallery Image  */}
            <FlatList
              horizontal
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              data={SingleProduct.images}
              renderItem={({item}) => (
                <Box mr={2} bg={COLOURS.bg} borderRadius={10}>
                  <FastImage
                   resizeMode={FastImage.resizeMode.contain}
                    style={{padding:20}}
                    source={{uri: item}}></FastImage>
                  {/* <Image
                    source={{uri: item}}
                    alt="shoes"
                    height={20}
                    width={60}></Image> */}
                </Box>
              )}></FlatList>
          </VStack>
        </VStack>
        <HStack top={5} justifyContent={'space-between'}>
          <Text fontSize={20} fontFamily={'body'}>
            Dimensions
          </Text>
        </HStack>
        <VStack top={5}>
        <Text fontSize={FONTSIZE.Size16} fontFamily={'body'}>
            <Text fontSize={15} fontFamily={'body'}>
              {'Width :' + SingleProduct.dimensions?.width}
            </Text>
          </Text>
          <Text fontSize={FONTSIZE.Size16} fontFamily={'body'}>
            <Text fontSize={15} fontFamily={'body'}>
              {'Height :' + SingleProduct.dimensions?.height}
            </Text>
          </Text>
          <Text fontSize={FONTSIZE.Size16} fontFamily={'body'}>
            <Text fontSize={15} fontFamily={'body'}>
              {'Depth :' + SingleProduct.dimensions?.depth}
            </Text>
          </Text>
        </VStack>
        <HStack top={5} justifyContent={'space-between'}>
         
         
         
      
          {/* <FlatList
            horizontal
            data={sizes}
            keyExtractor={item => item.toString()}
            renderItem={({item}) => {
              // const isSelected = item == selectedSize;
              return (
                <Pressable onPress={() => setSelectedSize(item)}>
                  <Box
                    bg={isSelected ? 'blue.500' : 'gray.100'}
                    borderRadius={'full'}
                    p={4}
                    mr={3}
                    alignItems={'center'}
                    justifyContent={'center'}
                    shadow={isSelected ? 3 : 0}>
                    <Text color={isSelected ? 'white' : 'gray.500'}>
                      {item}
                    </Text>
                  </Box>
                </Pressable>
              );
            }}></FlatList> */}
        </HStack>
        <HStack justifyContent={'space-between'} top={10}>
          <VStack>
            <Text fontSize={FONTSIZE.Size16} fontFamily={'body'}>
              Price
            </Text>
            <Text fontSize={25} fontFamily={'body'}>
              {'₹' + SingleProduct?.price}
            </Text>
          </VStack>
          <Button
          onPress={()=> navigation.navigate('MyCart')}
            bg={COLOURS.secondary}
            width={120}
            height={50}
            borderRadius={25}>
            Add To Cart
          </Button>
        </HStack>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    left: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    flex: 20,
    padding: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    overflow: 'hidden',
  },
});
export default DetailsScreen;
