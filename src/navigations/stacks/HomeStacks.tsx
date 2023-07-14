import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {ProductDetails} from 'screens/productDetails/ProductDetails';
import {Home} from 'screens/home/Home';
import {Collections} from 'screens/collections/Collections';

import {COLLECTIONS, HOME, PRODUCT_DETAILS, SEARCH} from 'navigations/routesNames';
import {Search} from 'screens/search/Search';

const HomeStack = createStackNavigator();

const styles = StyleSheet.create({
  productDetailsHead: {
    height: 25,
  },
});

export const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name={HOME} component={Home} options={{headerShown: false}} />
    <HomeStack.Screen
      name={PRODUCT_DETAILS}
      component={ProductDetails}
      options={{headerTitle: '', headerStyle: styles.productDetailsHead}}
    />
    <HomeStack.Screen name={COLLECTIONS} component={Collections} options={{headerTitle: ''}} />
    <HomeStack.Screen name={SEARCH} component={Search} options={{headerTitle: ''}} />
  </HomeStack.Navigator>
);
