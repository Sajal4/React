import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { PreByte } from './helper';

// ==>Where i have to render?
const root = ReactDOM.createRoot(document.getElementById('root'));

// what i have to render?
root.render(
  <React.StrictMode>
    <App/>
    <PreByte/>
  </React.StrictMode>
);

