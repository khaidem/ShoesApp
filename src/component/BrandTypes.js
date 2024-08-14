import {Text, View} from 'native-base';
import React, {useState} from 'react';
import Animated from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

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
      {imageData.map(brand => {
        const isSelected = selectedBrand?.id === brand.id;
        return (
          <TouchableOpacity
            key={brand.id}
            onPress={() => setSelectedBrand(brand)}>
            <View
              style={[styles.brandContainer, isSelected && styles.selected]}>
              <Animated.Image
                source={brand.image}
                style={[
                  (height = '20'),
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
    backgroundColor: '#5DADE2', // Blue color similar to the image
    borderRadius: 25, // Rounded corners
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  imageContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    marginLeft: 10,
    color: '#fff', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});
