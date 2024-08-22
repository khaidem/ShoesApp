import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Text, View} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/LoginSlice';

function CustomDrawerContent(props) {
  const state = useSelector((state)=> state);
  const dispatch =useDispatch()
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View
          flex={5}
          style={{
            height: '50%',
            width: '100%',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            alt="phto"
            source={require('../../assets/images/photo1.png')}
            style={{
              marginBottom: 12,
              height: 100,
              width: 100,

              borderRadius: 50,
            }}></Image>
          <Text
            style={{
              fontSize: 16,

              color: 'white',
            }}>
            Alison
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <DrawerItem
        onPress={()=>{
          dispatch(logout())
              props.navigation.replace('SigIn')
            
          
        }}
          icon={() => 
            <MaterialIcons name="logout" size={25} color={"white"} />
          }
          label={()=><Text style={{color: 'white'}}>SignOut</Text>}
         
        />
      </View>
    </View>
  );
}
export default CustomDrawerContent;
