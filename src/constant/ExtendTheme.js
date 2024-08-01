import {NativeBaseProvider, extendTheme} from 'native-base';

const theme = extendTheme({
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins-Thin',
        italic: 'Poppins-ThinItalic',
      },
      200: {
        normal: 'Poppins-ExtraLight',
        italic: 'Poppins-ExtraLightItalic',
      },
      300: {
        normal: 'Poppins-Light',
        italic: 'Poppins-LightItalic',
      },
      400: {
        normal: 'Poppins-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Poppins-Medium',
        italic: 'Poppins-MediumItalic',
      },
      600: {
        normal: 'Poppins-SemiBold',
        italic: 'Poppins-SemiBoldItalic',
      },

      700: {
        normal: 'Poppins-Bold',
        italic: 'Poppins-BoldItalic',

      },
      800: {
        normal: 'Poppins-ExtraBold',
        italic: 'Poppins-ExtraBoldItalic',
      },
      900: {
        normal: 'Poppins-Black',
        italic: 'Poppins-BlackItalic',
      },
    },
  },
  

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Poppins',
    body: 'Poppins-ExtraBold',
    mono: 'Poppins',
  },
  primaryColor: 'black',
  secondaryColor: '#707B81',
  
});
export default theme