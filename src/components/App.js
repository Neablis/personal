import React, { Component } from 'react';
import WebNav from './Nav';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="bg"></div>
        <div id="overlay"></div>
        <div id="main">
          <header id="header">
            <h1>Mitchell DeMarco</h1>
            <p>Full Stack Engineer&nbsp;&bull;&nbsp; San Francisco Startups</p>
            <WebNav/>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
