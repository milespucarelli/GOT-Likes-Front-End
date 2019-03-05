import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Region from "./components/Region";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer"
import Westeros from './components/Westeros'

class App extends Component {
  render() {
    return (
      <div id="app">
        <NavBar />
        <Switch>
          <Route path='/map' component={Westeros} />
          <Route path='/region' component={Region} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
