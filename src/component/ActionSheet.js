import {Box, Button, Divider, HStack, Slider, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import { COLOURS } from '../constant/Constant';

const ActionSheet = ({isOpen, onClose}) => {
  const genders = ['Men', 'Women', 'Unisex'];
  const [selectedGender, setSelectedGender] = useState('Men');
  const [selectedSize, setSelectedSize] = useState('US 5.5');
  const sizes = ['UK 4.4', 'US 5.5', 'UK 6.5', 'EU 11.5'];
  const [priceRange, setPriceRange] = useState([16, 350]);
  return (
    <ActionSheet isOpen={isOpen} onClose={onClose}>
      <ActionSheet.Content>
        <Box width={'100%'} paddingX={4} paddingY={2}>
          <HStack justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">
              Filters
            </Text>
            <Button variant="ghost" colorScheme="coolGray">
              RESET
            </Button>
          </HStack>
          <VStack>
            <Text fontSize="md" fontWeight="medium">
              Gender
            </Text>
            <HStack space={2}>
              {genders.map(gender => (
                <Button
                  borderRadius={20}
                  key={gender}
                  variant={selectedGender === gender ? 'solid' : 'outline'}
                  colorScheme={selectedGender === gender ? 'primary' : 'gray'}
                  onPress={() => setSelectedGender(gender)}>
                  {gender}
                </Button>
              ))}
            </HStack>
            <Text fontSize="md" fontWeight="medium">
              Size
            </Text>
            <HStack space={2}>
              {sizes.map(size => (
                <Button
                  borderRadius={20}
                  key={size}
                  variant={selectedSize === size ? 'solid' : 'outline'}
                  colorScheme={selectedSize === size ? 'primary' : 'gray'}
                  onPress={() => setSelectedSize(size)}>
                  {size}
                </Button>
              ))}
            </HStack>
            <Text fontSize="md" fontWeight="medium">
              Price
            </Text>
            <HStack justifyContent="space-between">
              <Text>{priceRange[0]}</Text>
              <Text>{priceRange[1]}</Text>
            </HStack>
            <Slider
              min={16}
              max={350}
              defaultValue={[16, 350]}
              value={priceRange}
              onChangeEnd={values => setPriceRange(values)}>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb index={0} />
              <Slider.Thumb index={1} />
            </Slider>
          </VStack>
          <Divider my={4} />
          <Button
            borderRadius={50}
            bg={COLOURS.secondary}
            height={54}
            onPress={onClose}>
            Apply
          </Button>
        </Box>
      </ActionSheet.Content>
    </ActionSheet>
  );
};

export default ActionSheet;
