import React from 'react';
import ReactDOM from 'react-dom';
import CRUD from './CRUD';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CRUD />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals(`WebVitals: `, console.log);
