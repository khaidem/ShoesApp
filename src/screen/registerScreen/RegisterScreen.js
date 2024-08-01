import { Button, Center, FormControl, HStack, Icon, Image, Input, Text, View, VStack } from 'native-base'
import React from 'react'
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import GoogleImage from '../../../assets/images/google-logo.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StackActions } from '@react-navigation/native';



const RegisterScreen = props => {
  const [show, setShow] = React.useState(false);
 
  return (
    <View backgroundColor={'F8F9FA'} flex={1}>
    <VStack mx={6} space={5}>
      <Center mt={20}>
        <Text
          fontSize={'28px'}
          fontWeight={'500'}
          fontFamily={'Poppins-Bold'}
          color={'#1A2530'}>
          Create Account !
        </Text>
        <Text
          fontWeight={'400'}
          fontFamily={'Poppins-Light'}
          fontSize={'16px'}
          color={'#707B81'}>
          Let's Create Account Together
        </Text>
      </Center>
      <FormControl>
        <FormControl.Label
          _text={{
            fontFamily: 'Poppins-Bold',
            fontWeight: 500,
            fontSize: 16,
            color: '#1A2530',
          }}>
          Username
        </FormControl.Label>
        <Input
          variant="rounded"
          p={2}
          placeholder="Username"
          fontFamily={'Poppins-Light'}
         
        />
      </FormControl>
      <FormControl>
        <FormControl.Label
          _text={{
            fontFamily: 'Poppins-Bold',
            fontWeight: 500,
            fontSize: 16,
            color: '#1A2530',
          }}>
          Email Address
        </FormControl.Label>
        <Input
          variant="rounded"
          p={2}
          placeholder="Email Address"
          fontFamily={'Poppins-Light'}
        
        />
      </FormControl>
      <FormControl>
        <FormControl.Label
          _text={{
            fontFamily: 'Poppins-Bold',
            fontWeight: 500,
            fontSize: 16,
            color: '#1A2530',
          }}>
          Password
        </FormControl.Label>
        <Input
          color={'white'}
          fontFamily={'Poppins-Light'}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? 'visibility' : 'visibility-off'}
                  />
                }
                size={5}
                mr="2"
                color="black"></Icon>
            </Pressable>
          }
          variant="rounded"
          p={2}
          placeholder={'*******'}
        />
      </FormControl>
      <Button
        borderRadius={50}
        bg={'#5B9EE1'}
        height={54}
        
        onPress={() => console.log('hello world')}>
        Sign In
      </Button>
      <Button
        borderRadius={50}
        bg={'#FFFFFF'}
        _text={{
          color: '#1A2530',
        }}
        height={54}
        onPress={() => console.log('hello world')}>
        <HStack space={2}>
          <Image style={{borderRadius: 20, height: 20, width: 20}} source={GoogleImage} alt={'google'}></Image>
          <Text fontFamily={'Poppins-Bold'} color={'#1A2530'}> Sign In with Google</Text>
        </HStack>
      </Button>

      <TouchableOpacity style={{marginTop: 'auto'}}
      onPress={()=> {
        props.navigation.dispatch(StackActions.replace('SigIn'));
      }}
      >
        <Text style={styles.formFooter}>
        Already Have an Account?{' '}
          <Text size={10} color={'#1A2530'} fontFamily={'Poppins-Bold'}>
            Sign In
          </Text>
        </Text>
      </TouchableOpacity>
    </VStack>
  </View>
  )
}

const styles = StyleSheet.create({
  formFooter: {
    fontSize: 12,
    fontWeight: '400',
    color: '707B81',
    textAlign: 'center',
    letterSpacing: 0.15,
    top: 140,
    fontFamily: 'Poppins-Light',
  },
});

export default RegisterScreen