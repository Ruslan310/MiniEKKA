import React from 'react';
import { render } from 'react-dom';
import store from "./store/store";
import { Provider } from 'react-redux'
import Layout from "./components/Layout";
import './styles/reset.css'
import './styles/fonts.css'
import './styles/main.css'
render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);