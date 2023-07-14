import {useContext, useCallback, useEffect, useState} from 'react';
import {CartContext} from 'context/cartContext';

import {Product} from 'types/app';

export const useShop = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useShopContext must be used within a ProviderContext');
  }

  const [totalPrice, setTotalPrice] = useState(0);
  const {products, setProducts, totalProducts} = context;

  useEffect(() => {
    const totalSum = products.reduce((sum, product) => {
      const {variants} = product;
      const variantPrices = variants.edges.map(({node}) => parseFloat(node.price.amount));
      const variantSum = variantPrices.reduce((variantSum, price) => variantSum + price, 0);
      return sum + variantSum;
    }, 0);

    setTotalPrice(totalSum);
  }, [products]);

  const setProduct = useCallback(
    (product: Product) => {
      setProducts(prev => [...prev, product]);
    },
    [setProducts],
  );

  const clearCart = useCallback(() => {
    setProducts([]);
  }, [setProducts]);

  const removeProduct = useCallback(
    (product: Product) => {
      setProducts(prevProducts => {
        const updatedProducts = prevProducts.filter(p => p.id !== product.id);

        return updatedProducts;
      });
    },
    [setProducts],
  );

  return {products, totalProducts, setProduct, clearCart, removeProduct, totalPrice};
};
