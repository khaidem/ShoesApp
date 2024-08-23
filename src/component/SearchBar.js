import { Input, VStack } from 'native-base'
import React from 'react'
import AntDesign from 'react-native-vector-icons/Feather';
import { COLOURS } from '../constant/Constant';

const SearchBar = () => {
  return (
    <VStack top={2} borderRadius={30}  w="100%" space={10} alignSelf="center" height={'15%'}>
          <Input
            placeholder="Search"
            variant="filled"
            width={'100%'}
            height={"50%"}
            backgroundColor={COLOURS.white}
           
            borderRadius="20"
            // py="1"
            // px="2"
            InputLeftElement={<AntDesign name="search" size={20} color="black" ></AntDesign>}
          />
        </VStack>
  )
}

export default SearchBar