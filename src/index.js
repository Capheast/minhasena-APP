import React from 'react';
import { Provider } from 'react-redux';
import Store from './store';
import Navigation from './routes';

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}
