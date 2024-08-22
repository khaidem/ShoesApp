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
import {COLOURS, FONTSIZE} from '../../constant/Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Pressable, StyleSheet} from 'react-native';

const MyCartScreen = ({navigation}) => {
  const data = [
    {
      id: 1,
      image: require('../../../assets/images/item/group2.png'),
      tittle: 'NikeClub Max',
      Price: 6.77,
      SubTotal: '2345',
    },
    {
      id: 2,
      image: require('../../../assets/images/item/group2.png'),
      tittle: 'NikeClub Max',
      Price: 6.77,
      SubTotal: '2345',
    },
    {
      id: 3,
      image: require('../../../assets/images/item/group2.png'),
      tittle: 'NikeClub Max',
      Price: 6.77,
      SubTotal: '2345',
    },
    // {
    //   id: 4,
    //   image: require('../../../assets/images/item/group2.png'),
    //   tittle: 'NikeClub Max',
    //   Price: 6.77,
    //   SubTotal: '2345',
    // },
  ];
  return (
    <View >
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
            mx={2}
            mt={2}>
            <AntDesign name="left" size={20} color="black"></AntDesign>
          </Box>
        </Pressable>
        <Text  top={2} fontSize={20} fontFamily={'body'} fontWeight={'bold'}>
          {'MY Cart'}
        </Text>
        <Text></Text>
      </HStack>
      <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          
          <HStack justifyContent={'space-between'} p={5}>
            <Box
              p={2}
              bg={COLOURS.white}
              borderRadius={15}
              // shadow={2}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Image source={require('../../../assets/images/item/group2.png')} alt="nike" size="md"></Image>
            </Box>
            <VStack right={10}>
              <Text fontSize={20} fontWeight={'bold'} fontFamily={'body'}>
                {item.tittle}
              </Text>
              <Text fontSize={20} fontFamily={'body'}>
                6.77
              </Text>
              <HStack alignItems={'center'} space={2}>
                <Button
                  // borderWidth={1}
                  bg={COLOURS.white}
                  shadow={1}
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius={30}>
                  <AntDesign name="minus" size={10}></AntDesign>
                </Button>

                <Text>1</Text>
                <Button
                  // shadow={1}
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius={50}>
                  <MaterialIcons
                    name="add"
                    size={13}
                    color="white"></MaterialIcons>
                </Button>
              </HStack>
            </VStack>
            <VStack justifyContent={'space-between'}>
              <Text>L</Text>
              <AntDesign name="delete" size={20} color="black"></AntDesign>
            </VStack>
          </HStack>
         
      

        )}></FlatList>
      </View>
     
        <View style={styles.menu}>
        <VStack top={1}>
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
          height={"37%"}
          _text={{fontSize: FONTSIZE.Size16 ,fontFamily: 'body'}}
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
  
   
  },
  menu: {
    top: 130,
    // flex: 1,
    // height: ,
    padding: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    overflow: 'hidden',
  },
});
export default MyCartScreen;
