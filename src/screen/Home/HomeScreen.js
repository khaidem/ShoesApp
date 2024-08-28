import {
  Box,
  Card,
  Center,
  FlatList,
  HStack,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Spinner,
  StatusBar,
  Text,
  View,
  VStack,
  CardItem,
} from 'native-base';
import React, {useEffect} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOURS, FONTSIZE} from '../../constant/Constant';

import SearchBar from '../../component/SearchBar';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategory} from '../../redux/reducers/CategorySlice';
import {ActivityIndicator, Dimensions, StyleSheet} from 'react-native';
import {fetchProduct} from '../../redux/reducers/ProductSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FastImage from 'react-native-fast-image';
import {Rating} from 'react-native-ratings';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {categoryList, loading1} = useSelector(state => state.categories);
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
      // <View style={{ justifyContent: 'center', alignContent:"center"}}>
      <Spinner
        style={{alignContent: 'center', justifyContent: 'center', padding: 10}}
        size="lg">
        Loading
      </Spinner>
      // </View>
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
    <View style={styles.conatiner}>
     
      <ScrollView>
      <View style={styles.header}>
        {/* // For header   */}
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
              navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <Icon
              size={6}
              color={'black'}
              as={
                <MaterialCommunityIcons name="dots-grid"></MaterialCommunityIcons>
              }
            />
          </Pressable>
        </Box>
        <HStack>
          <Icon
            size={5}
            color={'#900'}
            as={<Ionicons name="location"></Ionicons>}
          />
          <Text alignItems={'center'} fontSize={15}>
            Haobam Mark
          </Text>
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
            <Icon
              size={6}
              color={'black'}
              as={<Ionicons name="bag" color="black"></Ionicons>}
            />
          </Box>
        </Pressable>
      </View>
    
      <SearchBar />
        <View>
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
                  <View style={styles.categories}>
                    <View style={styles.imageContainer}>
                      <FastImage
                        style={{
                          height: 30,
                          width: 25,
                        }}
                        source={{
                          uri: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
                        }}
                      />
                    </View>
                    <Text style={{marginLeft: 5}}>{item.name}</Text>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>

        {/* /// For Popular */}

        <View>
          <HStack mt={5} justifyContent={'space-between'}>
            <Text style={styles.styleText}>Popular Mobile</Text>
            <Text style={{fontFamily: 'body', color: 'blue'}}>See all</Text>
          </HStack>
          <FlatList
            mt={5}
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
                        type="custom"
                        //  ratingImage={WATER_IMAGE}
                        ratingColor="yellow"
                        //  ratingBackgroundColor='#c8c7c8'
                        ratingCount={item.rating}
                        imageSize={15}
                        onFinishRating={this.ratingCompleted}
                        style={{}}></Rating>
                      <Text
                        numberOfLines={1} // Limit the text to one line
                        ellipsizeMode="tail"
                        fontSize="sm">
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
          {/* //For New Arrivals */}

          <HStack mt={5} justifyContent={'space-between'}>
            <Text style={styles.styleText}>New Arrivals</Text>
            <Text style={{color: 'blue', fontSize: 15}}>See all</Text>
          </HStack>
        </View>
        <View>
          <FlatList
            mt={5}
            data={productList}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            pagingEnabled={true}
            // onScroll={handleScroll}
            renderItem={({item, index}) => {
              return (
                <View key={index.toString()} style={styles.card}>
                  <HStack alignItems={'start'}>
                    <VStack>
                      <Text style={styles.bestChoiceText}>{item.title}</Text>
                    

                      <HStack justifyContent={'space-between'}>
                        <VStack>
                        <Rating
                        type="custom"
                        //  ratingImage={WATER_IMAGE}
                        ratingColor="yellow"
                        //  ratingBackgroundColor='#c8c7c8'
                        ratingCount={item.rating}
                        imageSize={20}
                        onFinishRating={this.ratingCompleted}
                        style={{alignItems: 'flex-start'}}></Rating>
                          <Text
                            fontFamily={'body'}
                            ellipsizeMode="tail"
                            numberOfLines={1}

                            // fontWeight="bold"
                          >
                            <Text fontWeight={'bold'}>Brand Name : </Text>
                            {item.brand}
                          </Text>
                          <Text styles={styles.price}>₹{item.price}</Text>
                        </VStack>

                        <FastImage
                          style={{width: 50, height: 50, resizeMode: 'contain'}}
                          source={{uri: item.thumbnail}}></FastImage>
                      </HStack>
                    </VStack>
                  </HStack>
                </View>
              );
            }}></FlatList>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 15,
    backgroundColor: COLOURS.bg,
  },
  header: {
    marginTop: 3,

    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#5DADE2', // Blue color similar to the image
    borderRadius: 100, // Rounded corners
    
    height: 35,
  },
  categories: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5DADE2', // Blue color similar to the image
    borderRadius: 100, // Rounded corners
    paddingVertical: 8,

    paddingHorizontal: 15,
    // margin: 2,
    height: 40,
  },

  styleText: {
    fontFamily: 'body',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  imageContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
  },

  /// For Slider
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'start',

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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    ellipsizeMode: 'tail',
    numberOfLines: 1,
  },

  price: {
    fontSize: 20,

    // marginBottom: 10,
    fontWeight: 'bold',
  },
  productImage: {
    // justifyContent: 'center',
    // alignItems: 'center',
    resizeMode: 'cover',
    width: 100,
    height: 100,
    padding: 19,
  },
});
