import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './pages/app/App';
import {BASE_URL} from "./constants/globalConstants";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache()
});

root.render(
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
);
