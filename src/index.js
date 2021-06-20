import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import Store from './redux/Store'
import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyAIc-Ae5bxRCG8O4AltNVr1tkG_DailCBo",
    authDomain: "viva-trade.firebaseapp.com",
    projectId: "viva-trade",
    storageBucket: "viva-trade.appspot.com",
    messagingSenderId: "658451900152",
    appId: "1:658451900152:web:7957f27eae0d80238ebd0d",
    measurementId: "G-B4EVRXBB64"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          auth,
          firebase,
          firestore,
          storage,
      }}>
          <Provider store={Store}>
              <Router>
                  <App />
              </Router>
          </Provider>
      </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
