import {
  Box,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {COLOURS} from '../constant/Constant';
import Animated from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BrandTypes = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const imageData = [
    {
      id: 1,
      image: require('../../assets/images/item/H.png'),
      name: 'Under Armour',
    },
    {
      id: 2,
      image: require('../../assets/images/item/nike.png'),
      name: 'Nike',
    },
    {
      id: 3,
      image: require('../../assets/images/item/puma.png'),
      name: 'Puma',
    },
    {
      id: 4,
      image: require('../../assets/images/item/adidas.png'),
      name: 'adidas',
    },
    {
      id: 5,
      image: require('../../assets/images/item/converse.png'),
      name: 'converse',
    },
    {
      id: 6,
      image: require('../../assets/images/item/puma.png'),
      name: 'Puma',
    },
  ];

  return (
    <View style={styles.container}>
    {imageData.map((brand) => {
      const isSelected = selectedBrand?.id === brand.id;
      return (
        <TouchableOpacity key={brand.id} onPress={() => setSelectedBrand(brand)}>
          
          <View style={[styles.brandContainer, isSelected && styles.selected]}>
            <Animated.Image
            
              source={brand.image}
              style={[
                height="20",
                styles.image,
                isSelected ? styles.selectedImage : styles.normalImage,
              ]}
            />
            {isSelected && <Text style={styles.text}>{brand.name}</Text>}
          </View>
        </TouchableOpacity>
      );
    })}
  </View>
  );
};

export default BrandTypes;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // paddingVertical: 5,
  },
  brandContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', 
    padding: 10,
    bottom: 15,
    borderRadius: 50, 
  },
  selected: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 30,
  },
  normalImage: {
    borderRadius: 30,
  },
  selectedImage: {
    borderRadius: 30,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
