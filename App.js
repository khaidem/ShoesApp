import React from 'react'


import { NativeBaseProvider, theme } from 'native-base'
import Navigation from './src/Navigation/navigation'

import { Provider } from 'react-redux'
import { store } from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
       <NativeBaseProvider theme={theme}>
         <Navigation></Navigation>
        
    </NativeBaseProvider>
     </Provider>
   
  
   
  )
}
