import {
  View,
  VStack,
  FormControl,
  Input,
  Button,
  Text,
  Center,
  Icon,
  Image,
  HStack,
  Toast,
  useToast,
} from 'native-base';

import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GoogleImage from '../../../assets/images/google-logo.png';

import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../redux/reducers/LoginReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SigInScreen = pros => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = React.useState({});
  const [show, setShow] = React.useState(false);

  const isShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  const dispatch = useDispatch();
  const {loading, error, user} = useSelector(state => state.auth);
  const toast = useToast();

  //Validation
  const validateForm = () => {
    let success = true;
    setErrors({});
    let localError = {};
    if (username.trim() === undefined || username.trim() === '') {
      localError.username = 'Username is required';
      success = false;
    }
    if (password.trim() === undefined || password.trim() === '') {
      localError.password = 'Password is required';
      success = false;
    }
    setErrors(localError);
    if (success) {
      submitLogin();
    } else {
      return success;
    }
  };

  // For loginButton
  const submitLogin =async () => {
    
    
    dispatch(loginUser({username, password}));
    await AsyncStorage.setItem('token', JSON.stringify({username, password}))
    
  };
  useEffect(()=> {
    if(user){
      pros.navigation.navigate('TabNavigation')

    }
  }, [user, pros])

  return (
    <View backgroundColor={'#F8F9FA'} flex={1}>
      <VStack mx={6} space={5}>
        <Center mt={20}>
          <Text
            fontSize={'28px'}
            fontWeight={'500'}
            fontFamily={'Poppins-Bold'}
            color={'#1A2530'}>
            Hello Again !
          </Text>
          <Text
            fontWeight={'400'}
            fontFamily={'Poppins-Light'}
            fontSize={'16px'}
            color={'#707B81'}>
            Welcome Back You've Been Missed!
          </Text>
        </Center>
        <FormControl isInvalid={'username' in errors}>
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
            autoCapitalize="none"
            // value={username}
            p={2}
            placeholder="Username"
            fontFamily={'Poppins-Light'}
            onChangeText={username => setUsername(username)}
          />
          {'username' in errors ? (
            <FormControl.ErrorMessage>
              {errors.username}
            </FormControl.ErrorMessage>
          ) : null}
        </FormControl>
        <FormControl isInvalid={'password' in errors}>
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
            fontFamily={'Poppins-Light'}
            autoCapitalize="none"
            // value={password}
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
            onChangeText={password => setPassword(password)}
          />
          {'password' in errors ? (
            <FormControl.ErrorMessage>
              {errors.password}
            </FormControl.ErrorMessage>
          ) : null}
        </FormControl>
        <Button
          borderRadius={50}
          bg={'#5B9EE1'}
          height={54}
          fontFamily={'Poppins-Light'}
          onPress={() => validateForm()}>
          {loading ? 'loading..' : 'SigIN'}
        </Button>
        {error && <Text style={{color: 'red'}}>{error}</Text>}

        {/* {error && Toast.show({
          text: 'error'
        })} */}

        <Button
          borderRadius={50}
          bg={'#FFFFFF'}
          _text={{
            color: '#1A2530',
          }}
          height={54}
          onPress={() => console.log('hello world')}>
          <HStack space={2}>
            <Image
              style={{borderRadius: 20, height: 20, width: 20}}
              source={GoogleImage}
              alt={'avatar'}></Image>
            <Text color={'#1A2530'} fontFamily={'Poppins-Bold'}>
              {' '}
              Sign In with Google
            </Text>
          </HStack>
        </Button>

       
       
      

       
      </VStack>
      <TouchableOpacity
          style={{marginTop: "auto",}}
          onPress={() => {
            pros.navigation.navigate('Register');
          }}>
          <Text style={styles.formFooter}>
            Don't have an account?{' '}
            <Text size={10} color={'#1A2530'} fontFamily={'Poppins-Bold'}>
              Sign up
            </Text>
          </Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formFooter: {
    fontSize: 12,
    fontWeight: '400',
    color: '#707B81',
    textAlign: 'center',
    letterSpacing: 0.15,
    bottom: 10,
    fontFamily: 'Poppins-Light',
  },
});

export default SigInScreen;
