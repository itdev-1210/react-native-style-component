import React from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';

import {getToken } from '../utils/user-storage';

const httpLink = new createHttpLink({ uri: 'http://192.168.10.2:4000/' });

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await getToken();

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const Apollo = ({ children }) => {
  const onErrorGraphql = onError(item => {
    console.log('error', item);
  });

  const newLink = authLink.concat(onErrorGraphql);
  const client = new ApolloClient({
    link: newLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
