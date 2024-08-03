import React, { useEffect } from 'react'


import { NativeBaseProvider, theme } from 'native-base'
import Navigation from './src/router/navigation'

import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/store'
// import { PersistGate } from 'redux-persist/integration/react'



export default function App() {


    
  
  return (
    
      <Provider store={store}>
        {/* <PersistGate loading ={null} persistor={persistor}></PersistGate> */}
      <NativeBaseProvider theme={theme}>
      
        <Navigation></Navigation>
       
   </NativeBaseProvider>
    </Provider>
    
   
   
  
   
  )
}
