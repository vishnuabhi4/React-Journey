import React from 'react';
import ReactDOM from 'react-dom/client';
//ReactDOM is used for rendering React components into the DOM.
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

