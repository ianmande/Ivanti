import {gql} from '@apollo/client';

export const GET_PRODUCT = gql`
  query GetProduct($productId: ID!) {
    product(id: $productId) {
      id
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

export const SEARCH_PRODUCT_BY_TITLE = gql`
  query searchProductByTitle($searchTerm: String!) {
    products(first: 10, query: $searchTerm) {
      edges {
        node {
          id
          title
          handle
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
    }
  }
`;

export const GET_PRODUCTS_BY_COLLECTION = gql`
  query GetProductsByCollection($collectionId: ID!, $cursor: String) {
    collection(id: $collectionId) {
      id
      handle
      title
      description
      image {
        id
        url
      }
      products(first: 6, after: $cursor) {
        edges {
          cursor
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
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
