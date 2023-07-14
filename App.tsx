/**
 * @format
 */

import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';

import {client} from 'api/api';

import {AppSwitchNavigator} from 'navigations/switchNavigator';
import {CartProvider} from 'context/cartContext';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <NavigationContainer>
          <AppSwitchNavigator />
        </NavigationContainer>
      </CartProvider>
    </ApolloProvider>
  );
}

export default App;
