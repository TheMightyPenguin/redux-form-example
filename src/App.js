import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignInForm from './SignInForm';
import SignInFormContainer from './SignInFormContainer';
import ErrorButton from './ErrorButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SignInFormContainer />
        <ErrorButton />
      </div>
    );
  }
}

export default App;
