import React from 'react';
import firebase from 'firebase';

class Register extends React.Component {
  // Create a new account in Firebase
  createAccount () {
    // Getting our email and password values
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    console.log(email);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  render () {
    return (
      <div>
        <h1>Register</h1>
        <input type="email" placeholder='Enter email' ref='email'/>
        <input type="password" placeholder='Enter password' ref='password'/>
        <input type="password" placeholder='Confirm password' ref='confirm-password'/>
        <button onClick={() => this.createAccount()}>Sign me Up!</button>
      </div>
    )
  }
}

export default Register;