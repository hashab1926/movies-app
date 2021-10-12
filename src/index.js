import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Helpers/Routes';
import reportWebVitals from './reportWebVitals';
import './Assets/main.scss';
import { Provider } from 'react-redux';
import store from './Redux/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
