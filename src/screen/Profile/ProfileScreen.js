import {HStack, Image, Text, View, VStack} from 'native-base';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomForm from '../../component/FormControl';

const ProFileScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <View padding={10}>
        <HStack justifyContent={'space-between'}>
        <AntDesign name="left" size={20}  color="#900"  ></AntDesign>
         <Text>Profile</Text>
          <AntDesign name="edit" size={20}  color="blue"  ></AntDesign>
        </HStack>
      <VStack justifyContent={'center'} alignItems={'center'} top={10}>
      
      
        <Image
          alt="PhotoPerson"
          source={require('../../../assets/images/photo1.png')} size={100}></Image>
        <Text>Allision Becker</Text>
        <CustomForm
          placeholder={'Full Name'}
          formLabel={'Full Name'}
          setValue={setFullName}
        />
         <CustomForm
         
          placeholder={'Enter Email'}
          formLabel={'Email'}
          setValue={setEmail}
        />
      </VStack>
    </View>
  );
};

export default ProFileScreen;
