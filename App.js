import React from 'react';

import {NativeBaseProvider, theme} from 'native-base';


import {Provider} from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import Root from './src/router/Root';
import { persistor, store } from './src/redux/Store';


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <Root></Root>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
