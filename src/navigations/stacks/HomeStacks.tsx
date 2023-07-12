import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HOME, PRODUCT_DETAILS} from 'navigations/routesNames';

import {ProductDetails} from 'screens/productDetails/ProductDetails';
import {Home} from 'screens/home/Home';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name={HOME} component={Home} options={{headerShown: false}} />
    <HomeStack.Screen name={PRODUCT_DETAILS} component={ProductDetails} options={{headerTitle: ''}} />
  </HomeStack.Navigator>
);
