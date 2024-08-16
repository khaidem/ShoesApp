import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';

const CarouselSlider = ({images}) => {
  
    // const images = [
    //   require('../../assets/images/item/Frame.png'),
    //   require('../../assets/images/item/Frame.png'),
    // ];

  return (
    <SliderBox
      images={images}
      
    //   sliderBoxHeight={50}
      onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
    />
  );
};

export default CarouselSlider;
