import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyDDbey5nDO-ovJpzROJiIWg-zeuLHkwRpw",
    authDomain: "boneblast-be91a.firebaseapp.com",
    databaseURL: "https://boneblast-be91a.firebaseio.com",
    storageBucket: "boneblast-be91a.appspot.com",
};

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
