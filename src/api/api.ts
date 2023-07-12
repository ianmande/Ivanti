import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://mock.shop/api',
  cache: new InMemoryCache(),
});
