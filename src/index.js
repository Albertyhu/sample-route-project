import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RouteSwitcher from './Routeswitch.js';
import "./style/mystyle.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitcher />
  </React.StrictMode>
);
