import {
  Box,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Spinner,
  StatusBar,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOURS, FONTSIZE} from '../../constant/Constant';

import SearchBar from '../../component/SearchBar';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategory} from '../../redux/reducers/CategorySlice';
import {ActivityIndicator, Dimensions, StyleSheet} from 'react-native';
import {fetchProduct} from '../../redux/reducers/ProductSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ColorConstant from '../../constant/ColorConstant';
import {fetchSingleProduct} from '../../redux/reducers/SingleProductReducer';
import FastImage from 'react-native-fast-image';
import { Rating } from 'react-native-ratings';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {loading: loading1, categoryList} = useSelector(
    state => state.categories,
  );
  const {
    loading: loading2,
    productList,
    limit,
    skip,
    hasMore,
  } = useSelector(state => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProduct({skip, limit}));
  }, []);
  const handleLoadMore = () => {
    if (!loading2 && hasMore) {
      dispatch(fetchProduct({skip, limit}));
    }
  };
  const renderFooter = () => {
    if (!loading2) return null;
    return (
      <View style={{paddingVertical: 20}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

  if (loading1) {
    return (
      <HStack flex={1} space={2} justifyContent="center" alignContent="center">
        <Spinner size="lg">Loading</Spinner>
      </HStack>
    );
  }

  return (
    <ScrollView>
      <HStack justifyContent={'space-around'} mt={2} style={{backgroundColor: COLOURS.background}}>
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
              <MaterialCommunityIcons
                name="dots-grid"
                size={25}
                color="#900"></MaterialCommunityIcons>
            </Box>
          </Pressable>

          <HStack space={2} alignItems="center">
            <Icons style={{color: 'red'}} name="location-pin" size={25} />

            <Text fontSize={15}>Haobam Mark</Text>
          </HStack>
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
              <Ionicons name="bag" size={30} color="black"></Ionicons>
            </Box>
          </Pressable>
        </HStack>
      <VStack style={{backgroundColor: COLOURS.background}}  padding={4}>
        <StatusBar backgroundColor="transparent" barStyle="light" />

        
        <SearchBar />
        {/* For Branded */}

        <FlatList
          mt={2}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoryList}
          keyExtractor={item => item.slug}
          renderItem={({item}) => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate('ProductDetails', {
                    slug: item.slug,
                  });
                }}>
                <View style={styles.container}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{
                        uri: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
                      }} // Replace with your image URL
                      style={styles.image}
                      resizeMode="contain"
                      alt="image"
                    />
                  </View>
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              </Pressable>
            );
          }}
        />

        <HStack p={2} justifyContent={'space-between'}>
          <Text style={{fontFamily: 'body', fontWeight: 'bold'}}>
            Popular Mobile
          </Text>
          <Text style={{fontFamily: 'body', color: 'blue'}}>See all</Text>
        </HStack>
        {/* For ShoesCart */}

        <FlatList
          // bottom={10}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={productList}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => {
            return (
              <Pressable
                key={index.toString()}
                onPress={() => {
                  navigation.navigate('Details', {
                    itemId: item.id,
                  });
                }}>
                <Box
                  width={160}
                  bg="white"
                  borderRadius={15}
                  // shadow={1}
                  p={3}
                  m={1}
                  position="relative">
                  <VStack space={2} alignItems={'flex-start'}>
                    <FastImage
                      style={{height: 120, width: 100}}
                      source={{uri: `${item.thumbnail}`}}></FastImage>
                    {/* <Image
                      source={{uri: `${item.thumbnail}`}}
                      alt={'shoesImage'}
                      size={100}
                      resizeMode="cover"
                      alignSelf="center"
                      mb={3}
                    /> */}
                    <Text
                      fontFamily={'body'}
                      ellipsizeMode="tail"
                      numberOfLines={1}
                      fontSize="15"
                      color="blue.500"
                      fontWeight="bold">
                      {item.title}
                    </Text>
                    <Rating
                     type='custom'
                    //  ratingImage={WATER_IMAGE}
                     ratingColor='yellow'
                    //  ratingBackgroundColor='#c8c7c8'
                     ratingCount={item.rating}
                     imageSize={15}
                     onFinishRating={this.ratingCompleted}
                     style={{  }}
                    ></Rating>
                    <Text
                      numberOfLines={1} // Limit the text to one line
                      ellipsizeMode="tail"
                      fontSize="md"
                      fontWeight="bold">
                      {item.description}
                    </Text>
                    <Text fontSize="md" fontWeight="bold">
                      ₹{item.price}
                    </Text>
                  
                  </VStack>

                  <Center
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
                    <MaterialIcons name="add" size={20} color="white" />
                  </Center>
                </Box>
              </Pressable>
            );
          }}></FlatList>

        <HStack p={2} justifyContent={'space-between'}>
          <Text style={{fontFamily: 'body', fontWeight: 'bold'}}>
            New Arrivals
          </Text>
          <Text style={{color: 'blue'}}>See all</Text>
        </HStack>
        <FlatList
          // bottom={2}
          data={productList}
          // onEndReached={handleLoadMore}
          // onEndReachedThreshold={0.5}
          // ListFooterComponent={renderFooter}
          horizontal={true}
          keyExtractor={item => item.id}
          pagingEnabled={true}
          // onScroll={handleScroll}
          renderItem={({item, index}) => {
            return (
              <View key={index.toString()} style={styles.card}>
                <HStack justifyContent={'space-between'}>
                  <VStack alignItems={'flex-start'}>
                    <Text style={styles.bestChoiceText}>{item.title}</Text>
                    <Rating
                     type='custom'
                    //  ratingImage={WATER_IMAGE}
                     ratingColor='yellow'
                    //  ratingBackgroundColor='#c8c7c8'
                     ratingCount={item.rating}
                     imageSize={15}
                     onFinishRating={this.ratingCompleted}
                     style={{  }}
                    ></Rating>
                    <Text
                      fontFamily={'body'}
                      ellipsizeMode="tail"
                      numberOfLines={1}
                 
                      // fontWeight="bold"
                      >
                      {item.description}</Text>
                    
                    <Text styles={styles.price}>₹{item.price}</Text>
                    
                  </VStack>
                  <VStack>
                    <FastImage
                      style={styles.productImage}
                      source={{uri: item.thumbnail}}></FastImage>
                    {/* <Image
              alt="she"
              resizeMode="cover"
              style={styles.productImage}
              source={{uri: item.thumbnail}}
            /> */}
                  </VStack>
                </HStack>
              </View>
            );
          }}></FlatList>
      </VStack>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5DADE2', // Blue color similar to the image
    borderRadius: 100, // Rounded corners
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 2,
    height: 35,
  },
  imageContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 18,
  },
  text: {
    marginLeft: 10,
    color: '#fff', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },

  ///For Shoes Cart

  container1: {
    paddingHorizontal: 15,
    // height: 100,
  },
  card1: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 5,
    marginRight: 5,
    width: 20, // Adjust width as needed

    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.2,
    shadowRadius: 1,
    // elevation: 1,
  },
  image1: {
    width: 150,
    // height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  title1: {
    fontSize: FONTSIZE.Size16,
    fontWeight: 'bold',
    color: COLOURS.secondary,

    alignSelf: 'flex-start',
  },
  subtitle1: {
    fontSize: FONTSIZE.Size14,
    color: '#666',
    alignSelf: 'flex-start',
  },
  /// For Slider
  card: {
    backgroundColor: 'white',
    borderRadius: 20,

    padding: 20,

    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.1,
    shadowRadius: 1,
    // elevation: 1,
    bottom: 10,
    // justifyContent: 'space-around',
    margin: 5,
    width: 350,
  },
  bestChoiceText: {
    color: '#50C878',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    ellipsizeMode: 'tail',
    numberOfLines: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    ellipsizeMode: 'tail',
    numberOfLines: 1,
  },
  price: {
    fontSize: 18,
    // color: '#555',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
