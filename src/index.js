import React from 'react';
import { render } from 'react-dom';

import './index.css';
import configureStore from './redux/configureStore';
import App from './components/App';

const { store } = configureStore();

render(
  <App store={store} />,
  document.getElementById('root')
);
