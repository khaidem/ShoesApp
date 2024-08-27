import {
  Box,
  Button,
  Divider,
  FlatList,
  HStack,
  Image,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {COLOURS, FONTSIZE} from '../../constant/Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Alert, Pressable, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyCartScreen = ({navigation}) => {
  const [productList, setProduct] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    getObject();
  });

  const getObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('cart');
      retrievedProduct = JSON.parse(jsonValue);
      // const retrievedProduct = jsonValue != null ? JSON.parse(jsonValue) : null;
      // console.log('Retrieved product:', retrievedProduct);
      setProduct(retrievedProduct);
   
    } catch (e) {
      console.error('Error retrieving object:', e);
    }
  };
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    if (counter !== 0) {
        setCounter(counter - 1);
     }
   };
  const handleIncrease = id => {
    let items = [...productList];
    let quantity = items.map((value, key) => {
      if (value.id === id) {
        qty =+ value.minimumOrderQuantity + 1;
        return {...value, minimumOrderQuantity: qty};
      } else {
        return value;
      }
    });
    console.log("Change",quantity);
    return setProduct(quantity);
  };
  const handleDecrease = id => {
    let items = [...productList];
    let quantity = items.map((value, key) => {
      if (value.id === id) {
        qty = +value.minimumOrderQuantity + 1;
        return {...value, minimumOrderQuantity: qty};
      } else {
        return value;
      }
    });
    console.log(id);
    return setProduct(quantity);
  };

  const deletContact = async index => {
    const tempData = productList;
    const selectdata = tempData.filter((item, ind) => {
      return ind !== index;
    });
    setProduct(selectdata);
    await AsyncStorage.setItem('cart', JSON.stringify(selectdata));
  };
  // if( productList == null ){
  //   return <Text>No Cart Found</Text>
  // }
  return (
    <View style={styles.container}>
      <HStack justifyContent={'space-between'} p={2}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Box
            bg={COLOURS.white}
            p={3}
            shadow={2}
            borderRadius={20}
            // mx={2}
            // mt={2}
          >
            <AntDesign name="left" size={20} color="black"></AntDesign>
          </Box>
        </Pressable>
        <Text top={2} fontSize={20} fontFamily={'body'} fontWeight={'bold'}>
          {'MY Cart'}
        </Text>
        <Text></Text>
      </HStack>
      <Text></Text>

      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        data={productList}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
         
            <HStack key={index.toString()} mx={5}>
            <Box
              padding={1}
              bg={COLOURS.white}
              borderRadius={15}
              // shadow={2}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Image
                source={{uri: item.thumbnail}}
                alt="nike"
                size="md"></Image>
            </Box>
            <VStack flex={4}>
              <VStack left={3}>
                <Text fontSize={15} fontWeight={'bold'} fontFamily={'body'}>
                  {item.title}
                </Text>
                <Text fontSize={15} fontFamily={'body'}>
                  ₹ {item.price}
                </Text>
                <HStack space={2}>
                  <Button
                    onPress={() => decrementCounter()}
                    // borderWidth={1}
                    bg={COLOURS.white}
                    p={2}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={30}>
                    <AntDesign name="minus" size={18} color="black"></AntDesign>
                  </Button>

                  <Text>{item.minimumOrderQuantity}</Text>
                  <Button
                    onPress={() => handleIncrease(item.id)}
                    p={2}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={50}>
                    <MaterialIcons
                      name="add"
                      size={18}
                      color="white"></MaterialIcons>
                  </Button>
                </HStack>
              </VStack>
            </VStack>
            <Pressable
              onPress={() => {
                deletContact(index);
              }}>
              <AntDesign name="delete" size={18} color="black"></AntDesign>
            </Pressable>
          </HStack>
          
          
        )}></FlatList>

      {/* /// For Menu */}
      <View style={styles.menu}>
        <VStack pb={2}>
          <HStack justifyContent={'space-between'}>
            <Text fontFamily={'body'} fontSize={15}>
              SubTotal
            </Text>
            <Text>{''}</Text>
            <Text fontFamily={'body'} fontSize={20}>
              ₹ 39993
            </Text>
          </HStack>
          <HStack justifyContent={'space-between'}>
            <Text fontFamily={'body'} fontSize={15}>
              Shopping
            </Text>
            <Text>{''}</Text>
            <Text fontFamily={'body'} fontSize={20}>
              ₹ 39
            </Text>
          </HStack>
          <VStack top={4}>
            <View
              style={{
                borderWidth: 0.3,
                borderStyle: 'dashed',
                borderRadius: 1,
                borderColor: 'black',
              }}></View>
            <HStack justifyContent={'space-between'}>
              <Text fontFamily={'body'} fontSize={15} fontWeight={'bold'}>
                Total Cost
              </Text>
              <Text>{''}</Text>
              <Text fontFamily={'body'} fontSize={20}>
                ₹ 39
              </Text>
            </HStack>
            <HStack></HStack>
            <Button
              onPress={() => {
                AsyncStorage.removeItem('cart');
                navigation.navigate('Checkout');
              }}
            
              borderRadius={30}
              bg={'#5B9EE1'}
              // height={'40%'}
              _text={{fontSize: FONTSIZE.Size14, fontFamily: 'body'}}
              fontFamily={'body'}>
              CheckOut
            </Button>
          </VStack>
        </VStack>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menu: {
    bottom:25,
    marginVertical: 2,
    left: 0,
    right: 0,
    position: 'absolute',
 
    padding: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    // overflow: 'hidden',
  },
});
export default MyCartScreen;
