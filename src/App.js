import React, { Component } from "react";
// import { HashRouter, Switch, Route } from 'react-router-dom';

// import Home from "./pages/home";
import HomeV2 from "./pages/home/indexV2";
// import About from './pages/about';

import "./App.scss";

class App extends Component {
  render() {
    return <HomeV2 />;
  }
}

export default App;
