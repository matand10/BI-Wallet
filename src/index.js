import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'
import { RootCmp } from './root-cmp.jsx';


import './assets/style/main.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main>
    <Router>
      <RootCmp />
    </Router>
  </main>
);
