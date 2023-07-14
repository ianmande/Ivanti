import React from 'react';
import {SafeAreaView, StatusBar, Text, View, FlatList, StyleSheet} from 'react-native';

import {useShop} from 'hooks/useShop';

import ItemCart from './parts/ItemCart';
import {colors} from 'theme/colors';

import {ShadowUtils} from 'utils/shadow';
import EmptyCart from './parts/EmptyCart';

const styles = StyleSheet.create({
  root: {padding: 16},
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors`colorBlack`,
    elevation: 10,
    ...ShadowUtils.get(),
  },
  totalText: {
    fontSize: 22,
    textAlign: 'right',
    color: colors`colorBlack`,
  },
});

export const Shop = () => {
  const {products, totalPrice} = useShop();

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.root}>
        <Text style={styles.title}>My bag</Text>
        <FlatList data={products} renderItem={({item}) => <ItemCart product={item} />} ListEmptyComponent={EmptyCart} />
        {totalPrice > 0 && <Text style={styles.totalText}>Total: ${totalPrice}</Text>}
      </View>
    </SafeAreaView>
  );
};
