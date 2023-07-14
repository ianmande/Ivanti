import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {useQuery} from '@apollo/client';
import {RouteProp, useRoute} from '@react-navigation/native';

import {Product} from 'components/Product';

import {GET_PRODUCTS_BY_COLLECTION} from 'api/queries';
import {CollectionData, CollectionVariables} from 'types/app';
import {RootStackParamList} from 'navigations/switchNavigator';
import {colors} from 'theme/colors';

type CollectionsRouteProp = RouteProp<RootStackParamList, 'Collections'>;

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

export const Collections = () => {
  const [cursor, setCursor] = useState<string | null>(null);
  const {params} = useRoute<CollectionsRouteProp>();
  const {loading, data, fetchMore} = useQuery<CollectionData, CollectionVariables>(GET_PRODUCTS_BY_COLLECTION, {
    variables: {collectionId: params?.collectionId, cursor: null},
  });

  useEffect(() => {
    setCursor(null);
  }, []);

  const products = data?.collection.products.edges;
  const pageInfo = data?.collection.products.pageInfo;
  const hasNextPage = pageInfo?.hasNextPage;

  const handleLoadMore = () => {
    if (!loading && hasNextPage && !cursor) {
      fetchMore({
        variables: {
          collectionId: params?.collectionId,
          cursor: pageInfo?.endCursor,
        },
        updateQuery: (prevData, {fetchMoreResult}) => {
          if (!fetchMoreResult) {
            return prevData;
          }

          const newEdges = fetchMoreResult.collection.products.edges;
          const newPageInfo = fetchMoreResult.collection.products.pageInfo;

          setCursor(newPageInfo.endCursor);

          return {
            collection: {
              ...prevData.collection,
              products: {
                ...prevData.collection.products,
                edges: [...prevData.collection.products.edges, ...newEdges],
                pageInfo: newPageInfo,
              },
            },
          };
        },
      });
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={colors`colorBasic100`} barStyle="dark-content" />
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <Product {...item.node} style={styles.productStyle} />}
        keyExtractor={item => item.node.id}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
        contentContainerStyle={styles.listContainer}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};
