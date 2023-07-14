import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, ViewStyle} from 'react-native';
import {colors} from 'theme/colors';

type LayoutAppProps = {
  children: JSX.Element;
  style?: ViewStyle;
  footer?: JSX.Element;
};

export const LayoutApp = ({children, style = {}, footer}: LayoutAppProps) => {
  return (
    <SafeAreaView style={{backgroundColor: colors`colorBasic100`, flex: 1}}>
      <StatusBar backgroundColor={colors`colorBasic100`} barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={style}>
        {children}
      </ScrollView>
      {footer}
    </SafeAreaView>
  );
};
