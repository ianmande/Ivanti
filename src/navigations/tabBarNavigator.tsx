import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HOME, SHOP} from './routesNames';
import {Shop} from 'screens/shop/Shop';

import {HomeStackScreen} from './stacks/HomeStacks';

import ShoppingCartIcon from 'assets/icons/ShoppingCartIcon';
import HomeIconOutline from 'assets/icons/HomeIconOutline';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={HOME}>
      <Tab.Screen
        name={HOME}
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <HomeIconOutline width={size} height={size} color={color} />,
        }}
      />
      <Tab.Screen
        name={SHOP}
        component={Shop}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <ShoppingCartIcon width={size} height={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
