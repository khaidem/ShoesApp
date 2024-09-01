import {
  Box,
  Button,
  FlatList,
  HStack,
  Icon,
  ScrollView,
  Spinner,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, Pressable, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLOURS, FONTSIZE} from '../../constant/Constant';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSingleProduct} from '../../redux/reducers/SingleProductReducer';

import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailsScreen = ({route}) => {
  const navigation = useNavigation();

  const {itemId} = route.params;
  const dispath = useDispatch();
  const {SingleProduct, loading} = useSelector(state => state.SingleProduct);

  useEffect(() => {
    dispath(fetchSingleProduct(itemId));

    console.log('ItemId', itemId);
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
      <View style={styles.header}>
        <Box
          height={10}
          width={50}
          bg={'white'}
          rounded={'full'}
          //  shadow={1}
          alignItems={'center'}
          justifyContent={'center'}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              size={6}
              color={'black'}
              as={
                <AntDesign name="left"></AntDesign>
                // <MaterialCommunityIcons name="dots-grid"></MaterialCommunityIcons>
              }
            />
          </Pressable>
        </Box>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          fontSize={15}
          fontFamily={'body'}>
          {SingleProduct?.title}
        </Text>
        <Box
          height={10}
          width={50}
          bg={'white'}
          rounded={'full'}
          //  shadow={1}
          alignItems={'center'}
          justifyContent={'center'}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              size={6}
              color={'black'}
              as={<Icons name="shopping-bag"></Icons>}
            />
          </Pressable>
        </Box>
      </View>
      <ScrollView>
        {/* /// For Image  */}
        <View alignItems={'center'}>
          <FlatList
            data={SingleProduct.images}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <FastImage
                  key={index.toString()}
                  resizeMode={FastImage.resizeMode.cover}
                  style={{width: 200, height: 200, justifyContent: 'center'}}
                  source={{uri: item}}></FastImage>
              );
            }}></FlatList>
        </View>

        {/* // For Item Image Show */}

        <View style={styles.menu}>
          <Text
            fontSize={15}
            fontFamily={'body'}
            color={COLOURS.secondary}
            fontWeight={'bold'}>
            BEST SELLER
          </Text>
          <Text fontFamily={'body'} fontSize={18} fontWeight={'bold'}>
            {SingleProduct?.title}
          </Text>
          {/* <Text fontSize={25} fontFamily={'body'}>
            {"Rating" +SingleProduct.rating}
          </Text> */}
          <Text
            fontSize={FONTSIZE.Size16}
            fontFamily={'body'}
            color={'gray.500'}>
            {SingleProduct?.description}
          </Text>

          <Text fontSize={15} fontFamily={'body'} fontWeight={'bold'}>
            Gallery
          </Text>

          {/* //For Gallery Image  */}
          <FlatList
            horizontal
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            data={SingleProduct.images}
            renderItem={({item, index}) => (
              <Box
                key={index.toString()}
                mr={2}
                bg={COLOURS.bg}
                borderRadius={10}>
                <FastImage
                  resizeMode={FastImage.resizeMode.contain}
                  style={{padding: 25, justifyContent: 'center'}}
                  source={{uri: item}}></FastImage>
                {/* <Image
                    source={{uri: item}}
                    alt="shoes"
                    height={20}
                    width={60}></Image> */}
              </Box>
            )}></FlatList>

          {/* </VStack> */}

          <Text fontSize={15} fontFamily={'body'} fontWeight={'bold'}>
            Dimensions
          </Text>

          <Text fontSize={FONTSIZE.Size16} fontFamily={'body'}>
            <Text fontSize={13} fontFamily={'body'}>
              {'Width :' + SingleProduct.dimensions?.width}
            </Text>
          </Text>
          <Text fontSize={FONTSIZE.Size16} fontFamily={'body'}>
            <Text fontSize={13} fontFamily={'body'}>
              {'Height :' + SingleProduct.dimensions?.height}
            </Text>
          </Text>
          <Text fontSize={FONTSIZE.Size16} fontFamily={'body'}>
            <Text fontSize={13} fontFamily={'body'}>
              {'Depth :' + SingleProduct.dimensions?.depth}
            </Text>
          </Text>

          <Text fontSize={FONTSIZE.Size16} fontFamily={'body'}>
            Price
          </Text>
          <HStack justifyContent={'space-between'}>
            <Text fontSize={25} fontFamily={'body'}>
              {'₹' + SingleProduct?.price}
            </Text>

            <Button
              onPress={async () => {
                try {
                  let cartList = [];
                  const data = await AsyncStorage.getItem('cart');
                  cartList = (await JSON.parse(data)) || [];
                  cartList.push(SingleProduct);
                  const jsonValue = JSON.stringify(cartList);
                  await AsyncStorage.setItem('cart', jsonValue);
                  Alert.alert('Success', 'Product Save Successfully');
                } catch (error) {
                  console.log(error);
                }
                navigation.navigate('MyCart');
              }}
              bg={COLOURS.secondary}
              width={120}
              height={50}
              borderRadius={25}>
              Add To Cart
            </Button>
          </HStack>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 3,

    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 100,
    padding: 10,
  },

  menu: {
    marginTop: 130,

    padding: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    overflow: 'hidden',
  },
});
export default DetailsScreen;
