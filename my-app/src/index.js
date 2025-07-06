// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Make sure you're using this
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ This is key
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
