import { Input, VStack } from 'native-base'
import React from 'react'
import Icons from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {
  return (
    <VStack p={2} top={6} w="100%" space={10} alignSelf="center" height={'15%'}>
          <Input
            placeholder="Search"
            variant="filled"
            width={'100%'}
            height={"50%"}
          
            borderRadius="20"
            // py="1"
            // px="2"
            InputLeftElement={<Icons name="search" size={30} ></Icons>}
          />
        </VStack>
  )
}

export default SearchBar