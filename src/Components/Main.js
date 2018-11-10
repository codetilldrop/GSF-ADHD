import React from 'react';
import {Link} from 'react-router-dom';

class Main extends React.Component {
  render () {
    return (
      <div>
        <h1>This is the main page</h1>
        <Link to='/login'>Log In</Link>
        <br/>
        <Link to='/register'>Register</Link>
      </div>
    )
  }
}

export default Main;