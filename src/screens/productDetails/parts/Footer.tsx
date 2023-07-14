import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useShop} from 'hooks/useShop';

import {SHOP} from 'navigations/routesNames';
import {colors} from 'theme/colors';
import {Product} from 'types/app';

const styles = StyleSheet.create({
  btnContainer: {flex: 1, alignItems: 'center'},
  btn: {
    backgroundColor: colors`colorBlack`,
    height: 48,
    width: '100%',
    maxWidth: 327,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  btnText: {
    color: colors`colorBasic100`,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  spacer: {
    height: 20,
  },
});

export const Footer = ({product, isLoading}: {isLoading: boolean; product?: Product}) => {
  const navigation = useNavigation();
  const {setProduct} = useShop();

  const addedProductToCart = () => {
    if (product) {
      setProduct(product);
      navigation.navigate(SHOP);
    }
  };

  return (
    <>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={addedProductToCart} disabled={isLoading}>
          <Text style={styles.btnText}>Add to car</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer} />
    </>
  );
};
