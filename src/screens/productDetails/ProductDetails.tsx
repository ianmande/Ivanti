/**
 * @format
 */

import React from 'react';
import {View, StyleSheet, FlatList, Image, Text} from 'react-native';
import {useQuery} from '@apollo/client';
import {RouteProp, useRoute} from '@react-navigation/native';

import {LayoutApp} from 'components/layouts/LayoutApp';

import {RootStackParamList} from 'navigations/switchNavigator';

import {GET_PRODUCT} from 'api/queries';

import {colors} from 'theme/colors';

import {ProductData, ProductVariables} from 'types/app';

const styles = StyleSheet.create({
  root: {marginTop: 20, backgroundColor: colors`colorBasic100`},
  img: {width: 275, height: 350, marginHorizontal: 3},
});

type ProductRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

export const ProductDetails = () => {
  const {params} = useRoute<ProductRouteProp>();
  const {data} = useQuery<ProductData, ProductVariables>(GET_PRODUCT, {
    variables: {productId: params?.productId},
  });

  const images = data?.product.images?.edges;
  const productPrice = data?.product.variants?.edges[0].node.price.amount;

  return (
    <LayoutApp style={styles.root}>
      <View>
        <FlatList
          horizontal
          data={images}
          renderItem={({item}) => <Image source={{uri: item.node.url}} style={styles.img} />}
          keyExtractor={item => item.node.url}
        />
        <Text>{data?.product.title}</Text>
        <Text>{data?.product.description}</Text>
        <Text>{productPrice}</Text>
      </View>
    </LayoutApp>
  );
};
