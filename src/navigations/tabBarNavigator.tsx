import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HOME, SHOP} from './routesNames';
import {Shop} from 'screens/shop/Shop';
import {HomeStackScreen} from './stacks/HomeStacks';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={HOME}>
      <Tab.Screen name={HOME} component={HomeStackScreen} options={{headerShown: false}} />
      <Tab.Screen name={SHOP} component={Shop} />
    </Tab.Navigator>
  );
};
