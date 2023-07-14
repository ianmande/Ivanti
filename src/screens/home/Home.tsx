/**
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {LayoutApp} from 'components/layouts/LayoutApp';
import SearchBar from 'components/SearchBar';

import {ProductsByCollection} from './parts/ProductsByCollections';

import {colors} from 'theme/colors';

const styles = StyleSheet.create({
  root: {backgroundColor: colors`colorBasic100`},
});

export const Home = () => {
  return (
    <LayoutApp style={styles.root}>
      <View>
        <SearchBar />
        <ProductsByCollection collectionId="gid://shopify/Collection/429493780502" cursor={null} />
        <ProductsByCollection collectionId="gid://shopify/Collection/429493813270" cursor={null} />
        <ProductsByCollection collectionId="gid://shopify/Collection/429493846038" cursor={null} />
      </View>
    </LayoutApp>
  );
};
