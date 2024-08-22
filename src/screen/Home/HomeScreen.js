import {
  Box,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  Spinner,
  StatusBar,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {COLOURS, FONTSIZE} from '../../constant/Constant';

import {SliderBox} from 'react-native-image-slider-box';

import SearchBar from '../../component/SearchBar';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategory} from '../../redux/reducers/CategorySlice';
import {ActivityIndicator, AppState, Dimensions, StyleSheet} from 'react-native';
import {fetchProduct} from '../../redux/reducers/ProductSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ColorConstant from '../../constant/ColorConstant';
import { fetchSingleProduct } from '../../redux/reducers/SingleProductReducer';
import FastImage from 'react-native-fast-image';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {loading : loading1, categoryList, error} = useSelector(state => state.categories);
  const {loading2,productList, skip, limit, total} = useSelector(state => state.product);

  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProduct({skip: 0, limit}));
    
   
   

    // fetch(productURl)
    //   .then(response => response.json())
    //   .then(json => setData(json.products))
    //   .catch(error => console.log(error))
    //   .finally(setLoading(false));
  }, []);

  
 

  const handleScroll = event => {
    const ScrollPosition = event.nativeEvent.contentOffset.x;
    const index = ScrollPosition / screenWidth;
    setActiveIndex(index);
  };
  

  return (
    
    
    <View style={{backgroundColor: COLOURS.bg}} flex={1} padding={3}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <HStack justifyContent={'space-around'}>
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
            <Icons name="shopping-bag" size={30}></Icons>
          </Box>
        </Pressable>
      </HStack>

      <SearchBar />

      {/* For Branded */}

      <FlatList
        bottom={5}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        keyExtractor={item => item.slug}
        renderItem={({item}) => {
          return (
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
          );
        }}
      />

      <HStack p={2} bottom={12} justifyContent={'space-between'}>
        <Text style={{fontFamily: 'bold', fontWeight: 500, fontSize: 18}}>
          Popular Mobile
        </Text>
        <Text style={{color: 'blue'}}>Sell all</Text>
      </HStack>

      {/* For ShoesCart */}
     
        <FlatList
          bottom={10}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={productList}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <Pressable
              onPress={() => {
                navigation.navigate('Details', {
                  itemId: item.id
                });
              }}
              >
                 <Box
                width={160}
                bg="white"
                borderRadius={15}
                // shadow={1}
                p={3}
                m={1}
                position="relative">
                <VStack space={2}>
                  {/* <FastImage
                  style={{height: 120, width: 100 }} 
                  
                  source={{uri: `${item.thumbnail}`}}
                  ></FastImage> */}
                  <Image
                    source={{uri: `${item.thumbnail}`}}
                    alt={'shoesImage'}
                    size={100}
                    resizeMode="cover"
                    alignSelf="center"
                    mb={3}
                  />
                  <Text fontSize="xs" color="blue.500" fontWeight="bold">
                    {item.title}
                  </Text>
                  <Text fontSize="md" fontWeight="bold">
                    {item.category}
                  </Text>
                  <Text fontSize="md" fontWeight="bold">
                    {item.price}
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
    

      <HStack p={2} bottom={5} justifyContent={'space-between'}>
        <Text style={{fontFamily: 'bold', fontWeight: 500, fontSize: 18}}>
          New Arrivals
        </Text>
        <Text style={{color: 'blue'}}>Sell all</Text>
      </HStack>

      <FlatList
        bottom={2}
        data={productList}
        horizontal={true}
        keyExtractor={item => item.id}
        pagingEnabled={true}
        onScroll={handleScroll}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <HStack justifyContent={'space-between'}>
                <VStack>
                  <Text style={styles.bestChoiceText}>{item.sku}</Text>
                  <Text style={styles.productName}>{item.brand}</Text>
                  <Text styles={styles.price}>{item.price}</Text>
                </VStack>
                <VStack>

                  <FastImage
                  style={styles.productImage}
                  source={{uri: item.thumbnail}}
                  ></FastImage>
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
    </View>
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
    height: 50,
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
    height: 20,
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
    height: 150,
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
    justifyContent: 'space-around',
    margin: 5,
    width: 350,
  },
  bestChoiceText: {
    color: '#50C878',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: FONTSIZE.Size16,
    color: '#555',
    marginBottom: 10,
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
