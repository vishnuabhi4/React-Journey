import React from 'react';
import ReactDOM from 'react-dom/client';
//ReactDOM is used for rendering React components into the DOM.
import App from './App';
import Sample from './Sample';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<App />
<Sample />
</>
);

