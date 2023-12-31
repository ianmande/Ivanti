/**
 * @format
 */

import React from 'react';
import {View, StyleSheet, FlatList, Image, Text} from 'react-native';
import {useQuery} from '@apollo/client';
import {RouteProp, useRoute} from '@react-navigation/native';

import {LayoutApp} from 'components/layouts/LayoutApp';
import {Footer} from './parts/Footer';

import {RootStackParamList} from 'navigations/switchNavigator';

import {colors} from 'theme/colors';

import {GET_PRODUCT} from 'api/queries';

import {ProductData, ProductVariables} from 'types/app';
import {ImageSkeleton} from './parts/ImageSkeleton';

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
    backgroundColor: colors`colorBasic100`,
  },
  img: {
    width: 275,
    height: 350,
    marginHorizontal: 3,
  },
  productDetails: {padding: 16},
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: colors`colorBlack`,
  },
  price: {
    fontSize: 20,
    color: colors`colorSpanishGray`,
  },
  description: {
    fontSize: 16,
    color: colors`colorBlack`,
    textAlign: 'justify',
    letterSpacing: 0.08,
    lineHeight: 25,
  },
});

type ProductRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

export const ProductDetails = () => {
  const {params} = useRoute<ProductRouteProp>();
  const {data, loading} = useQuery<ProductData, ProductVariables>(GET_PRODUCT, {
    variables: {productId: params?.productId},
  });

  const images = data?.product.images?.edges;
  const productPrice = data?.product.variants?.edges[0].node.price.amount;

  return (
    <LayoutApp style={styles.root} footer={<Footer product={data?.product} isLoading={loading} />}>
      <View>
        <FlatList
          horizontal
          data={loading ? new Array(5).fill({}) : images}
          renderItem={loading ? ImageSkeleton : ({item}) => <Image source={{uri: item.node.url}} style={styles.img} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.productDetails}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{data?.product.title}</Text>
            <Text style={styles.price}>${productPrice}</Text>
          </View>
          <Text style={styles.description}>{data?.product.description}</Text>
        </View>
      </View>
    </LayoutApp>
  );
};
