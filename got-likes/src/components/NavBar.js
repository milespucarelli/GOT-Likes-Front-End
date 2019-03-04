import React,  { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="navbar navbar-dark bg-dark">
          <div className="menu_items">
            <li>Characters</li>
            <li>Region</li>
            <li>House</li>
            <li>Home</li>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;
