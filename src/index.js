import 'materialize-css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Formsy from 'formsy-react';

import { configureStore } from './store';
import App from './App.container';
import './index.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

Formsy.addValidationRule('isFrenchPhoneNumber', (_, value) => (
  /^0[0-9]{9}$/.test(value)
));
