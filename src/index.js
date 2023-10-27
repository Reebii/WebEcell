import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OnLoad } from './OnLoad';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OnLoad />
    <App />
  </React.StrictMode>
);