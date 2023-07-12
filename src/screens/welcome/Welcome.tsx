import React, {useLayoutEffect, useCallback} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {LayoutSplash} from 'components/layouts/LayoutSplash';

import {colors} from 'theme/colors';
import {DEVICE_WIDTH} from 'theme/dimentions';

import {HOME} from 'navigations/routesNames';
import {load, save} from 'utils/storage';
import {WELCOME_KEY} from 'config/storageKeys';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerText: {
    alignItems: 'center',
  },
  title: {
    color: colors`colorBasic100`,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 35,
  },
  subTitle: {
    color: colors`colorPaleViolet`,
    fontSize: 11,
    textAlign: 'center',
    maxWidth: 100,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: DEVICE_WIDTH * 1.08,
    left: -10,
  },
  btn: {
    backgroundColor: colors`colorBasic100`,
    height: 65,
    width: '100%',
    maxWidth: 327,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    top: -32.5,
    zIndex: 10,
  },
  btnText: {
    color: colors`colorBlack`,
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export const Welcome = () => {
  const navigation = useNavigation();

  const navigateToHome = useCallback(async () => {
    navigation.reset({
      index: 0,
      routes: [{name: HOME}],
    });
    await save(WELCOME_KEY, {isView: true});
  }, [navigation]);

  useLayoutEffect(() => {
    (async function () {
      const value = await load(WELCOME_KEY, '{isView: true}');

      if (value?.isView) {
        navigateToHome();
      }
    })();
  }, [navigateToHome]);

  return (
    <LayoutSplash>
      <View style={styles.root}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Invanti Style</Text>
          <Text style={styles.subTitle}>90s Nostalgia Gifts & Merchandise</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('assets/images/splash.png')} style={styles.image} />

          <TouchableOpacity style={styles.btn} onPress={navigateToHome}>
            <Text style={styles.btnText}>Start to buy now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutSplash>
  );
};
