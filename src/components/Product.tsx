/**
 * @format
 */

import {useNavigation} from '@react-navigation/native';
import {PRODUCT_DETAILS} from 'navigations/routesNames';
import React from 'react';
import {View, Image, Text, StyleSheet, Pressable, ViewStyle} from 'react-native';
import {colors} from 'theme/colors';

import {Product as ProductProps} from 'types/app';

const styles = StyleSheet.create({
  root: {flex: 1, marginRight: 10, overflow: 'hidden'},
  image: {
    width: 170,
    height: 170,
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginBottom: 8,
  },
  title: {fontSize: 16, color: colors`colorBlack`},
  detailsProduct: {marginLeft: 3},
  viewText: {color: colors`colorSpanishGray`},
});

interface Props extends ProductProps {
  style?: ViewStyle;
}

export const Product = ({title, featuredImage, variants, id, style}: Props) => {
  const navigation = useNavigation();
  const amount = variants?.edges[0]?.node?.price.amount;

  return (
    <View style={[styles.root, style]}>
      <Pressable onPress={() => navigation.navigate(PRODUCT_DETAILS, {productId: id})}>
        <Image source={{uri: featuredImage.url}} style={styles.image} />
        <View style={styles.detailsProduct}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.viewText}>${amount}</Text>
        </View>
      </Pressable>
    </View>
  );
};
