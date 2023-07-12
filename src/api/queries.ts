import {gql} from '@apollo/client';

export const GET_PRODUCT = gql`
  query GetProduct($productId: ID!) {
    product(id: $productId) {
      title
      description
      images(first: 3) {
        edges {
          node {
            url
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_COLLECTION = gql`
  query GetProductsByCollection($collectionId: ID!) {
    collection(id: $collectionId) {
      id
      handle
      title
      description
      image {
        id
        url
      }
      products(first: 6) {
        edges {
          node {
            id
            title
            featuredImage {
              id
              url
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
