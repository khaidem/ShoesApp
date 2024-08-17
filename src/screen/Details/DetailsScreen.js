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
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLOURS, FONTSIZE} from '../../constant/Constant';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSingleProduct} from '../../redux/reducers/SingleProductSlice';

const DetailsScreen = ({route}) => {
  const data = [
    {id: '1', src: require('../../../assets/images/Gallery/gallery1.png')},
    {id: '2', src: require('../../../assets/images/Gallery/gallery2.png')},
    {id: '3', src: require('../../../assets/images/Gallery/gallery3.png')},
  ];

  const sizes = [38, 39, 40, 41, 42, 43];
  const [selectedSize, setSelectedSize] = useState(null);
  const navigation = useNavigation();

  const {itemId} = route.params;
  const dispath = useDispatch();
  const users = useSelector(
    state => state.items
  );
  useEffect(() => {
    dispath(fetchSingleProduct(itemId));
    console.log(users);
    console.log('ItemId', itemId)
  },[dispath]);

  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <VStack>
        <Text>{item.stock}</Text>

        <Text>itemId: {JSON.stringify(itemId)}</Text>
      </VStack>
        )  
      }}
      
    />

    // <View style={styles.container}>
    //   <HStack padding={2} justifyContent={'space-between'}>
    //     <Pressable onPress={()=>{navigation.goBack()}}>
    //     <Box

    //       bg={COLOURS.white}
    //       p={4}
    //       shadow={2}
    //       borderRadius={20}
    //       mx={2}
    //       mt={2}>
    //       <AntDesign name="left" size={20} color="black"></AntDesign>
    //     </Box>
    //     </Pressable>

    //     <Text fontSize={20} fontFamily={'body'}>
    //       Men's Shoes
    //     </Text>
    //     <Box
    //       bg={COLOURS.white}
    //       p={4}
    //       shadow={2}
    //       borderRadius={20}
    //       mx={2}
    //       mt={2}>
    //       <Icons name="shopping-bag" size={20}></Icons>
    //     </Box>
    //   </HStack>
    //   <View style={styles.header}>
    //     <Image
    //       alt="Shoes"
    //       source={require('../../../assets/images/Imag.png')}></Image>
    //   </View>
    //   <View style={styles.menu}>
    //     <VStack>
    //       <Text fontSize={20} fontFamily={'body'} color={COLOURS.secondary}>
    //         BEST SELLER
    //       </Text>
    //       <Text fontFamily={'body'} fontSize={25}>
    //         Nike Air Jordan{' '}
    //       </Text>
    //       <Text fontSize={25} fontFamily={'body'}>
    //         Price
    //       </Text>
    //       <Text fontSize={FONTSIZE.Size16} fontFamily={'body'}>
    //         Ar Jordan is an American brand of basketball shoes athletic, casual
    //         and style clothing produced by Nike
    //       </Text>

    //       <VStack space={5}>
    //         <Text fontSize={25} fontFamily={'body'}>
    //           Gallery
    //         </Text>
    //         <FlatList
    //           horizontal
    //           keyExtractor={item => item.id}
    //           showsHorizontalScrollIndicator={false}
    //           data={data}
    //           renderItem={({item}) => (
    //             <Box mr={3} bg={COLOURS.bg} borderRadius={20}>
    //               <Image
    //                 source={item.src}
    //                 alt="shoes"
    //                 borderRadius={15}></Image>
    //             </Box>
    //           )}></FlatList>
    //       </VStack>
    //     </VStack>
    //     <HStack justifyContent={'space-between'}>
    //       <Text fontSize={25} fontFamily={'body'}>Size</Text>
    //       <Text  fontSize={15} fontFamily={'body'}>EU US UK</Text>
    //     </HStack>
    //     <HStack >
    //       <FlatList
    //       horizontal
    //       data={sizes}
    //       keyExtractor={(item)=> item.toString()}
    //       renderItem={({item})=>{
    //         const isSelected = item ==selectedSize;
    //         return(
    //           <Pressable onPress={()=> setSelectedSize(item)}>
    //             <Box bg={isSelected? "blue.500": "gray.100"} borderRadius={'full'}
    //             p={4}
    //             mr={3}
    //             alignItems={'center'}
    //             justifyContent={'center'}
    //             shadow={isSelected? 3:0}
    //             >
    //               <Text color={isSelected? 'white':"gray.500"}>{item}</Text>

    //             </Box>
    //           </Pressable>
    //         )
    //       }}
    //       ></FlatList>

    //     </HStack>
    //     <HStack justifyContent={'space-between'} top={5}>
    //       <VStack>
    //         <Text fontSize={14} fontFamily={'body'}>Price</Text>
    //         <Text fontSize={25} fontFamily={'body'}>$2233</Text>
    //       </VStack>
    //       <Button bg={COLOURS.secondary} width={120} height={50} borderRadius={25}>Add To Cart</Button>
    //     </HStack>
    //   </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    overflow: 'hidden',
  },
});
export default DetailsScreen;
