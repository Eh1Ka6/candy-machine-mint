
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

const domContainer = document.querySelector('#app');
ReactDOM.render(<App></App>, domContainer);
const domContainer2 = document.querySelector('#app2');
ReactDOM.render(<App></App>, domContainer2);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
