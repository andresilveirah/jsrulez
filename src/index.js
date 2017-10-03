import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import flowEngine from './flow';

import './index.css';

ReactDOM.render(
  <App flowEngine={flowEngine} />,
  document.getElementById('root')
);
