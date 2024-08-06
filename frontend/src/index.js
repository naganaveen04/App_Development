// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Remove import for store and Provider
// import { Provider } from 'react-redux';
// import store from './redux/store';

ReactDOM.render(
  <App />
  // <Provider store={store}>
  //   <App />
  // </Provider>
  ,
  document.getElementById('root')
);
