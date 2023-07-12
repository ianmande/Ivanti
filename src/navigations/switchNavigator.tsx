/**
 * @format
 *
 */

import React from 'react';

import {Welcome} from 'screens/welcome/Welcome';

import {StackRoot} from './router';
import {HOME, WELCOME} from './routesNames';
import {TabNavigator} from './tabBarNavigator';

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: {productId: string};
};

export const AppSwitchNavigator = () => (
  <StackRoot.Navigator initialRouteName={WELCOME}>
    <StackRoot.Screen name={WELCOME} component={Welcome} options={{headerShown: false}} />
    <StackRoot.Screen name={HOME} component={TabNavigator} options={{headerShown: false}} />
  </StackRoot.Navigator>
);
