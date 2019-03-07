import React,  { Component } from "react";
import {Link} from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div className="nav_bar">
        <Link to="/"><li>Home</li></Link>
        <Link to="/houses"><li>House</li></Link>
        <Link to="/regions"><li>Regions</li></Link>
        <Link to="/characters"><li>Characters</li></Link>
      </div>
    )
  }
}

export default NavBar;
