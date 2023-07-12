/**
 * @format
 */

import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';

import {client} from 'api/api';

import {AppSwitchNavigator} from 'navigations/switchNavigator';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppSwitchNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
