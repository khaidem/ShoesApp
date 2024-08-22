import {
  Button,
  Center,
  FormControl,
  HStack,
  Icon,
  Image,
  Input,
  Pressable,
  StatusBar,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import { StyleSheet, } from 'react-native';
import GoogleImage from '../../../assets/images/google-logo.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StackActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../redux/reducers/RegisterReducer';
import { COLOURS } from '../../constant/Constant';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = props => {
  const [show, setShow] = React.useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasswor] = useState('');
  const [errors, setErrors] = React.useState({});
  const dispatch = useDispatch();
  const {loading, error, user} = useSelector(state => state.register);
  const [showPassword, setShowPassword] = useState(false);
  const isShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };
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
    if (email.trim() === undefined || email.trim() === '') {
      localError.email = 'Email is required';
    }
    setErrors(localError);
    if (success) {
      submitSigUp();
    } else {
      return success;
    }
  };

  //For SigUp Button
  const submitSigUp = () => {
    dispatch(registerUser({username, email, password}));
    console.log(username, email, password);
  };
  useEffect(()=> {
    if(user){
      props.navigation.navigate('DrawerNavigation')

    }
  }, [user,props])

  return (
    <View style={{backgroundColor: COLOURS.bg}} flex={1}>
      
     <KeyboardAwareScrollView>
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
        <FormControl isInvalid={'email' in errors}>
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
            autoCapitalize="none"
            p={2}
            placeholder="Email Address"
            fontFamily={'Poppins-Light'}
            onChangeText={email => setEmail(email)}
          />
          {'email' in errors ? (
            <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
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
            type={showPassword ? 'text': 'password'}
            InputRightElement={
              <Pressable onPress={isShowPassword}>
                <Icon
                  as={
                    <MaterialIcons
                      name={showPassword ? 'visibility' : 'visibility-off'}
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
            onChangeText={password => setPasswor(password)}
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
          onPress={() => validateForm()}>
          {loading ? 'Please wait ...' : 'SigUp'}

        </Button>
        
        {error && <Text style={{color: 'red'}}>{error}</Text>}

        {/* <Button
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
              alt={'google'}></Image>
            <Text fontFamily={'Poppins-Bold'} color={'#1A2530'}>
              {' '}
              Sign In with Google
            </Text>
          </HStack>
        </Button> */}

      
      </VStack>
     
     </KeyboardAwareScrollView>
     <Pressable
          style={{marginTop: 'auto'}}
          onPress={() => {
            props.navigation.dispatch(StackActions.replace('SigIn'));
          }}>
          <Text style={styles.formFooter}>
            Already Have an Account?{' '}
            <Text size={10} color={'#1A2530'} fontFamily={'Poppins-Bold'}>
              Sign In
            </Text>
          </Text>
        </Pressable>
     
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
    fontFamily: 'body',
  },
});

export default RegisterScreen;
