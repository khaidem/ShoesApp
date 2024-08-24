import {
  Box,
  Button,
  Divider,
  FlatList,
  HStack,
  Image,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import {COLOURS, FONTSIZE} from '../../constant/Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Alert, Pressable, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyCartScreen = ({navigation}) => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
         
  const decrementCounter = () => {
   if (counter !== 0) {
       setCounter(counter - 1);
    }
  };
const [productList, setProduct]=useState([]);
  useEffect(()=>{
    getObject()
  })

  const getObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('cart'); // Retrieve object using the key
      const retrievedProduct = jsonValue != null ? JSON.parse(jsonValue) : null; // Parse JSON string to object
      // console.log('Retrieved product:', retrievedProduct);
      setProduct(retrievedProduct);
      // if (retrievedProduct) {
      // Alert.alert('Retrieved Product', `Title: ${retrievedProduct.title}, Price: $${retrievedProduct.price}`);
      // } else {
      //   Alert.alert('No Product Found');
      // }
    } catch (e) {
      console.error('Error retrieving object:', e);
    }
  };
  if( productList.length <0){
    return <Text>No Cart Found</Text>
  }
  return (
    <View flex={5}>
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
        <Text  top={2} fontSize={20} fontFamily={'body'} fontWeight={'bold'}>
          {'MY Cart'}
        </Text>
        <Text></Text>
      </HStack>
      <Text></Text>
    
     <FlatList
     
       ItemSeparatorComponent={() => <View style={{height: 10}} />}
        data={productList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <HStack p={2} >
           
            <Box
              padding={1}
              bg={COLOURS.white}
              borderRadius={15}
              // shadow={2}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Image source={{uri: item.thumbnail}} alt="nike" size="md"></Image>
            </Box>
            <VStack flex={1} >
              <VStack left={3}>
              <Text fontSize={15} fontWeight={'bold'} fontFamily={'body'}>
                {item.title}
              </Text>
              <Text fontSize={15} fontFamily={'body'}>
              ₹ {item.price}
              </Text>
              <HStack  space={2}>
                <Button
                onPress={decrementCounter}
                  // borderWidth={1}
                  bg={COLOURS.white}
                  p={2}
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius={30}>
                  <AntDesign name="minus" size={18}color="black" ></AntDesign>
                </Button>

                <Text>{counter}</Text>
                <Button
                onPress={incrementCounter}
                  p={2}
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius={50}
                  >
                  <MaterialIcons
                    name="add"
                    size={18}
                    color="white"></MaterialIcons>
                </Button>
              </HStack>
              </VStack>
            
             
            </VStack>
          
              
              <AntDesign name="delete" size={18} color="black"></AntDesign>
      
        
          </HStack>
        
         
      

        )}></FlatList>

 
     
        {/* /// For Menu */}
          <View style={styles.menu}>
        <VStack >
        <HStack justifyContent={'space-between'}>
            <Text fontFamily={'body'} fontSize={15} >SubTotal</Text>
            <Text>{''}</Text>
            <Text fontFamily={'body'} fontSize={20}>₹ 39993</Text>
          </HStack>
          <HStack justifyContent={'space-between'}>
            <Text fontFamily={'body'} fontSize={15}>Shopping</Text>
            <Text>{''}</Text>
            <Text fontFamily={'body'} fontSize={20}>₹ 39</Text>
          </HStack>
          <VStack top={4}>
          <View  style={{borderWidth:0.3, borderStyle:'dashed', borderRadius:1,borderColor:'black'}}></View>
          <HStack justifyContent={'space-between'}>
            <Text fontFamily={'body'} fontSize={15} fontWeight={'bold'}>Total Cost</Text>
            <Text>{''}</Text>
            <Text fontFamily={'body'} fontSize={20}>₹ 39</Text>
          </HStack>
          <HStack></HStack>
          <Button
          onPress={()=> navigation.navigate('Checkout')}
          top={3}
          borderRadius={30}
          bg={'#5B9EE1'}
          height={"40%"}
          _text={{fontSize: FONTSIZE.Size14 ,fontFamily: 'body'}}
          fontFamily={'body'}
          >
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
  // padding: 10
   
  },
  menu: {
  
    flex: -1,
    // height: ,
    padding: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    // overflow: 'hidden',
  },
});
export default MyCartScreen;
