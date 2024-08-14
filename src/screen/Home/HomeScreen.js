import {
  Box,
  Button,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {COLOURS, FONTSIZE} from '../../constant/Constant';

import CarouselSlider from '../../component/CarouselSlider';

import SearchBar from '../../component/SearchBar';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategory} from '../../redux/reducers/CategorySlice';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {fetchProduct} from '../../redux/reducers/ProductSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const productURl = 'https://dummyjson.com/products/category/smartphones';

const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation();
  const {loading, categoryList, error} = useSelector(state => state.categories);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());

    fetch(productURl)
      .then(response => response.json())
      .then(json => setData(json.products))
      .catch(error => console.log(error))
      .finally(setLoading(false));
  }, []);

  return (
    <View style={{backgroundColor: COLOURS.bg}} flex={1} padding={5}>
      {/* <StatusBar backgroundColor='transparent' barStyle="dark-content"/> */}
      <HStack justifyContent={'space-around'}>
        <Pressable
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <MaterialCommunityIcons
            name="dots-grid"
            size={25}
            color="#900"></MaterialCommunityIcons>
        </Pressable>

        <HStack space={2} alignItems="center">
          <Icons style={{color: 'red'}} name="location-pin" size={25} />

          <Text fontSize={15}>Haobam Mark</Text>
        </HStack>

        <Icons name="shopping-bag" size={30}></Icons>
      </HStack>

      <SearchBar />

      <FlatList
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
      {isLoading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <FlatList
        horizontal
          data={data}
          keyExtractor={({id}, index)=> id}
          renderItem={({item}) => {
            return (
              <Box
          width={160}
          bg="white"
          borderRadius={15}
          shadow={3}
          p={4}
          m={2}
          position="relative">
          <VStack space={2}>
            <Image
              source={{uri: `${item.thumbnail}`}}
              alt={'shoesImage'}
              size={100}
              resizeMode="contain"
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
            )
          }}></FlatList>
      )}

      <HStack bottom={2} justifyContent={'space-between'}>
        <Text style={{fontSize: FONTSIZE.Size16}}>New Arrivals</Text>
        <Text style={{color: 'blue'}}>Sell all</Text>
      </HStack>
      <CarouselSlider />
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
    paddingHorizontal: 10,
    height: 250,
  },
  card1: {
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
  image1: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
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
});
