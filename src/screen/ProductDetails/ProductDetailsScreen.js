import {
  Actionsheet,
  Box,
  Button,
  Divider,
  FlatList,
  HStack,
  Icon,
  Image,
  ScrollView,
  Slider,
  Spinner,
  StatusBar,
  Text,
  useDisclose,
  View,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {fetchProductDetails} from '../../redux/reducers/ProductDetailsReducer';
import {ActivityIndicator, Pressable, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOURS} from '../../constant/Constant';
import {useNavigation} from '@react-navigation/native';

import FastImage from 'react-native-fast-image';
import ActionSheet from '../../component/ActionSheet';

const ProductDetailsScreen = ({route}) => {
  const {slug} = route.params;
  const dispath = useDispatch();
  const {loading, ProductDetails, limit, skip, hasMore, error} = useSelector(
    state => state.ProductDetails,
  );
  const navigation = useNavigation();
  const genders = ['Men', 'Women', 'Unisex'];
  const [selectedGender, setSelectedGender] = useState('Men');
  const [selectedSize, setSelectedSize] = useState('US 5.5');
  const sizes = ['UK 4.4', 'US 5.5', 'UK 6.5', 'EU 11.5'];
  const [priceRange, setPriceRange] = useState([16, 350]);

  const {isOpen, onOpen, onClose} = useDisclose();

  // const {loading , ProductDetails, limit,skip,hasMore}= useSelector(state => state.products)

  useEffect(() => {
    dispath(fetchProductDetails({skip, limit}));
  }, []);
  const handleLoadMore = () => {
    if (!loading && hasMore) {
      dispath(fetchProductDetails({skip, limit}));
    }
  };
  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{paddingVertical: 20}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

  const renderItem = ({item}) => (
    <Box
      borderWidth="1"
      bg={COLOURS.white}
      borderColor="gray.200"
      borderRadius="10"
      p="3"
      m="2"
      width="45%">
      <VStack space={2}  alignItems="start">
     

          <FastImage
            style={{height: 70, width: 100}}
            source={{uri: `${item.thumbnail}`}}></FastImage>
      
        <Text fontSize="xs" color="blue.500">
          BEST SELLER
        </Text>

        
        <Text fontSize="md" fontWeight="bold">
          {item.title.substring(0,20)+"..."}
        </Text>
        <Text>₹{item.price.toFixed(2)}</Text>
      </VStack>
    </Box>
  );
if(error){
  <Text>{"Try Again"}</Text>
}
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="light" />
      <View style={styles.header}>
        <Box
          height={10}
          width={50}
          bg={'white'}
          rounded={'full'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              size={6}
              color={'black'}
              as={<AntDesign name="left"></AntDesign>}
            />
          </Pressable>
        </Box>
        <Text fontSize={20} fontFamily={'body'}>
          Favourite
        </Text>
        <Pressable
          onPress={() => {
            navigation.goBack();
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
              as={<AntDesign name="hearto"></AntDesign>}
            />
          </Box>
        </Pressable>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Box width={'100%'} paddingX={4} paddingY={2}>
              <HStack justifyContent="space-between">
                <Text fontSize="lg" fontWeight="bold">
                  Filters
                </Text>
                <Button variant="ghost" colorScheme="coolGray">
                  RESET
                </Button>
              </HStack>
              <VStack>
                <Text fontSize="md" fontWeight="medium">
                  Gender
                </Text>
                <HStack space={2}>
                  {genders.map(gender => (
                    <Button
                      borderRadius={20}
                      key={gender}
                      variant={selectedGender === gender ? 'solid' : 'outline'}
                      colorScheme={
                        selectedGender === gender ? 'primary' : 'gray'
                      }
                      onPress={() => setSelectedGender(gender)}>
                      {gender}
                    </Button>
                  ))}
                </HStack>
                <Text fontSize="md" fontWeight="medium">
                  Size
                </Text>
                <HStack space={2}>
                  {sizes.map(size => (
                    <Button
                      borderRadius={20}
                      key={size}
                      variant={selectedSize === size ? 'solid' : 'outline'}
                      colorScheme={selectedSize === size ? 'primary' : 'gray'}
                      onPress={() => setSelectedSize(size)}>
                      {size}
                    </Button>
                  ))}
                </HStack>
                <Text fontSize="md" fontWeight="medium">
                  Price
                </Text>
                <HStack justifyContent="space-between">
                  <Text>{priceRange[0]}</Text>
                  <Text>{priceRange[1]}</Text>
                </HStack>
                <Slider
                  min={16}
                  max={350}
                  defaultValue={[16, 350]}
                  value={priceRange}
                  onChangeEnd={values => setPriceRange(values)}>
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                  <Slider.Thumb index={0} />
                  <Slider.Thumb index={1} />
                </Slider>
              </VStack>
              <Divider my={4} />
              <Button
                borderRadius={50}
                bg={COLOURS.secondary}
                height={54}
                onPress={onClose}>
                Apply
              </Button>
            </Box>
          </Actionsheet.Content>
        </Actionsheet>
      </View>

      <View flex={1}>
        <FlatList
          numColumns={2}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          data={ProductDetails}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingBottom: 20,
            paddingHorizontal: 10,
          }}></FlatList>
      </View>

      {/* <FlatList
        mt={5}
        numColumns={2}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        // margin={2}
        data={ProductDetails}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Box
              width={160}
              bg="white"
              borderRadius={15}
              // shadow={3}
              p={3}
              m={1}
              position="relative">
              <VStack>
                <FastImage
                  style={{height: 120, width: 100}}
                  source={{uri: `${item.thumbnail}`}}></FastImage>

                <Text fontSize="xs" color="blue.500" fontWeight="bold">
                  BEST SELLER
                </Text>
                <Text fontSize="md" fontWeight="bold">
                  {item.title}
                </Text>

                <Text fontSize="md" fontWeight="bold">
                  Rs {item.price}
                </Text>
              </VStack>
            </Box>
          );
        }}></FlatList> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLOURS.bg,
  },
  header: {
    marginTop: 3,

    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 100,
  },
});
export default ProductDetailsScreen;
