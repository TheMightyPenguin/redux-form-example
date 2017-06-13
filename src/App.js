import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignInForm from './SignInForm';
import ErrorButton from './ErrorButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SignInForm onSubmit={(value) => console.log(value)} />
        <ErrorButton />
      </div>
    );
  }
}

export default App;
