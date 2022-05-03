import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import client from './graphql/client';
import GlobalCss from './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalCss />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
