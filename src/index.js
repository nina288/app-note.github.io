import React from 'react';

import $ from 'jquery';
import Popper from 'popper.js';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as firebase from 'firebase';
import firebase from 'firebase';
const dbConfig={
	  apiKey: "AIzaSyAaCVyP2gKdkNRji55xlRESjILyuEckzU4",
   authDomain: "react-hooks-1-45a70.firebaseapp.com",
    databaseURL: "https://react-hooks-1-45a70.firebaseio.com",
   projectId: "react-hooks-1-45a70",
   storageBucket: "react-hooks-1-45a70.appspot.com",
   messagingSenderId: "879860339778",
   appId: "1:879860339778:web:7be4a22d2ac981236c49db"
};

export const firebaseApp=firebase.initializeApp(dbConfig);

ReactDOM.render(<App />, document.getElementById('root'));


