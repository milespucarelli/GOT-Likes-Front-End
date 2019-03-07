import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Region from "./components/Region";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer"
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

  render() {
    return (
      <div id="app">
        <NavBar />
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
            <Route path="/" component={Home} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
