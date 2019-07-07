import React, { Component } from 'react';
// import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
// import About from './pages/about';

import './App.scss';

class App extends Component {
  render() { 
    return (
      <Home/>
    );
  }
}

export default App;
