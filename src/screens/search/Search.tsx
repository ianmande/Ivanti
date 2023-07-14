import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {useQuery} from '@apollo/client';
import {RouteProp, useRoute} from '@react-navigation/native';

import {Product} from 'components/Product';

import {SEARCH_PRODUCT_BY_TITLE} from 'api/queries';
import {RootStackParamList} from 'navigations/switchNavigator';
import {colors} from 'theme/colors';
import EmptySearch from './parts/EmptySearch';

type CollectionsRouteProp = RouteProp<RootStackParamList, 'Search'>;

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors`colorBasic100`,
    flex: 1,
  },
  listContainer: {paddingLeft: 16, margin: 0},
  productStyle: {
    marginBottom: 20,
  },
});

export const Search = () => {
  const {params} = useRoute<CollectionsRouteProp>();
  const {loading, data} = useQuery(SEARCH_PRODUCT_BY_TITLE, {
    variables: {searchTerm: params?.searchTerm},
  });

  const products = data?.products.edges;

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={colors`colorBasic100`} barStyle="dark-content" />
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({item}) => (
          <Product {...item.node} featuredImage={item.node.images.edges[0].node} style={styles.productStyle} />
        )}
        keyExtractor={item => item.node.id}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={!loading ? <EmptySearch /> : null}
      />
    </SafeAreaView>
  );
};
