import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useShop} from 'hooks/useShop';

import CloseIcon from 'assets/icons/Close';
import {colors} from 'theme/colors';
import {Product} from 'types/app';

interface Props {
  product: Product;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    height: 104,
    borderRadius: 8,
    backgroundColor: colors`colorBasic100`,
    marginBottom: 30,
  },
  img: {
    width: 104,
    height: 104,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 26,
    color: colors`colorBlack`,
  },
  textPrice: {
    fontSize: 18,
    color: colors`colorSpanishGray`,
  },
  removeProduct: {
    position: 'absolute',
    top: 8,
    right: 10,
    zIndex: 10,
  },
});

const ItemCart = ({product}: Props) => {
  const {removeProduct} = useShop();

  const imageUri = product.images.edges[0].node.url;
  const title = product.title;
  const price = product.variants.edges[0].node.price.amount;

  return (
    <View style={styles.root}>
      <Image source={{uri: imageUri}} style={styles.img} />
      <View style={styles.productDetails}>
        <TouchableOpacity onPress={() => removeProduct(product)} style={styles.removeProduct}>
          <CloseIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textPrice}>${price}</Text>
      </View>
    </View>
  );
};

export default ItemCart;
