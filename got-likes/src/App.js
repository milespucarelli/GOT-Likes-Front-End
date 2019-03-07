import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Region from "./components/Region";
import {Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LoginForm from './components/LoginForm';
import Map from './components/Map'

class App extends Component {
  state = {
    characters: []
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/api/v1/characters`)
    .then(res => res.json())
    .then(characters => {
      this.setState({
        characters
      })
    })
  }

  state = {
    user: {},
  }

  loggingIn = userObj => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        user: userObj
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        return <Redirect to="/login" />
      } else {
        localStorage.setItem("token", data.jwt);
        this.setState({user: data.user}, console.log("This is the data at login", data))
      }
    })
  }

  render() {
    if (Object.keys(this.state.user).length > 0) {
        return <Redirect to="/" />
    }
    return (
      <div id="app">
        <NavBar />
        <LoginForm />
          <Switch>
            <Route path="/regions" render={() => {
              return (
                <div id='map-container'>
                  <Map clickHandler={this.regionClickHandler}/>
                  <div id='region-container'>
                    <Switch>
                      <Route path='/regions/north' render={() => <Region name="The North" characters={this.state.characters}/>} />
                      <Route path='/regions/westerlands' render={() => <Region name="The Westerlands" characters={this.state.characters}/>} />
                      <Route path='/regions/dorne' render={() => <Region name="Dorne" characters={this.state.characters}/>} />
                      <Route path='/regions/reach' render={() => <Region name="The Reach" characters={this.state.characters}/>} />
                      <Route path='/regions/vale' render={() => <Region name="The Vale" characters={this.state.characters}/>} />
                      <Route path='/regions/crownlands' render={() => <Region name="The Crownlands" characters={this.state.characters}/>} />
                      <Route path='/regions/stormlands' render={() => <Region name="The Stormlands" characters={this.state.characters}/>} />
                      <Route path='/regions/neck' render={() => <Region name="The Neck" characters={this.state.characters}/>} />
                      <Route path='/regions/iron_islands' render={() => <Region name="Iron Islands" characters={this.state.characters}/>} />
                      <Route path='/regions/beyond_the_wall' render={() => <Region name="Beyond the Wall" characters={this.state.characters}/>} />
                    </Switch>
                  </div>
                </div>
              )}} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" render={() => <Login loggingIn={this.loggingIn}/>} />
            <Route path="/" component={Home} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
