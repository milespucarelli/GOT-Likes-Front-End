import React, { Component } from "react";

class House extends Component {
  render() {
    let {name, coatOfArms, words, seats, clickHandler} = this.props
    return (
      <div className="house" onClick={() => clickHandler(name) } >
        <h3>{this.props.name}</h3>
        <ul>
          <li>Coat Of Arms: {coatOfArms}</li>
          <li>Words: {words}</li>
          <li>Seats: {seats.join(', ')}</li>
        </ul>
      </div>
    )
  }
}

export default House;
