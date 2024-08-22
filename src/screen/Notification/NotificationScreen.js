import {
  Box,
  Button,
  FlatList,
  HStack,
  Image,
  Text,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Pressable} from 'react-native';
import {COLOURS} from '../../constant/Constant';

const NotificationScreen = ({navigation}) => {
  const data = [
    {
      id: 1,
      image: require('../../../assets/images/item/group2.png'),
      tittle: 'We have new ',
      Price: "Rs 7",
      SubTotal: '2345',
      min: 29
    },
    {
      id: 2,
      image: require('../../../assets/images/item/group2.png'),
      tittle: 'We have new',
      Price: "Rs 5",
      SubTotal: '2345',
      min: 6
    },
 
  ];
  const yesterDay =[
    {
        id: 1,
        image: require('../../../assets/images/item/group2.png'),
        tittle: 'We have new',
        Price: "Rs 6.77",
        min: 10
        
        
      },
      {
        id: 2,
        image: require('../../../assets/images/item/group2.png'),
        tittle: 'We have new',
        Price: "Rs 70",
        SubTotal: '2345',
        min: 29
      },
  ]
  return (
    <View p={2}>
      <VStack>
        <HStack justifyContent={'space-between'}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Box
              bg={COLOURS.white}
              p={3}
              shadow={2}
              borderRadius={20}
              mx={2}
              mt={2}>
              <AntDesign name="left" size={20} color="black"></AntDesign>
            </Box>
          </Pressable>
          <Text top={2} fontSize={20} fontFamily={'body'} fontWeight={'bold'}>
            {'Notification'}
          </Text>
          <Text
            top={2}
            fontSize={15}
            fontFamily={'body'}
            color={COLOURS.secondary}>
            ClearALL
          </Text>
        </HStack>

        {/* For Today */}
        <HStack p={3}>
          <Text fontSize={20} fontWeight={'bold'} fontFamily={'body'}>
            Today
          </Text>
        </HStack>
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <HStack justifyContent={'space-between'} p={5}>
                <Box
                  p={2}
                  bg={COLOURS.white}
                  borderRadius={15}
                //   shadow={2}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between">
                  <Image
                    source={require('../../../assets/images/item/group2.png')}
                    alt="nike"
                    size="md"></Image>
                </Box>
                <VStack right={5}>
                  <VStack>
                    <Text fontSize={20} fontWeight={'bold'} fontFamily={'body'}>
                      {item.tittle}
                    </Text>
                  </VStack>

                  <Text fontSize={18} fontFamily={'body'}>
                    {item.Price}
                  </Text>
                </VStack>
                <VStack justifyContent={'space-between'}>
                  <Text>{item.min}minus</Text>
                  <Box
                    width="16px"
                    height="16px"
                    borderRadius="8px"
                    backgroundColor="teal.400"
                    borderWidth={1}
                    borderColor="coolGray.300"
                  />
                </VStack>
              </HStack>
            )}></FlatList>

            {/* For  YesterDay */}
          <HStack p={3}>
            <Text fontSize={20} fontWeight={'bold'} fontFamily={'body'}>
              YesterDay
            </Text>
          </HStack>
          <FlatList
        data={yesterDay}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          
          <HStack justifyContent={'space-between'} p={5}>
            <Box
              p={2}
              bg={COLOURS.white}
              borderRadius={15}
            //   shadow={2}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Image source={require('../../../assets/images/Notification/shoes1.png')} alt="nike" size="md"></Image>
            </Box>
            <VStack right={5}>
                <VStack>
                <Text fontSize={20} fontWeight={'bold'} fontFamily={'body'}>
                {item.tittle}
              </Text>
                </VStack>
            
              <Text fontSize={18} fontFamily={'body'}>
                {item.Price}
              </Text>
              
            </VStack>
            <VStack justifyContent={'space-between'}>
              <Text>{item.min} minus</Text>
              <Box
                  width="16px"
                  height="16px"
                  borderRadius="8px"
                  backgroundColor="teal.400"
                  borderWidth={1}
                  borderColor="coolGray.300"
                />
            </VStack>
          </HStack>
         
      

        )}></FlatList>
        </View>
      </VStack>
    </View>
  );
};

export default NotificationScreen;
