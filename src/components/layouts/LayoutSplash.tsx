import React from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet} from 'react-native';
import {Svg, LinearGradient, Stop, Rect} from 'react-native-svg';
import {colors} from 'theme/colors';

type LayoutSplashProps = {
  children: JSX.Element;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  gradientPosition: {
    position: 'absolute',
  },
});

const Gradient = () => (
  <Svg width="100%" height="100%" style={styles.gradientPosition}>
    <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
      <Stop offset="10%" stopColor={colors`colorBlack`} stopOpacity="1" />
      <Stop offset="100%" stopColor={colors`colorDarkGunmetal`} stopOpacity="1" />
    </LinearGradient>
    <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
  </Svg>
);

export const LayoutSplash = ({children}: LayoutSplashProps) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={colors`colorBlack`} />
      <Gradient />
      <View style={styles.root}>{children}</View>
    </SafeAreaView>
  );
};
