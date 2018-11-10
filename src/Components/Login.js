import React from 'react';
import firebase from 'firebase';
import { throws } from 'assert';
class Login extends React.Component {
  login () {
    var email = this.refs.email.value;
    var password = this.refs.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode, errorMessage);
    });
  }
  render () {
    return (
      <div>
        <h1>Login to App</h1>
        <input type='email' ref='email'/>
        <input type='password' ref='password'/>
        <button onClick={() => this.login}>Let's Go</button>
      </div>
    )
  }
}

export default Login; 