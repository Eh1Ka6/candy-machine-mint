
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import AppMint from './AppMint';
const domContainer2 = document.querySelector('#app');
ReactDOM.render(<App></App>, domContainer2);
const domContainer2 = document.querySelector('#appp');
ReactDOM.render(<App></App>, domContainer2);
const domContainer = document.querySelector('#appMint');
ReactDOM.render(<AppMint></AppMint>, domContainer);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
