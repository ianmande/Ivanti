/**
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {ProductsByCollection} from './parts/ProductsByCollections';
import {LayoutApp} from 'components/layouts/LayoutApp';
import {colors} from 'theme/colors';

const styles = StyleSheet.create({
  root: {marginTop: 20, backgroundColor: colors`colorBasic100`},
});
export const Home = () => {
  return (
    <LayoutApp style={styles.root}>
      <View>
        <ProductsByCollection collectionId="gid://shopify/Collection/429493780502" />
        <ProductsByCollection collectionId="gid://shopify/Collection/429493813270" />
        <ProductsByCollection collectionId="gid://shopify/Collection/429493846038" />
      </View>
    </LayoutApp>
  );
};
