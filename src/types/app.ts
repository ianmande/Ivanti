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
    edges: ProductEdge[];
    pageInfo: PageInfo;
  };
}

export interface Product {
  images: any;
  id: string;
  title: string;
  featuredImage: {
    id: string;
    url: string;
  };
  variants: {
    edges: VariantEdge[];
  };
}

export interface ProductEdge {
  cursor: string;
  node: Product;
}

export interface VariantEdge {
  node: {
    id: string;
    price: {
      amount: number;
      currencyCode: string;
    };
  };
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

export interface CollectionData {
  collection: Collection;
}

export interface CollectionVariables {
  collectionId: string;
  cursor: string | null;
}

export interface ImageNode {
  node: {
    url: string;
  };
}

export interface VariantNode {
  node: {
    price: {
      amount: number | string;
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
