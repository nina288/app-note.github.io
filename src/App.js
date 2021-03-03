import React from 'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
//import * as firebase from 'firebase';
import firebase from 'firebase';
import database from 'firebase/database';
import auth from 'firebase/auth';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Navbar} from './components/Navbar';
import {Alert} from './components/Alert';
import {AlertState} from './context/alert/AlertState';
import {FirebaseState} from './context/firebase/FirebaseState';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


    const db=firebase.database()
   console.log(db)
   let auth=firebase.auth();
 
  return (
    <FirebaseState>
    <AlertState>
    <BrowserRouter>
    <Navbar />
    <div className="container pt-4">
    <Alert />
    <Switch>
      <Route path={'/'} exact component={Home} />
       <Route path={'/about'} component={About} />
       </Switch>
    </div>
     </BrowserRouter>
      </AlertState>
      </FirebaseState>
  );
}

export default App;
