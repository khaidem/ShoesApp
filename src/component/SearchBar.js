import {Box, Icon, Input, View, VStack} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/Feather';
import {COLOURS} from '../constant/Constant';

const SearchBar = () => {
  return (
    <Box w="100%" mt={4}>
      <Input
        borderRadius={15}
        backgroundColor={COLOURS.white}
        InputLeftElement={
          <Icon
            ml="2"
            size={5}
            color={'black'}
            as={<AntDesign name="search" color="black"></AntDesign>}
          />
        }
        placeholder="Search" // mx={4}
        // _light={{
        //   placeholderTextColor: 'blueGray.400',
        // }}
        // _dark={{
        //   placeholderTextColor: 'blueGray.50',
        // }}
      />
    </Box>
  );
  // <View  borderRadius={10}   space={10} alignSelf="center" height={'15%'}>
  //       <Input
  //         placeholder="Search"
  //         variant="filled"
  //         width={'100%'}
  //         height={50}
  //         backgroundColor={COLOURS.white}

  //         borderRadius="20"

  //         // py="1"
  //         // px="2"
  //         InputLeftElement={<AntDesign name="search"   size={20} color="black" ></AntDesign>}
  //       />
  //     </VStack>
};

export default SearchBar;
