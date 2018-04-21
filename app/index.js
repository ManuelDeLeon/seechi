import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import './App.css';

render(
    <App />
  ,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRoot = require('./App').App; // eslint-disable-line global-require
    render(
        <NextRoot />,
      document.getElementById('root')
    );
  });
}
