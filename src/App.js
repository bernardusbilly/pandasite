import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';

import './App.scss';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/services' component={Home}/>
          <Route exact path='/contact' component={Home}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;