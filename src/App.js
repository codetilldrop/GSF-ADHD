import React, { Component } from 'react';
import './App.css';

import firebase from 'firebase';

import {BrowserRouter as Router, Route} from 'react-router-dom';

// Importing Components
import Main from './Components/Main';
import Login from './Components/Login';
import Register from './Components/Register';

class App extends Component {
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyCj-0-OYHv3boOY58KfcGq8mWpvctiVBGY",
      authDomain: "gsf-adhd.firebaseapp.com",
      databaseURL: "https://gsf-adhd.firebaseio.com",
      projectId: "gsf-adhd",
      storageBucket: "gsf-adhd.appspot.com",
      messagingSenderId: "1037706831535"
    };
    firebase.initializeApp(config); 
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
