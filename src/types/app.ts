export interface Product {
  id: string;
  title: string;
  featuredImage: {
    id: string;
    url: string;
  };
  variants: {
    edges: {
      node: {
        id: string;
        price: {
          amount: number;
          currencyCode: string;
        };
      };
    }[];
  };
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: {
    id: string;
    url: string;
  };
  products: {
    edges: {
      node: Product;
    }[];
  };
}

export interface CollectionData {
  collection: Collection;
}

export interface CollectionVariables {
  collectionId: string;
}

export interface ImageNode {
  node: {
    url: string;
  };
}

export interface VariantNode {
  node: {
    price: {
      amount: number;
      currencyCode: string;
    };
  };
}

export interface ProductData {
  product: {
    title: string;
    description: string;
    images: {
      edges: ImageNode[];
    };
    variants: {
      edges: VariantNode[];
    };
  };
}

export interface ProductVariables {
  productId: string;
}

export interface GetProductResult {
  product: ProductData | null;
}
