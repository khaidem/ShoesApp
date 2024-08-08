import {useNavigation} from '@react-navigation/native';
import {Button, Flex, Image, Text, View} from 'native-base';

import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {useDispatch} from 'react-redux';
import OnbaordingReducer from '../../redux/reducers/OnbaordingReducer';





const Square = ({isLight, selected}) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? '#5B9EE1' : 'rgba(0, 0, 0, 0.3)';
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
  }
  return (
    <View
      style={{
        width: 20,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
        right: 150,
        // left:20
      }}
    />
  );
};
const skip = () => {};

const OnbaordingScreen = () => {
  const dispatch= useDispatch();
  const navigation = useNavigation();

  //For GetStarted Button
  const Next = () => (
    <View
      style={{
        marginRight: 22,
      }}>
      <Button
        onPress={() =>{
          // dispatch(OnbaordingReducer())
          navigation.navigate('SigIn')
        }}
        width={150}
        height={10}
        borderRadius={15}
        right={5}
        backgroundColor={'#5B9EE1'}>
        Get Started
      </Button>
    </View>
  );
//For Next Button
  const Done = () => (
    <Button
    onPress={()=> navigation.navigate('SigIn')}
      width={150}
      height={10}
      borderRadius={15}
      right={5}
      backgroundColor={'#5B9EE1'}>
      Next
    </Button>
  );

  // const handleNext
  return (
    <Onboarding
      bottomBarColor="#FFFFFF"
      showSkip={false}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Square}
      titleStyles={{
        color: '#1A2530',
        fontSize: 40,
        fontFamily: 'heading',
      }}
      subTitleStyles={{
        color: '#707B81',
        fontSize: 20,
        fontFamily: 'Poppins-Light',
      }}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <ImageBackground
              style={{width: '90%', height: '50%', top: 100}}
              source={require('../../../assets/images/Onbaording/NIKE.png')}>
              <Image
                alt="shoes1"
                bottom={10}
                source={require('../../../assets/images/Onbaording/shoes1.png')}
              />
            </ImageBackground>
          ),
          title: 'Start Journey With Nike',
          subtitle: 'Smart, Gorgeous & Fashionable Collection',
        },
        {
          backgroundColor: '#fff',
          image: (
            <ImageBackground
              style={{width: '90%', height: '50%', top: 100}}
              source={require('../../../assets/images/Onbaording/NIKE.png')}>
              <Image
                alt="shoes2"
                bottom={10}
                source={require('../../../assets/images/Onbaording/shoes2.png')}
              />
              <Image
                bottom={40}
                left={40}
                alt="shoes4"
                source={require('../../../assets/images/Onbaording/shoes4.png')}></Image>
            </ImageBackground>
          ),
          title: 'Follow Latest Style Shoes',
          subtitle:
            'There Are Many Beautiful And Attractive Plants To Your Room',
        },
        {
          backgroundColor: '#fff',
          image: (
            <ImageBackground
              style={{width: '90%', height: '50%', top: 100}}
              source={require('../../../assets/images/Onbaording/NIKE.png')}>
              <Image
                alt="shoes1"
                bottom={10}
                source={require('../../../assets/images/Onbaording/shoes3.png')}
              />
            </ImageBackground>
          ),
          title: 'Summer Shoes Nike 2024',
          subtitle: 'Amet Minim Lit Noders Saku',
        },
      ]}
    />
  );
};
export default OnbaordingScreen;
const style = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
