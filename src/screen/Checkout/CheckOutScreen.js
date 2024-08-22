import {AlertDialog, Box, Button, HStack, Image, Text, View, VStack} from 'native-base';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLOURS, FONTSIZE} from '../../constant/Constant';

const CheckOutScreen = ({navigation}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <HStack justifyContent={'space-between'} p={2}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Box
            bg={COLOURS.white}
            p={3}
            shadow={2}
            borderRadius={20}
            // mx={2}
            // mt={2}
            >
            <AntDesign name="left" size={20} color="black"></AntDesign>
          </Box>
        </Pressable>
        <Text  top={2} fontSize={20} fontFamily={'body'} fontWeight={'bold'}>
          {'CheckOut'}
        </Text>
        <Text></Text>
      </HStack>
      <VStack p={5}>
      {/* <View style={styles.header}>
      <AntDesign name="left" size={20} color="black"></AntDesign>
        <Text style={styles.headerText}>Checkout</Text>
      </View> */}

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Contact Information</Text>

        <View style={styles.infoRow}>
        <MaterialIcons name="email" size={30} color="black"></MaterialIcons>
          <Text style={styles.infoText}>rumenhussen@gmail.com</Text>
          <AntDesign name="edit" size={30} color="black"></AntDesign>
        </View>

        <View style={styles.infoRow}>
        <MaterialIcons name="phone" size={30} color="black"></MaterialIcons>
          <Text style={styles.infoText}>+88-692-764-269</Text>
          <AntDesign name="edit" size={30} color="black"></AntDesign>
        </View>

        <Text style={styles.sectionTitle}>Address</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>
            Newhall St 36, London, 12908 - UK
          </Text>
          <AntDesign name="down" size={20} color="gray" />
        </View>

        <Image  source={require('../../../assets/images/Rectangle.png')}alt='map' width={'100%'} borderRadius={20}></Image>


        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.infoRow}>
     <Image alt='paypal' source={require('../../../assets/images/paypal.png')}></Image>
          <Text style={styles.infoText}>Paypal Card</Text>
          <AntDesign name="down" size={20} color="gray" />
        </View>
      </View>
      </VStack>
      

      {/* <View style={styles.menu}>
        <VStack top={1}>
        <HStack justifyContent={'space-between'}>
            <Text style={styles.subText}>SubTotal</Text>
            <Text>{''}</Text>
            <Text style={styles.subText}>₹ 39993</Text>
          </HStack>
          <HStack justifyContent={'space-between'}>
            <Text style={styles.subText}>Shopping</Text>
            <Text>{''}</Text>
            <Text style={styles.subText}>₹ 39</Text>
          </HStack>
          <VStack top={10}>
          <View  style={{borderWidth:0.3, borderStyle:'dashed', borderRadius:1,borderColor:'black'}}></View>
          <HStack justifyContent={'space-between'}>
            <Text style={styles.subText}>Total Cost</Text>
            <Text>{''}</Text>
            <Text style={styles.subText}>₹ 39</Text>
          </HStack>
          <HStack></HStack>
          <Button
          
          top={3}
          borderRadius={30}
          bg={'#5B9EE1'}
          height={"40%"}
          _text={{fontSize: FONTSIZE.Size16 ,fontFamily: 'body'}}
          fontFamily={'body'}
          >
         CheckOut
        </Button>
          </VStack>
          

        </VStack>

        </View> */}

      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryText}>$1250.00</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Shopping</Text>
          <Text style={styles.summaryText}>$40.90</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.totalText}>Total Cost</Text>
          <Text style={styles.totalText}>$1690.99</Text>
        </View>
        <Button
          onPress={()=> setIsOpen(!isOpen)}
          top={3}
          borderRadius={30}
          bg={'#5B9EE1'}
          height={"20%"}
          _text={{fontSize: FONTSIZE.Size16 ,fontFamily: 'body'}}
          fontFamily={'body'}
          >
         Payment
        </Button>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
        <AlertDialog.CloseButton/>
        
        <AlertDialog.Body style={{height: '100%'}}>
          <VStack alignItems={'center'}>
          <Image alt='Celebrate' source={require('../../../assets/images/celebrate.png')}></Image>
          <Text >Your Payment is Sucessful</Text>
          <Button
          onPress={()=> navigation.navigate('Home')}
          top={2}
          borderRadius={30}
          bg={'#5B9EE1'}
          // height={"23%"}
          width={"100%"}
          _text={{fontSize: FONTSIZE.Size16 ,fontFamily: 'body'}}
          fontFamily={'body'}
          >
         Back To Shopping
        </Button>
          </VStack>
        
        </AlertDialog.Body>
        </AlertDialog.Content>
        </AlertDialog>
      </View>

     
    </View>
  );
};
const styles = StyleSheet.create({

  // Container: {
  //   // flex: 1,
  //   padding: 15,
  //   backgroundColor: COLOURS.white,
  // },
  // menu: {
  //   // flex: 1,
  //   // height: 500,
  //   padding: 15,
  //   backgroundColor: 'white',
  //   overflow: 'hidden',
  //   borderTopRightRadius: 28,
  //   borderTopLeftRadius: 28,
  //   overflow: 'hidden',
  // },
  container: {
    flex: 1,
    // padding: 2,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    top: 5
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
  },
  mapImage: {
    height: 100,
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
  },
  summary: {
    backgroundColor: '#fff',
    // top: 70,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 14,
    color: 'gray',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentButton: {
    backgroundColor: '#007bff',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  paymentButtonText: {
    bg: '#5B9EE1',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    top:3, fontFamily:'body', fontSize:20
  },
  menu: {
    // top: 50,
    // flex: 1,
    // height: 500,
    padding: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    overflow: 'hidden',
  },
});

export default CheckOutScreen;
