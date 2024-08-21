import {Box, Button, HStack, Image, Text, View, VStack} from 'native-base';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLOURS, FONTSIZE} from '../../constant/Constant';

const CheckOutScreen = ({navigation}) => {
  return (
    <View>
      <HStack justifyContent={'space-between'} p={2}>
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
          {'CheckOut'}
        </Text>
        <Text></Text>
      </HStack>
      <View style={styles.Container}>
        <Text>Contact Information</Text>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <MaterialIcons name="email" size={20} color="black"></MaterialIcons>
          <VStack>
            <Text>khaidemdenish@gmail.com</Text>
            <Text>Email</Text>
          </VStack>
          <AntDesign name="edit" size={20} color="black"></AntDesign>
        </HStack>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <MaterialIcons name="phone" size={20} color="black"></MaterialIcons>
          <VStack>
            <Text>9366304598</Text>
            <Text>Phone</Text>
          </VStack>
          <AntDesign name="edit" size={20} color="black"></AntDesign>
        </HStack>
        <Text>Address</Text>
        <Image source={require('../../../assets/images/Rectangle.png')}alt='map' width={'100%'} borderRadius={20}></Image>
      </View>
      <View style={styles.menu}>
        <VStack top={1}>
          <HStack justifyContent={'space-between'}>
            <Text fontFamily={'body'} fontSize={20}>
              SubTotal
            </Text>
            <Text>{''}</Text>
            <Text fontFamily={'body'} fontSize={20}>
              ₹ 39993
            </Text>
          </HStack>
          <HStack justifyContent={'space-between'}>
            <Text fontFamily={'body'} fontSize={20}>
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
              <Text fontFamily={'body'} fontSize={20}>
                Total Cost
              </Text>
              <Text>{''}</Text>
              <Text fontFamily={'body'} fontSize={20}>
                ₹ 39
              </Text>
            </HStack>
            <HStack></HStack>
            <Button
              top={3}
              borderRadius={30}
              bg={'#5B9EE1'}
              height={'40%'}
              _text={{fontSize: FONTSIZE.Size16, fontFamily: 'body'}}
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
  Container: {
    // flex: 1,
    padding: 15,
    backgroundColor: COLOURS.white,
  },
  menu: {
    // flex: 1,
    // height: 500,
    padding: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    overflow: 'hidden',
  },
});

export default CheckOutScreen;
