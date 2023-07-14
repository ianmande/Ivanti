import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import {useQuery} from '@apollo/client';

import {Product} from '../../../components/Product';

import {CollectionData, CollectionVariables} from 'types/app';

import {GET_PRODUCTS_BY_COLLECTION} from 'api/queries';
import {ListHead} from './ListHead';
import SkeletonProduct from 'components/SkeletonProduct';

const styles = StyleSheet.create({
  root: {paddingHorizontal: 16, marginBottom: 40},
});

export const ProductsByCollection = ({collectionId}: CollectionVariables) => {
  const {data, loading} = useQuery<CollectionData, CollectionVariables>(GET_PRODUCTS_BY_COLLECTION, {
    variables: {collectionId, cursor: null},
  });

  const renderSkeleton = () => <SkeletonProduct />;

  const products = data?.collection.products.edges;

  return (
    <View style={styles.root}>
      <ListHead title={data?.collection.title ?? ''} collectionId={collectionId} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={loading ? new Array(5).fill({}) : products}
        renderItem={loading ? renderSkeleton : ({item}) => <Product {...item.node} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
