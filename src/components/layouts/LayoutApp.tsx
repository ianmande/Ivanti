import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, ViewStyle} from 'react-native';
import {colors} from 'theme/colors';

type LayoutAppProps = {
  children: JSX.Element;
  style: ViewStyle;
};

export const LayoutApp = ({children, style}: LayoutAppProps) => {
  return (
    <SafeAreaView style={{backgroundColor: colors`colorBasic100`}}>
      <StatusBar backgroundColor={colors`colorBasic100`} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={style}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
