import React from 'react';
import firebase from 'firebase';

class Register extends React.Component {
  // Create a new account in Firebase
  createAccount () {
    // Getting our email and password values
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    var confirmPassword = this.refs.confirmPassword.value;
    
    // Checking if the client has put the same password in both
    // input fields which were asking for the password
    if (password === confirmPassword) {
      // Checking if the client has met the minimum character
      // length for a password
      if (password.length >= 6) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
        console.log('Account registered!');
      } else {
          alert('Passwords must be at least 6 characters long!')
      }
    } else {
      alert('Your passwords do not match!')
    }
  }

  render () {
    return (
      <div>
        <h1>Register</h1>
        <input type="email" placeholder='Enter email' ref='email'/>
        <input type="password" placeholder='Enter password' ref='password'/>
        <input type="password" placeholder='Confirm password' ref='confirmPassword'/>
        <button onClick={() => this.createAccount()}>Sign me Up!</button>
      </div>
    )
  }
}

export default Register;