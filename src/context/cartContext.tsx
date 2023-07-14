import React, {createContext, useState} from 'react';

import {ImageNode, VariantNode} from 'types/app';

interface Product {
  id: string;
  title: string;
  description: string;
  images: {
    edges: ImageNode[];
  };
  variants: {
    edges: VariantNode[];
  };
}

export interface ShopContext {
  products: Product[];
  totalProducts: number;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const initialContext: ShopContext = {
  products: [],
  totalProducts: 0,
  setProducts: () => null,
};

export const CartContext = createContext<ShopContext>(initialContext);

export const CartProvider = ({children}: {children: JSX.Element}) => {
  const [products, setProducts] = useState(initialContext.products);

  return (
    <CartContext.Provider value={{products, totalProducts: initialContext.totalProducts, setProducts}}>
      {children}
    </CartContext.Provider>
  );
};
