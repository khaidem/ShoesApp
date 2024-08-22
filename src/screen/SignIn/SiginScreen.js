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
import {loginUser} from '../../redux/reducers/LoginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomForm from '../../component/FormControl';
import { COLOURS } from '../../constant/Constant';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SigInScreen = pros => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = React.useState({});
  

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
  const submitLogin = async () => {
    dispatch(loginUser({username, password}));
    await AsyncStorage.setItem('token', JSON.stringify({username, password}));
  };
  useEffect(() => {
    if (user) {
      pros.navigation.navigate('DrawerNavigation');
    }
  }, [user, pros]);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
      <Center mt={20}>
          <Text
            fontSize={'28px'}
          
            fontFamily={'body'}
            fontWeight={'bold'}
            color={'#1A2530'}>
            Hello Again !
          </Text>
          <Text
            fontWeight={'400'}
            fontFamily={'body'}
            fontSize={'16px'}
            color={'#707B81'}>
            Welcome Back You've Been Missed!
          </Text>
        </Center>

        {/* //For Form */}
        <View style={styles.form}>
        <FormControl isInvalid={'username' in errors}>
          <FormControl.Label
            _text={{
              fontFamily: 'body',
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
            backgroundColor={COLOURS.white}
            
            p={2}
            placeholder="Username"
            fontFamily={'body'}
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
              fontFamily: 'body',
              fontWeight: 500,
              fontSize: 16,
              color: '#1A2530',
            }}>
            Password
          </FormControl.Label>
          <Input
            fontFamily={'body'}
            autoCapitalize="none"
            backgroundColor={COLOURS.white}
            // value={password}
            type={showPassword? 'text': 'password'}
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
            onChangeText={password => setPassword(password)}
          />
          {'password' in errors ? (
            <FormControl.ErrorMessage>
              {errors.password}
            </FormControl.ErrorMessage>
          ) : null}
        </FormControl>
        <Button
        top={3}
          borderRadius={50}
          bg={COLOURS.secondary}
          height={54}
          onPress={() => validateForm()}>
          {loading ? 'Please wait...' : 'SigIn'}

        </Button>
        </View>
          

        
       
       
        {error && <Text style={{left: 30, color: 'red'}}>{error}</Text>}

        {/* {error && Toast.show({
          text: 'error'
        })} */}
      </KeyboardAwareScrollView>
     
       

       
      
      <Pressable
        // style={{marginTop: 'auto'}}
        onPress={() => {
          pros.navigation.navigate('Register');
        }}>
        <Text style={styles.formFooter}>
          Don't have an account?{' '}
          <Text size={10} color={'#1A2530'} fontFamily={'Poppins-Bold'}>
            Sign up
          </Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1, 
   
    backgroundColor: COLOURS.background
    
  },
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formFooter: {
    fontSize: 12,
    fontWeight: '400',
    color: '#707B81',
    textAlign: 'center',
    letterSpacing: 0.15,
    // bottom: 10,
    fontFamily: 'body',
  },
});

export default SigInScreen;
